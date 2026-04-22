import { Link } from "@tanstack/react-router";
import {
  Apple,
  Play,
  Download,
  ShieldCheck,
  PhoneCall,
  MessageCircle,
  Zap,
  ShoppingBag,
  Home,
  Umbrella,
  Sparkles,
  Film,
  Image as ImageIcon,
  Search,
  Bot,
  Lock,
  Server,
  Code2,
  Cloud,
  Check,
  X,
} from "lucide-react";
import phoneHero from "@/assets/phone-hero.png";

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 mx-auto w-[min(1200px,calc(100%-2rem))]">
      <nav className="flex items-center justify-between rounded-full border border-border bg-surface/70 px-4 py-3 backdrop-blur-xl md:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="На главную">
          <span className="text-lg font-semibold tracking-tight">WAVE</span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition hover:text-foreground">Возможности</a>
          <a href="#compare" className="transition hover:text-foreground">Сравнение</a>
          <a href="#ai" className="transition hover:text-foreground">AI</a>
          <a href="#tech" className="transition hover:text-foreground">Технологии</a>
          <a href="#faq" className="transition hover:text-foreground">FAQ</a>
        </div>
        <a
          href="#download"
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
        >
          Скачать
        </a>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-24 md:pt-36 md:pb-32">
      <div
        className="absolute inset-0 -z-10 blur-3xl"
        style={{ background: "var(--gradient-brand)", opacity: 0.15 }}
      />
      <div className="mx-auto max-w-3xl text-center">
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
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Общение, маркетплейс с AI-поиском, недвижимость и страхование — в одном приложении.
          Без переключений между десятком сервисов.
        </p>

        <div id="download" className="mt-8 flex flex-wrap justify-center gap-3">
          <StoreButton icon={<Apple className="size-5" />} label="App Store" />
          <StoreButton icon={<Play className="size-5" />} label="Google Play" />
          <StoreButton icon={<Download className="size-5" />} label="APK для Android" />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
          <span>Без подписок</span>
          <span>Без рекламы в чатах</span>
          <span>Серверы в России</span>
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
    title: "Мессенджер",
    text: "Личные чаты, группы до 1000 человек, публичные каналы, голосовые и видеосообщения, реакции и поиск по переписке.",
  },
  {
    icon: PhoneCall,
    title: "Звонки",
    text: "HD видеозвонки через WebRTC, групповые аудиоконференции, звонки на обычные номера через SIP.",
  },
  {
    icon: ImageIcon,
    title: "Лента и Stories",
    text: "Посты с фото и видео, карусели, упоминания, хэштеги, комментарии и исчезающие истории на 24 часа.",
  },
  {
    icon: Film,
    title: "Reels",
    text: "Вертикальные короткие видео, встроенный редактор, музыка, эффекты и бесконечная лента рекомендаций.",
  },
  {
    icon: ShoppingBag,
    title: "Маркетплейс с AI",
    text: "Создание объявлений за 30 секунд, умный поиск нейросетью, чат и видеозвонок с продавцом, отзывы и рейтинги.",
  },
  {
    icon: Home,
    title: "Недвижимость",
    text: "Поиск квартир на продажу и в аренду, ипотечный калькулятор, фильтры по районам и AI-консультант.",
  },
  {
    icon: Umbrella,
    title: "Страхование",
    text: "ОСАГО, КАСКО, ДМС и страхование имущества. Онлайн-расчёт за две минуты, оформление без визита в офис.",
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

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-primary/40"
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
          ))}
        </div>
      </div>
    </section>
  );
}

const comparisons = [
  {
    title: "WAVE против Telegram и WhatsApp",
    text: "Классические мессенджеры дают только переписку. WAVE объединяет общение с маркетплейсом, лентой и сервисами — не нужно выходить из приложения, чтобы купить товар или оформить страховку.",
  },
  {
    title: "WAVE против Avito и Юлы",
    text: "Доски объявлений не имеют полноценного чата, звонков и профиля продавца. В WAVE продавец — это аккаунт с постами, отзывами, рейтингом и прямой видеосвязью.",
  },
  {
    title: "WAVE против Instagram и TikTok",
    text: "Соцсети дают только контент. WAVE объединяет развлекательную ленту Reels и Stories с реальными сервисами: покупки, страхование, недвижимость.",
  },
  {
    title: "WAVE против госсервисов и банковских приложений",
    text: "Сухие интерфейсы без живого общения. WAVE даёт тот же функционал — страховки, недвижимость, AI-консультант — в дружелюбной экосистеме.",
  },
];

export function Compare() {
  return (
    <section id="compare" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Почему WAVE
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Сравнение <span className="text-muted-foreground">с конкурентами</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {comparisons.map((c) => (
            <article
              key={c.title}
              className="rounded-3xl border border-border bg-surface p-8"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-muted-foreground">{c.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-surface">
          <div className="grid grid-cols-4 border-b border-border bg-surface-elevated/50 text-sm font-medium">
            <div className="p-4">Функция</div>
            <div className="p-4 text-center">WAVE</div>
            <div className="p-4 text-center text-muted-foreground">Мессенджеры</div>
            <div className="p-4 text-center text-muted-foreground">Маркетплейсы</div>
          </div>
          {[
            ["Чаты и звонки HD", true, true, false],
            ["Маркетплейс с AI-поиском", true, false, true],
            ["Недвижимость и ипотека", true, false, false],
            ["Страхование онлайн", true, false, false],
            ["Лента, Stories и Reels", true, false, false],
            ["AI-ассистент", true, false, false],
          ].map((row, i) => (
            <div
              key={i as number}
              className="grid grid-cols-4 border-b border-border text-sm last:border-0"
            >
              <div className="p-4">{row[0] as string}</div>
              <div className="grid place-items-center p-4">
                {row[1] ? <Check className="size-5 text-primary" /> : <X className="size-5 text-muted-foreground/50" />}
              </div>
              <div className="grid place-items-center p-4">
                {row[2] ? <Check className="size-5 text-muted-foreground" /> : <X className="size-5 text-muted-foreground/50" />}
              </div>
              <div className="grid place-items-center p-4">
                {row[3] ? <Check className="size-5 text-muted-foreground" /> : <X className="size-5 text-muted-foreground/50" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const aiBlocks = [
  {
    icon: Search,
    title: "Умный поиск на маркетплейсе",
    text: "Нейросеть понимает запросы на естественном языке. «Найди недорогой iPhone в Москве не старше двух лет» — и вы получаете точные результаты с автоматической фильтрацией по смыслу.",
  },
  {
    icon: Umbrella,
    title: "AI-ассистент по страхованию",
    text: "Подбирает оптимальный полис ОСАГО или КАСКО, объясняет сложные термины простым языком и сравнивает предложения страховых компаний.",
  },
  {
    icon: Home,
    title: "AI-помощник по недвижимости",
    text: "Помогает выбрать квартиру по параметрам, рассчитывает ипотеку, подсказывает районы и анализирует цены рынка в реальном времени.",
  },
  {
    icon: ShieldCheck,
    title: "Автомодерация объявлений",
    text: "Нейросеть проверяет публикации до выхода в ленту, отсекает мошенников, спам и запрещённый контент.",
  },
];

export function AISection() {
  return (
    <section id="ai" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" />
            Искусственный интеллект
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Нейросети <span className="text-muted-foreground">встроены в ключевые сценарии</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Мы используем Google Gemini и OpenAI GPT через AI Gateway, чтобы поиск, ассистенты и
            модерация работали быстрее и точнее.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {aiBlocks.map((b) => (
            <article
              key={b.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-8 transition hover:border-primary/40"
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
          ))}
        </div>
      </div>
    </section>
  );
}

const techStack = [
  { icon: Code2, title: "Flutter", text: "Нативная производительность 60–120 FPS на iOS и Android из единой кодовой базы." },
  { icon: Code2, title: "React + TypeScript", text: "Веб-версия в любом браузере без установки и синхронизация со смартфоном." },
  { icon: Cloud, title: "Lovable Cloud", text: "Надёжный бэкенд: PostgreSQL, Realtime, защищённое хранилище и Row-Level Security." },
  { icon: Bot, title: "AI Gateway", text: "Google Gemini и OpenAI GPT для поиска, ассистентов и автоматической модерации." },
  { icon: PhoneCall, title: "WebRTC и SIP", text: "HD видео и аудио с минимальной задержкой, поддержка звонков на обычные телефоны." },
  { icon: Server, title: "Серверы в России", text: "Соответствие 152-ФЗ, минимальный пинг и стабильность при любой нагрузке." },
];

export function TechStack() {
  return (
    <section id="tech" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Технологии
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Современный стек <span className="text-muted-foreground">для скорости и безопасности</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((t) => (
            <article
              key={t.title}
              className="rounded-3xl border border-border bg-surface p-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="grid size-10 place-items-center rounded-xl bg-surface-elevated text-primary">
                <t.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const securityItems = [
  { icon: Lock, title: "End-to-end шифрование", text: "Сообщения и звонки защищены современной криптографией." },
  { icon: ShieldCheck, title: "Защита от спама и фишинга", text: "AI-модерация в реальном времени блокирует подозрительный контент." },
  { icon: Server, title: "Серверы в России", text: "Соответствие 152-ФЗ, данные не покидают территорию страны." },
  { icon: Check, title: "Верификация продавцов", text: "Безопасные сделки на маркетплейсе и проверенные профили." },
];

export function Security() {
  return (
    <section className="px-6 py-24">
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
    </section>
  );
}

const faqs = [
  {
    q: "WAVE — это очередной клон Telegram?",
    a: "Нет. Telegram остаётся мессенджером. WAVE — это суперапп: общение, маркетплейс с AI-поиском, лента, страхование и недвижимость в одном приложении.",
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
    <section id="faq" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Частые вопросы
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-surface p-6 transition hover:border-primary/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                {f.q}
                <span className="ml-4 grid size-8 place-items-center rounded-full bg-surface-elevated text-muted-foreground transition group-open:rotate-45">
                  <Zap className="size-4" />
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground">{f.a}</p>
            </details>
          ))}
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
          <StoreButton icon={<Play className="size-5" />} label="Google Play" />
          <StoreButton icon={<Download className="size-5" />} label="APK для Android" />
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
          <span className="font-semibold text-foreground">WAVE</span>
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
