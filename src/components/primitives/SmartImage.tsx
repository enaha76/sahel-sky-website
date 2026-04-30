import { cn } from "@/lib/utils";
import { ImgHTMLAttributes, useState } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  priority?: boolean;
  aspect?: string;
}

export const SmartImage = ({ className, priority, aspect, alt, onLoad, ...props }: Props) => {
  const [loaded, setLoaded] = useState(false);
  return (
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
          "h-full w-full object-cover transition-opacity duration-700",
          loaded ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
};
