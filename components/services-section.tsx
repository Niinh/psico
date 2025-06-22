"use client"

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { 
  Brain, 
  Heart, 
  Users, 
  Sparkles, 
  Shield, 
  TrendingUp,
  Calendar,
  ArrowRight,
  X,
  CheckCircle,
  Clock,
  Target
} from 'lucide-react'
import Link from 'next/link'

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [openModal, setOpenModal] = useState<string | null>(null)
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

  const services = [
    {
      id: 'ansiedade',
      icon: Brain,
      title: "Ansiedade",
      description: "Técnicas especializadas para controlar e superar a ansiedade",
      color: "from-primary/20 to-accent/10",
      iconBg: "bg-primary/10",
      borderColor: "border-primary/20",
      detailedInfo: {
        overview: "A ansiedade é uma resposta natural do corpo, mas quando se torna excessiva, pode interferir significativamente na qualidade de vida. Através da terapia cognitivo-comportamental, ajudo você a compreender os gatilhos da ansiedade e desenvolver estratégias eficazes para gerenciá-la.",
        symptoms: [
          "Preocupação excessiva e constante",
          "Sintomas físicos como palpitações e sudorese",
          "Dificuldade de concentração",
          "Evitamento de situações sociais",
          "Tensão muscular e inquietação",
          "Problemas de sono"
        ],
        approach: [
          "Identificação de padrões de pensamento ansiosos",
          "Técnicas de respiração e relaxamento",
          "Reestruturação cognitiva",
          "Exposição gradual a situações temidas",
          "Mindfulness e meditação",
          "Desenvolvimento de estratégias de enfrentamento"
        ],
        duration: "Geralmente entre 12-20 sessões",
        results: "85% dos pacientes relatam redução significativa dos sintomas de ansiedade"
      }
    },
    {
      id: 'depressao',
      title: "Depressão",
      icon: Heart,
      description: "Apoio especializado para superar momentos difíceis e recuperar a alegria",
      color: "from-accent/20 to-secondary/10",
      iconBg: "bg-accent/10",
      borderColor: "border-accent/20",
      detailedInfo: {
        overview: "A depressão é mais do que tristeza passageira. É uma condição séria que afeta pensamentos, sentimentos e comportamentos. Ofereço um espaço seguro e acolhedor para trabalharmos juntos na sua recuperação, utilizando abordagens baseadas em evidências científicas.",
        symptoms: [
          "Tristeza persistente e sentimentos de vazio",
          "Perda de interesse em atividades prazerosas",
          "Fadiga e falta de energia",
          "Alterações no sono e apetite",
          "Sentimentos de culpa e inutilidade",
          "Dificuldade de concentração e tomada de decisões"
        ],
        approach: [
          "Terapia cognitivo-comportamental",
          "Ativação comportamental",
          "Identificação e modificação de pensamentos negativos",
          "Estabelecimento de rotinas saudáveis",
          "Desenvolvimento de habilidades de enfrentamento",
          "Fortalecimento da rede de apoio social"
        ],
        duration: "Tipicamente 16-24 sessões",
        results: "78% dos pacientes apresentam melhora significativa dos sintomas depressivos"
      }
    },
    {
      id: 'relacionamentos',
      title: "Relacionamentos",
      icon: Users,
      description: "Melhore suas conexões pessoais e construa vínculos mais saudáveis",
      color: "from-secondary/20 to-primary/10",
      iconBg: "bg-secondary/20",
      borderColor: "border-secondary/30",
      detailedInfo: {
        overview: "Relacionamentos saudáveis são fundamentais para nosso bem-estar. Trabalho com indivíduos e casais para melhorar a comunicação, resolver conflitos e fortalecer vínculos emocionais, criando conexões mais profundas e satisfatórias.",
        symptoms: [
          "Dificuldades de comunicação",
          "Conflitos frequentes e não resolvidos",
          "Falta de intimidade emocional",
          "Ciúmes e insegurança",
          "Padrões relacionais destrutivos",
          "Dificuldade em estabelecer limites"
        ],
        approach: [
          "Terapia de casal e individual",
          "Técnicas de comunicação assertiva",
          "Resolução de conflitos",
          "Desenvolvimento de empatia",
          "Fortalecimento da intimidade",
          "Identificação de padrões relacionais"
        ],
        duration: "Varia de 8-16 sessões para indivíduos, 12-20 para casais",
        results: "82% dos casais relatam melhora significativa na qualidade do relacionamento"
      }
    },
    {
      id: 'autoestima',
      title: "Autoestima",
      icon: Sparkles,
      description: "Desenvolva uma relação mais positiva e compassiva consigo mesmo",
      color: "from-primary/15 to-accent/15",
      iconBg: "bg-primary/15",
      borderColor: "border-primary/25",
      detailedInfo: {
        overview: "A autoestima saudável é a base para uma vida plena e satisfatória. Trabalho com você para identificar e transformar crenças limitantes, desenvolvendo uma autoimagem mais positiva e realista, promovendo autocompaixão e confiança genuína.",
        symptoms: [
          "Autocrítica excessiva e constante",
          "Comparação frequente com outros",
          "Medo de rejeição e julgamento",
          "Dificuldade em aceitar elogios",
          "Perfeccionismo paralisante",
          "Evitamento de desafios e oportunidades"
        ],
        approach: [
          "Identificação de crenças limitantes",
          "Desenvolvimento de autocompaixão",
          "Técnicas de reestruturação cognitiva",
          "Fortalecimento de qualidades pessoais",
          "Estabelecimento de metas realistas",
          "Práticas de mindfulness e aceitação"
        ],
        duration: "Geralmente 12-18 sessões",
        results: "89% dos pacientes relatam melhora significativa na autoestima e autoconfiança"
      }
    },
    {
      id: 'psicoterapia-preventiva',
      title: "Psicoterapia Preventiva",
      icon: Shield,
      description: "Fortaleça sua saúde mental antes que problemas se desenvolvam",
      color: "from-accent/15 to-secondary/15",
      iconBg: "bg-accent/15",
      borderColor: "border-accent/25",
      detailedInfo: {
        overview: "A psicoterapia preventiva foca no fortalecimento da saúde mental antes que problemas sérios se desenvolvam. É ideal para pessoas que desejam desenvolver habilidades de enfrentamento, aumentar a resiliência e manter o bem-estar emocional.",
        symptoms: [
          "Estresse do dia a dia",
          "Transições de vida importantes",
          "Desejo de autoconhecimento",
          "Prevenção de recaídas",
          "Melhoria da qualidade de vida",
          "Desenvolvimento pessoal contínuo"
        ],
        approach: [
          "Desenvolvimento de habilidades de enfrentamento",
          "Fortalecimento da resiliência emocional",
          "Técnicas de gerenciamento de estresse",
          "Autoconhecimento e crescimento pessoal",
          "Prevenção de problemas futuros",
          "Manutenção do bem-estar mental"
        ],
        duration: "Sessões mensais ou conforme necessidade",
        results: "Redução significativa no risco de desenvolvimento de transtornos mentais"
      }
    },
    {
      id: 'desenvolvimento-pessoal',
      title: "Desenvolvimento Pessoal",
      icon: TrendingUp,
      description: "Alcance seu potencial máximo e realize seus objetivos de vida",
      color: "from-secondary/15 to-primary/15",
      iconBg: "bg-secondary/15",
      borderColor: "border-secondary/25",
      detailedInfo: {
        overview: "O desenvolvimento pessoal é uma jornada contínua de crescimento e autoaperfeiçoamento. Ajudo você a identificar seus valores, definir objetivos claros e desenvolver as habilidades necessárias para alcançar uma vida mais plena e significativa.",
        symptoms: [
          "Sensação de estagnação pessoal",
          "Falta de direção ou propósito",
          "Dificuldade em tomar decisões importantes",
          "Procrastinação e falta de motivação",
          "Desejo de mudança e crescimento",
          "Busca por maior realização pessoal"
        ],
        approach: [
          "Clarificação de valores e objetivos",
          "Desenvolvimento de habilidades de liderança",
          "Técnicas de produtividade e organização",
          "Fortalecimento da inteligência emocional",
          "Planejamento estratégico de vida",
          "Desenvolvimento de hábitos saudáveis"
        ],
        duration: "Varia conforme objetivos pessoais",
        results: "Maior clareza de propósito e satisfação com a vida"
      }
    }
  ]

  return (
    <section id="servicos" className="py-24 bg-sophisticated" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center space-y-6 mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <Badge variant="outline" className="text-primary border-primary">
            Especialidades
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Encontre o 
            <span className="text-gradient"> cuidado especializado</span> 
            que você precisa
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada pessoa é única, e por isso ofereço atendimento personalizado para diferentes 
            necessidades emocionais e psicológicas, sempre com base científica e acolhimento humano.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Dialog key={service.id} open={openModal === service.id} onOpenChange={(open) => setOpenModal(open ? service.id : null)}>
              <DialogTrigger asChild>
                <Card 
                  className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 ${service.borderColor} bg-gradient-to-br ${service.color} backdrop-blur-sm ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 ${service.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 border ${service.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <Button 
                      className="w-full btn-hover bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                    >
                      <span>Leia mais</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader className="space-y-4 pb-6 border-b border-primary/10">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${service.iconBg} rounded-full flex items-center justify-center border ${service.borderColor}`}>
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <DialogTitle className="text-2xl font-serif text-primary">
                      {service.title}
                    </DialogTitle>
                  </div>
                </DialogHeader>

                <div className="space-y-8 py-6">
                  {/* Overview */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center space-x-2">
                      <Target className="w-5 h-5 text-primary" />
                      <span>Visão Geral</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.detailedInfo.overview}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Symptoms */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center space-x-2">
                        <Brain className="w-5 h-5 text-accent" />
                        <span>Sinais e Sintomas</span>
                      </h3>
                      <ul className="space-y-2">
                        {service.detailedInfo.symptoms.map((symptom, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Approach */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center space-x-2">
                        <Heart className="w-5 h-5 text-primary" />
                        <span>Abordagem Terapêutica</span>
                      </h3>
                      <ul className="space-y-2">
                        {service.detailedInfo.approach.map((approach, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{approach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="grid md:grid-cols-2 gap-6 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="font-medium">Duração do Tratamento</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{service.detailedInfo.duration}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-accent" />
                        <span className="font-medium">Resultados Esperados</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{service.detailedInfo.results}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-primary/10">
                    <Button 
                      asChild
                      className="flex-1 btn-hover gradient-primary text-white border-0 shadow-lg shadow-primary/25"
                      onClick={() => setOpenModal(null)}
                    >
                      <Link href="#agendamento" className="flex items-center justify-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Agendar Consulta</span>
                      </Link>
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 btn-hover border-primary/30 hover:bg-primary/5"
                      onClick={() => setOpenModal(null)}
                    >
                      Fechar
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="gradient-sophisticated rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Não sabe qual especialidade é ideal para você?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Agende uma conversa inicial gratuita de 15 minutos para conhecermos suas necessidades 
              e encontrarmos a melhor abordagem terapêutica para seu momento de vida.
            </p>
            <Button 
              asChild
              size="lg"
              className="btn-hover gradient-primary text-white border-0 shadow-lg shadow-primary/25"
            >
              <Link href="#contato" className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Conversa Gratuita de 15min</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}