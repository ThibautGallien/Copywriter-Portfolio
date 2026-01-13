import { useMDXComponent } from "next-contentlayer/hooks";
import { cn } from "@/lib/utils";
import { CheckCircle, AlertCircle, Info, Lightbulb } from "lucide-react";
import { ROICalculator, Quiz, Poll, ReadingProgress } from "./InteractiveComponents";
import { InlineLandingPage, InlineLandingPageCompact } from "./InlineLandingPage";

// Composant KeyPoint réutilisable
export function KeyPoint({
  title,
  description,
  icon = "check",
}: {
  title: string;
  description: string;
  icon?: "check" | "alert" | "info" | "lightbulb";
}) {
  const icons = {
    check: CheckCircle,
    alert: AlertCircle,
    info: Info,
    lightbulb: Lightbulb,
  };

  const Icon = icons[icon];

  return (
    <div className="my-6 p-6 bg-emerald-50 border-2 border-emerald-200 rounded-2xl">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
          <Icon className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <h4 className="font-bold text-neutral-900 mb-2">{title}</h4>
          <p className="text-neutral-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

// Composant Callout
export function Callout({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "success" | "danger";
}) {
  const styles = {
    info: "bg-blue-50 border-blue-200 text-blue-900",
    warning: "bg-amber-50 border-amber-200 text-amber-900",
    success: "bg-emerald-50 border-emerald-200 text-emerald-900",
    danger: "bg-red-50 border-red-200 text-red-900",
  };

  return (
    <div
      className={cn(
        "my-6 p-6 border-2 rounded-2xl",
        styles[type]
      )}
    >
      {children}
    </div>
  );
}

// Composant Example
export function Example({
  title,
  children,
  good = false,
  bad = false,
}: {
  title?: string;
  children: React.ReactNode;
  good?: boolean;
  bad?: boolean;
}) {
  const borderColor = good
    ? "border-emerald-500"
    : bad
    ? "border-red-500"
    : "border-neutral-300";
  const bgColor = good
    ? "bg-emerald-50"
    : bad
    ? "bg-red-50"
    : "bg-neutral-50";
  const badge = good ? (
    <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
      <CheckCircle className="w-3 h-3" />À faire
    </span>
  ) : bad ? (
    <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
      <AlertCircle className="w-3 h-3" />À éviter
    </span>
  ) : null;

  return (
    <div className={cn("my-6 p-6 border-2 rounded-2xl", borderColor, bgColor)}>
      {(title || badge) && (
        <div className="flex items-center justify-between mb-4">
          {title && (
            <h4 className="font-bold text-neutral-900">{title}</h4>
          )}
          {badge}
        </div>
      )}
      <div className="text-neutral-700 leading-relaxed">{children}</div>
    </div>
  );
}

// Composant Checklist
export function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 mb-3">
      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
      <span className="text-neutral-700">{children}</span>
    </li>
  );
}

// Composants HTML de base stylisés
const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-12 mb-6 text-4xl font-extrabold text-neutral-900 leading-tight scroll-mt-24",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")}
      className={cn(
        "mt-12 mb-4 text-3xl font-bold text-neutral-900 leading-tight scroll-mt-24",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 mb-3 text-2xl font-bold text-neutral-900 leading-tight scroll-mt-24",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mt-6 mb-2 text-xl font-bold text-neutral-900 leading-tight",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "mb-6 text-neutral-700 leading-relaxed text-lg",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn("mb-6 ml-6 list-disc text-neutral-700 space-y-2", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn(
        "mb-6 ml-6 list-decimal text-neutral-700 space-y-2",
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("leading-relaxed", className)} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "my-6 pl-6 border-l-4 border-emerald-500 italic text-neutral-600",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "px-2 py-1 bg-neutral-100 text-neutral-900 rounded text-sm font-mono",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        "my-6 p-4 bg-neutral-900 text-neutral-100 rounded-xl overflow-x-auto",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        "text-emerald-600 hover:text-emerald-700 underline font-medium",
        className
      )}
      {...props}
    />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className={cn("font-bold text-neutral-900", className)}
      {...props}
    />
  ),
  // Composants personnalisés
  KeyPoint,
  Callout,
  Example,
  ChecklistItem,
  // Composants interactifs
  ROICalculator,
  Quiz,
  Poll,
  ReadingProgress,
  // Composants Landing Page
  InlineLandingPage,
  InlineLandingPageCompact,
};

export function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx-content">
      <Component components={components} />
    </div>
  );
}

export default components;
