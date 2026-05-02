import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useEffect, useRef, useState } from "react";
import { X, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { contactForm } from "@/lib/content";
import { CONTACT_OPEN_EVENT, ContactOpenDetail } from "@/lib/contact";
import { CTAButton } from "@/components/primitives/CTAButton";
import { cn } from "@/lib/utils";

const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/sahelsky4@gmail.com";

type Status = "idle" | "loading" | "success" | "error";

export const ContactModal = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [defaultSubject, setDefaultSubject] = useState<string>("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const t = contactForm.fr;

  useEffect(() => {
    const onOpen = (e: Event) => {
      const detail = (e as CustomEvent<ContactOpenDetail>).detail || {};
      setDefaultSubject(detail.subject || "");
      previouslyFocused.current = document.activeElement as HTMLElement | null;
      setStatus("idle");
      setErrorMsg(null);
      setOpen(true);
    };
    window.addEventListener(CONTACT_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(CONTACT_OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) {
      previouslyFocused.current?.focus?.();
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    setTimeout(() => firstFieldRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots that fill every field will trip it
    if (data.get("_honey")) return;

    setStatus("loading");
    setErrorMsg(null);
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as { success?: string | boolean };
      if (json.success === "true" || json.success === true) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error("Service did not confirm success.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
    }
  };

  const inputClass =
    "w-full bg-offwhite border border-border rounded-sm px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors";
  const labelClass =
    "block font-display text-[11px] uppercase tracking-[0.16em] text-navy mb-2";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-0 sm:p-6"
          aria-hidden={!open}
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label={t.close}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm"
          />

          {/* Dialog */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-offwhite w-full sm:max-w-xl max-h-[100dvh] sm:max-h-[90dvh] overflow-y-auto sm:rounded-sm shadow-2xl border-t-2 border-ochre"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.close}
              className="absolute top-4 right-4 p-2 text-charcoal/70 hover:text-navy transition-colors focus-ring rounded-sm"
            >
              <X size={18} />
            </button>

            <div className="p-6 sm:p-8 md:p-10">
              <span className="eyebrow">Contact</span>
              <h2
                id="contact-modal-title"
                className="font-display text-2xl md:text-3xl font-semibold text-navy mt-3 mb-3"
              >
                {t.title}
              </h2>
              <p className="text-sm text-charcoal/80 mb-7">{t.sub}</p>

              {status === "success" ? (
                <div
                  className="bg-emerald-50 border border-emerald-200 rounded-sm p-6 text-center"
                  role="status"
                >
                  <CheckCircle2
                    size={44}
                    className="mx-auto mb-3 text-emerald-600"
                    aria-hidden
                  />
                  <p className="font-display text-base text-emerald-900 mb-5">
                    {t.success}
                  </p>
                  <CTAButton
                    type="button"
                    variant="navy"
                    onClick={() => setOpen(false)}
                  >
                    {t.close}
                  </CTAButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* FormSubmit config fields */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="Nouveau contact — sahelskyuas.mr"
                  />
                  <input
                    type="hidden"
                    name="_template"
                    value="table"
                  />
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="_honey"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cf-name" className={labelClass}>
                        {t.fields.name} *
                      </label>
                      <input
                        ref={firstFieldRef}
                        id="cf-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="cf-email" className={labelClass}>
                        {t.fields.email} *
                      </label>
                      <input
                        id="cf-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cf-org" className={labelClass}>
                        {t.fields.organization}
                      </label>
                      <input
                        id="cf-org"
                        name="organization"
                        type="text"
                        autoComplete="organization"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="cf-subject" className={labelClass}>
                        {t.fields.subject} *
                      </label>
                      <select
                        id="cf-subject"
                        name="subject"
                        required
                        defaultValue={defaultSubject || t.subjects[0]}
                        className={cn(inputClass, "appearance-none pr-10")}
                      >
                        {t.subjects.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cf-message" className={labelClass}>
                      {t.fields.message} *
                    </label>
                    <textarea
                      id="cf-message"
                      name="message"
                      required
                      minLength={10}
                      rows={5}
                      className={cn(inputClass, "resize-y min-h-[120px]")}
                    />
                  </div>

                  {status === "error" && (
                    <div
                      role="alert"
                      className="flex items-start gap-2 text-sm text-destructive bg-destructive/5 border border-destructive/20 rounded-sm p-3"
                    >
                      <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                      <span>
                        {t.error}
                        {errorMsg && (
                          <span className="block text-xs opacity-70 mt-1">
                            {errorMsg}
                          </span>
                        )}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="text-sm text-charcoal/70 hover:text-navy transition-colors px-3 py-2 focus-ring rounded-sm"
                    >
                      {t.close}
                    </button>
                    <CTAButton
                      type="submit"
                      variant="navy"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2
                            size={16}
                            className="animate-spin"
                            aria-hidden
                          />
                          {t.sending}
                        </>
                      ) : (
                        t.submit
                      )}
                    </CTAButton>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
