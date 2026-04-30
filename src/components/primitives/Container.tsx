import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const Container = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mx-auto w-full max-w-[1280px] px-6 md:px-10", className)} {...props} />
);
