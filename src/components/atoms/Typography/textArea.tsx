import React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    children: React.ReactNode
}

const TextArea: React.FC<TextAreaProps> = ({ className = "", ...children }) => {
    return (
        <textarea
            className={`p-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
            {...children}
        />
    );
};

export default TextArea;
