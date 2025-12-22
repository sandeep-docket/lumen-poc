# Component Usage Examples

This document provides practical examples of using components from the design system.

## Atoms

### Button

```tsx
import { Button } from '@atoms/Button';

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="default">Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔍</Button>

// With onClick
<Button onClick={() => console.log('Clicked!')}>
  Click me
</Button>

// As a link (using Slot from Radix)
<Button asChild>
  <a href="/login">Go to Login</a>
</Button>

// Disabled state
<Button disabled>Disabled</Button>

// With custom className
<Button className="w-full">Full Width</Button>
```

### Input

```tsx
import { Input } from '@atoms/Input';

// Basic input
<Input type="text" placeholder="Enter text..." />

// Email input
<Input type="email" placeholder="name@example.com" />

// Password input
<Input type="password" placeholder="••••••••" />

// With value and onChange
<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>

// Disabled
<Input disabled placeholder="Disabled" />

// With custom styles
<Input className="border-destructive" />
```

### Label

```tsx
import { Label } from '@atoms/Label';

// Basic label
<Label htmlFor="email">Email</Label>

// With required indicator
<Label htmlFor="password">
  Password <span className="text-destructive">*</span>
</Label>
```

### Badge

```tsx
import { Badge } from '@atoms/Badge';

// Variants
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>

// With icons
<Badge>
  <CheckIcon className="mr-1 h-3 w-3" />
  Verified
</Badge>

// Custom styles
<Badge className="text-xs">Small Badge</Badge>
```

## Molecules

### Card

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@molecules/Card';
import { Button } from '@atoms/Button';

// Complete card
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Minimal card
<Card>
  <CardContent className="pt-6">
    Just content, no header
  </CardContent>
</Card>

// Card with custom styling
<Card className="border-destructive">
  <CardContent>Error state</CardContent>
</Card>
```

### FormField

```tsx
import { FormField } from '@molecules/FormField';
import { useState } from 'react';

function MyForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validate = (value: string) => {
    if (!value.includes('@')) {
      setError('Invalid email');
    } else {
      setError('');
    }
  };

  return (
    <FormField
      label="Email Address"
      id="email"
      required
      error={error}
      inputProps={{
        type: 'email',
        value: email,
        onChange: (e) => {
          setEmail(e.target.value);
          validate(e.target.value);
        },
        placeholder: 'name@example.com',
      }}
    />
  );
}
```

### SearchBar

```tsx
import { SearchBar } from '@molecules/SearchBar';

// Basic search bar
<SearchBar
  onSearch={(query) => console.log('Search:', query)}
  placeholder="Search..."
/>

// With custom styling
<SearchBar
  onSearch={handleSearch}
  placeholder="Search products..."
  className="max-w-md"
/>

// In a layout
<div className="flex justify-between items-center">
  <h1>Products</h1>
  <SearchBar onSearch={handleSearch} />
</div>
```

## Organisms

### Header

```tsx
import { Header } from '@organisms/Header';
import { Button } from '@atoms/Button';

// Basic header
<Header
  logo={<span className="font-bold text-xl">MyApp</span>}
  navItems={[
    { label: 'Home', href: '/', active: true },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]}
/>

// With actions
<Header
  logo={<img src="/logo.svg" alt="Logo" />}
  navItems={navItems}
  actions={
    <>
      <Button variant="ghost">Sign In</Button>
      <Button>Sign Up</Button>
    </>
  }
/>

// With theme toggle
import { Moon, Sun } from 'lucide-react';
import { toggleTheme } from '@theme';

<Header
  logo={<span>MyApp</span>}
  navItems={navItems}
  actions={
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
      >
        <Sun className="h-5 w-5 dark:hidden" />
        <Moon className="h-5 w-5 hidden dark:block" />
      </Button>
      <Button>Get Started</Button>
    </>
  }
/>
```

### Footer

```tsx
import { Footer } from '@organisms/Footer';
import { Button } from '@atoms/Button';
import { Github, Twitter } from 'lucide-react';

// Basic footer
<Footer copyright="© 2024 MyApp. All rights reserved." />

// With sections
<Footer
  sections={[
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Careers', href: '/careers' },
      ],
    },
  ]}
  copyright="© 2024 MyApp"
/>

// With social links
<Footer
  sections={footerSections}
  copyright="© 2024 MyApp"
  socialLinks={
    <>
      <Button variant="ghost" size="icon" asChild>
        <a href="https://twitter.com" target="_blank">
          <Twitter className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a href="https://github.com" target="_blank">
          <Github className="h-5 w-5" />
        </a>
      </Button>
    </>
  }
/>
```

### LoginForm

```tsx
import { LoginForm } from '@organisms/LoginForm';
import { useState } from 'react';

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (data: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      // Your login logic
      await login(data);
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoginForm
        onSubmit={handleLogin}
        onForgotPassword={() => router.push('/forgot-password')}
        onSignUp={() => router.push('/signup')}
        isLoading={isLoading}
      />
    </div>
  );
}
```

## Common Patterns

### Form with Validation

```tsx
import { FormField } from '@molecules/FormField';
import { Button } from '@atoms/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@molecules/Card';
import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <FormField
            label="Name"
            id="name"
            required
            error={errors.name}
            inputProps={{
              value: formData.name,
              onChange: (e) =>
                setFormData({ ...formData, name: e.target.value }),
            }}
          />
          <FormField
            label="Email"
            id="email"
            required
            error={errors.email}
            inputProps={{
              type: 'email',
              value: formData.email,
              onChange: (e) =>
                setFormData({ ...formData, email: e.target.value }),
            }}
          />
          <FormField
            label="Message"
            id="message"
            required
            error={errors.message}
            inputProps={{
              value: formData.message,
              onChange: (e) =>
                setFormData({ ...formData, message: e.target.value }),
            }}
          />
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
```

### Grid of Cards

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@molecules/Card';
import { Badge } from '@atoms/Badge';

const products = [
  { id: 1, name: 'Product 1', status: 'Active' },
  { id: 2, name: 'Product 2', status: 'Sold' },
  // ...
];

function ProductGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>{product.name}</CardTitle>
              <Badge variant={product.status === 'Active' ? 'default' : 'secondary'}>
                {product.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            Product details...
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

### Complete Page Layout

```tsx
import { Header, Footer } from '@organisms';
import { Card, CardHeader, CardTitle, CardContent } from '@molecules/Card';
import { Button } from '@atoms/Button';

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header
        logo={<span className="font-bold">MyApp</span>}
        navItems={[
          { label: 'Home', href: '/', active: true },
          { label: 'Features', href: '/features' },
          { label: 'Pricing', href: '/pricing' },
        ]}
        actions={<Button>Sign Up</Button>}
      />

      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="text-center py-12">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to MyApp
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            The best solution for your needs
          </p>
          <Button size="lg">Get Started</Button>
        </section>

        <section className="grid md:grid-cols-3 gap-6 py-12">
          {['Feature 1', 'Feature 2', 'Feature 3'].map((feature, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{feature}</CardTitle>
              </CardHeader>
              <CardContent>
                Feature description goes here
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      <Footer
        sections={[
          {
            title: 'Product',
            links: [
              { label: 'Features', href: '/features' },
              { label: 'Pricing', href: '/pricing' },
            ],
          },
        ]}
        copyright="© 2024 MyApp"
      />
    </div>
  );
}
```

---

For more examples, see `src/App.tsx` in the project.

