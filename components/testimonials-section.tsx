"use client"

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star, Quote, ArrowLeft, ArrowRight, Calendar } from 'lucide-react'
import Link from 'next/link'

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: "Maria Silva",
      age: "34 anos",
      issue: "Ansiedade",
      rating: 5,
      text: "A Yanca me ajudou a entender e controlar minha ansiedade de uma forma que eu nunca imaginei ser possível. Suas técnicas são práticas e realmente funcionam no dia a dia. Sou muito grata por ter encontrado uma profissional tão competente e acolhedora.",
      result: "Redução significativa dos ataques de ansiedade",
      duration: "6 meses de terapia"
    },
    {
      name: "Carlos Oliveira", 
      age: "28 anos",
      issue: "Relacionamentos",
      rating: 5,
      text: "Depois de várias tentativas fracassadas de relacionamento, a terapia com a Yanca me ajudou a compreender padrões comportamentais que eu nem sabia que existiam. Hoje tenho um relacionamento saudável e estável.",
      result: "Relacionamento estável há 1 ano",
      duration: "8 meses de terapia"
    },
    {
      name: "Ana Costa",
      age: "41 anos", 
      issue: "Autoestima",
      rating: 5,
      text: "Sofri com baixa autoestima por anos. A Yanca me ensinou a me valorizar e reconhecer minhas qualidades. Sua abordagem gentil mas eficaz transformou completamente minha percepção sobre mim mesma.",
      result: "Confiança renovada e nova carreira",
      duration: "1 ano de terapia"
    },
    {
      name: "Roberto & Lucia",
      age: "Casal, 35 e 32 anos",
      issue: "Terapia de Casal",
      rating: 5,
      text: "Estávamos à beira do divórcio quando decidimos tentar a terapia de casal. A Yanca nos ajudou a redescobrir nossa conexão e aprender a nos comunicar de forma saudável. Salvou nosso casamento!",
      result: "Relacionamento renovado",
      duration: "4 meses de terapia"
    },
    {
      name: "Juliana Pereira",
      age: "26 anos",
      issue: "Síndrome do Pânico", 
      rating: 5,
      text: "Os ataques de pânico controlavam minha vida. Com a ajuda da Yanca, aprendi técnicas de respiração e reestruturação cognitiva que me deram minha liberdade de volta. Não posso agradecer o suficiente.",
      result: "Livre de ataques de pânico",
      duration: "10 meses de terapia"
    },
    {
      name: "Pedro Santos",
      age: "39 anos",  
      issue: "Estresse Profissional",
      rating: 5,
      text: "O estresse do trabalho estava afetando toda minha vida. A Yanca me ensinou estratégias para lidar com a pressão e encontrar equilíbrio entre vida pessoal e profissional. Recomendo para todos os executivos.",
      result: "Melhor qualidade de vida",
      duration: "5 meses de terapia"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="depoimentos" className="py-24 bg-muted/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center space-y-6 mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <Badge variant="outline" className="text-primary border-primary">
            Depoimentos
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            O que nossos 
            <span className="text-gradient"> pacientes dizem</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada história de transformação é única. Veja como a terapia tem ajudado 
            pessoas a superarem seus desafios e alcançarem uma vida mais plena.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className={`max-w-4xl mx-auto mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <Card className="relative overflow-hidden shadow-2xl card-hover">
            <CardContent className="p-6 sm:p-8 md:p-12">
              <Quote className="w-12 h-12 text-primary/20 mb-6" />
              
              <blockquote className="text-lg md:text-xl leading-relaxed mb-8 text-muted-foreground italic">
                &quot;{currentTestimonial.text}&quot;
              </blockquote>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <div>
                      <div className="font-semibold text-lg">{currentTestimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{currentTestimonial.age}</div>
                    </div>
                    <Badge variant="secondary">
                      {currentTestimonial.issue}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <div className="text-left md:text-right space-y-1">
                  <div className="text-sm font-medium text-primary">
                    {currentTestimonial.result}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {currentTestimonial.duration}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className={`flex justify-center items-center space-x-4 mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full"
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">99%</div>
            <div className="text-sm text-muted-foreground">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">350+</div>
            <div className="text-sm text-muted-foreground">Vidas transformadas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">4.9</div>
            <div className="text-sm text-muted-foreground">Avaliação média</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">187</div>
            <div className="text-sm text-muted-foreground">Avaliações</div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Sua transformação começa agora
            </h3>
            <p className="text-muted-foreground mb-6">
              Junte-se a centenas de pessoas que já transformaram suas vidas. 
              Agende sua primeira consulta e dê o primeiro passo.
            </p>
            <Button 
              asChild
              size="lg"
              className="btn-hover gradient-primary text-white"
            >
              <Link href="#agendamento" className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Começar Minha Jornada</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}