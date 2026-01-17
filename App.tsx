import React, { useState } from 'react';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { AccordionItem } from './components/Accordion';
import { Badge } from './components/Badge';
import { 
  BookOpen, 
  Laptop, 
  Sparkles, 
  Phone, 
  MessageCircle,
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const courseDays = [
  {
    title: "1-КҮН. Компьютер сабаттуулугу (БАЗА)",
    content: {
      bullets: [
        "Компьютерди туура жана ылдам колдонуу",
        "Интернеттен маалымат табуу",
        "Word программасында: 5E моделинде сабак даярдоо; Тест түзүү; Таблица менен иштөө"
      ],
      result: "Натыйжа: мугалим бардык документтерди өз алдынча идеалдуу жасай алат.",
      income: "5E моделиндеги сабак планын сатуу менен киреше табууга үйрөнөсүз."
    }
  },
  {
    title: "2-КҮН. PowerPoint – таасирдүү сабак",
    content: {
      bullets: [
        "Презентацияны туура түзүү",
        "Слайд дизайны: текст, визуал, сүрөт, анимация, переход",
        "Сабакка ылайык шаблон түзүү",
        "Нейросеть менен 5 мүнөттө даярдоо (Gamma, Kimi AI)"
      ],
      result: "Натыйжа: заманбап презентация жасап, башкаларга сатуу менен киреше табасыз."
    }
  },
  {
    title: "3-КҮН. Canva – мугалимдин алтын куралы",
    content: {
      bullets: [
        "Canva интерфейси",
        "Сабакка материал даярдоо",
        "Грамота, сертификат, буклет, тапшырма баракча, чакыруу баракча"
      ],
      result: "Натыйжа: өзү грамота, буклет, тапшырма жасап сатууга чыгара аласыз."
    }
  },
  {
    title: "4-КҮН. Көргөзмө курал жасоо",
    content: {
      bullets: [
        "Ар кандай иш-чараларга көргөзмө курал даярдоо",
        "Клипарт, сүрөт чыгаруу",
        "Топер, буклет жасоо"
      ],
      result: "Натыйжа: көргөзмө курал жасап сатуу менен киреше табуу."
    }
  },
  {
    title: "5-КҮН. Нейросеть мугалим үчүн (AI)",
    content: {
      bullets: [
        "ChatGPT менен иштөө",
        "Сабак планы, тест, сценарий түзүү",
        "Нейросеть аркылуу сүрөт, видео даярдоо (Flow, Grok)",
        "Ачык сабак даярдоо"
      ],
      result: "Натыйжа: убакытты үнөмдөгөн акылдуу мугалим. Ачык сабакты түзүп, тапшырма алып иштей аласыз."
    }
  },
  {
    title: "6-КҮН. Социалдык тармактарды туура колдонуу (СЫРЛАР)",
    content: {
      bullets: [
        "Мугалимге ылайык контент",
        "Эмне тартуу керек, кантип сүйлөө",
        "Репост эмес — эксперттик контент",
        "Пайдалуу посттор"
      ],
      result: "Натыйжа: социалдык тармакта таанымал мугалим болосуз."
    }
  },
  {
    title: "7-КҮН. Сатуу техникасы (жумшак форматта)",
    content: {
      bullets: [
        "Онлайн сабак / курс сатуу",
        "Услуга сатуу",
        "Жеке брендди негиздөө"
      ],
      result: "Натыйжа: билим аркылуу киреше табууну баштайсыз."
    }
  },
  {
    title: "8-КҮН. Портфолио курс",
    content: {
      bullets: [
        "Мугалимдин портфолиосу кандай болушу керек",
        "Google Диск, PowerPoint, Флипбук аркылуу портфолио түзүү",
        "Даяр шаблондор берилет",
        "Онлайн / офлайн көрсөтүү"
      ],
      result: "Натыйжа: ишке, конкурска, аттестацияга даяр портфолио түзүү жана заказ менен иштөө."
    }
  },
  {
    title: "9-КҮН. STEM / STEAM сабактар",
    content: {
      bullets: [
        "STEM деген эмне?",
        "S – Science; T – Technology; E – Engineering; M – Mathematics",
        "Сабакты өзгөчө өткөрүү",
        "Эффективдүү жана интерактивдүү методдор",
        "Курс түзүү, ар кандай предмет боюнча план, презентация даярдоо жана каналга топтоо"
      ],
      result: "Натыйжа: заманбап, кызыктуу сабактарды өткөрүп, курс канал аркылуу киреше булагын ачасыз."
    }
  },
  {
    title: "10-КҮН. Жыйынтыктоо жана упаковка",
    content: {
      bullets: [
        "Бардык материалды иретке келтирүү",
        "Жеке мугалим брендин түзүү",
        "Кайда жана кантип колдонуу керек (иш, соцтармак, жеке курс)"
      ]
    }
  }
];

const benefits = [
  "Заманбап мугалим болосуз",
  "Сабакты кооз жана натыйжалуу өткөрөсүз",
  "Соцтармакта эксперт катары таанымал болосуз",
  "Билим аркылуу кошумча киреше таба баштайсыз",
  "Цифралык билим жана чеберчилик алуу",
  "Аттестацияга даяр портфолио түзүү",
  "AI жана заманбап технологияларды колдонуу",
  "Өз курстарыңызды түзүп киреше алуу"
];

export default function App() {
  const [openAccordions, setOpenAccordions] = useState<number[]>([0]);
  const [showAllBenefits, setShowAllBenefits] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const toggleAccordion = (index: number) => {
    setOpenAccordions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/996554013355', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+996554013355';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Салам! Мен ${formData.name}. Катталгым келет. Телефон: ${formData.phone}`;
    window.open(`https://wa.me/996554013355?text=${encodeURIComponent(message)}`, '_blank');
  };

  const visibleBenefits = showAllBenefits ? benefits : benefits.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      {/* Container with max width for desktop */}
      <div className="max-w-[1440px] mx-auto">
        {/* Desktop layout wrapper */}
        <div className="lg:px-20 lg:py-8">
          
          {/* Header / Hero */}
          <section className="bg-gradient-to-br from-[#6D28D9] via-[#7C3AED] to-[#2563EB] text-white px-5 py-10 lg:py-16 lg:rounded-3xl">
            <div className="max-w-[600px] mx-auto lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>Онлайн курс</span>
                </div>
                
                <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                  Заманбап мугалим: мугалимден миллионго
                </h1>
                
                <p className="text-lg lg:text-xl text-white/90">
                  10 күндүк интенсив онлайн курс
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <Badge icon="⏳">10 күн</Badge>
                  <Badge icon="💻">Онлайн</Badge>
                  <Badge icon="💰">2500 сом</Badge>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="large" onClick={handleWhatsApp}>
                    Катталуу
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="large"
                    onClick={() => scrollToSection('program')}
                  >
                    Программа
                  </Button>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1613563696452-c7239f5ae99c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwZWR1Y2F0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njg2NTgxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Education Technology"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          {/* Main content wrapper */}
          <div className="max-w-[600px] mx-auto lg:max-w-none px-5 lg:px-0">
            
            {/* Quick Navigation */}
            <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm py-4 -mx-5 px-5 lg:mx-0 lg:px-6 lg:rounded-2xl lg:mt-6">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                <Button 
                  variant="outline" 
                  size="small"
                  onClick={() => scrollToSection('program')}
                >
                  Программа
                </Button>
                <Button 
                  variant="outline" 
                  size="small"
                  onClick={() => scrollToSection('results')}
                >
                  Натыйжалар
                </Button>
                <Button 
                  variant="outline" 
                  size="small"
                  onClick={() => scrollToSection('price')}
                >
                  Баасы
                </Button>
                <Button 
                  variant="outline" 
                  size="small"
                  onClick={() => scrollToSection('contact')}
                >
                  Байланыш
                </Button>
              </div>
            </nav>

            {/* Price Card */}
            <section id="price" className="py-8 lg:py-12">
              <Card variant="highlighted" className="text-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#6D28D9] to-[#2563EB] rounded-full">
                    <span className="text-3xl">💎</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Онлайн курс · 10 күн</p>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-[#6D28D9] to-[#2563EB] bg-clip-text text-transparent">
                      2500 сом
                    </h2>
                  </div>
                  <Button 
                    variant="whatsapp" 
                    size="large" 
                    className="w-full"
                    onClick={handleWhatsApp}
                    icon={<MessageCircle className="w-5 h-5" />}
                  >
                    WhatsApp жазуу
                  </Button>
                </div>
              </Card>
            </section>

            {/* Course Program */}
            <section id="program" className="py-8 lg:py-12">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-[#6D28D9]" />
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                  КУРСТУН ПРОГРАММАСЫ
                </h2>
              </div>
              
              <div className="space-y-3">
                {courseDays.map((day, index) => (
                  <AccordionItem
                    key={index}
                    title={day.title}
                    content={day.content}
                    isOpen={openAccordions.includes(index)}
                    onToggle={() => toggleAccordion(index)}
                  />
                ))}
              </div>
            </section>

            {/* Results / Benefits */}
            <section id="results" className="py-8 lg:py-12">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-[#6D28D9]" />
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                  КУРСТАН КИЙИН СИЗ:
                </h2>
              </div>
              
              <Card>
                <div className="space-y-4">
                  {visibleBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-gray-700 flex-1">{benefit}</p>
                    </div>
                  ))}
                  
                  {benefits.length > 4 && (
                    <button
                      onClick={() => setShowAllBenefits(!showAllBenefits)}
                      className="w-full py-3 text-[#6D28D9] font-medium flex items-center justify-center gap-2 hover:bg-purple-50 rounded-xl transition-colors"
                    >
                      {showAllBenefits ? (
                        <>
                          <ChevronUp className="w-5 h-5" />
                          Жашыруу
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-5 h-5" />
                          Дагы көрүү
                        </>
                      )}
                    </button>
                  )}
                </div>
              </Card>
            </section>

            {/* Contact / Enrollment */}
            <section id="contact" className="py-8 lg:py-12 pb-32 lg:pb-12">
              <Card variant="gradient">
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                      Катталуу үчүн байланыш
                    </h2>
                    <p className="text-white/90">
                      Бүгүн эле башта жана заманбап мугалим бол!
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-center gap-2 text-xl">
                      <Phone className="w-6 h-6" />
                      <a href="tel:+996554013355" className="font-semibold hover:underline">
                        +996 554 013 355
                      </a>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Button 
                        variant="whatsapp" 
                        size="large"
                        onClick={handleWhatsApp}
                        icon={<MessageCircle className="w-5 h-5" />}
                      >
                        WhatsApp
                      </Button>
                      <Button 
                        variant="call" 
                        size="large"
                        onClick={handleCall}
                        icon={<Phone className="w-5 h-5" />}
                      >
                        Чалуу
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6">
                    <h3 className="text-gray-800 font-semibold mb-4 text-center">
                      Тез катталуу
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        placeholder="Атыңыз"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#6D28D9] focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 text-gray-800"
                        required
                      />
                      <input
                        type="tel"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#6D28D9] focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 text-gray-800"
                        required
                      />
                      <Button type="submit" size="large" className="w-full">
                        Жөнөтүү
                      </Button>
                    </form>
                  </div>
                </div>
              </Card>
            </section>

            {/* Footer */}
            <footer className="text-center py-8 text-gray-600 text-sm pb-32 lg:pb-8">
              <p className="font-medium">© 2026 Zamanbap Mugalim</p>
              <p className="mt-1">Онлайн курс для мугалимдер</p>
            </footer>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg rounded-t-3xl z-50">
        <div className="flex gap-3 p-4 max-w-[600px] mx-auto">
          <Button 
            variant="whatsapp" 
            className="flex-1"
            onClick={handleWhatsApp}
            icon={<MessageCircle className="w-5 h-5" />}
          >
            WhatsApp
          </Button>
          <Button 
            variant="call" 
            className="flex-1"
            onClick={handleCall}
            icon={<Phone className="w-5 h-5" />}
          >
            Чалуу
          </Button>
        </div>
      </div>
    </div>
  );
}
