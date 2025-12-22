import * as React from "react";
import { Button } from "@atoms/Button";
import { FormField } from "@molecules/FormField";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@molecules/Card";
import { cn } from "@theme/utils";

export interface LoginFormProps {
  onSubmit?: (data: { email: string; password: string }) => void;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
  isLoading?: boolean;
  className?: string;
}

const LoginForm = React.forwardRef<HTMLDivElement, LoginFormProps>(
  ({ onSubmit, onForgotPassword, onSignUp, isLoading, className }, ref) => {
    const [formData, setFormData] = React.useState({
      email: "",
      password: "",
    });
    const [errors, setErrors] = React.useState<{
      email?: string;
      password?: string;
    }>({});

    const validate = () => {
      const newErrors: typeof errors = {};
      
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validate()) {
        onSubmit?.(formData);
      }
    };

    return (
      <Card ref={ref} className={cn("w-full max-w-md", className)}>
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <FormField
              label="Email"
              id="email"
              required
              error={errors.email}
              inputProps={{
                type: "email",
                placeholder: "name@example.com",
                value: formData.email,
                onChange: (e) =>
                  setFormData({ ...formData, email: e.target.value }),
                disabled: isLoading,
              }}
            />
            <FormField
              label="Password"
              id="password"
              required
              error={errors.password}
              inputProps={{
                type: "password",
                placeholder: "••••••••",
                value: formData.password,
                onChange: (e) =>
                  setFormData({ ...formData, password: e.target.value }),
                disabled: isLoading,
              }}
            />
            {onForgotPassword && (
              <button
                type="button"
                onClick={onForgotPassword}
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </button>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
            {onSignUp && (
              <div className="text-sm text-center text-muted-foreground">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={onSignUp}
                  className="text-primary hover:underline"
                >
                  Sign up
                </button>
              </div>
            )}
          </CardFooter>
        </form>
      </Card>
    );
  }
);
LoginForm.displayName = "LoginForm";

export { LoginForm };

