import { useEffect, useState } from "react";

const wishes = [
  "Ты делаешь каждый день особенным просто тем, что ты есть",
  "С тобой я чувствую себя дома, где бы мы ни были",
  "Твоя улыбка — это то, ради чего хочется просыпаться",
  "Рядом с тобой время летит незаметно",
  "Ты умеешь находить красоту в простых вещах",
  "Люблю, как ты смеёшься над моими шутками",
  "Ты самая понимающая, даже когда я не прав",
  "С тобой хочется делиться всем на свете",
  "Твои объятия — мое любимое место",
  "Ты делаешь жизнь ярче и интереснее",
  "Люблю наши долгие разговоры ни о чём",
  "Ты знаешь, как меня поддержать в нужный момент",
  "С тобой даже скучные дела становятся приключением",
  "Твоё присутствие успокаивает и вдохновляет одновременно",
  "Ты самая красивая, особенно по утрам",
  "Люблю твою способность удивляться мелочам",
  "Рядом с тобой я становлюсь лучше",
  "Твоя забота чувствуется в каждой мелочи",
  "Ты понимаешь меня с полуслова",
  "С тобой хочется строить планы на будущее",
  "Люблю твою непосредственность и искренность",
  "Ты умеешь радоваться жизни по-настоящему",
  "Твоя поддержка значит для меня всё",
  "С тобой я могу быть собой без масок",
  "Ты делаешь обычные моменты незабываемыми",
  "Люблю наши внезапные приключения",
  "Ты самый важный человек в моей жизни",
  "С тобой будущее выглядит невероятно светлым"
];

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff7f3] to-[#fff2fb] flex items-center justify-center p-6 md:p-10 relative overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute text-2xl opacity-20 pointer-events-none animate-float-heart"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        >
          ♡
        </div>
      ))}
      
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
                transitionDelay: mounted ? `${idx * 80}ms` : '0ms'
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