import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const giftCategories = [
    {
      id: 'corporate',
      name: 'Корпоративные коллекции',
      description: 'Эксклюзивные подарки для партнеров и сотрудников',
      image: 'https://cdn.poehali.dev/projects/4af9768c-1407-4af2-abb2-35bbf518b9fc/files/ee22fb64-b6dd-4931-ace7-7c31f99e2e23.jpg',
      price: 'от 50 000 ₽',
      items: [
        { name: 'Набор премиум-аксессуаров', price: '85 000 ₽' },
        { name: 'Коллекция бизнес-сувениров', price: '120 000 ₽' },
        { name: 'VIP-набор для партнеров', price: '250 000 ₽' }
      ]
    },
    {
      id: 'personal',
      name: 'Персональные подарки',
      description: 'Уникальные решения для особых случаев',
      image: 'https://cdn.poehali.dev/projects/4af9768c-1407-4af2-abb2-35bbf518b9fc/files/f4412a6f-49d6-4084-98ce-b4e905243473.jpg',
      price: 'от 30 000 ₽',
      items: [
        { name: 'Индивидуальная коллекция', price: '65 000 ₽' },
        { name: 'Премиум набор эксклюзив', price: '95 000 ₽' },
        { name: 'Люкс-презент', price: '180 000 ₽' }
      ]
    },
    {
      id: 'branded',
      name: 'С персонализацией',
      description: 'Брендирование и индивидуальная упаковка',
      image: 'https://cdn.poehali.dev/projects/4af9768c-1407-4af2-abb2-35bbf518b9fc/files/f9579338-3024-4f36-8588-554ec232e216.jpg',
      price: 'от 75 000 ₽',
      items: [
        { name: 'Брендированный набор Premium', price: '95 000 ₽' },
        { name: 'Корпоративная коллекция с логотипом', price: '150 000 ₽' },
        { name: 'VIP-набор с персонализацией', price: '300 000 ₽' }
      ]
    }
  ];

  const features = [
    {
      icon: 'Package',
      title: 'Премиальная упаковка',
      description: 'Индивидуальный дизайн упаковки с брендированием по вашим требованиям'
    },
    {
      icon: 'Star',
      title: 'Эксклюзивность',
      description: 'Уникальные подарки, созданные специально для вашей компании'
    },
    {
      icon: 'Truck',
      title: 'VIP-доставка',
      description: 'Доставка в любую точку мира с сопровождением и белыми перчатками'
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Работаем только с проверенными премиум-брендами'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-gold/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Gift" className="h-8 w-8 text-gold" />
            <h1 className="text-3xl font-serif font-bold">LUXE GIFTS</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            {['Главная', 'Каталог', 'Коллекции', 'Персонализация', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className="text-sm font-medium transition-colors hover:text-gold relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          <Button className="bg-gold hover:bg-gold/90 text-charcoal font-medium">
            <Icon name="Phone" className="h-4 w-4 mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      <main>
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/10"></div>
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <Badge className="mb-6 bg-gold/10 text-gold border-gold/20 px-4 py-2 text-sm">
                Премиум-подарки для VIP-клиентов
              </Badge>
              <h2 className="text-6xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                Эксклюзивные подарки
                <span className="block text-gold mt-2">для особых людей</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Создаем уникальные подарочные решения для обеспеченных клиентов и крупных корпораций.
                Индивидуальный подход, премиальное качество, безупречный сервис.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-gold hover:bg-gold/90 text-charcoal font-medium px-8">
                  Смотреть каталог
                  <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-gold/30 hover:bg-gold/5">
                  Консультация
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-serif font-bold mb-4">Наши преимущества</h3>
              <p className="text-muted-foreground text-lg">Почему выбирают нас</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-gold/20 hover:border-gold/40 transition-all hover:shadow-lg group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors">
                      <Icon name={feature.icon} className="h-8 w-8 text-gold" />
                    </div>
                    <h4 className="text-xl font-serif font-semibold mb-3">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-serif font-bold mb-4">Премиум коллекции</h3>
              <p className="text-muted-foreground text-lg">Выберите идеальный подарок</p>
            </div>

            <Tabs defaultValue="corporate" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 bg-muted/50">
                <TabsTrigger value="corporate" className="data-[state=active]:bg-gold data-[state=active]:text-charcoal">
                  Корпоративные
                </TabsTrigger>
                <TabsTrigger value="personal" className="data-[state=active]:bg-gold data-[state=active]:text-charcoal">
                  Персональные
                </TabsTrigger>
                <TabsTrigger value="branded" className="data-[state=active]:bg-gold data-[state=active]:text-charcoal">
                  С брендированием
                </TabsTrigger>
              </TabsList>

              {giftCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                      <Badge className="mb-4 bg-gold/10 text-gold border-gold/20">
                        {category.price}
                      </Badge>
                      <h4 className="text-3xl font-serif font-bold mb-4">{category.name}</h4>
                      <p className="text-muted-foreground text-lg mb-8">{category.description}</p>
                      
                      <div className="space-y-4 mb-8">
                        {category.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-4 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors group"
                          >
                            <div className="flex items-center gap-3">
                              <Icon name="CheckCircle" className="h-5 w-5 text-gold" />
                              <span className="font-medium">{item.name}</span>
                            </div>
                            <span className="text-gold font-semibold">{item.price}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <Button className="bg-gold hover:bg-gold/90 text-charcoal">
                          Заказать коллекцию
                        </Button>
                        <Button variant="outline" className="border-gold/30">
                          Подробнее
                        </Button>
                      </div>
                    </div>

                    <div className="order-1 lg:order-2">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-lg blur-xl group-hover:blur-2xl transition-all"></div>
                        <img
                          src={category.image}
                          alt={category.name}
                          className="relative rounded-lg w-full h-[500px] object-cover border-2 border-gold/20 group-hover:border-gold/40 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section className="py-20 bg-charcoal text-cream">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-4xl font-serif font-bold mb-6">Персонализация и брендирование</h3>
              <p className="text-cream/80 text-lg mb-8 leading-relaxed">
                Создаем уникальную премиальную упаковку с вашим логотипом, фирменными цветами
                и индивидуальным дизайном. Каждый подарок становится неповторимым произведением искусства.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-5xl font-serif font-bold text-gold mb-2">100%</div>
                  <p className="text-cream/70">Индивидуальный подход</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-serif font-bold text-gold mb-2">24/7</div>
                  <p className="text-cream/70">Поддержка клиентов</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-serif font-bold text-gold mb-2">500+</div>
                  <p className="text-cream/70">Реализованных проектов</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <Card className="border-gold/20 shadow-xl">
                <CardContent className="p-12">
                  <div className="text-center mb-8">
                    <Icon name="Mail" className="h-12 w-12 text-gold mx-auto mb-4" />
                    <h3 className="text-3xl font-serif font-bold mb-4">Свяжитесь с нами</h3>
                    <p className="text-muted-foreground">
                      Оставьте заявку, и наш менеджер свяжется с вами для обсуждения деталей
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
                      <Icon name="Phone" className="h-6 w-6 text-gold" />
                      <div>
                        <div className="font-medium">Телефон</div>
                        <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
                      <Icon name="Mail" className="h-6 w-6 text-gold" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-muted-foreground">info@luxegifts.ru</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
                      <Icon name="MapPin" className="h-6 w-6 text-gold" />
                      <div>
                        <div className="font-medium">Адрес</div>
                        <div className="text-muted-foreground">Москва, Кутузовский проспект, 36</div>
                      </div>
                    </div>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-charcoal font-medium h-12">
                      Запросить консультацию
                      <Icon name="Send" className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gold/20 py-12 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Gift" className="h-6 w-6 text-gold" />
              <span className="text-xl font-serif font-bold">LUXE GIFTS</span>
            </div>
            <div className="text-center text-muted-foreground">
              © 2024 LUXE GIFTS. Премиум-подарки для VIP-клиентов
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-gold">
                <Icon name="Instagram" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-gold">
                <Icon name="Facebook" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-gold">
                <Icon name="Mail" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}