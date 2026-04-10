import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BottomNav from "@/app/components/BottomNav";

const stats = [
  { value: "+120", label: "Changarros impulsados" },
  { value: "5", label: "Años de experiencia" },
  { value: "+200", label: "Campañas lanzadas" },
  { value: "98%", label: "Clientes satisfechos" },
];

const services = [
  {
    icon: "share",
    title: "Redes Sociales",
    description:
      "Creamos contenido que conecta con tu comunidad y hace crecer tu presencia en redes.",
  },
  {
    icon: "web",
    title: "Diseño Web",
    description:
      "Sitios web modernos, rápidos y optimizados que convierten visitantes en clientes.",
  },
  {
    icon: "campaign",
    title: "Publicidad Digital",
    description:
      "Campañas estratégicas en Google y redes sociales para maximizar tu inversión.",
  },
  {
    icon: "brush",
    title: "Branding",
    description:
      "Identidad visual única que refleja la esencia de tu negocio y te diferencia.",
  },
  {
    icon: "search_insights",
    title: "SEO",
    description:
      "Posicionamos tu negocio en los primeros resultados de búsqueda de Google.",
  },
  {
    icon: "analytics",
    title: "Analítica Web",
    description:
      "Datos claros y accionables para tomar mejores decisiones de negocio.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-20 pb-20 md:pb-0">
        {/* Hero Section */}
        <section className="relative bg-secondary-container pattern-bg overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full font-label text-sm font-bold tracking-wide mb-6">
                <span className="material-symbols-outlined text-base">
                  auto_awesome
                </span>
                Agencia Creativa Digital
              </span>

              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight mb-6">
                Tu negocio merece brillar en digital
              </h1>

              <p className="font-body text-on-secondary-container/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                Transformamos el espíritu del comercio local en estrategias
                digitales imparables. Hacemos que tu changarro destaque.
              </p>

              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-3.5 rounded-xl font-bold text-lg transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-primary/25"
              >
                Conoce nuestros servicios
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            {/* Decorative icon */}
            <span className="material-symbols-outlined absolute right-8 bottom-8 md:right-16 md:bottom-16 text-primary/10 text-[120px] md:text-[200px] select-none pointer-events-none">
              auto_awesome
            </span>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="font-label text-sm text-on-surface-variant font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-surface py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mb-4">
                Nuestros servicios
              </h2>
              <p className="font-body text-on-surface-variant text-lg max-w-xl mx-auto">
                Todo lo que tu negocio necesita para dominar el mundo digital.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-outline-variant/20"
                >
                  <div className="w-12 h-12 bg-secondary-container/20 rounded-xl flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-2xl text-primary">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Purple CTA Banner */}
        <section className="px-6 py-8 md:py-16">
          <div className="relative max-w-7xl mx-auto bg-primary-container rounded-[2rem] overflow-hidden px-8 py-14 md:px-16 md:py-20 text-center">
            {/* Decorative circles */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-on-primary-container/10 rounded-full pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-on-primary-container/10 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-on-primary-container/5 rounded-full pointer-events-none hidden md:block" />

            <div className="relative z-10">
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-primary-container mb-6 max-w-2xl mx-auto leading-tight">
                ¿Listo para hacer crecer tu changarro?
              </h2>
              <p className="font-body text-on-primary-container/80 text-lg md:text-xl mb-10 max-w-lg mx-auto leading-relaxed">
                Platiquemos sobre cómo llevar tu negocio al siguiente nivel
                digital. Sin compromiso.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 border-2 border-on-primary-container text-on-primary-container px-8 py-3.5 rounded-xl font-bold text-lg transition-all hover:bg-on-primary-container/10 active:scale-95"
              >
                Hablemos
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </>
  );
}
