import React from 'react';
import { cn } from '@/lib/utils';

export const FolioLinkLogo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn('text-primary', className)}
    {...props}
  >
    <path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3" />
    <path d="M16 21h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3" />
    <line x1="12" y1="3" x2="12" y2="21" />
  </svg>
);
