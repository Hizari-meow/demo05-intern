import './globals.css';
import { Inter } from 'next/font/google';
import 'antd/dist/reset.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Erateq Login',
  description: 'Login page for Erateq system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
