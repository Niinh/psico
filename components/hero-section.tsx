"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, MessageCircle, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-sophisticated pt-24 lg:pt-0">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-sophisticated" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 decoration-lilac rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-24 h-24 decoration-rose rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-10 w-16 h-16 decoration-graphite rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Scribble SVG */}
      <svg className="absolute top-1/4 right-1/4 w-64 h-64 opacity-20 text-primary" viewBox="0 0 200 200">
        <path
          d="M20,50 Q40,20 80,30 T140,50 Q160,70 150,100 T120,140 Q90,160 60,150 T20,120 Q10,90 20,50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="scribble-path"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Container - Appears first on mobile, second on desktop */}
          <div className={`relative lg:order-last ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl card-hover mx-auto max-w-sm lg:max-w-none">
                <Image
                  src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Yanca Pina - Psicóloga"
                  width={600}
                  height={700}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-6 rounded-xl shadow-lg border border-primary/10 animate-float z-20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Consulta Online</div>
                    <div className="text-sm text-muted-foreground">Disponível 24/7</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 decoration-rose rounded-full -z-10" />
              <div className="absolute -bottom-12 -right-12 w-32 h-32 decoration-lilac rounded-full -z-10" />
            </div>
          </div>

          {/* Content Container - Appears second on mobile, first on desktop */}
          <div className={`space-y-8 text-center lg:text-left ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="space-y-4">
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium border border-primary/20">
                  <Star className="w-4 h-4 mr-2" />
                  Psicóloga CRP 06/123456
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                Encontre seu 
                <span className="text-gradient block">equilíbrio emocional</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Especialista em terapia cognitivo-comportamental, oferecendo acolhimento 
                profissional para ansiedade, relacionamentos e desenvolvimento pessoal.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/10">
                <div className="text-2xl font-bold text-primary">350+</div>
                <div className="text-sm text-muted-foreground">Pacientes atendidos</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/10">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/10">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                size="lg"
                className="btn-hover gradient-primary text-white border-0 shadow-lg shadow-primary/25"
              >
                <Link href="#agendamento" className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Primeira Consulta</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="btn-hover border-primary/30 hover:bg-primary/5"
              >
                <Link href="#contato" className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Conversar no WhatsApp</span>
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-6 border-t border-border/50 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Online agora</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span>4.9/5 (127 avaliações)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}