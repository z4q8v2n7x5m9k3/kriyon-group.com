import {
  VENTURE_EDOVA_URL,
  VENTURE_ONELINK_URL,
  VENTURE_REPIXELX_STUDIO_URL,
} from "./venture-urls";

const base =
  "font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-[2px] transition-colors hover:text-neutral-950 hover:decoration-neutral-500";

export function VentureRepixelXStudio({ className = "" }) {
  return (
    <a
      href={VENTURE_REPIXELX_STUDIO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${className}`.trim()}
    >
      RepixelX Studio
    </a>
  );
}

export function VentureOneLink({ className = "" }) {
  return (
    <a
      href={VENTURE_ONELINK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${className}`.trim()}
    >
      OneLink
    </a>
  );
}

export function VentureEdova({ className = "" }) {
  return (
    <a
      href={VENTURE_EDOVA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${className}`.trim()}
    >
      Edova
    </a>
  );
}
