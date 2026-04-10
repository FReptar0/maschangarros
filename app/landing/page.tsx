import Image from "next/image";
import Footer from "../components/Footer";

const clientLogos = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBAAWH3vB2PmeuzmeTygZdUaFegBzsgXejqmSmNTdgDaCgT_nJAXGgHQCfoPp60cU2X1k5kRuB0OLw8Wiquh759S0FY4YmtvH4K4Yjo9_cLpJoSfW-gSZxd5puMxbEdrGZ0B9pAaQRsxN1ORoj0Dd51U6m-Zg1cH9Svj4fl6ppAJowL61DLdy5O9Di6RtTvv_qFM_U0IZcjm0RBBLot4ZIMxfgOkp8wk2wfBnw_RGAEu8iv_LW__5swV3XVLQsZDLjF1FYRLv13gHc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA5kdDLWPlB3xZ5bYv7As8mdfgxgz7SVeuXdjHPBEE7enSktqRStEAnvQMKgRfHyL-DTLBOv4qPTiTx5LERp_1WewWC5MZa98lV11cT4HfomUxLv06-1-_sucF3CdQwAMY8Pf0tDgHP02b0aLecxec4eCJGJ779HONvjoYOHBBXgEjrHQKCrCOueWoxoWtLB1A9LtfEqypwSWSQ4YJcg_q5QjsG1HYeRQ7_MucHp_1KQ_A0C8AjlSpX0YgNB9k9_zUzfmuFbnu3Hlw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDstp1wWj6kfGd5bnF9oqBJQLDnQZPHvIFWAX3MQKCvIoWGzFwhgYwj4I3KQokX_fD3o99d49oa-Dh98QqA3t4QbOPYVdpFDFG3BnWETAATj9CLussVPWr17Q8QxqaSocYkKsMrfIgp9pntVQCDPn6YattlKM4qwTlK3UpYcWwnDitQ96wnbjuVNHzxyWAY8-ywFoJyIVJ8p8CyZw5HWC3nE5p3yyaBU5JMT-UI1eXgJZHQbWRdSS3fTF6Rl9c_LjVIJjgbVKBflk4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCKOglGXPZwY98ApVsM9PvkbUY7NPvD5U36L9VKMzs8SqG9mTmWGjqIO-z4budeYLpymQxqrMznq4mEcbJ08dvK8wcXlA5-USU_iTJoWb9-34tMLA-CDWR7SKojkkGv3RS5ZHUuV4s1B0FPu_lUDMBifzXjnwMAmuOvYa9Ok9zSC3KJBVIFCcm1l2N2ETyVGlVeFDJdqaYp5MRdAXLN1nFE3oFjmehWI3BuFvd2Jkh-pfS1nUoICB93F9jWGhrO85XpR4mwYmMR1VI",
];

export default function LandingPage() {
  return (
    <>
      {/* Minimal Header */}
      <header className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md shadow-sm">
        <div className="flex justify-center items-center px-6 py-4 max-w-7xl mx-auto">
          <span className="text-2xl font-black tracking-tighter text-primary font-headline">
            +CHANGARROS
          </span>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-secondary-container relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Hero Text */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
              <span className="inline-block bg-primary text-on-primary font-label text-xs tracking-widest uppercase font-bold px-4 py-1.5 rounded-full">
                Estrategia Digital
              </span>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold italic leading-tight text-on-secondary-container">
                Haz que tu negocio destaque en redes sociales
              </h1>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm text-on-secondary-container font-label text-sm font-semibold px-4 py-2 rounded-full">
                  <span className="material-symbols-outlined text-lg">star</span>
                  Estrategia Ganadora
                </span>
                <span className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm text-on-secondary-container font-label text-sm font-semibold px-4 py-2 rounded-full">
                  <span className="material-symbols-outlined text-lg">rocket_launch</span>
                  Contenido Viral
                </span>
                <span className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm text-on-secondary-container font-label text-sm font-semibold px-4 py-2 rounded-full">
                  <span className="material-symbols-outlined text-lg">trending_up</span>
                  Ventas Reales
                </span>
              </div>
            </div>

            {/* Lead Capture Form */}
            <div className="w-full max-w-md lg:max-w-lg flex-shrink-0">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
                <h2 className="font-headline text-xl font-bold text-on-surface mb-1 text-center">
                  Recibe tu diagnóstico gratis
                </h2>
                <p className="font-body text-sm text-on-surface-variant mb-6 text-center">
                  Descubre cómo mejorar tu presencia digital
                </p>
                <form className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="nombre" className="font-label text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-1 block">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre completo"
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="font-label text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-1 block">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      placeholder="+52 000 000 0000"
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="negocio" className="font-label text-xs uppercase tracking-wider font-semibold text-on-surface-variant mb-1 block">
                      Tipo de negocio
                    </label>
                    <select
                      id="negocio"
                      name="negocio"
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                    >
                      <option value="" disabled selected>
                        Selecciona una opción
                      </option>
                      <option value="restaurante">Restaurante/Comida</option>
                      <option value="servicios">Servicios Profesionales</option>
                      <option value="ecommerce">E-commerce/Tienda</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:opacity-90 text-on-primary font-bold py-3.5 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-primary/20 text-base mt-2"
                  >
                    Quiero mi diagnóstico gratis
                  </button>
                </form>
                <p className="font-label text-[11px] text-on-surface-variant text-center mt-4 flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  Tus datos están seguros y no serán compartidos
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Bar */}
        <section className="bg-surface-container py-10 md:py-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
            <p className="font-label text-sm uppercase tracking-widest font-bold text-on-surface-variant text-center">
              Más de 120 negocios ya confían en nosotros
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {clientLogos.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Cliente ${i + 1}`}
                  width={120}
                  height={48}
                  className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Row */}
        <section className="py-16 md:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Card: Más clientes */}
              <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center gap-4 shadow-sm hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-on-secondary-container">groups</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface">Más clientes</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Atrae a tu público ideal con estrategias de contenido que conectan y convierten visitantes en clientes fieles.
                </p>
              </div>

              {/* Card: Más visibilidad */}
              <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center gap-4 shadow-sm hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-on-secondary-container">visibility</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface">Más visibilidad</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Posiciona tu marca en las redes sociales más relevantes y llega a miles de personas en tu zona.
                </p>
              </div>

              {/* Card: Más ventas */}
              <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center gap-4 shadow-sm hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-on-secondary-container">payments</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface">Más ventas</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Convierte tu presencia digital en resultados reales con embudos de venta optimizados para tu negocio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Urgency Section */}
        <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 pattern-overlay opacity-30" />
          <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-8 relative z-10">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-extrabold italic text-on-primary leading-tight">
              Solo 5 diagnósticos gratuitos este mes
            </h2>
            <p className="font-body text-base md:text-lg text-on-primary/80 max-w-xl leading-relaxed">
              No dejes pasar esta oportunidad. Agenda tu diagnóstico gratuito antes de que se agoten los lugares disponibles.
            </p>

            {/* Countdown Timer */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex flex-col items-center gap-1">
                <span className="text-4xl md:text-5xl font-headline font-extrabold text-on-primary">02</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-primary/70">días</span>
              </div>
              <span className="text-4xl md:text-5xl font-headline font-extrabold text-on-primary/50">:</span>
              <div className="flex flex-col items-center gap-1">
                <span className="text-4xl md:text-5xl font-headline font-extrabold text-on-primary">14</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-primary/70">horas</span>
              </div>
              <span className="text-4xl md:text-5xl font-headline font-extrabold text-on-primary/50">:</span>
              <div className="flex flex-col items-center gap-1">
                <span className="text-4xl md:text-5xl font-headline font-extrabold text-on-primary">45</span>
                <span className="font-label text-xs uppercase tracking-widest text-on-primary/70">mins</span>
              </div>
            </div>

            <a
              href="#"
              className="inline-block bg-secondary-container hover:opacity-90 text-on-secondary-container font-bold py-4 px-10 rounded-xl transition-all active:scale-[0.98] shadow-lg text-lg"
            >
              Quiero mi diagnóstico gratis
            </a>
            <p className="font-label text-sm text-on-primary/70 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">lock</span>
              Información 100% segura
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
