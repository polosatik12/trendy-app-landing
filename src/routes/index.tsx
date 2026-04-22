import { createFileRoute } from "@tanstack/react-router";
import {
  Navbar,
  Hero,
  Features,
  Compare,
  AISection,
  TechStack,
  Security,
  FAQ,
  CTA,
  Footer,
} from "@/components/landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WAVE — суперапп для общения, покупок и сервисов" },
      {
        name: "description",
        content:
          "WAVE — российская суперапп-платформа: мессенджер, маркетплейс с AI-поиском, недвижимость и страхование в одном приложении. Бесплатно на iOS и Android.",
      },
      { property: "og:title", content: "WAVE — суперапп для общения, покупок и сервисов" },
      {
        property: "og:description",
        content:
          "Мессенджер, маркетплейс с AI, недвижимость и страхование в одном приложении. Без подписок и рекламы в чатах.",
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
        <Compare />
        <AISection />
        <TechStack />
        <Security />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
