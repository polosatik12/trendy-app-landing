import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Hero, Features, Showcase, CTA, Footer } from "@/components/landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova — максимум возможностей для общения" },
      {
        name: "description",
        content:
          "Nova — быстрое и лёгкое мобильное приложение для общения, звонков и бизнеса. Скачайте бесплатно на iOS, Android и компьютер.",
      },
      { property: "og:title", content: "Nova — максимум возможностей для общения" },
      {
        property: "og:description",
        content: "Быстрый мессенджер для общения, звонков и бизнеса. Бесплатно на всех устройствах.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <div className="pt-4">
        <Navbar />
      </div>
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
