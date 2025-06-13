import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-distillery-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-5xl font-bold text-distillery-dark text-center mb-16">
            Искусство дистилляции
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop"
                alt="Copper stills"
                className="rounded-lg shadow-2xl"
              />
            </div>

            <div className="animate-scale-in">
              <h3 className="font-playfair text-3xl font-semibold text-distillery-dark mb-6">
                Традиции и мастерство
              </h3>
              <p className="font-opensans text-lg text-gray-700 leading-relaxed mb-6">
                В нашей частной винокурне мы создаем исключительные дистилляты,
                используя традиционные методы и современные технологии. Каждая
                бутылка — результат многолетнего мастерства и страсти к
                совершенству.
              </p>
              <p className="font-opensans text-lg text-gray-700 leading-relaxed">
                Медленная дистилляция в медных кубах, выдержка в отборных
                дубовых бочках и тщательный контроль каждого этапа производства
                создают неповторимый характер наших спиртов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
