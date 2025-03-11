
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="text-xl font-bold tracking-tight flex items-center">
              <span className="mr-2 text-amber-500">|</span>
              +<span className="text-amber-500">Drinks</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Experiências únicas em bartending para seus eventos. 
              Transformamos bebidas em momentos inesquecíveis.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/maisdrinks_bartender?igsh=MXB2cWNuYjBhemxwbg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="pablo.domiciano2019@gmail.com"
                className="text-gray-400 hover:text-amber-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-500 transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/galeria" className="text-gray-400 hover:text-amber-500 transition-colors">Galeria</Link>
              </li>
              <li>
                <Link to="/abordagem" className="text-gray-400 hover:text-amber-500 transition-colors">Nossa Abordagem</Link>
              </li>
              <li>
                <Link to="/avaliacoes" className="text-gray-400 hover:text-amber-500 transition-colors">Avaliações</Link>
              </li>
              <li>
                <Link to="/mensagens" className="text-gray-400 hover:text-amber-500 transition-colors">Mensagens</Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-amber-500 transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} />
                <span>(44) 99919-4205</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} />
                <span>pablo.domiciano2019@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} +Drinks. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
