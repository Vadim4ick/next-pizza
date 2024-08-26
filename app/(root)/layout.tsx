import type { Metadata } from "next";
import { Header } from "@/shared/components";

export const metadata: Metadata = {
  title: "Next Pizza | Главная",

  //   icons: {
  //     icon: {
  //       url: "/logo.png",
  //       sizes: "32x32",
  //     },
  //   },
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />

      {children}
      {modal}
    </main>
  );
}
