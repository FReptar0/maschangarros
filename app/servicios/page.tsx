import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BottomNav from "@/app/components/BottomNav";

const services = [
  {
    icon: "share",
    title: "Redes Sociales",
    description:
      "Creamos contenido que conecta con tu audiencia y genera resultados reales. Estrategias personalizadas para cada plataforma que impulsan el crecimiento de tu marca.",
    checks: ["Estrategia mensual", "Gesti\u00f3n de comunidad", "Reporte de m\u00e9tricas"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDjMeZaLyvUIrZMnpPp6IDBj1pKvjf9Mj47bMFCGHGOmk7d10aJAvkBRA0QOYC-2XFskGywXWXzB8zDIWkbRb_AmQpBx8AdR5sORfTW2hIpBAwnY2gAV7Jb-wTRdVGKKW9Jfj2rDLjJlapFVwcbOwgjW95FBk0E7plnbCO0jucyfo9yKHHaknqOcPfJaizm6en-anrOXCc6GUkSk4t1wD2ZzlI3Vq84rtb0S_IRoioxBXpIcG1RqWLZedUpm1dAhmiM4EOoWfsHOM",
    reversed: false,
  },
  {
    icon: "language",
    title: "Web & E-commerce",
    description:
      "Dise\u00f1amos y desarrollamos sitios web y tiendas en l\u00ednea que convierten visitantes en clientes. Experiencias digitales r\u00e1pidas, modernas y optimizadas para vender.",
    checks: ["UX/UI", "Pasarelas de pago", "Mantenimiento"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIyOnQZNO533CJ_BO3zbB1rByInTdtiX3myX4fRmfh6AZ7UkLU7HTSvrAUcztzefzONRPQh9ylaHU6TcOkfwXr_mDa7nJiKhUR4uzEuiwDLkyBXQ4eVvA9iPw5QkBjDp92mCcC61iXYZMm-8pFjNKhNPCZZHtiGr--SVtSbk-i-AlX6aeU4Gy84G7V6k2tZN76wkMpeXKQcaW8rdIJYOSMxXpSSatC4tXlp-x_320mjCMw6G7boxuGSEuBgz0R-mB07DpoB3yD8io",
    reversed: true,
  },
];

const bentoCards = [
  {
    icon: "brush",
    title: "Branding",
    description:
      "Identidad visual que destaca. Logos, paletas de color, tipograf\u00eda y gu\u00edas de marca que comunican la esencia de tu negocio.",
  },
  {
    icon: "campaign",
    title: "Publicidad",
    description:
      "Campa\u00f1as de anuncios en Meta, Google y TikTok que maximizan tu retorno de inversi\u00f3n con segmentaci\u00f3n precisa.",
  },
  {
    icon: "search",
    title: "SEO",
    description:
      "Posicionamiento org\u00e1nico en buscadores para que tus clientes te encuentren primero. Auditor\u00edas, keywords y contenido optimizado.",
  },
  {
    icon: "insights",
    title: "Anal\u00edtica",
    description:
      "Dashboards y reportes claros para tomar decisiones basadas en datos. Tracking, KPIs y optimizaci\u00f3n continua.",
  },
];

const processSteps = [
  { number: 1, title: "Diagn\u00f3stico" },
  { number: 2, title: "Estrategia" },
  { number: 3, title: "Ejecuci\u00f3n" },
  { number: 4, title: "Resultados" },
];

const plans = [
  {
    name: "B\u00e1sico",
    price: "$5,900",
    period: "/mes",
    popular: false,
    features: ["8 posts mensuales", "1 red social", "Reporte b\u00e1sico"],
  },
  {
    name: "Profesional",
    price: "$12,500",
    period: "/mes",
    popular: true,
    features: [
      "15 posts + 4 reels",
      "3 redes sociales",
      "Campa\u00f1a de ads",
      "Atenci\u00f3n premium",
    ],
  },
  {
    name: "Premium",
    price: "$22,000",
    period: "/mes",
    popular: false,
    features: ["Contenido ilimitado", "Web profesional", "SEO avanzada"],
  },
];

const faqs = [
  {
    question: "\u00bfCu\u00e1nto tiempo tardan en entregar un sitio web?",
    answer:
      "Dependiendo de la complejidad del proyecto, el tiempo de entrega es de 15 a 25 d\u00edas h\u00e1biles. Esto incluye dise\u00f1o, desarrollo, revisiones y lanzamiento.",
  },
  {
    question: "\u00bfIncluyen la inversi\u00f3n de anuncios?",
    answer:
      "No, la inversi\u00f3n en anuncios es independiente de nuestros honorarios de gesti\u00f3n. T\u00fa controlas el presupuesto de pauta directamente desde tu cuenta publicitaria.",
  },
  {
    question: "\u00bfTengo contrato de permanencia?",
    answer:
      "El contrato inicial es de 3 meses para poder implementar la estrategia y medir resultados. Despu\u00e9s de ese periodo, el servicio contin\u00faa mes a mes sin penalizaci\u00f3n por cancelaci\u00f3n.",
  },
  {
    question: "\u00bfQu\u00e9 necesito para empezar?",
    answer:
      "Solo necesitas agendar una sesi\u00f3n de diagn\u00f3stico gratuita con nuestro equipo. Ah\u00ed evaluamos tus necesidades, definimos objetivos y te presentamos una propuesta personalizada.",
  },
  {
    question: "\u00bfOfrecen servicios a todo M\u00e9xico?",
    answer:
      "S\u00ed, trabajamos 100% remoto con clientes en toda la Rep\u00fablica Mexicana y Latinoam\u00e9rica. Nuestras herramientas digitales nos permiten colaborar de forma eficiente sin importar la ubicaci\u00f3n.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main className="pt-20 pb-20 md:pb-0">
        {/* ── Page Header ── */}
        <section
          className="vibrant-pattern relative overflow-hidden px-6 py-20 md:py-28"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)",
          }}
        >
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-block bg-primary text-on-primary font-label text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-full mb-6">
              Expertos en Crecimiento
            </span>
            <h1 className="font-headline text-4xl md:text-6xl font-black text-primary mb-4">
              Nuestros Servicios
            </h1>
            <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto">
              Soluciones creativas y estrat\u00e9gicas para llevar tu negocio al
              siguiente nivel. Desde redes sociales hasta desarrollo web,
              hacemos que tu marca destaque.
            </p>
          </div>
        </section>

        {/* ── Service Detail Blocks ── */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col gap-20 md:gap-28">
          {services.map((service) => (
            <div
              key={service.title}
              className={`flex flex-col gap-8 md:gap-12 items-center ${
                service.reversed ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Text side */}
              <div className="flex-1 flex flex-col gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-primary">
                    {service.icon}
                  </span>
                </div>
                <h2 className="font-headline text-3xl md:text-4xl font-black text-on-surface">
                  {service.title}
                </h2>
                <p className="font-body text-on-surface-variant text-base md:text-lg leading-relaxed">
                  {service.description}
                </p>
                <ul className="flex flex-col gap-3">
                  {service.checks.map((check) => (
                    <li
                      key={check}
                      className="flex items-center gap-3 font-body text-on-surface"
                    >
                      <span className="material-symbols-outlined text-primary text-xl">
                        check_circle
                      </span>
                      {check}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contacto"
                  className="mt-2 inline-flex items-center gap-2 bg-primary text-on-primary font-bold px-6 py-3 rounded-xl w-fit transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-primary/20"
                >
                  Cotizar
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </Link>
              </div>

              {/* Image side */}
              <div className="flex-1 w-full">
                <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ── Bento Grid ── */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-center text-on-surface mb-12">
            M\u00e1s Soluciones para tu Negocio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bentoCards.map((card) => (
              <div
                key={card.title}
                className="bg-surface-container-lowest rounded-[32px] p-8 flex flex-col gap-4 transition-transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl text-primary">
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface">
                  {card.title}
                </h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Process Timeline ── */}
        <section className="bg-surface-container-low py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-headline text-3xl md:text-4xl font-black text-center text-on-surface mb-16">
              Nuestro Proceso
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
              {/* Dashed connecting line (visible md+) */}
              <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-primary/30" />

              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex flex-col items-center gap-4 relative z-10"
                >
                  <div className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center text-xl font-black font-headline shadow-lg shadow-primary/30">
                    {step.number}
                  </div>
                  <span className="font-headline font-bold text-on-surface text-center">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-center text-on-surface mb-4">
            Planes y Precios
          </h2>
          <p className="font-body text-on-surface-variant text-center text-lg max-w-xl mx-auto mb-12">
            Elige el plan que mejor se adapte a las necesidades de tu negocio.
            Todos incluyen atenci\u00f3n personalizada.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[32px] p-8 flex flex-col gap-6 transition-transform ${
                  plan.popular
                    ? "bg-surface-container-lowest border-4 border-primary scale-100 md:scale-105 shadow-2xl shadow-primary/15 relative"
                    : "bg-surface-container-lowest border border-outline-variant"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary-container text-on-secondary-container font-label text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    M\u00e1s Popular
                  </span>
                )}
                <div>
                  <h3 className="font-headline text-xl font-bold text-on-surface">
                    {plan.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="font-headline text-4xl font-black text-primary">
                      {plan.price}
                    </span>
                    <span className="font-body text-on-surface-variant text-sm">
                      {plan.period}
                    </span>
                  </div>
                </div>
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 font-body text-on-surface text-sm"
                    >
                      <span className="material-symbols-outlined text-primary text-lg">
                        check
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contacto"
                  className={`text-center font-bold py-3 px-6 rounded-xl transition-all active:scale-95 ${
                    plan.popular
                      ? "bg-primary text-on-primary shadow-lg shadow-primary/20 hover:opacity-90"
                      : "border-2 border-primary text-primary hover:bg-primary/5"
                  }`}
                >
                  Elegir Plan
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ Accordion ── */}
        <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-center text-on-surface mb-12">
            Preguntas Frecuentes
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-headline font-bold text-on-surface list-none [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180 shrink-0">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
