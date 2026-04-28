import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef, type ReactNode } from "react";
import {
  Apple,
  Play,
  Download,
  ShieldCheck,
  PhoneCall,
  MessageCircle,
  ShoppingBag,
  Home,
  Umbrella,
  Sparkles,
  Film,
  Image as ImageIcon,
  Search,
  Bot,
  Hexagon,
  Lock,
  Server,
  Code2,
  Cloud,
  Check,
  X,
  ChevronDown,
  Menu,
  X as XIcon,
} from "lucide-react";

/* ── Scroll-reveal wrapper ───────────────────────────────── */

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

/* ── Navbar ──────────────────────────────────────────────── */

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#features", label: "Возможности" },
    { href: "#compare", label: "Сравнение" },
    { href: "#ai", label: "AI" },
    { href: "#tech", label: "Технологии" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-4 z-50 mx-auto w-[min(1200px,calc(100%-2rem))]">
      <nav className="flex items-center justify-between rounded-full border border-border bg-surface/70 px-4 py-3 backdrop-blur-xl md:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="На главную">
          <span className="text-lg font-semibold tracking-tight">WAVE</span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-foreground">{l.label}</a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#download"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
          >
            Скачать
          </a>
          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="grid size-10 place-items-center rounded-full text-foreground md:hidden"
            aria-label="Меню"
          >
            {open ? <XIcon className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="mt-2 flex flex-col gap-1 rounded-3xl border border-border bg-surface/95 p-4 backdrop-blur-xl md:hidden animate-fade-in">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-surface-elevated hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

/* ── Hero ────────────────────────────────────────────────── */

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-24 md:pt-36 md:pb-32">
      <div
        className="absolute inset-0 -z-10 blur-3xl"
        style={{ background: "var(--gradient-brand)", opacity: 0.12 }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left — text */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary" />
            Российская суперапп-платформа нового поколения
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            >
              WAVE
            </span>
            <br />
            больше чем
            <br />
            мессенджер
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Общение, маркетплейс с AI-поиском, недвижимость и страхование — в одном приложении.
            Без переключений между десятком сервисов.
          </p>

          <div id="download" className="mt-8 flex flex-wrap gap-3">
            <StoreButton icon={<Apple className="size-5" />} label="App Store" />
            <StoreButton icon={<Play className="size-5" />} label="Google Play" primary />
            <StoreButton icon={<Download className="size-5" />} label="APK" />
          </div>

          <div className="mt-8 flex flex-wrap gap-x-2 gap-y-2 text-sm text-muted-foreground">
            <span>Без подписок</span>
            <span className="text-border">·</span>
            <span>Без рекламы в чатах</span>
            <span className="text-border">·</span>
            <span>Серверы в России</span>
          </div>
        </div>

        {/* Right — animated blobs */}
        <div className="relative hidden h-[420px] md:block" aria-hidden="true">
          <div
            className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 animate-[spin_18s_linear_infinite] rounded-full opacity-60 blur-3xl"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div
            className="absolute top-[30%] left-[60%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 animate-[spin_25s_linear_infinite_reverse] rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--gradient-brand)" }}
          />
          {/* Floating feature pills */}
          <div className="absolute top-[15%] left-[20%] rounded-2xl border border-border bg-surface/80 px-4 py-3 shadow-lg backdrop-blur animate-[float_6s_ease-in-out_infinite]">
            <div className="flex items-center gap-2 text-sm font-medium">
              <MessageCircle className="size-4 text-primary" /> Мессенджер
            </div>
          </div>
          <div className="absolute top-[45%] right-[10%] rounded-2xl border border-border bg-surface/80 px-4 py-3 shadow-lg backdrop-blur animate-[float_6s_ease-in-out_infinite_1s]">
            <div className="flex items-center gap-2 text-sm font-medium">
              <ShoppingBag className="size-4 text-primary" /> Маркетплейс
            </div>
          </div>
          <div className="absolute bottom-[15%] left-[30%] rounded-2xl border border-border bg-surface/80 px-4 py-3 shadow-lg backdrop-blur animate-[float_6s_ease-in-out_infinite_2s]">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Sparkles className="size-4 text-primary" /> AI-поиск
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoreButton({ icon, label, primary }: { icon: ReactNode; label: string; primary?: boolean }) {
  return (
    <a
      href="#"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition ${
        primary
          ? "text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90"
          : "bg-surface-elevated text-foreground ring-1 ring-border hover:bg-surface-elevated/80 hover:ring-primary/40"
      }`}
      style={primary ? { background: "var(--gradient-brand)" } : undefined}
    >
      {icon}
      {label}
    </a>
  );
}

/* ── Features ────────────────────────────────────────────── */

const features = [
  {
    icon: MessageCircle,
    title: "Мессенджер",
    text: "Личные чаты, группы до 1000 человек, публичные каналы, голосовые и видеосообщения, реакции и поиск по переписке.",
  },
  {
    icon: PhoneCall,
    title: "Звонки",
    text: "HD видеозвонки, групповые аудиоконференции, звонки на обычные номера телефонов.",
  },
  {
    icon: ImageIcon,
    title: "Лента и Истории",
    text: "Посты с фото и видео, карусели, упоминания, хэштеги, комментарии и исчезающие истории на 24 часа.",
  },
  {
    icon: Film,
    title: "Сюжеты",
    text: "Вертикальные короткие видео, встроенный редактор, музыка, эффекты и бесконечная лента рекомендаций.",
  },
  {
    icon: ShoppingBag,
    title: "Маркетплейс с AI",
    text: "Создание объявлений за 30 секунд, умный поиск нейросетью, чат и видеозвонок с продавцом, отзывы и рейтинги.",
  },
  {
    icon: Bot,
    title: "AI-ассистент",
    text: "Помощник для поиска товаров, подбора страховок и навигации по приложению на естественном языке.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Возможности
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Одно приложение <span className="text-muted-foreground">вместо десяти</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Один аккаунт, одна лента уведомлений и единая экосистема для общения, покупок и сервисов.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} className={`delay-[${i * 75}ms]`}>
              <article
                className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div
                  className="grid size-11 place-items-center rounded-2xl text-white"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <f.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Compare ─────────────────────────────────────────────── */

const comparisons = [
  {
    title: "Чем WAVE отличается от Telegram и WhatsApp",
    text: "Классические мессенджеры дают только переписку. WAVE объединяет общение с маркетплейсом, лентой и сервисами — не нужно выходить из приложения, чтобы купить товар.",
    note: "Компания Meta Platforms Inc. признана в России экстремистской организацией и запрещена. Принадлежащие ей соцсети Facebook и Instagram в России запрещены.",
  },
  {
    title: "Чем WAVE отличается от Avito и Юлы",
    text: "Доски объявлений не имеют полноценного чата, звонков и профиля продавца. В WAVE продавец — это аккаунт с постами, отзывами, рейтингом и прямой видеосвязью.",
  },
  {
    title: "Чем WAVE отличается от Instagram и TikTok",
    text: "Соцсети дают только контент. WAVE объединяет развлекательную ленту Сюжетов и Историй с реальными сервисами и покупками.",
    note: "Компания Meta Platforms Inc. признана в России экстремистской организацией и запрещена. Принадлежащие ей соцсети Facebook и Instagram в России запрещены.",
  },
  {
    title: "Чем WAVE отличается от обычных мессенджеров",
    text: "Стандартные мессенджеры ограничены только перепиской. WAVE объединяет общение, контент и сервисы в одной дружелюбной экосистеме с AI-консультантом.",
  },
];

export function Compare() {
  return (
    <section id="compare" className="relative px-6 py-24" style={{ background: "var(--gradient-surface)" }}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Почему WAVE
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Сравнение <span className="text-muted-foreground">с конкурентами</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {comparisons.map((c) => (
            <Reveal key={c.title}>
              <article
                className="h-full rounded-3xl border border-border bg-surface p-8"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-muted-foreground">{c.text}</p>
                {"note" in c && c.note ? (
                  <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground/70">
                    {c.note}
                  </p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 rounded-3xl border border-border bg-surface">
            {/* Header */}
            <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] sm:grid-cols-4 border-b border-border bg-surface-elevated/50 text-xs sm:text-sm font-medium">
              <div className="p-3 sm:p-4">Функция</div>
              <div className="p-3 sm:p-4 text-center">WAVE</div>
              <div className="p-3 sm:p-4 text-center text-muted-foreground">Мессен&shy;джеры</div>
              <div className="p-3 sm:p-4 text-center text-muted-foreground">Маркет&shy;плейсы</div>
            </div>
            {[
              ["Чаты и звонки HD", true, true, false],
              ["Маркетплейс с AI-поиском", true, false, true],
              ["Лента, Истории и Сюжеты", true, false, false],
              ["AI-ассистент", true, false, false],
            ].map((row, i) => (
              <div
                key={i as number}
                className="grid grid-cols-[1.4fr_1fr_1fr_1fr] sm:grid-cols-4 border-b border-border text-xs sm:text-sm last:border-0"
              >
                <div className="p-3 sm:p-4 leading-snug">{row[0] as string}</div>
                <div className="grid place-items-center p-3 sm:p-4">
                  {row[1] ? <Check className="size-4 sm:size-5 text-primary" /> : <X className="size-4 sm:size-5 text-muted-foreground/50" />}
                </div>
                <div className="grid place-items-center p-3 sm:p-4">
                  {row[2] ? <Check className="size-4 sm:size-5 text-muted-foreground" /> : <X className="size-4 sm:size-5 text-muted-foreground/50" />}
                </div>
                <div className="grid place-items-center p-3 sm:p-4">
                  {row[3] ? <Check className="size-4 sm:size-5 text-muted-foreground" /> : <X className="size-4 sm:size-5 text-muted-foreground/50" />}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── AI Section ──────────────────────────────────────────── */

const aiBlocks = [
  {
    icon: Search,
    title: "Умный поиск на маркетплейсе",
    text: "Нейросеть понимает запросы на естественном языке. «Найди недорогой iPhone в Москве не старше двух лет» — и вы получаете точные результаты с автоматической фильтрацией по смыслу.",
  },
  {
    icon: ShieldCheck,
    title: "Автомодерация объявлений",
    text: "Нейросеть проверяет публикации до выхода в ленту, отсекает мошенников, спам и запрещённый контент.",
  },
];

export function AISection() {
  return (
    <section id="ai" className="relative px-6 py-24 overflow-hidden">
      {/* Accent background glow */}
      <div
        className="absolute inset-0 -z-10 opacity-20 blur-3xl"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, oklch(0.65 0.2 280), transparent)" }}
      />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="size-3.5" />
              Искусственный интеллект
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Нейросети <span className="text-muted-foreground">встроены в ключевые сценарии</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Мы используем современные нейросети, чтобы поиск, ассистенты и
              модерация работали быстрее и точнее.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {aiBlocks.map((b) => (
            <Reveal key={b.title}>
              <article
                className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-transform duration-300 hover:border-primary/40"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div
                  className="grid size-12 place-items-center rounded-2xl text-white"
                  style={{ background: "var(--gradient-hero)" }}
                >
                  <b.icon className="size-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{b.title}</h3>
                <p className="mt-2 text-muted-foreground">{b.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Tech Stack ──────────────────────────────────────────── */

const techStack = [
  { icon: Code2, title: "Flutter", text: "Нативная производительность 60–120 FPS на iOS и Android из единой кодовой базы." },
  { icon: PhoneCall, title: "Шифрование звонков", text: "HD видео и аудио с минимальной задержкой, поддержка звонков на обычные телефоны." },
  { icon: Hexagon, title: "Node.js + TypeScript", text: "Высокопроизводительный бэкенд на Node.js и TypeScript с асинхронной обработкой запросов." },
  { icon: Server, title: "Серверы в России", text: "Соответствие 152-ФЗ, минимальный пинг и стабильность при любой нагрузке." },
];

export function TechStack() {
  return (
    <section id="tech" className="px-6 py-24" style={{ background: "var(--gradient-surface)" }}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Технологии
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Современный стек <span className="text-muted-foreground">для скорости и безопасности</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((t) => (
            <Reveal key={t.title}>
              <article
                className="h-full rounded-3xl border border-border bg-surface p-6 transition-transform duration-300 hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="grid size-10 place-items-center rounded-xl bg-surface-elevated text-primary">
                  <t.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Security ────────────────────────────────────────────── */

const securityItems = [
  { icon: Lock, title: "End-to-end шифрование", text: "Сообщения и звонки защищены современной криптографией." },
  { icon: ShieldCheck, title: "Защита от спама и фишинга", text: "AI-модерация в реальном времени блокирует подозрительный контент." },
  { icon: Server, title: "Серверы в России", text: "Соответствие 152-ФЗ, данные не покидают территорию страны." },
  { icon: Check, title: "Верификация продавцов", text: "Безопасные сделки на маркетплейсе и проверенные профили." },
];

export function Security() {
  return (
    <section className="px-6 py-24">
      <Reveal>
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-border bg-surface p-10 md:p-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Безопасность
              </span>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Контроль над данными
                <br />
                <span className="text-muted-foreground">по умолчанию</span>
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Шифрование, верификация и AI-модерация защищают переписку, звонки и сделки на
                маркетплейсе.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {securityItems.map((s) => (
                <div key={s.title} className="rounded-2xl border border-border bg-surface-elevated p-5">
                  <div className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <s.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ── FAQ ─────────────────────────────────────────────────── */

const faqs = [
  {
    q: "WAVE — это очередной клон Telegram?",
    a: "Нет. Telegram остаётся мессенджером. WAVE — это суперапп: общение, маркетплейс с AI-поиском и лента в одном приложении.",
  },
  {
    q: "Зачем мне маркетплейс WAVE, если есть Avito?",
    a: "В WAVE продавец — живой профиль с постами, Stories и отзывами. Умный AI-поиск понимает запросы на естественном языке, а сделки проходят без выхода из приложения.",
  },
  {
    q: "Приложение действительно бесплатное?",
    a: "Да. Все ключевые функции доступны без подписки и без рекламы в личных переписках.",
  },
  {
    q: "Что с безопасностью данных?",
    a: "Сквозное шифрование сообщений, серверы в России, соответствие 152-ФЗ и AI-модерация объявлений.",
  },
  {
    q: "На каких технологиях построено приложение?",
    a: "Мобильные клиенты на Flutter, веб на React и TypeScript, бэкенд на Lovable Cloud (PostgreSQL и Supabase), AI на Google Gemini и OpenAI GPT.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-24" style={{ background: "var(--gradient-surface)" }}>
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              FAQ
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Частые вопросы
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqs.map((f) => (
            <Reveal key={f.q}>
              <details
                className="group rounded-2xl border border-border bg-surface p-6 transition hover:border-primary/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  {f.q}
                  <span className="ml-4 grid size-8 shrink-0 place-items-center rounded-full bg-surface-elevated text-muted-foreground transition-transform duration-300 group-open:rotate-180">
                    <ChevronDown className="size-4" />
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground/70">
          Компания Meta Platforms Inc. признана в России экстремистской организацией и запрещена.
          Принадлежащие ей соцсети Фейсбук и Инстаграм в России запрещены.
        </p>
      </div>
    </section>
  );
}

/* ── CTA ─────────────────────────────────────────────────── */

export function CTA() {
  return (
    <section className="px-6 py-24">
      <Reveal>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
            Скачайте WAVE
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            >
              прямо сейчас
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
            Хватит переключаться между десятком приложений. Получите всё необходимое для жизни в
            смартфоне в одном месте.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <StoreButton icon={<Apple className="size-5" />} label="App Store" />
            <StoreButton icon={<Play className="size-5" />} label="Google Play" primary />
            <StoreButton icon={<Download className="size-5" />} label="APK" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────────── */

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div>
          <span className="text-lg font-semibold text-foreground">WAVE</span>
          <p className="mt-2 text-sm text-muted-foreground">
            Суперапп для общения, покупок и сервисов.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Продукт</h4>
          <nav className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="#features" className="transition hover:text-foreground">Возможности</a>
            <a href="#compare" className="transition hover:text-foreground">Сравнение</a>
            <a href="#ai" className="transition hover:text-foreground">AI</a>
            <a href="#tech" className="transition hover:text-foreground">Технологии</a>
          </nav>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Компания</h4>
          <nav className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="#" className="transition hover:text-foreground">О нас</a>
            <a href="#" className="transition hover:text-foreground">Контакты</a>
            <a href="#" className="transition hover:text-foreground">Поддержка</a>
          </nav>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Скачать</h4>
          <nav className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="#" className="transition hover:text-foreground">App Store</a>
            <a href="#" className="transition hover:text-foreground">Google Play</a>
            <a href="#" className="transition hover:text-foreground">APK для Android</a>
          </nav>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
        <span>© 2026 WAVE. Все права защищены.</span>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a href="/privacy" className="transition hover:text-foreground">Конфиденциальность</a>
          <a href="/data-policy" className="transition hover:text-foreground">Положение об обработке ПДн</a>
          <a href="#" className="transition hover:text-foreground">Условия</a>
        </div>
      </div>
    </footer>
  );
}
