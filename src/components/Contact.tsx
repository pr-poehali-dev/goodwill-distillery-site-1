import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-distillery-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-5xl font-bold text-distillery-gold mb-12">
            Свяжитесь с нами
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="font-playfair text-2xl font-semibold text-distillery-cream mb-6">
                Для дегустации и экскурсий
              </h3>
              <div className="space-y-4 text-distillery-cream">
                <p className="font-opensans flex items-center justify-center">
                  <span className="mr-3">📞</span> +7 (495) 123-45-67
                </p>
                <p className="font-opensans flex items-center justify-center">
                  <span className="mr-3">✉️</span> info@goodwill-distillery.ru
                </p>
                <p className="font-opensans flex items-center justify-center">
                  <span className="mr-3">🕒</span> Пн-Пт: 10:00-18:00
                </p>
              </div>
            </div>

            <div className="animate-scale-in">
              <h3 className="font-playfair text-2xl font-semibold text-distillery-cream mb-6">
                Приобретение продукции
              </h3>
              <div className="space-y-4 text-distillery-cream">
                <p className="font-opensans">
                  Наши дистилляты доступны для приобретения в ограниченном
                  количестве
                </p>
                <p className="font-opensans">
                  Свяжитесь с нами для получения актуального прайс-листа
                </p>
                <button className="bg-distillery-gold text-distillery-dark px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                  Заказать дегустацию
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-distillery-copper">
            <p className="font-opensans text-distillery-cream opacity-80">
              © 2024 GoodWill Distillery. Все права защищены.
              <br />
              <span className="text-sm">
                Чрезмерное употребление алкоголя вредит вашему здоровью
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
