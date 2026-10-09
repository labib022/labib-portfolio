import type { SVGProps } from "react";
import { Braces, CodeXml, Database, KeyRound, Layers, Monitor, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export function Github({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`tech-svg tech-github ${className}`} {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" />
    </svg>
  );
}

export function Linkedin({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`tech-svg tech-linkedin ${className}`} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a4 4 0 0 1 2-3Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function ReactIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23 23 20.46" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={`tech-svg tech-react ${className}`} {...props}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function TypeScriptIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-typescript ${className}`} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="3.5" fill="#3178C6" />
      <path d="M11.5 16.5H10.1V9.7H7.5V8.5H14.1V9.7H11.5V16.5ZM17.9 11.2C17.4 10.9 16.7 10.7 15.9 10.7C15.2 10.7 14.8 10.9 14.8 11.3C14.8 11.6 15.1 11.8 15.9 12C17.3 12.4 18.2 13 18.2 14.4C18.2 15.9 16.8 16.7 15.1 16.7C14.1 16.7 13.2 16.4 12.5 15.9L13.1 14.7C13.8 15.2 14.6 15.4 15.3 15.4C16.1 15.4 16.7 15.2 16.7 14.6C16.7 14.2 16.3 14 15.5 13.8C14.1 13.4 13.2 12.8 13.2 11.4C13.2 10 14.6 9.3 16.1 9.3C17 9.3 17.8 9.5 18.4 9.9L17.9 11.2Z" fill="#FFFFFF" />
    </svg>
  );
}

export function JavaScriptIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-javascript ${className}`} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="3.5" fill="#F7DF1E" />
      <path d="M11.75 16.25C11.75 17.5 10.75 18 9.25 18C8.1 18 7.3 17.5 6.8 16.7L8.05 15.95C8.25 16.35 8.65 16.65 9.25 16.65C9.75 16.65 10.2 16.45 10.2 15.9V10H11.75V16.25ZM17.8 16.2C17.1 17.3 15.8 18 14.2 18C12.5 18 11.4 17 11.4 15.4C11.4 13.7 12.7 12.9 14.5 12.5L15.3 12.3C15.9 12.2 16.2 11.9 16.2 11.5C16.2 11 15.7 10.7 14.8 10.7C14 10.7 13.4 11 13 11.6L11.9 10.7C12.6 9.6 13.6 9.3 15 9.3C16.9 9.3 17.8 10.2 17.8 11.6V15.2C17.8 15.6 17.8 15.9 17.8 16.2Z" fill="#000000" />
    </svg>
  );
}

export function TailwindIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-tailwind ${className}`} {...props}>
      <path fill="#06B6D4" d="M12 4.5c-3 0-4.9 1.5-5.7 4.5 1.1-1.5 2.4-2.1 3.8-1.7.8.2 1.4.8 2.1 1.5 1.1 1.2 2.4 2.6 5.2 2.6 3 0 4.9-1.5 5.6-4.5-1 1.5-2.3 2.1-3.7 1.7-.8-.2-1.4-.8-2.1-1.5C16.1 5.9 14.8 4.5 12 4.5ZM6.4 11.5c-3 0-4.9 1.5-5.7 4.5 1.1-1.5 2.4-2.1 3.8-1.7.8.2 1.4.8 2.1 1.5 1.1 1.2 2.4 2.6 5.2 2.6 3 0 4.9-1.5 5.7-4.5-1.1 1.5-2.4 2.1-3.8 1.7-.8-.2-1.4-.8-2.1-1.5-1.1-1.2-2.4-2.6-5.2-2.6Z" />
    </svg>
  );
}

export function HtmlIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-html ${className}`} {...props}>
      <path fill="#E34F26" d="M3 2l1.6 18L12 22l7.4-2L21 2H3zm14.4 5.3H8.3l.2 2.7h8.7l-.6 6.9-4.6 1.3-4.6-1.3-.3-3.6h2.4l.2 1.8 2.3.6 2.3-.6.2-2.7H6.3L5.5 4.7h12.2l-.3 2.6z" />
    </svg>
  );
}

export function CssIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-css ${className}`} {...props}>
      <path fill="#1572B6" d="M3 2l1.6 18L12 22l7.4-2L21 2H3zm14.3 5.3H8.3l.2 2.7h8.5l-.6 6.9-4.4 1.2-4.4-1.2-.3-3.6h2.4l.2 1.8 2.1.6 2.1-.6.2-2.7H6.1L5.3 4.7h12.3l-.3 2.6z" />
    </svg>
  );
}

export function NodeIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-node ${className}`} {...props}>
      <path fill="#5FA04E" d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2zm6.5 13.8L12 19.6l-6.5-3.8V8.2L12 4.4l6.5 3.8v7.6z" />
      <path fill="#5FA04E" d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
    </svg>
  );
}

export function ExpressIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-express ${className}`} {...props}>
      <rect width="24" height="24" rx="4" fill="#1C2331" />
      <text x="12" y="16.5" fill="#E2E8F0" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">ex</text>
    </svg>
  );
}

export function MongoIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-mongodb ${className}`} {...props}>
      <path fill="#47A248" d="M12 2s-6.5 5.5-6.5 11.5c0 4.1 3 7.5 6.5 8.5 3.5-1 6.5-4.4 6.5-8.5C18.5 7.5 12 2 12 2zm.5 17.9v-7.4c.8.2 1.5.7 1.5 1.5 0 1.2-1 2.4-1.5 5.9zm-1 0c-.5-3.5-1.5-4.7-1.5-5.9 0-.8.7-1.3 1.5-1.5v7.4z" />
    </svg>
  );
}

export function GitIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-git ${className}`} {...props}>
      <path fill="#F05032" d="M21.6 10.9l-8.5-8.5c-.8-.8-2.1-.8-2.9 0L8.7 3.9l3.7 3.7c.6-.2 1.4-.1 1.9.5.6.6.7 1.4.5 2.1l3.5 3.5c.7-.2 1.5-.1 2.1.5.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.6-.6-.7-1.5-.5-2.1l-3.3-3.3V16c.2.2.4.4.4.7 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.6.4-1.1.9-1.4V10c-.5-.3-.9-.8-.9-1.4 0-.4.2-.8.4-1.1L6.1 4.9 2.4 8.6c-.8.8-.8 2.1 0 2.9l8.5 8.5c.8.8 2.1.8 2.9 0l7.8-7.8c.8-.7.8-2 0-2.8z" />
    </svg>
  );
}

export function VercelIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-vercel ${className}`} {...props}>
      <path fill="#E2E8F0" d="M12 2L24 22H0L12 2Z" />
    </svg>
  );
}

export function PostmanIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-postman ${className}`} {...props}>
      <path fill="#FF6C37" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.64 6.8c.45.26.73.74.73 1.26v3.88c0 .52-.28 1-.73 1.26l-3.36 1.94c-.45.26-1.01.26-1.46 0l-3.36-1.94c-.45-.26-.73-.74-.73-1.26v-3.88c0-.52.28-1 .73-1.26l3.36-1.94c.45-.26 1.01-.26 1.46 0l3.36 1.94z" />
    </svg>
  );
}

export function VsCodeIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-vscode ${className}`} {...props}>
      <path fill="#007ACC" d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.291L7.73 8.858 3.09 5.34a.747.747 0 0 0-.96.06L.223 7.156a.747.747 0 0 0-.056.994l4.28 5.434-4.28 5.433a.747.747 0 0 0 .056.995l1.908 1.755a.747.747 0 0 0 .96.06l4.64-3.518 8.775 8.357c.48.456 1.2.564 1.705.291l4.94-2.377a1.494 1.494 0 0 0 .848-1.345V3.932a1.494 1.494 0 0 0-.848-1.345zM18 16.65L11.75 12 18 7.35v9.3z" />
    </svg>
  );
}

export function NpmIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-npm ${className}`} {...props}>
      <path fill="#CB3837" d="M0 0v24h24V0H0zm19.5 19.5h-3v-12h-3v12h-6v-15h12v15z" />
    </svg>
  );
}

export function NextjsIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-nextjs ${className}`} {...props}>
      <circle cx="12" cy="12" r="10" fill="#000000" stroke="#475569" strokeWidth="1" />
      <path d="M14.8 16.5L9.5 9.2V16.5H8V7.5H9.6L14.9 14.8V7.5H16.4V16.5H14.8Z" fill="#FFFFFF" />
    </svg>
  );
}

export function BootstrapIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-bootstrap ${className}`} {...props}>
      <rect width="24" height="24" rx="5" fill="#7952B3" />
      <path d="M7 6h4.5c1.4 0 2.5.7 2.5 1.8 0 .9-.5 1.5-1.3 1.7.9.3 1.6 1 1.6 2 0 1.3-1.1 2.5-2.8 2.5H7V6zm2.5 3h1.8c.6 0 1-.3 1-.8s-.4-.8-1-.8H9.5v1.6zm0 3.5h2.1c.7 0 1.1-.4 1.1-.9 0-.6-.4-.9-1.1-.9H9.5v1.8z" fill="#FFFFFF" />
    </svg>
  );
}

export function ReduxIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-redux ${className}`} {...props}>
      <path d="M12.001 2c-3.1 0-6.1 1.2-8.3 3.4-3.1 3.1-4.2 7.6-2.9 11.8l2-1.2c-.9-3.2 0-6.7 2.3-9.1 1.8-1.8 4.3-2.7 6.9-2.7s5.1.9 6.9 2.7c2.3 2.4 3.2 5.9 2.3 9.1l2 1.2c1.3-4.2.2-8.7-2.9-11.8C18.1 3.2 15.1 2 12.001 2z" fill="#764ABC" />
      <path d="M6.3 14.5c.8 1.4 2 2.5 3.5 3.1-2.5-.2-4.8-1.5-6.1-3.6l2.6-1.5z" fill="#764ABC" />
      <path d="M17.7 14.5c-.8 1.4-2 2.5-3.5 3.1 2.5-.2 4.8-1.5 6.1-3.6l-2.6-1.5z" fill="#764ABC" />
      <circle cx="12" cy="12" r="2.5" fill="#764ABC" />
    </svg>
  );
}

export function ZustandIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-zustand ${className}`} {...props}>
      <path d="M12 11c-2.8 0-5 2.2-5 5 0 1.7 1.3 3 3 3h4c1.7 0 3-1.3 3-3 0-2.8-2.2-5-5-5z" fill="#C29B7F" />
      <circle cx="7.5" cy="8.5" r="1.8" fill="#C29B7F" />
      <circle cx="11" cy="6.5" r="1.8" fill="#C29B7F" />
      <circle cx="14.5" cy="6.5" r="1.8" fill="#C29B7F" />
      <circle cx="18" cy="8.5" r="1.8" fill="#C29B7F" />
    </svg>
  );
}

export function ReactRouterIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-react-router ${className}`} {...props}>
      <path d="M3 17.5l5.5-11 5 10 5.5-10" stroke="#CA4245" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FramerMotionIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-framer-motion ${className}`} {...props}>
      <path d="M4 2h16v7h-8l8 8H4v-7h8L4 2z" fill="#E2E8F0" />
    </svg>
  );
}

export function AxiosIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-axios ${className}`} {...props}>
      <path d="M12 2L2 22h5.5l2.2-4.5h4.6l2.2 4.5H22L12 2zm-1.1 12l2.1-4.2 2.1 4.2h-4.2z" fill="#5A29E4" />
    </svg>
  );
}

export function TanStackQueryIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-tanstack-query ${className}`} {...props}>
      <circle cx="12" cy="12" r="9" fill="#FF4154" opacity="0.2" />
      <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" stroke="#FF4154" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" fill="#FF4154" />
    </svg>
  );
}

export function MaterialUiIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-material-ui ${className}`} {...props}>
      <path d="M12 13.5l-6-3.5V3l6 3.5v7zm0 0l6-3.5V3l-6 3.5v7zM6 10l6 3.5 6-3.5" stroke="#007FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 13.5v7.5l6-3.5v-7.5l-6 3.5z" fill="#007FFF" />
    </svg>
  );
}

export function ShadcnIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-shadcn ${className}`} {...props}>
      <line x1="4" y1="20" x2="20" y2="4" stroke="#E2E8F0" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="4" y1="12" x2="12" y2="4" stroke="#E2E8F0" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function FirebaseIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-firebase ${className}`} {...props}>
      <path d="M3.8 17.7L5.7 3.5c.1-.4.6-.6.9-.3l3.6 5.8-6.4 8.7z" fill="#FFCA28" />
      <path d="M13.6 8.7L10.9 3.5c-.2-.4-.8-.4-1 0L3.8 17.7l9.8-9z" fill="#FFA000" />
      <path d="M13.6 8.7l2.8-5.2c.2-.4.8-.4.9 0l2.9 14.2-6.6-9z" fill="#F57C00" />
      <path d="M3.8 17.7l7.7 4.3c.3.2.7.2 1 0l7.7-4.3-6.7-12.7L3.8 17.7z" fill="#FFCA28" opacity="0.3" />
    </svg>
  );
}

export function FigmaIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-figma ${className}`} {...props}>
      <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
      <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
      <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#F24E1E" />
      <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
      <circle cx="16" cy="12" r="4" fill="#1ABCFE" />
    </svg>
  );
}

export function NetlifyIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-netlify ${className}`} {...props}>
      <path d="M6.5 12L12 6.5 17.5 12 12 17.5z" stroke="#00C7B7" strokeWidth="2" fill="none" />
      <path d="M12 2l10 10-10 10L2 12z" stroke="#00C7B7" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="12" cy="12" r="2" fill="#00C7B7" />
    </svg>
  );
}

export function RenderIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-render ${className}`} {...props}>
      <path d="M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" fill="#46E3B7" opacity="0.15" />
      <path d="M7 17V7h5a3.5 3.5 0 010 7H7m5 0l4 3" stroke="#46E3B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RailwayIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`tech-svg tech-railway ${className}`} {...props}>
      <rect width="24" height="24" rx="4" fill="#18181B" stroke="#3F3F46" strokeWidth="1" />
      <path d="M6 8h12M6 16h12M9 5v14M15 5v14" stroke="#E2E8F0" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const fallbackLucideIcons: Record<string, LucideIcon> = {
  "Responsive Design": Monitor,
  "REST APIs": Braces,
  "Authentication": KeyRound,
  "Authorization": ShieldCheck,
  "Mongoose": Layers,
  "Database Design": Database,
};

export function TechIcon({ name, size = 19, className = "", ...props }: IconProps & { name: string }) {
  const norm = name.trim().toLowerCase();
  
  if (norm === "react" || norm === "react.js" || norm === "reactjs") {
    return <ReactIcon size={size} className={className} {...props} />;
  }
  if (norm === "typescript" || norm === "ts") {
    return <TypeScriptIcon size={size} className={className} {...props} />;
  }
  if (norm === "javascript" || norm === "js") {
    return <JavaScriptIcon size={size} className={className} {...props} />;
  }
  if (norm === "tailwind css" || norm === "tailwind" || norm === "tailwindcss") {
    return <TailwindIcon size={size} className={className} {...props} />;
  }
  if (norm === "html5" || norm === "html") {
    return <HtmlIcon size={size} className={className} {...props} />;
  }
  if (norm === "css3" || norm === "css") {
    return <CssIcon size={size} className={className} {...props} />;
  }
  if (norm === "node.js" || norm === "node" || norm === "nodejs") {
    return <NodeIcon size={size} className={className} {...props} />;
  }
  if (norm === "express.js" || norm === "express" || norm === "expressjs") {
    return <ExpressIcon size={size} className={className} {...props} />;
  }
  if (norm === "mongodb" || norm === "mongo") {
    return <MongoIcon size={size} className={className} {...props} />;
  }
  if (norm === "git") {
    return <GitIcon size={size} className={className} {...props} />;
  }
  if (norm === "github") {
    return <Github size={size} className={className} {...props} />;
  }
  if (norm === "vercel") {
    return <VercelIcon size={size} className={className} {...props} />;
  }
  if (norm === "postman") {
    return <PostmanIcon size={size} className={className} {...props} />;
  }
  if (norm === "vs code" || norm === "vscode") {
    return <VsCodeIcon size={size} className={className} {...props} />;
  }
  if (norm === "npm") {
    return <NpmIcon size={size} className={className} {...props} />;
  }
  if (norm === "next.js" || norm === "nextjs" || norm === "next") {
    return <NextjsIcon size={size} className={className} {...props} />;
  }
  if (norm === "bootstrap" || norm === "bootstrap 5") {
    return <BootstrapIcon size={size} className={className} {...props} />;
  }
  if (norm === "redux toolkit" || norm === "redux") {
    return <ReduxIcon size={size} className={className} {...props} />;
  }
  if (norm === "zustand") {
    return <ZustandIcon size={size} className={className} {...props} />;
  }
  if (norm === "react router" || norm === "react-router") {
    return <ReactRouterIcon size={size} className={className} {...props} />;
  }
  if (norm === "framer motion" || norm === "framer-motion") {
    return <FramerMotionIcon size={size} className={className} {...props} />;
  }
  if (norm === "axios") {
    return <AxiosIcon size={size} className={className} {...props} />;
  }
  if (norm === "tanstack query" || norm === "react query") {
    return <TanStackQueryIcon size={size} className={className} {...props} />;
  }
  if (norm === "material ui" || norm === "mui") {
    return <MaterialUiIcon size={size} className={className} {...props} />;
  }
  if (norm === "shadcn/ui" || norm === "shadcn") {
    return <ShadcnIcon size={size} className={className} {...props} />;
  }
  if (norm === "firebase") {
    return <FirebaseIcon size={size} className={className} {...props} />;
  }
  if (norm === "figma") {
    return <FigmaIcon size={size} className={className} {...props} />;
  }
  if (norm === "netlify") {
    return <NetlifyIcon size={size} className={className} {...props} />;
  }
  if (norm === "render") {
    return <RenderIcon size={size} className={className} {...props} />;
  }
  if (norm === "railway") {
    return <RailwayIcon size={size} className={className} {...props} />;
  }

  const Fallback = fallbackLucideIcons[name] ?? CodeXml;
  return <Fallback size={size} aria-hidden="true" className={`technology-icon tech-fallback ${className}`} strokeWidth={1.65} {...props} />;
}