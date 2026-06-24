import '@/app/ui/globals.css'
import { Metadata } from 'next';
import { oleoScript } from './ui/font';
 
export const metadata: Metadata = {
  title: {
    template: '%s | KrithsChands Dashboard',
    default: 'KrithsChands Dashboard',
  },
  description: 'The krithschands project.',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={oleoScript.variable}>
      {/* <body>{children}</body> */}
       <body>{children}</body>
    </html>
  );
}
