export const metadata = {
  title: 'POS X — Point of Sale & ERP | La Comuna',
  description: 'Free point of sale and ERP system. The more we grow, the less we all pay.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
