import { useEffect, useId, useRef, type ReactNode } from "react";
import { m, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  wide?: boolean;
  subtitle?: string;
}

export function Modal({ title, children, onClose, wide = false, subtitle }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      const focusTarget = previousFocus?.isConnected && previousFocus !== document.body
        ? previousFocus
        : document.getElementById("mobile-nav-toggle");
      focusTarget?.focus({ preventScroll: true });
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className={`modal ${wide ? "modal-wide" : ""}`}
      aria-labelledby={titleId}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.target === event.currentTarget &&
          (event.clientX < bounds.left || event.clientX > bounds.right ||
           event.clientY < bounds.top || event.clientY > bounds.bottom)) onClose();
      }}
    >
      <m.div
        className="modal-inner"
        initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.22 }}
      >
        <div className="modal-heading">
          <div>
            {subtitle && <p className="eyebrow modal-eyebrow">{subtitle}</p>}
            <h2 id={titleId}>{title}</h2>
          </div>
          <button type="button" className="icon-button modal-close" aria-label="Close dialog" onClick={onClose} autoFocus>
            <X size={21} />
          </button>
        </div>
        {children}
      </m.div>
    </dialog>
  );
}