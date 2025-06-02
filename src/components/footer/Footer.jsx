import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-20 border-t border-gray-200">
      <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Muebles SEBA</h2>
          <p className="text-sm text-white">
            Muebles con estilo, comodidad y calidad. Descubre piezas únicas para tu hogar.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600 transition-colors">Inicio</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Productos</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Nosotros</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-600 transition-colors text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-pink-600 transition-colors text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-sky-500 transition-colors text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-red-600 transition-colors text-xl">
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-white border-t border-gray-400 pt-6">
        &copy; {new Date().getFullYear()} Muebles SEBA. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
