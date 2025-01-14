import { ReactNode } from 'react';

export default interface TextLinkInterface {
  href: string;
  children: ReactNode;
  className?: string;
}
