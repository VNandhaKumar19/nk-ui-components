import "@nk-ui/core/src/nk-button/nk-button"; // Import the custom element definition
import { NKButtonElement } from "@nk-ui/core/src/nk-button/nk-button"; // Import the custom element definition
import { variantEnum } from "@nk-ui/core/src/utils/config.model";
import * as React from "react";
import { useEffect, useRef } from "react";

interface NKButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: variantEnum; // Add all the variants you have
  size?: "xs" | "s" | "m" | "l" | "xl"; // Add all the sizes you have
  loader?: boolean;
}

const NKButton: React.FC<NKButtonProps> = ({
  variant = variantEnum.primary,
  size = "m",
  loader = false,
  onClick,
  children,
  ...props
}) => {
  const buttonRef = useRef<NKButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.variant = variant ?? variantEnum.primary;
      buttonRef.current.size = size;
      buttonRef.current.loader = loader;

      buttonRef.current.updateStyle(variant);
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
