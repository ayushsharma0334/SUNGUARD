import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  href: string;
  label: string;
  icon?: LucideIcon;
  matchPaths?: string[]; // For more complex active path matching
}
