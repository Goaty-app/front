export function getDeviceType(): "mobile" | "desktop" {
  if (typeof window === "undefined") return "desktop";

  const width = window.innerWidth;

  if (width <= 640) return "mobile";
  return "desktop";
}
