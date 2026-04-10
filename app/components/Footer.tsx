import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full rounded-t-[32px] mt-20 bg-secondary-container text-primary">
      <div className="flex flex-col md:flex-row justify-between items-center px-10 py-12 gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-black uppercase font-headline">
            +CHANGARROS
          </span>
          <p className="font-label text-xs tracking-wider uppercase opacity-80">
            &copy; 2024 +CHANGARROS Estudio Creativo. maschangarros.com
          </p>
        </div>
        <div className="flex gap-8 flex-wrap justify-center font-label text-xs tracking-wider uppercase font-bold">
          <Link
            href="/servicios"
            className="no-underline hover:opacity-80 transition-opacity"
          >
            Servicios
          </Link>
          <Link
            href="/portafolio"
            className="no-underline hover:opacity-80 transition-opacity"
          >
            Proyectos
          </Link>
          <Link
            href="/contacto"
            className="underline decoration-2 hover:opacity-80 transition-opacity"
          >
            Contacto
          </Link>
          <Link
            href="#"
            className="no-underline hover:opacity-80 transition-opacity"
          >
            Privacidad
          </Link>
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-secondary-container cursor-pointer hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-lg">public</span>
          </div>
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-secondary-container cursor-pointer hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-lg">mail</span>
          </div>
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-secondary-container cursor-pointer hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-lg">call</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
