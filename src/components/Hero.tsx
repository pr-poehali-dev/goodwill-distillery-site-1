import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-distillery-dark via-distillery-oak to-black"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1200&h=800&fit=crop")',
        }}
      />
      <div className="relative z-10 text-center text-white animate-fade-in">
        <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6 text-distillery-gold">
          GoodWill
        </h1>
        <h2 className="font-playfair text-4xl md:text-5xl mb-4 text-distillery-cream">
          Distillery
        </h2>
        <p className="font-opensans text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
          Крафтовые благородные дистилляты
          <br />
          <span className="text-distillery-gold">Москва • Россия</span>
        </p>
        <div className="mt-12">
          <div className="w-24 h-0.5 bg-distillery-gold mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
