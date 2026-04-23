export const getVariantClasses = (variant: string) => {
  const variants: Record<string, string> = {
    emerald: "bg-emerald-500 shadow-emerald-100",
    blue: "bg-blue-600 shadow-blue-100",
    violet: "bg-violet-600 shadow-violet-100",
    orange: "bg-orange-500 shadow-orange-100",
    lime: "bg-lime-600 shadow-lime-100",
  };
  return variants[variant] || variants.emerald;
};