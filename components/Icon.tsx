import {
  LayoutDashboard, Rocket, Search, FileText, TrendingUp, Camera, Store, Truck,
  Megaphone, ShieldCheck, Globe, GraduationCap, type LucideProps,
} from "lucide-react";

const icons = {
  LayoutDashboard, Rocket, Search, FileText, TrendingUp, Camera, Store, Truck,
  Megaphone, ShieldCheck, Globe, GraduationCap,
};

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const C = icons[name as keyof typeof icons] ?? Globe;
  return <C {...props} />;
}
