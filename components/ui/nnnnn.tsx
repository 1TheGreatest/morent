"use client";
import { Icon } from "iconsax-react";
import React from "react";

type ButtonProps = {
  label?: string; // Optional label text
  variant?: "primary" | "secondary" | "minimal"; // Button style variants
  size?: "small" | "medium" | "large"; // Button size variants
  state?: "enabled" | "hover" | "pressed" | "focused" | "disabled"; // Button state
  iconLeft?: React.ReactNode; // Left icon as a React node
  iconRight?: React.ReactNode; // Right icon as a React node
  onClick?: () => void; // Click handler
  disabled?: boolean; // Disable the button
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary", // Default variant
  size = "small", // Default size
  state = "enabled", // Default state
  iconLeft,
  iconRight,
  onClick,
  disabled = false, // Default disabled state
}) => {
  // Base styles
  const baseClasses = `inline-flex items-center justify-center rounded-md transition ease-in-out duration-150`;

  // Variant styles
  const variantClasses: Record<"primary" | "secondary" | "minimal", string> = {
    primary: "text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800",
    secondary: "text-blue-600 bg-blue-100 hover:bg-blue-200 active:bg-blue-300",
    minimal: "text-blue-600 hover:bg-blue-50 active:bg-blue-100",
  };

  // State styles
  const stateClasses: Record<
    "enabled" | "hover" | "pressed" | "focused" | "disabled",
    string
  > = {
    enabled: "",
    hover: "",
    pressed: "",
    focused: "ring-2 ring-blue-400",
    disabled: "opacity-50 cursor-not-allowed",
  };

  // Size styles
  const sizeClasses: Record<"small" | "medium" | "large", string> = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-5 py-3 text-lg",
  };

  // Icon size adjustments
  const iconSize = size === "small" ? 12 : size === "medium" ? 14 : 18;

  // Icon size mapping
  const iconSizes: Record<"small" | "medium" | "large", number> = {
    small: 12,
    medium: 14,
    large: 18,
  };

  // Icon-only styles
  const isIconOnly = !label && (iconLeft || iconRight);
  const iconOnlyClass = isIconOnly ? "p-2 w-10 h-10" : "";

  // Combine all styles
  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${stateClasses[disabled ? "disabled" : state]}
    ${sizeClasses[size]}
    ${iconOnlyClass}
  `;

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {label}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};

export default Button;

// ("use client");
// import React from "react";

// export default function Button({
//   label,
//   variant = "primary", // primary, secondary, minimal
//   size = "small", // small, medium
//   state = "enabled", // enabled, hover, pressed, focused, disabled
//   iconLeft: IconLeft,
//   iconRight: IconRight,
//   onClick,
//   disabled = false,
// }) {
//   // Base styles
//   const baseClasses = `inline-flex items-center justify-center rounded-md transition ease-in-out duration-150`;

//   // Variant styles
//   const variantClasses = {
//     primary: "text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800",
//     secondary: "text-blue-600 bg-blue-100 hover:bg-blue-200 active:bg-blue-300",
//     minimal: "text-blue-600 hover:bg-blue-50 active:bg-blue-100",
//   };

//   // State styles
//   const stateClasses = {
//     enabled: "",
//     hover: "",
//     pressed: "",
//     focused: "ring-2 ring-blue-400",
//     disabled: "opacity-50 cursor-not-allowed",
//   };

//   // Size styles
//   const sizeClasses = {
//     small: "px-3 py-1 text-sm",
//     medium: "px-4 py-2 text-base",
//   };

//   // Icon-only styles
//   const isIconOnly = !label && (IconLeft || IconRight);
//   const iconOnlyClass = isIconOnly ? "p-2 w-10 h-10" : "";

//   // Combine all styles
//   const classes = `
//     ${baseClasses}
//     ${variantClasses[variant]}
//     ${stateClasses[disabled ? "disabled" : state]}
//     ${sizeClasses[size]}
//     ${iconOnlyClass}
//   `;

//   return (
//     <button className={classes} onClick={onClick} disabled={disabled}>
//       {IconLeft && <IconLeft className="w-4 h-4 mr-2" />}
//       {label}
//       {IconRight && <IconRight className="w-4 h-4 ml-2" />}
//     </button>
//   );
// }
