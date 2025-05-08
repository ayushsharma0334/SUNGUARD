"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/types';

interface NavLinksProps {
  orientation?: 'horizontal' | 'vertical';
  linkClassName?: string;
  activeLinkClassName?: string;
  onLinkClick?: () => void; // For closing mobile menu, for example
}

export function NavLinks({ 
  orientation = 'horizontal', 
  linkClassName, 
  activeLinkClassName,
  onLinkClick 
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {NAV_LINKS.map((item: NavItem) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + '/')) || (item.matchPaths && item.matchPaths.some(path => pathname.startsWith(path)));
        const IconComponent = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onLinkClick}
            className={cn(
              linkClassName,
              isActive && activeLinkClassName
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            {IconComponent && orientation === 'vertical' && <IconComponent className="h-5 w-5" />}
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
