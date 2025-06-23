"use client"

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Award, Users, Heart, Download, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  const achievements = [
    {
      icon: GraduationCap,
      title: "Formação Acadêmica",
      description: "Psicologia pela Unisa, especialização em Psicologia Clínica"
    },
    {
      icon: Award,
      title: "Certificações",
      description: "Terapia Cognitivo-Comportamental, Mindfulness"
    },
    {
      icon: Users,
      title: "Experiência",
      description: "2+ anos, 350+ pacientes atendidos"
    },
    {
      icon: Heart,
      title: "abordagem",
      description: "Humanizada, acolhedora e personalizada"
    }
  ]

  const specialties = [
    "Ansiedade e Depressão",
    "Relacionamentos",
    "Autoestima",
    "Síndrome do Pânico",
    "Terapia de Casal",
    "Desenvolvimento Pessoal"
  ]

  return (
    <section id="sobre" className="py-24 bg-muted/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Side */}
          <div className={`relative ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Yanca Pina em seu consultório"
                width={600}
                height={700}
                className="rounded-2xl object-cover shadow-2xl"
              />
              
              {/* Overlay Card */}
              <Card className="relative mt-8 mx-auto w-64 lg:absolute lg:mt-0 lg:-bottom-8 lg:-right-8 card-hover border-primary/20">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">99%</div>
                    <div className="text-sm text-muted-foreground">dos pacientes</div>
                    <div className="text-sm text-muted-foreground">recomendam</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Content Side */}
          <div className={`space-y-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary">
                Sobre Yanca Pina
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                Sua jornada de 
                <span className="text-gradient"> autoconhecimento</span> 
                começa aqui
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Olá! Sou Yanca Pina, psicóloga formada pela USP com mais de 8 anos de experiência 
                  em terapia cognitivo-comportamental. Minha missão é oferecer um espaço seguro e 
                  acolhedor para seu processo de autoconhecimento e crescimento pessoal.
                </p>
                
                <p>
                  Acredito que cada pessoa possui recursos internos únicos para superar desafios. 
                  Minha abordagem combina técnicas baseadas em evidências científicas com um 
                  olhar humanizado e personalizado para suas necessidades específicas.
                </p>
              </div>
            </div>

            {/* Specialties */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Especialidades</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {specialties.map((specialty, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="justify-center py-2 bg-secondary/50 hover:bg-secondary/70 transition-colors"
                  >
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-background/50 border border-primary/10"
                >
                  <achievement.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">{achievement.title}</div>
                    <div className="text-xs text-muted-foreground">{achievement.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                asChild
                className="btn-hover gradient-primary text-white border-0 shadow-lg shadow-primary/25"
              >
                <Link href="#agendamento" className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Consulta</span>
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                className="btn-hover border-primary/30 hover:bg-primary/5"
              >
                <Download className="w-4 h-4 mr-2" />
                Baixar Currículo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}