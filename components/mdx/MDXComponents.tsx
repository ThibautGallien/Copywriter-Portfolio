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
    <div
      className="my-6 p-6 rounded-xl"
      style={{
        background: "rgba(59, 130, 246, 0.06)",
        border: "1px solid rgba(59, 130, 246, 0.15)",
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(59, 130, 246, 0.1)" }}
        >
          <Icon className="w-6 h-6" style={{ color: "var(--accent-blue)" }} />
        </div>
        <div>
          <h4 className="font-bold mb-2" style={{ color: "var(--text)" }}>{title}</h4>
          <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>{description}</p>
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
    info: {
      background: "rgba(59, 130, 246, 0.06)",
      border: "1px solid rgba(59, 130, 246, 0.15)",
      color: "var(--text-muted)",
    },
    warning: {
      background: "rgba(245, 158, 11, 0.06)",
      border: "1px solid rgba(245, 158, 11, 0.15)",
      color: "var(--text-muted)",
    },
    success: {
      background: "rgba(40, 200, 64, 0.06)",
      border: "1px solid rgba(40, 200, 64, 0.15)",
      color: "var(--text-muted)",
    },
    danger: {
      background: "rgba(239, 68, 68, 0.06)",
      border: "1px solid rgba(239, 68, 68, 0.15)",
      color: "var(--text-muted)",
    },
  };

  return (
    <div className="my-6 p-6 rounded-xl" style={styles[type]}>
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
    ? "rgba(59, 130, 246, 0.3)"
    : bad
    ? "rgba(239, 68, 68, 0.3)"
    : "rgba(255, 255, 255, 0.1)";
  const bgColor = good
    ? "rgba(59, 130, 246, 0.04)"
    : bad
    ? "rgba(239, 68, 68, 0.04)"
    : "rgba(255, 255, 255, 0.02)";
  const badge = good ? (
    <span
      className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full text-white"
      style={{ background: "var(--accent-blue)" }}
    >
      <CheckCircle className="w-3 h-3" />À faire
    </span>
  ) : bad ? (
    <span
      className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full text-white"
      style={{ background: "#EF4444" }}
    >
      <AlertCircle className="w-3 h-3" />À éviter
    </span>
  ) : null;

  return (
    <div
      className="my-6 p-6 rounded-xl"
      style={{ border: `1px solid ${borderColor}`, background: bgColor }}
    >
      {(title || badge) && (
        <div className="flex items-center justify-between mb-4">
          {title && (
            <h4 className="font-bold" style={{ color: "var(--text)" }}>{title}</h4>
          )}
          {badge}
        </div>
      )}
      <div className="leading-relaxed" style={{ color: "var(--text-muted)" }}>{children}</div>
    </div>
  );
}

// Composant Checklist
export function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 mb-3">
      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--accent-blue)" }} />
      <span style={{ color: "var(--text-muted)" }}>{children}</span>
    </li>
  );
}

// Composants HTML de base stylisés
const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-12 mb-6 text-4xl font-extrabold leading-tight scroll-mt-24",
        className
      )}
      style={{ color: "var(--text)" }}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")}
      className={cn(
        "mt-12 mb-4 text-3xl font-bold leading-tight scroll-mt-24",
        className
      )}
      style={{ color: "var(--text)" }}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 mb-3 text-2xl font-bold leading-tight scroll-mt-24",
        className
      )}
      style={{ color: "var(--text)" }}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mt-6 mb-2 text-xl font-bold leading-tight",
        className
      )}
      style={{ color: "var(--text)" }}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "mb-6 leading-relaxed text-lg",
        className
      )}
      style={{ color: "var(--text-muted)" }}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn("mb-6 ml-6 list-disc space-y-2", className)}
      style={{ color: "var(--text-muted)" }}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn(
        "mb-6 ml-6 list-decimal space-y-2",
        className
      )}
      style={{ color: "var(--text-muted)" }}
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
        "my-6 pl-6 italic",
        className
      )}
      style={{
        borderLeft: "4px solid var(--accent-blue)",
        color: "var(--text-muted)",
      }}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "px-2 py-1 rounded text-sm font-mono",
        className
      )}
      style={{
        background: "rgba(255, 255, 255, 0.06)",
        color: "var(--text)",
      }}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        "my-6 p-4 rounded-xl overflow-x-auto",
        className
      )}
      style={{
        background: "rgba(20, 20, 22, 0.95)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        color: "var(--text-muted)",
      }}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        "underline font-medium",
        className
      )}
      style={{ color: "var(--accent-blue)" }}
      {...props}
    />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className={cn("font-bold", className)}
      style={{ color: "var(--text)" }}
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
