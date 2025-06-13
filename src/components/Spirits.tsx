import React from "react";

const spirits = [
  {
    name: "GoodWill Single Malt Whiskey",
    description:
      "Односолодовый виски двойной дистилляции, выдержанный в дубовых бочках из-под бурбона. Богатый вкус с нотами ванили и карамели.",
    age: "8 лет",
    image:
      "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&h=500&fit=crop",
  },
  {
    name: "Moscow Calvados Reserve",
    description:
      "Кальвадос из отборных яблок Тульской области. Элегантный фруктовый аромат с долгим послевкусием и нотами печеного яблока.",
    age: "12 лет",
    image:
      "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=500&fit=crop",
  },
  {
    name: "Heritage Dark Rum",
    description:
      "Темный ром из тростникового сахара с Кубы. Насыщенный вкус с оттенками шоколада, специй и сухофруктов.",
    age: "15 лет",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=500&fit=crop",
  },
];

const Spirits = () => {
  return (
    <section id="spirits" className="py-20 bg-distillery-dark">
      <div className="container mx-auto px-6">
        <h2 className="font-playfair text-5xl font-bold text-distillery-gold text-center mb-16">
          Наши дистилляты
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {spirits.map((spirit, index) => (
            <div
              key={index}
              className="bg-distillery-cream rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={spirit.image}
                  alt={spirit.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-playfair text-xl font-semibold text-distillery-dark">
                    {spirit.name}
                  </h3>
                  <span className="bg-distillery-gold text-distillery-dark px-3 py-1 rounded-full text-sm font-semibold">
                    {spirit.age}
                  </span>
                </div>
                <p className="font-opensans text-gray-700 leading-relaxed">
                  {spirit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spirits;
