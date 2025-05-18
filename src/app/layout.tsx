// src/app/layout.tsx
import '../styles/globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ViveMedellín",
  description: "Conecta con personas y comunidades en Medellín",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>ViveMedellín</title>
        <meta name="description" content="Conecta con personas y comunidades en Medellín" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="container mx-auto py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
