import { Link } from "@tanstack/react-router";
import { Apple, Play, Monitor, Sparkles, ShieldCheck, PhoneCall, MessageCircle, Zap } from "lucide-react";
import phoneHero from "@/assets/phone-hero.png";

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 mx-auto w-[min(1100px,calc(100%-2rem))]">
      <nav className="flex items-center justify-between rounded-full border border-border bg-surface/70 px-4 py-3 backdrop-blur-xl md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid size-9 place-items-center rounded-full" style={{ background: "var(--gradient-brand)" }}>
            <Sparkles className="size-4 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Nova</span>
        </Link>
        <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition hover:text-foreground">Возможности</a>
          <a href="#download" className="transition hover:text-foreground">Скачать</a>
          <a href="#business" className="transition hover:text-foreground">Для бизнеса</a>
        </div>
        <a
          href="#download"
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
        >
          Открыть
        </a>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary" />
            Новая версия 2.0 уже доступна
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            >
              Максимум
            </span>
            <br />
            возможностей
            <br />
            для общения
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Быстрое и лёгкое приложение для общения, звонков и решения повседневных задач — в одном месте.
          </p>

          <div id="download" className="mt-8 flex flex-wrap gap-3">
            <StoreButton icon={<Apple className="size-5" />} label="App Store" />
            <StoreButton icon={<Play className="size-5" />} label="Google Play" />
            <StoreButton icon={<Sparkles className="size-5" />} label="RuStore" />
            <StoreButton icon={<Monitor className="size-5" />} label="Для компьютера" />
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute inset-0 -z-10 blur-3xl"
            style={{ background: "var(--gradient-brand)", opacity: 0.35 }}
          />
          <img
            src={phoneHero}
            alt="Превью мобильного приложения Nova"
            width={1024}
            height={1024}
            className="mx-auto w-full max-w-md drop-shadow-[0_30px_60px_rgba(120,80,255,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}

function StoreButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-2 rounded-full bg-surface-elevated px-5 py-3 text-sm font-medium text-foreground ring-1 ring-border transition hover:bg-surface-elevated/80 hover:ring-primary/40"
    >
      {icon}
      {label}
    </a>
  );
}

const features = [
  {
    icon: MessageCircle,
    title: "Общайтесь без ограничений",
    text: "Переписывайтесь, отправляйте аудио и видео, делитесь объёмными файлами и стикерами.",
  },
  {
    icon: PhoneCall,
    title: "Звоните в HD-качестве",
    text: "Стабильная связь даже при слабом сигнале. Бесплатно и без ограничений по времени.",
  },
  {
    icon: Zap,
    title: "Молниеносная скорость",
    text: "Минимум потребления, максимум производительности — приложение работает на любом устройстве.",
  },
  {
    icon: ShieldCheck,
    title: "Безопасность по умолчанию",
    text: "Сквозное шифрование, гибкие настройки приватности и контроль над вашими данными.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Всё, что нужно — <span className="text-muted-foreground">в одном приложении</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-8 transition hover:-translate-y-1 hover:border-primary/40"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div
                className="grid size-12 place-items-center rounded-2xl text-white"
                style={{ background: "var(--gradient-brand)" }}
              >
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-muted-foreground">{f.text}</p>
              <div
                className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full opacity-0 blur-3xl transition group-hover:opacity-30"
                style={{ background: "var(--gradient-hero)" }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Showcase() {
  return (
    <section id="business" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 overflow-hidden rounded-[2.5rem] border border-border bg-surface p-10 md:grid-cols-2 md:p-16">
        <div>
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Для бизнеса
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Превратите общение
            <br />
            в рост вашего бизнеса
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Боты, каналы, оплаты и встроенная аналитика. Развивайте сообщество клиентов прямо внутри Nova.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#"
              className="rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)]"
              style={{ background: "var(--gradient-brand)" }}
            >
              Подключить бизнес
            </a>
            <a
              href="#"
              className="rounded-full bg-surface-elevated px-6 py-3 text-sm font-semibold ring-1 ring-border transition hover:ring-primary/40"
            >
              Узнать больше
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute inset-0 rounded-3xl blur-3xl"
            style={{ background: "var(--gradient-hero)", opacity: 0.25 }}
          />
          <img
            src={phoneHero}
            alt="Бизнес-функции Nova"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative mx-auto w-full max-w-sm rotate-6"
          />
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
          Скачайте Nova
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          >
            прямо сейчас
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
          Доступно на всех платформах. Бесплатно, без рекламы и ограничений.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <StoreButton icon={<Apple className="size-5" />} label="App Store" />
          <StoreButton icon={<Play className="size-5" />} label="Google Play" />
          <StoreButton icon={<Sparkles className="size-5" />} label="RuStore" />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <div className="grid size-7 place-items-center rounded-full" style={{ background: "var(--gradient-brand)" }}>
            <Sparkles className="size-3.5 text-white" />
          </div>
          <span className="font-semibold text-foreground">Nova</span>
          <span>© 2026</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="transition hover:text-foreground">Конфиденциальность</a>
          <a href="#" className="transition hover:text-foreground">Условия</a>
          <a href="#" className="transition hover:text-foreground">Поддержка</a>
        </div>
      </div>
    </footer>
  );
}
