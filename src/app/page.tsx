'use client';

import { useState } from 'react';
import TargetCursor from '../components/TargetCursor';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const closeNavbar = () => {
    setIsMenuOpen(false);
  };

  const openNavbar = () => {
    setIsMenuOpen(true);
  };

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
    closeNavbar();
  };

  const cardsData = [
    {
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
      name: 'Briar Martin',
      handle: '@neilstellar',
      date: 'April 20, 2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
      name: 'Avery Johnson',
      handle: '@averywrites',
      date: 'May 10, 2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
      name: 'Jordan Lee',
      handle: '@jordantalks',
      date: 'June 5, 2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
      name: 'Avery Johnson',
      handle: '@averywrites',
      date: 'May 10, 2025'
    },
  ];

  const CreateCard = ({ card }: { card: { image: string; name: string; handle: string; date: string } }) => (
    <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white/5 border border-white/10">
      <div className="flex gap-2">
        <img className="size-11 rounded-full" src={card.image} alt="User Image" />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p className="text-white">{card.name}</p>
            <svg className="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
            </svg>
          </div>
          <span className="text-xs text-slate-400">{card.handle}</span>
        </div>
      </div>
      <p className="text-sm py-4 text-slate-300">Radiant made undercutting all of our competitors an absolute breeze.</p>
      <div className="flex items-center justify-between text-slate-400 text-xs">
        <div className="flex items-center gap-1">
          <span>Posted on</span>
          <a href="https://x.com" target="_blank" className="hover:text-sky-500">
            <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" fill="currentColor" />
            </svg>
          </a>
        </div>
        <p className="text-slate-400">{card.date}</p>
      </div>
    </div>
  );

  return (
    <section className="relative flex flex-col items-center max-md:px-2 bg-black text-white text-sm min-h-screen bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/green-gradient-bg.svg)] bg-top bg-no-repeat pt-8 pb-28">
      <TargetCursor targetSelector="button, a" spinDuration={2} hideDefaultCursor={true} />
      
      <nav className="flex items-center mx-4 w-full max-w-4xl justify-between px-4 py-2.5 rounded-full text-white border border-[#334155]/50">
        <a href="https://prebuiltui.com" className="ml-2">
          <img src="/logo-white.svg" alt="Logo" className="h-5 w-auto" />
        </a>
        <div className={`max-md:absolute max-md:bg-black/50 max-md:backdrop-blur max-md:top-0 transition-all duration-300 max-md:h-full max-md:w-full max-md:z-10 max-md:justify-center flex-col md:flex-row flex items-center gap-2 ${isMenuOpen ? 'max-md:left-0' : 'max-md:-left-full'}`}>
          <a 
            onClick={() => handleLinkClick('Strona główna')} 
            className={`px-4 py-2 ${activeLink === 'Strona główna' ? 'border border-white/10 bg-white/10 font-medium rounded-full' : ''}`}
            href="#"
          >
            Strona główna
          </a>
          <a 
            onClick={() => handleLinkClick('O firmie')} 
            className={`px-4 py-2 ${activeLink === 'O firmie' ? 'border border-white/10 bg-white/10 font-medium rounded-full' : ''}`}
            href="#"
          >
            O firmie
          </a>
          <a 
            onClick={() => handleLinkClick('Produkty')} 
            className={`px-4 py-2 ${activeLink === 'Produkty' ? 'border border-white/10 bg-white/10 font-medium rounded-full' : ''}`}
            href="#"
          >
            Produkty
          </a>
          <a 
            onClick={() => handleLinkClick('Dokumentacja')} 
            className={`px-4 py-2 ${activeLink === 'Dokumentacja' ? 'border border-white/10 bg-white/10 font-medium rounded-full' : ''}`}
            href="#"
          >
            Dokumentacja
          </a>
          <button 
            onClick={closeNavbar} 
            className="md:hidden bg-gray-800 hover:bg-black text-white p-2 rounded-md aspect-square font-medium transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <button onClick={openNavbar} className="md:hidden">
          <svg className="size-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <button className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition">
          Skontaktuj się
        </button>
      </nav>

      <div className="flex items-center space-x-2.5 border border-green-500/30 rounded-full bg-green-500/10 p-1 text-sm text-green-500 mt-24">
        <div className="flex items-center space-x-1 bg-green-500 text-white border border-green-500/30 rounded-2xl px-3 py-1">
          <svg width="18" height="16" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 6.5v3.334m0 3.333h.008M8.575 2.217 1.516 14a1.666 1.666 0 0 0 1.425 2.5h14.117a1.667 1.667 0 0 0 1.425-2.5L11.425 2.217a1.667 1.667 0 0 0-2.85 0" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p>Ostrzeżenie!</p>
        </div>
        <p className="pr-3">Aplikacja w trakcie wstępnego tworzenia.</p>
      </div>

      <h1 className="text-4xl md:text-6xl text-center font-semibold max-w-4xl mt-5 bg-gradient-to-r from-white to-[#748298] text-transparent bg-clip-text leading-tight">
        Technologia, która <br></br>zarabia, tworzy i skaluje.
      </h1>
      <p className="text-slate-400/50 md:text-base max-md:px-2 text-center max-w-2xl mt-3">
        Ugruntuj swoją bezpieczną przyszłość wraz z naszym open-source botem arbitrażowym na protokole NEAR
        przeznaczonym dla szybkich transakcji.
      </p>

      <div className="flex items-center gap-2 mt-8 text-sm">
        <button className="px-6 py-2.5 bg-green-600 hover:bg-green-700 transition rounded-full">
          Wprowadzenie
        </button>
        <button className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-6 py-2.5">
          <span>Dowiedz się więcej</span>
          <svg className="mt-0.5" width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.25.5 4.75 4l-3.5 3.5" stroke="currentColor" strokeOpacity=".4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-inner {
          animation: marqueeScroll 35s linear infinite;
        }
      `}</style>

      <div className="marquee-row w-full mx-auto max-w-full overflow-hidden relative mt-14">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent"></div>
        <div className="marquee-inner flex transform-gpu min-w-[300%] pt-10 pb-5">
          {[...cardsData, ...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </section>
  );
} 