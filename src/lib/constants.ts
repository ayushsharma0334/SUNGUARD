import type { NavItem } from '@/types';
import { Home, Package, Factory, Award, Users, Mail } from 'lucide-react';

export const NAV_LINKS: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/products", label: "Products", icon: Package },
  { href: "/infrastructure", label: "Infrastructure", icon: Factory },
  { href: "/certifications", label: "Certifications", icon: Award },
  { href: "/about", label: "About Us", icon: Users },
  { href: "/contact", label: "Contact Us", icon: Mail },
];
