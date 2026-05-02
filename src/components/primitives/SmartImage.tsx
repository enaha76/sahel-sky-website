import { cn } from "@/lib/utils";
import { ImgHTMLAttributes, useState } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  priority?: boolean;
  aspect?: string;
  objectFit?: "cover" | "contain";
  caption?: string;
  captionTone?: "light" | "dark";
}

export const SmartImage = ({
  className,
  priority,
  aspect,
  alt,
  onLoad,
  objectFit = "cover",
  caption,
  captionTone = "light",
  ...props
}: Props) => {
  const [loaded, setLoaded] = useState(false);
  const visual = (
    <div className={cn("relative overflow-hidden", aspect, className)}>
      {!loaded && <div className="absolute inset-0 shimmer" aria-hidden />}
      <img
        {...props}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={cn(
          "h-full w-full transition-opacity duration-700",
          objectFit === "cover" ? "object-cover" : "object-contain",
          loaded ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );

  if (!caption) return visual;
  return (
    <figure>
      {visual}
      <figcaption
        className={cn(
          "mt-2 text-[11px] italic tracking-wide text-right",
          captionTone === "dark" ? "text-offwhite/65" : "text-slate-muted/85"
        )}
      >
        {caption}
      </figcaption>
    </figure>
  );
};
