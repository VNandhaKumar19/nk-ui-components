import "@nk-ui/core/dist/nk-button/nk-button"; // Import the custom element definition
import { NKButtonElement } from "@nk-ui/core" // Import the custom element definition
import { variant } from "@nk-ui/core/dist/utils/config.model";
import * as React from "react";
import { useEffect, useRef } from "react";

interface NKButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  _variant?: variant; // Add all the variants you have
  size?: "xs" | "s" | "m" | "l" | "xl"; // Add all the sizes you have
  loader?: boolean;
}

const NKButton: React.FC<NKButtonProps> = ({
  _variant = variant.primary,
  size = "m",
  loader = false,
  onClick,
  children,
  ...props
}) => {
  const buttonRef = useRef<NKButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.variant = _variant ?? variant.primary;
      buttonRef.current.size = size;
      buttonRef.current.loader = loader;

      buttonRef.current.updateStyle(_variant);
      buttonRef.current.updateStyle(size);
      buttonRef.current.updateLoader(loader);
      props.disabled && buttonRef.current.updateDisable(props.disabled);
    }
  }, [variant, size, loader]);

  return (
    <button ref={buttonRef} is="nk-button" onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default NKButton;
