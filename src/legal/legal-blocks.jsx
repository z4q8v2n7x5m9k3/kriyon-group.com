export function ClauseHeading({ id, num, title }) {
  return (
    <h2
      id={id}
      className="mt-10 flex scroll-mt-32 flex-wrap items-baseline gap-x-3 gap-y-2 border-b border-neutral-200 pb-3 text-[1.125rem] font-semibold leading-snug tracking-tight text-neutral-900 first:mt-0 sm:mt-12 sm:pb-3.5 sm:text-[1.1875rem]"
    >
      <span className="inline-flex h-7 min-w-[2rem] shrink-0 items-center justify-center rounded border border-neutral-200 bg-white px-2 text-[13px] font-semibold tabular-nums text-neutral-700 shadow-sm">
        {num}
      </span>
      <span className="min-w-0 flex-1">{title}</span>
    </h2>
  );
}

export function ClauseSub({ children }) {
  return (
    <h3 className="mt-5 text-[15px] font-semibold leading-snug text-neutral-800">{children}</h3>
  );
}

export function LegalP({ children }) {
  return (
    <p className="mb-4 max-w-[72ch] text-[16px] leading-[1.65] text-neutral-600 last:mb-0">
      {children}
    </p>
  );
}

const hbStyles = {
  neutral: "border-l-neutral-400 bg-neutral-50 text-neutral-800",
  red: "border-l-red-600 bg-red-50/90 text-red-950",
  blue: "border-l-blue-800 bg-blue-50/90 text-blue-950",
  green: "border-l-emerald-600 bg-emerald-50/90 text-emerald-950",
  dark: "border-l-neutral-600 bg-neutral-900 text-neutral-200",
};

export function HighlightBox({ variant = "neutral", children }) {
  return (
    <div
      className={`my-5 max-w-[72ch] rounded-md border border-neutral-200/90 py-3.5 pl-4 pr-4 text-[15px] leading-[1.6] border-l-[3px] shadow-sm ${hbStyles[variant] || hbStyles.neutral}`}
    >
      {children}
    </div>
  );
}

export function InfoTable({ children }) {
  return (
    <div className="my-5 w-full max-w-full overflow-x-auto rounded-md border border-neutral-200 shadow-sm">
      <table className="w-full min-w-[320px] border-collapse text-left text-[15px] text-neutral-600">
        {children}
      </table>
    </div>
  );
}

export function InfoThead({ children }) {
  return (
    <thead>
      <tr className="border-b border-neutral-200 bg-neutral-100 text-[12px] font-semibold uppercase tracking-wide text-neutral-700">
        {children}
      </tr>
    </thead>
  );
}

export function InfoTh({ children, className = "" }) {
  return <th className={`px-4 py-3.5 font-semibold ${className}`}>{children}</th>;
}

export function InfoTbody({ children }) {
  return <tbody className="bg-white">{children}</tbody>;
}

export function InfoTr({ children, striped }) {
  return (
    <tr
      className={
        striped
          ? "bg-neutral-50/80 [&>td]:border-b [&>td]:border-neutral-100"
          : "[&>td]:border-b [&>td]:border-neutral-100"
      }
    >
      {children}
    </tr>
  );
}

export function InfoTd({ children, bold, className = "" }) {
  return (
    <td
      className={`px-4 py-3 align-top ${bold ? "font-semibold text-neutral-900" : ""} ${className}`}
    >
      {children}
    </td>
  );
}

export function CorpCard({ title, children }) {
  return (
    <div className="my-6 w-full rounded-lg border border-neutral-200 bg-white px-5 py-6 shadow-sm sm:px-7 sm:py-7">
      <div className="mb-5 border-b border-neutral-100 pb-3 text-[16px] font-semibold tracking-tight text-neutral-900">
        {title}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5">{children}</div>
    </div>
  );
}

export function CorpRow({ label, value }) {
  return (
    <div className="flex flex-col gap-1.5 text-[15px]">
      <span className="text-[12px] font-semibold uppercase tracking-wide text-neutral-500">
        {label}
      </span>
      <span className="font-medium leading-snug text-neutral-800">{value}</span>
    </div>
  );
}

export function Divider() {
  return <hr className="my-8 border-neutral-200 sm:my-9" />;
}

export function LegalList({ items }) {
  return (
    <ul className="my-4 max-w-[72ch] list-none space-y-3 pl-0">
      {items.map((item, i) => (
        <li
          key={i}
          className="relative pl-5 text-[16px] leading-[1.65] text-neutral-600 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-neutral-400 before:content-['']"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CheckList({ items }) {
  return (
    <ul className="my-4 max-w-[72ch] list-none space-y-3 pl-0">
      {items.map((item, i) => (
        <li
          key={i}
          className="relative pl-7 text-[16px] leading-[1.65] text-neutral-600 before:absolute before:left-0 before:font-semibold before:text-emerald-700 before:content-['✓']"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function SubNav({ links }) {
  const handleClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className="mb-8 max-w-[72ch] rounded-lg border border-neutral-200 bg-neutral-50/80 px-4 py-4 sm:px-5 sm:py-5"
      aria-label="Table of contents"
    >
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-neutral-400">
        Sections
      </p>
      <div className="flex flex-wrap gap-2">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={(e) => handleClick(e, l.href)}
            className="inline-flex min-h-9 items-center rounded-md border border-neutral-200 bg-white px-3.5 py-2 text-[13px] font-medium leading-none text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-white hover:text-neutral-900"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
