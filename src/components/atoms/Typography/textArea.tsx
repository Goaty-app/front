import React from 'react';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ className = '', ...props }, ref) => {
        return (
            <textarea
                ref={ref}
                className={`w-full p-2 rounded border bg-layer-1 ${className}`}
                {...props}
            />
        );
    }
);

TextArea.displayName = 'TextArea';

export default TextArea;
