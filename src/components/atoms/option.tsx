import React from "react";

export interface OptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {
  className?: string;
}

const Option = React.forwardRef<HTMLOptionElement, OptionProps>(
  ({ className = "", children, ...rest }, ref) => {
    Option.displayName = "Option";

    return (
      <option ref={ref} className={className} {...rest}>
        {children}
      </option>
    );
  },
);

export default Option;
