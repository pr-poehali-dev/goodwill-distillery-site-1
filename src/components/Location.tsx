import React from "react";

const Location = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-distillery-copper to-distillery-oak">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-5xl font-bold text-white mb-12">
            Винокурня в сердце России
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop"
                alt="Moscow skyline"
                className="rounded-lg shadow-2xl"
              />
            </div>

            <div className="text-left animate-scale-in">
              <h3 className="font-playfair text-3xl font-semibold text-distillery-gold mb-6">
                Москва, Россия
              </h3>
              <p className="font-opensans text-lg text-distillery-cream leading-relaxed mb-6">
                Наша винокурня расположена в экологически чистом районе
                Московской области, где кристально чистая вода и традиции
                русского винокурения создают идеальные условия для производства
                премиальных дистиллятов.
              </p>
              <div className="space-y-2 text-distillery-cream">
                <p className="font-opensans">📍 Московская область</p>
                <p className="font-opensans">🌿 Экологически чистый район</p>
                <p className="font-opensans">💧 Артезианская вода</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
