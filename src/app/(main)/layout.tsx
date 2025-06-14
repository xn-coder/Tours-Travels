
import { Header } from '@/components/layout/header';
import Footer from '@/components/layout/Footer'; // Import the new Footer

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer /> {/* Use the new Footer component */}
    </div>
  );
}
