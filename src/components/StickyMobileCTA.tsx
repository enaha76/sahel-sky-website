import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { openContactModal } from "@/lib/contact";

export const StickyMobileCTA = ({ label }: { label: string }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShow(y > 600 && y < max - 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={() => openContactModal({ subject: "Demander une démo" })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden fixed bottom-4 left-4 right-4 z-40 bg-navy text-offwhite h-12 px-5 rounded-sm flex items-center justify-center gap-2 font-medium text-sm shadow-2xl border-t border-sand/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand focus-visible:ring-offset-2"
        >
          {label}
          <ArrowRight size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
