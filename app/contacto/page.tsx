import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main className="pt-20 pb-20 md:pb-0">
        {/* Split Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100dvh-5rem)]">
          {/* Left Panel - Info */}
          <div className="bg-secondary-container diagonal-pattern flex flex-col justify-center px-8 md:px-16 py-16">
            <span className="font-label text-xs tracking-widest uppercase font-bold text-on-secondary-container/70 mb-4">
              Hablemos de negocios
            </span>
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-6">
              ¿Listo para impulsar tu changarro?
            </h1>
            <p className="font-body text-on-secondary-container/80 text-lg leading-relaxed mb-10 max-w-lg">
              Platícanos tu idea y juntos la convertimos en una estrategia
              digital que conecte con tu gente. Sin compromiso, sin letra
              chiquita.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-4 mb-10">
              <a
                href="mailto:hola@maschangarros.com"
                className="flex items-center gap-3 text-on-secondary-container hover:opacity-80 transition-opacity"
              >
                <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary text-lg">
                    mail
                  </span>
                </span>
                <span className="font-body font-medium">
                  hola@maschangarros.com
                </span>
              </a>

              <a
                href="tel:+528119915892"
                className="flex items-center gap-3 text-on-secondary-container hover:opacity-80 transition-opacity"
              >
                <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary text-lg">
                    call
                  </span>
                </span>
                <span className="font-body font-medium">
                  811 991 5892
                </span>
              </a>

              <a
                href="https://wa.me/528119915892"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-on-secondary-container hover:opacity-80 transition-opacity"
              >
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <span className="material-symbols-outlined text-white text-lg">
                    chat
                  </span>
                </span>
                <span className="font-body font-medium">WhatsApp</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {["public", "group", "campaign", "tag"].map((icon) => (
                <div
                  key={icon}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-on-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">
                    {icon}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="bg-surface-container-low flex items-center justify-center px-6 md:px-12 py-16">
            <div className="w-full max-w-lg bg-white rounded-[2rem] shadow-xl p-8 md:p-10">
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-2">
                Cuéntanos tu proyecto
              </h2>
              <p className="font-body text-on-surface-variant text-sm mb-8">
                Llena el formulario y te respondemos en menos de 24 hrs.
              </p>

              <form className="flex flex-col gap-5">
                {/* Nombre */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="nombre"
                    className="font-label text-xs tracking-wider uppercase font-bold text-on-surface-variant"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Tu nombre completo"
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface font-body placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="font-label text-xs tracking-wider uppercase font-bold text-on-surface-variant"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface font-body placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Teléfono */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="telefono"
                    className="font-label text-xs tracking-wider uppercase font-bold text-on-surface-variant"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    placeholder="+52 55 0000 0000"
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface font-body placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Servicio */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="servicio"
                    className="font-label text-xs tracking-wider uppercase font-bold text-on-surface-variant"
                  >
                    Servicio
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                  >
                    <option value="" disabled>
                      Selecciona un servicio
                    </option>
                    <option value="redes-sociales">Redes Sociales</option>
                    <option value="diseno-web">Diseño Web</option>
                    <option value="branding-integral">Branding Integral</option>
                    <option value="seo-local">SEO Local</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="mensaje"
                    className="font-label text-xs tracking-wider uppercase font-bold text-on-surface-variant"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface font-body placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-primary hover:opacity-90 text-on-primary py-3.5 rounded-xl font-bold font-headline text-lg transition-all active:scale-[0.98] shadow-lg shadow-primary/20 mt-2"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* WhatsApp FAB */}
        <a
          href="https://wa.me/528119915892"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-40 group"
          aria-label="Hablemos por WhatsApp"
        >
          <span className="absolute inset-0 rounded-full animate-pulse opacity-50" style={{ backgroundColor: "#25D366" }} />
          <span
            className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            style={{ backgroundColor: "#25D366" }}
          >
            <span className="material-symbols-outlined text-white text-2xl">
              chat
            </span>
          </span>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-inverse-surface text-inverse-on-surface text-sm font-body font-medium px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            ¡Hablemos por WhatsApp!
          </span>
        </a>
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
