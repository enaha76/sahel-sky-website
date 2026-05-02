import { cn } from "@/lib/utils";

const SRC = "/Logo_Sahel_Sky.svg";

export const Logo = ({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) => {
  if (variant === "light") {
    // On dark backgrounds (footer): flatten the multi-color logo to a solid
    // white silhouette so all marks read clearly against navy.
    return (
      <img
        src={SRC}
        alt="SahelSky UAS"
        className={cn(
          "h-16 md:h-20 w-auto block [filter:brightness(0)_invert(1)]",
          className
        )}
      />
    );
  }
  return (
    <img
      src={SRC}
      alt="SahelSky UAS"
      className={cn("h-16 md:h-20 w-auto block", className)}
    />
  );
};
