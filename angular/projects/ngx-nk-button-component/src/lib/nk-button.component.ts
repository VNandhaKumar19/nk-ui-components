import { AfterViewInit, Component, computed, ElementRef, input, Input, OnInit, Renderer2, signal, ViewChild, WritableSignal } from '@angular/core';
import { variants, size } from '@nk-ui/core/src/utils/config.model';
import { NKButtonElement} from '@nk-ui/core/src/nk-button/nk-button';
import { type ClassValue } from 'clsx';
import { updateClass } from './util';
@Component({
  selector: 'nk-button',
  standalone: true,
  imports: [],
  template: `
    <div #container>
      <ng-content></ng-content>
    </div>
  `,
  styles: `
  .border-\[1px\] {
    border-radius: 1px;
  }
  `,
  host: {
    '[class]': '_computedClass()' 
  },
  hostDirectives: []
})
export class NkButtonComponent implements OnInit, AfterViewInit {
  private readonly _variant: WritableSignal<variants> = signal<variants>('primary');
  private readonly _size: WritableSignal<size> = signal<size>('m');
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  
  @ViewChild('container', { static: false }) container!: ElementRef<HTMLDivElement>;

  @Input() set variant(variant: variants) {
		this._variant.set(variant);
  }
  
  @Input() set size(size: size) {
    this._size.set(size);
  }

  protected readonly _computedClass = computed(() =>
		updateClass( this._variant(), this._size(), this.userClass())
  );

  private button!: NKButtonElement;

  constructor(private renderer2: Renderer2) {
    this.button = new NKButtonElement();
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const containerElement = this.container.nativeElement;
    if (containerElement) {
      const contents = containerElement.childNodes;
      console.log(contents);
      contents.forEach((content) => {
        this.renderer2.removeChild(containerElement, content);
        this.renderer2.appendChild(this.button, content);
      });
      this.button.setAttribute('is', 'nk-button');
      this.button.setAttribute('type', 'button');
      this.renderer2.setProperty(containerElement, 'innerHTML', '');
      this.renderer2.appendChild(containerElement, this.button);
    }
  }

}
