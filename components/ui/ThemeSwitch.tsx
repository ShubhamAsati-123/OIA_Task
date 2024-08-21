"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const ThemeSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <SwitchPrimitives.Root
      className={cn(
        "relative inline-flex h-10 w-[76px] cursor-pointer items-center rounded-full bg-input transition-colors",
        isDark ? "bg-gray-700" : "bg-gray-300",
        className
      )}
      checked={isDark}
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none absolute left-0 block h-8 w-8 rounded-full bg-white shadow-lg ring-0 transition-transform duration-300",
          isDark ? "transform translate-x-10" : "transform translate-x-1"
        )}
      /> 
      <div
        className={cn(
          "absolute flex items-center justify-between w-full px-2",
          "text-gray-500"
        )}
      >
        <Sun
          className={cn(
            "h-5 w-5 transition-opacity duration-300",
            isDark ? "opacity-0" : "opacity-100"
          )}
        />
        <Moon
          className={cn(
            "h-5 w-5 transition-opacity duration-300",
            isDark ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
    </SwitchPrimitives.Root>
  );
});

ThemeSwitch.displayName = SwitchPrimitives.Root.displayName;

export { ThemeSwitch };
