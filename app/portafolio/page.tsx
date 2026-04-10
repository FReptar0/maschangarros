import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";

const categories = [
  "Todos",
  "Redes Sociales",
  "Diseño Web",
  "Branding",
  "Publicidad",
];

const projects = [
  {
    name: "Café de la Terraza",
    category: "Redes Sociales",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0ENaCl2NWEGgRAGIsPLSa9FhzuF1f_lZHUTsx0hIi2vVg-xftnFHdNJB4YMEWvPHW2YkiAN2smPbqTjnovfDmznmlXlNxQoH62DEaXVvJDMDVnSdigsBDvYav3t-t9bbwq1DUtUIbO1apW10vM9hFA1cZpwI2cSlKEkZpqwB2HGI7HLZnxKu2zgMdvLQxpScbtbobVIQqjBAjkvOVxrxobxHZOtNjlExKkDa64Df-X7MA7scIJkuf4HGTLUrsLrNlQREq5pm4rbg",
  },
  {
    name: "Tienda de Artesanías",
    category: "Diseño Web",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBaCRB20mmhkVptPOHO6T-JK9_SvTps1cRLwaDJEJ_oJItfjNFaxzBZMAMLHG5CVrv1CAiyYPpd_kjqqZYxEKkytpLEokW3GJj0fTt8l-Pv_sEFKhPKN4aftsxz7rb6-JFG6Likwwf3ldO8PO1CbahE0Ki6l4Sfh522Fhd7jvL4N-iYmzYBO-I_lnGGTogN7ZDtZSybcTyImBPokKU3Z2fWa7MhW49-DL1BWu2J_inzDXhEzglJEu_lzDkV2Cuhrhd8IafVdqMHJ9Q",
  },
  {
    name: "Boutique Elegancia",
    category: "Publicidad",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAUMMgCw4_6Dn964OILwabVxl714oRHVX3UcsMmPCU6wgi7j5Di1uNzQHEXoMpKorVf-CNszGsTN_Qnjwz8lhM0_-pZfjAAPshCxItlfX0sitlHLN2NbNxj8vLR4Tf2mV5eeCekZW9JjhcpqOEBS1xEE8v8-SMhNZ6v-fcnqkmfdcOLULiuhhhHab53pRKA53AGE9cqS8oaW_KQTvavyPrCYBX8b-IJ0GmjDt-kB62RtaQdfJcMm0CICv-IVpwkV8cMs87wYP_Aa4",
  },
  {
    name: "Frutería El Mercado",
    category: "Branding",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvgDhXVK8dLMJrv4ERlpssnFWYgN3IeeOQMybyhymq69kSpWhEwkPJ65aQJX76vP8p3bErJrLNpAFm7O8ya171AG-E1glNGTndKXB9qVX0Gl-aYIfMijjxA-5CNoKV-J3I5yAh8sm1TbYsnFmVYTub2Wyb_A4azhLkqg6wPwgnC4uODBbg7f1cLDXRc5rJpJKgcPngtcsEpCwoh3Tlt5-Oom2iHRnJHUVQhAPd4FEtKjyLRFSCQC8-HJgwR-LBr4dGEBlqtUOmzwY",
  },
  {
    name: "Mandaditos Express",
    category: "Diseño Web",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBM15hHLzu-C5Rm_sxxC59hMMaXVEcA9I6M37lqeE0kswj-zM25FFMYwcHpLKukD5mbjNCBW2pb6otODggFAoGICxGyzhdNEF-Ee52enXs1VB4NzEQz9hlr_Jk56tXcq6dHfV2y-tDyHY7sVDSMZVaB6hwsbsvv2cV9AQNsE-JwXR-MXSzbT7hGFKmmsShUngdOIYlq6mpeELlkfuMbeMobQOGjz0KpTr9dXm_14Mniq0sQ4jm8Qm1ERbGf1kg0I-_YFlvf-vo-OuE",
  },
  {
    name: "Mueblería La Estancia",
    category: "Redes Sociales",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPAbRk3TZfKkEuRXyXvM2Z48lhmFSJGnTbpKaX2ZF_vOqOlQB2aV8KwI4B6bg7Mdg3IAOaaSuiXJ3QQ1D7MCElSGW9TKh6a0kWof5vz7mBxgAtMaCSSKtcAlJaF1sFoNSHWr9Aw_99ohLFGORm_ch_MX4L4uiQMLHbnGt8mxLMvFUiCvK7kcwWdn9AdJVYbZCe09K-5UVLG21h-C0MnO0Fj1hEPkzMkdVzFlVmyFJrYEtndXX2Stnni45k8R6EE0AgsqqXDMypXFc",
  },
];

const testimonials = [
  {
    quote:
      "Desde que +CHANGARROS maneja nuestras redes, las ventas del fin de semana se triplicaron. Son creativos y entienden al cliente local.",
    name: "María García",
    company: "Café de la Terraza",
  },
  {
    quote:
      "Nos diseñaron una página web increíble que refleja nuestra esencia artesanal. Los clientes nos encuentran fácil y las consultas aumentaron un 200%.",
    name: "Roberto Sánchez",
    company: "Tienda de Artesanías",
  },
  {
    quote:
      "La campaña de publicidad que nos hicieron fue un éxito total. Profesionales, puntuales y con ideas frescas que realmente conectan.",
    name: "Ana Martínez",
    company: "Boutique Elegancia",
  },
];

export default function PortafolioPage() {
  return (
    <>
      <Header />
      <main className="pt-20 pb-20 md:pb-0">
        {/* Hero Header */}
        <section className="relative bg-[#F5C543] overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#7B2D8E]/20 rounded-full blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
            <span className="inline-block font-label text-sm font-bold tracking-widest uppercase text-[#7B2D8E]/70 mb-4">
              Portafolio Creativo
            </span>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#7B2D8E] leading-tight max-w-3xl">
              Nuestro trabajo habla por nosotros
            </h1>
            <div className="flex items-center gap-4 mt-6">
              <span className="block w-12 h-1 bg-[#7B2D8E] rounded-full" />
              <p className="font-body text-[#7B2D8E]/80 text-lg max-w-md">
                Estrategia real para negocios locales
              </p>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <div className="sticky top-[72px] z-40 bg-white/90 backdrop-blur-md border-b border-surface-container-high">
          <div className="max-w-7xl mx-auto px-6 flex gap-6 overflow-x-auto scrollbar-none">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`py-4 px-1 font-label text-sm font-bold tracking-wide whitespace-nowrap transition-colors ${
                  i === 0
                    ? "border-b-2 border-primary text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={600}
                    height={450}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block font-label text-xs font-bold tracking-widest uppercase text-primary/70 mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-3">
                    {project.name}
                  </h3>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 font-label text-sm font-bold text-primary hover:gap-2 transition-all"
                  >
                    Ver proyecto
                    <span className="material-symbols-outlined text-lg">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#FFF3C4]">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-[#7B2D8E] text-center mb-12">
              Lo que dicen nuestros clientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-white rounded-2xl p-8 shadow-sm"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[#E8913A]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-body text-on-surface-variant leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-headline font-bold text-on-surface">
                      {t.name}
                    </p>
                    <p className="font-label text-sm text-on-surface-variant">
                      {t.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-[#7B2D8E] rounded-[2rem] px-8 py-16 md:px-16 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white mb-6">
              ¿Quieres resultados así para tu negocio?
            </h2>
            <p className="font-body text-white/80 text-lg max-w-xl mx-auto mb-8">
              Agenda una llamada con nuestro equipo y descubre cómo podemos
              hacer crecer tu negocio local.
            </p>
            <a
              href="/contacto"
              className="inline-block border-2 border-white text-white font-headline font-bold px-8 py-3.5 rounded-xl hover:bg-white hover:text-[#7B2D8E] transition-colors duration-300"
            >
              Agenda una llamada
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
