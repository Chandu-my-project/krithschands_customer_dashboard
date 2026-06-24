'use client';

import Link from 'next/link';
import { BuildingOffice2Icon, Cog6ToothIcon, WrenchScrewdriverIcon,UserGroupIcon  } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: BuildingOffice2Icon },
  {
    name: 'Services',
    href: '/dashboard/services',
    icon: WrenchScrewdriverIcon,
  },
  { name: 'Spares', href: '/dashboard/spares', icon: Cog6ToothIcon },
  { name: 'About', href: '/dashboard/about', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex items-center gap-4 px-4 py-2.5 rounded-lg font-bold tracking-wide transition-colors',
              {
                'bg-[#e2e8f0] text-[#1e293b] shadow-xs': pathname === link.href,
                'hover:bg-slate-700/40 text-slate-300 hover:text-white': pathname !== link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <span className="text-sm tracking-wide">{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}
