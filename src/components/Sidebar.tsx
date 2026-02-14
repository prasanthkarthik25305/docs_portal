"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Props = {
  isOpen: boolean;
};

export default function Sidebar({ isOpen }: Props) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";
  const [expandedSections, setExpandedSections] = useState<string[]>(["getting-started"]);

  const navigationStructure = [
    {
      title: "Getting Started",
      slug: "getting-started",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"></path>
          <path d="M10 18h4"></path>
          <path d="M12 6v6"></path>
        </svg>
      ),
      children: [
        { label: "Introduction", slug: "introduction" },
        { label: "Quick Start", slug: "quick-start" },
        { label: "Basic Concepts", slug: "basic-concepts" }
      ]
    },
    {
      title: "Installation",
      slug: "installation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a10 10 0 1 1 0 0-20 10 10 0 0 0 20z"></path>
          <path d="M12 6v6"></path>
          <line x1="4" y1="11" x2="20" y2="11"></line>
        </svg>
      ),
      children: [
        { label: "System Requirements", slug: "requirements" },
        { label: "Installation Guide", slug: "guide" },
        { label: "Configuration", slug: "configuration" }
      ]
    },
    {
      title: "API Reference",
      slug: "api-reference",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 18"></polyline>
        </svg>
      ),
      children: [
        { label: "Authentication", slug: "authentication" },
        { label: "Endpoints", slug: "endpoints" },
        { label: "Error Handling", slug: "errors" }
      ]
    },
    {
      title: "Examples",
      slug: "examples",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2h-4a2 2 0 0 0-2v16a2 2 0 0 0 2z"></path>
        </svg>
      ),
      children: [
        { label: "Basic Usage", slug: "basic-usage" },
        { label: "Advanced Examples", slug: "advanced" },
        { label: "Best Practices", slug: "best-practices" }
      ]
    }
  ];

  const toggleSection = (slug: string) => {
    setExpandedSections(prev => 
      prev.includes(slug) 
        ? prev.filter(s => s !== slug)
        : [...prev, slug]
    );
  };

  const isActiveLink = (parentSlug: string, childSlug?: string) => {
    const currentPath = pathname.replace(`/${locale}/docs/v1/`, "");
    if (childSlug) {
      return currentPath === `${parentSlug}/${childSlug}`;
    }
    return currentPath.startsWith(parentSlug);
  };

  return (
    <aside
      data-testid="sidebar-navigation"
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] z-40 bg-card border-r transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? "w-64" : "w-0"
      }`}
    >
      <nav className="h-full overflow-y-auto">
        <div className="p-4">
          {/* Navigation Header */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              Documentation
            </h3>
          </div>

          {/* Navigation Groups */}
          <div className="space-y-6">
            {navigationStructure.map((section) => (
              <div key={section.slug} className="space-y-2">
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.slug)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-colors ${
                    isActiveLink(section.slug)
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {section.icon}
                    <span className="truncate font-medium">{section.title}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform flex-shrink-0 ${
                      expandedSections.includes(section.slug) ? "rotate-90" : ""
                    }`}
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                {/* Section Children */}
                {expandedSections.includes(section.slug) && (
                  <div className="ml-6 space-y-1">
                    {section.children.map((child) => (
                      <Link
                        key={child.slug}
                        href={`/${locale}/docs/v1/${section.slug}/${child.slug}`}
                        className={`block p-3 text-sm rounded-md transition-colors ${
                          isActiveLink(section.slug, child.slug)
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        }`}
                      >
                        <span className="block truncate">{child.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto pt-6 border-t">
            <div className="space-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span className="truncate">Last updated: Recently</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2h12a2 2 0 0 0 2V7.5L14.5 2z"></path>
                  <polyline points="14,2 14,8 20,8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <polyline points="10,9 9,9 8,9"></polyline>
                </svg>
                <span>Version 1.0.0</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
