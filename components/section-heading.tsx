import type { ReactNode } from "react"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  theme?: "light" | "dark" | "colored"
  decorative?: boolean
  children?: ReactNode
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  theme = "light",
  decorative = true,
  children,
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align]

  const themeClass = {
    light: "text-gray-800",
    dark: "text-white",
    colored: "bg-clip-text text-transparent bg-gradient-to-r from-maroon-600 to-maroon-800",
  }

  return (
    <div className={`flex flex-col ${alignClass} mb-8 md:mb-12`}>
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 ${themeClass[theme]}`}>{title}</h2>

      {decorative && (
        <div className="relative">
          <div
            className={`w-16 md:w-20 h-1 ${theme === "colored" ? "bg-gradient-to-r from-maroon-600 to-maroon-800" : "bg-maroon-700"} mb-4 md:mb-6 rounded-full`}
          ></div>
          {theme !== "colored" && (
            <div className="absolute -bottom-1 left-3 w-8 md:w-10 h-1 bg-maroon-500 rounded-full opacity-60"></div>
          )}
        </div>
      )}

      {subtitle && (
        <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-600"} max-w-3xl text-sm md:text-base`}>
          {subtitle}
        </p>
      )}

      {children}
    </div>
  )
}
