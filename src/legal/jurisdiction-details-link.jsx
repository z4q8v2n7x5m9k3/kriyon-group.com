export function JurisdictionDetailsLink({ className = "", onSelectTerms }) {
  return (
    <button
      type="button"
      onClick={onSelectTerms}
      className={`font-medium text-neutral-800 underline decoration-neutral-300 underline-offset-2 transition-colors hover:text-neutral-950 hover:decoration-neutral-500 ${className}`}
    >
      Court &amp; arbitration terms
    </button>
  );
}
