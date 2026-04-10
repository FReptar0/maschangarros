import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BottomNav from "@/app/components/BottomNav";

const teamAvatars = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfXKWXcJAznbycxmSPwHDk_wg2-O3ysRPpekAUSTMN0TGn2Su5G4UdPq-fDS06j5asC79FdodelBIKHxbctMAkx6drFrBjEjsqfHszqRQZifps_Tumii8byKjv_f8_4Ma5jdTLDU-Rp1bg9xirL9KWiDnHGc3J2HD1FKzeVOFCqwbtpxhd4JHScM3nw2-dIemsJG5ChdAo8ddemhGvoyuN13PBPX8YbTjkGOiE0mnNzwfawwxyAT8bq5QHN5bUGLiIIZqPkAdKA5M",
    alt: "Miembro del equipo 1",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDw05Pxg658QSbYgYW-MFFZ-6aHreZQO7wtJkJUpmR5wQuUPBsvCMCPoFNKWFfMYLj3Te2ONNRBxk6ykEod3QkixTnBNswnRVxJZBIhd5g6ad7fk5y54yx0FxVLi2l45gi9Qobd0E1WdLbgfxBekc9zUF1hERU5IiEG71FE1HbQBNfuSfCb72o_VmcsBOPX89GN7SNi4LMwWuEJZaENeb358BW4qcJk3aId3rN_6avpH1i0fPQOSQ2wr4SXrl1mIWZ6isY1WqDYoxU",
    alt: "Miembro del equipo 2",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAS0sjJ9ttW_odj9wXjnAcrNPN9LSx-6U6ecGEHmFoyzSsRhz3k8ACfWU20aqaaZLO-EEg_kpnouEzzLTZE39c5Z9evRLltFLVIptT9uptAORT73pjGy75iN9_iyj9KhMqJ_CMCQ5xhvx8MSlDVpzI1q69wYrBRQ8bPUtE0cI8W4dsHeB0bB071JP3tvVJ3uYRVfiGuKKWVFTPAM7V04hkkmpBrY4I7Gf5rf7A33Dk5sENV3BdLYPK1SIKLLjWjO2NdNtfMm7Dresw",
    alt: "Miembro del equipo 3",
  },
];

const teamMembers = [
  {
    name: "Ana Valdes",
    role: "Directora Creativa",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcEZJhbhMIZNDPcFFWfCUnqJG3TghmcpDSTcC9g0KIWB1lDJDF1YZKXcgkAZbGeTOyr31TjM1Wq6-7uOrBm4rfeG_8Ash9xgvYvaVN2NIBjOfwYvTKIe2WrUwrZ0XexKKSl5x479N_6ekDK6s7WK6hfk6ggstc-bENPa5sYhbL-tVMW4fjwzlGyAFMOSWL-aa61dUFZHPfdh8tQB11AaJQugcL5JuvStykusIhQoWpOiya01Bw13h0GIkSwL_1rL0ZJ5x1hJ3cHK4",
    color: "bg-primary",
  },
  {
    name: "Marco Soto",
    role: "Estratega SEO",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuw7ZPh4Gdfg-p_F2SXVa0XejfFdfiyZimnVA5aXJPFT_XU8Tm9VAgGhTO41IsDE-ZYfUvxTjugdYJSyUf_rvr1xubLLswUSdq4PqGtdI-vYPlZ9aKM1SdPiavj8xcmiwcmz5XMH7OJuyRFT0eFiEJFEaDKWpeTjJoklzZEfV4iHZMxRdYqzPGKIR2up9xQ_hc-bHozZ5SK85D4U9xpmjoAyyLQHs4z32ta3vzTGRNyOXKNYvqQ9dUCJtywSagUbgze4NxOwtutk0",
    color: "bg-secondary-container",
  },
  {
    name: "Sofia Luna",
    role: "Content Manager",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1cBNlX93frPLuxQgd8asd7fl72hcSfTnV2JC11uxK13svH3troyLSP2G8L79XViEvjERBO91KonvpuOAmFYbvKxtOt4rZAjlMmcnUD0klIANtT9DaTAI_gj_8a_VUMLsRPZRw8oF7Nss5ukHvT8qvcFPBWzqHRFkk9Mc2vfrBsT4BJDkEI6hHmArrtTSxkOkPcEIfUi7RSKltt9yK50xMfDDM1WskjNi2GVLyYQSt_VYpUY-yD1iG2OAIDNL22GjNFNyYOFZJKt4",
    color: "bg-tertiary-container",
  },
  {
    name: "Luis Herrera",
    role: "Lead Developer",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAamHu79t2yNDSXYH5QWBnNcV0HSQggBvsTUWnwq1Q6nDDESKBjTeriyfjUoLqbA4GoGCdLNb2taJt-If1mhnYP-yNcITUOhYNARO3jwWtjm0NjyAHbBKOsjAGoCx547mjSU-7Egb3RdnSdGvDVIHOFM1eK1z9uIOeZZqzl4YWWEsuUr37rPHYEfCwZxHZRMBSv3aDLGFpfXD5M4NF5udidrZ2tu6jhVHkT5rqcNedFAmMVJBdmyHF1xkGfk3zMfW1pjfUzD7myfRw",
    color: "bg-primary-container",
  },
];

const pilares = [
  {
    icon: "lightbulb",
    title: "Creatividad",
    description:
      "Ideas frescas y originales que rompen moldes. Cada proyecto es una oportunidad para innovar y sorprender con soluciones unicas.",
  },
  {
    icon: "trending_up",
    title: "Resultados",
    description:
      "No solo creamos cosas bonitas, generamos impacto real. Cada estrategia esta respaldada por datos y orientada a objetivos medibles.",
  },
  {
    icon: "handshake",
    title: "Cercania",
    description:
      "Somos tu equipo, no un proveedor mas. Trabajamos codo a codo contigo para entender tu negocio y hacer crecer tu marca.",
  },
];

const clientLogos = [
  { name: "Cliente 1", icon: "storefront" },
  { name: "Cliente 2", icon: "restaurant" },
  { name: "Cliente 3", icon: "local_cafe" },
  { name: "Cliente 4", icon: "shopping_bag" },
  { name: "Cliente 5", icon: "bakery_dining" },
  { name: "Cliente 6", icon: "spa" },
];

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main className="pt-20 pb-20 md:pb-0">
        {/* Hero Section */}
        <section className="relative bg-secondary-container pattern-overlay overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div className="flex flex-col gap-6">
                <span className="font-label text-xs tracking-widest uppercase font-bold text-on-secondary-container/70">
                  Sobre Nosotros
                </span>
                <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-secondary-container leading-tight">
                  Somos +Changarros
                </h1>
                <p className="font-body text-base md:text-lg text-on-secondary-container/80 leading-relaxed max-w-lg">
                  Somos un estudio creativo nacido en Mexico que transforma el
                  espiritu del comercio local en estrategias digitales
                  imparables. Combinamos diseno, tecnologia y mucho corazon para
                  llevar tu marca al siguiente nivel.
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex -space-x-3">
                    {teamAvatars.map((avatar, i) => (
                      <div
                        key={i}
                        className="relative w-10 h-10 rounded-full border-2 border-secondary-container overflow-hidden"
                      >
                        <Image
                          src={avatar.src}
                          alt={avatar.alt}
                          width={40}
                          height={40}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="font-body text-sm font-semibold text-on-secondary-container">
                    +15 Creativos
                  </span>
                </div>
              </div>

              {/* Right Column */}
              <div className="relative flex justify-center md:justify-end">
                <div className="relative rotate-3 rounded-[40px] overflow-hidden shadow-2xl shadow-primary/30 w-full max-w-md aspect-square">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUNYHB2qzazbTYDzPNvrP5TF2RFYl2MU4IdcXyDuJJUhnACyE5mZTIKOYd8f0TtkCw7lpDt2wewpbxRsGBfpWxWBEfhfMJCfINEoqk11U_6I-ptlK5sPqkYg3b19XrRP4qMT6If8Bmf5rwrx8mZPo4Urzf5U4c0q9X1dFwwL2-2DkFp0XfiZJb06K2yWbkPFjl7lt3hFI1cA06iShVdBAHEUqzbdO58LlXtexC5u1LOldF8Mf1Tk1zuvfSEItpAippmsvP9t95WYo"
                    alt="Equipo creativo de +Changarros"
                    width={480}
                    height={480}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="hidden md:flex absolute -bottom-4 -left-4 bg-primary text-on-primary px-6 py-3 rounded-2xl -rotate-6 shadow-xl items-center gap-2 font-headline font-bold text-sm">
                  <span className="material-symbols-outlined text-base">
                    flag
                  </span>
                  100% Hecho en Mexico
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Pilares */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <span className="font-label text-xs tracking-widest uppercase font-bold text-primary">
              Lo que nos define
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mt-3">
              Nuestros Pilares
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pilares.map((pilar) => (
              <div
                key={pilar.title}
                className="bg-surface-container-low rounded-[32px] p-8 flex flex-col gap-4 transition-colors duration-300 hover:bg-surface-container-high group"
              >
                <div className="w-14 h-14 bg-primary-container rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl text-on-primary-container">
                    {pilar.icon}
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface">
                  {pilar.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {pilar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <span className="font-label text-xs tracking-widest uppercase font-bold text-primary">
              El equipo detras de la magia
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mt-3">
              Conoce al Equipo
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="relative">
                  {/* Colored backdrop circle */}
                  <div
                    className={`absolute inset-0 ${member.color} rounded-full rotate-6 scale-95 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-100`}
                  />
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-surface">
                    <Image
                      src={member.src}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Social icons on hover */}
                  <div className="absolute inset-0 rounded-full bg-primary/60 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="material-symbols-outlined text-on-primary text-xl cursor-pointer hover:scale-110 transition-transform">
                      mail
                    </span>
                    <span className="material-symbols-outlined text-on-primary text-xl cursor-pointer hover:scale-110 transition-transform">
                      link
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-headline text-base font-bold text-on-surface">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Client Logos */}
        <section className="bg-surface-container-low py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="font-label text-xs tracking-widest uppercase font-bold text-on-surface-variant">
                Confian en nosotros
              </span>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
              {clientLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex flex-col items-center gap-2 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant">
                    {logo.icon}
                  </span>
                  <span className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
