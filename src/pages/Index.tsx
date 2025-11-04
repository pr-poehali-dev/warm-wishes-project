import { useEffect, useState } from "react";

const wishes = [
  "Ксюша, ты приносишь тепло в сердца окружающих своим искренним светом.",
  "Твоя улыбка делает любой день ярче и добрее.",
  "Ты — источник спокойствия и поддержки для тех, кто рядом.",
  "Твоя доброта и внимание к мелочам — настоящее чудо.",
  "Ксюша, с тобой мир кажется уютнее и радостнее.",
  "Ты умеешь вдохновлять и верить в лучшие возможности.",
  "Твоя искренность бесценна и согревает душу.",
  "Ты красива не только внешне, но и внутри — это видно всем.",
  "Пусть каждый день приносит тебе маленькие радости и большие улыбки.",
  "Ты — удивительно чуткий и внимательный человек.",
  "Ксюша, твоя уверенность делает тебя притягательной и сильной.",
  "Твои слова наполняют сердца теплом и светом.",
  "Ты умеешь слушать и понять так, как мало кто умеет.",
  "Пусть удача улыбается тебе в каждом начинании.",
  "Твоя энергия заряжает окружающих позитивом и надеждой.",
  "Ты заслуживаешь только самых нежных и светлых моментов.",
  "Ксюша, твоя доброжелательность делает мир лучше.",
  "Пусть каждый новый день будет теплее и радостнее предыдущего.",
  "Ты — удивительная смесь нежности, силы и мягкой мудрости.",
  "Твоя улыбка может расправить крылья самым грустным мыслям.",
  "Ты излучаешь гармонию и спокойствие в любой ситуации.",
  "Ксюша, твоя доброта возвращается к тебе сторицей.",
  "Пусть твои мечты легко становятся реальностью и приносят счастье.",
  "Ты создаёшь уют там, где бываешь, и это волшебно.",
  "Твоя грация и искренность вдохновляют и дарят тепло.",
  "Ты умна, чутка и невероятно обаятельна в самой лучшей манере.",
  "Пусть в твоей жизни будет много нежных мгновений и верных друзей.",
  "Ксюша, твой голос звучит как лучший комплимент этому дню.",
  "Пусть счастье всегда находит тебя и остаётся рядом навсегда."
];

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff7f3] to-[#fff2fb] flex items-center justify-center p-6 md:p-10">
      <main 
        className={`w-full max-w-[1100px] bg-gradient-to-b from-white/90 to-[#fffaff]/98 rounded-3xl p-6 md:p-9 shadow-[0_10px_30px_rgba(120,90,110,0.08)] border border-[rgba(200,180,190,0.25)] relative overflow-hidden transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <div className="absolute w-[220px] h-[220px] -left-10 -top-12 rounded-full bg-gradient-radial from-[#ffb3c6]/90 to-[#ff86a8]/45 blur-[36px] pointer-events-none animate-color-shift" />
        <div className="absolute w-[300px] h-[300px] -right-20 -bottom-20 rounded-full bg-gradient-radial from-[#ffe6f0]/90 to-[#ffc8dc]/35 blur-[36px] pointer-events-none animate-color-shift-delayed" />

        <header className="flex items-center justify-center mb-8 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3b2d31] tracking-wide">
            Дорогой Ксюше
          </h1>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
          {wishes.map((wish, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br from-white/95 via-[#fff9fa]/95 to-[#fef5f8]/95 rounded-2xl p-6 min-h-[100px] flex items-center justify-center text-center shadow-[0_4px_12px_rgba(80,60,70,0.06)] border-2 border-[rgba(255,179,198,0.3)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(100,60,90,0.12)] hover:border-[rgba(255,134,168,0.6)] relative overflow-hidden group ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              style={{
                transitionDelay: mounted ? `${Math.min(100 + idx * 50, 1500)}ms` : '0ms'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ffb3c6]/0 to-[#ff86a8]/0 group-hover:from-[#ffb3c6]/5 group-hover:to-[#ff86a8]/10 transition-all duration-500" />
              <p className="text-[15px] leading-relaxed text-[#2f2327] font-medium break-words hyphens-auto relative z-10">
                {wish}
              </p>
              <span className="absolute right-3 top-3 text-xl text-[rgba(255,120,150,0.4)] -rotate-[15deg] transition-all duration-500 group-hover:rotate-0 group-hover:scale-110 group-hover:text-[rgba(255,120,150,0.7)]">
                ♡
              </span>
            </div>
          ))}
        </section>


      </main>
    </div>
  );
};

export default Index;