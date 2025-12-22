import * as React from "react";
import { cn } from "@theme/utils";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  sections?: FooterSection[];
  copyright?: string;
  socialLinks?: React.ReactNode;
  className?: string;
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ sections = [], copyright, socialLinks, className }, ref) => {
    const currentYear = new Date().getFullYear();

    return (
      <footer
        ref={ref}
        className={cn(
          "w-full border-t bg-background",
          className
        )}
      >
        <div className="container px-4 py-12">
          {/* Footer Sections */}
          {sections.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {sections.map((section, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t gap-4">
            <p className="text-sm text-muted-foreground">
              {copyright || `© ${currentYear} Your Company. All rights reserved.`}
            </p>
            {socialLinks && (
              <div className="flex items-center space-x-4">
                {socialLinks}
              </div>
            )}
          </div>
        </div>
      </footer>
    );
  }
);
Footer.displayName = "Footer";

export { Footer };

