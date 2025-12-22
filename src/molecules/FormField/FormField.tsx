import * as React from "react";
import { Input } from "@atoms/Input";
import { Label } from "@atoms/Label";
import { cn } from "@theme/utils";

export interface FormFieldProps {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string;
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ label, id, error, required, inputProps, className }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-2", className)}>
        <Label htmlFor={id}>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
        <Input
          id={id}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : undefined}
          {...inputProps}
        />
        {error && (
          <p id={`${id}-error`} className="text-sm text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  }
);
FormField.displayName = "FormField";

export { FormField };

