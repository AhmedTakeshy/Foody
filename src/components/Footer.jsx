import React from "react";

const Footer = () => {
  return (
    <footer className="py-[50px] bg-primary">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex items-baseline justify-between">
          <ul>
            <li className="mb-5 text-lg font-bold">Hakkımızda</li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Misyonumuz
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Vizyonumuz
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Hikayemiz
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Ekibimiz
            </li>
          </ul>
          <ul>
            <li className="mb-5 text-lg font-bold">İletişim</li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Bize Ulaşın
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Sıkça Sorulan Sorular
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Destek
            </li>
          </ul>
          <ul>
            <li className="mb-5 text-lg font-bold">Hizmetlerimiz</li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Paket Servis
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Masaya Servis
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Özel Gün Yemekleri
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Yemek Üzerine Her Şey
            </li>
          </ul>
          <ul>
            <li className="mb-5 text-lg font-bold">Sosyal Medya</li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Facebook
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Twitter
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              Instagram
            </li>
            <li className="transition duration-500 cursor-pointer hover:text-[#ea5e4b] text-[#333]">
              LinkedIn
            </li>
          </ul>
        </div>
        <hr className="border-t border-[#ccc] my-8" />
        <div className="flex justify-between items-center pt-5 border-t border-[#ccc] text-sm">
          <p>By <a href="https://takeshy.works" target={_blank}>Takeshy</a>© 2023 Yemek Sitesi. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
