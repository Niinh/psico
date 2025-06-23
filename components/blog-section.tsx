"use client"

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  ArrowRight,
  X,
  MessageCircle,
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Copy,
  Eye,
  Heart
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'

export function BlogSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [openModal, setOpenModal] = useState<string | null>(null)
  const [shareOpen, setShareOpen] = useState(false)
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

  const articles = [
    {
      id: 'ansiedade-cotidiano',
      title: "Como Lidar com a Ansiedade no Cotidiano: 5 Técnicas Práticas",
      slug: "como-lidar-ansiedade-cotidiano-tecnicas-praticas",
      excerpt: "Descubra estratégias simples e eficazes para gerenciar a ansiedade em situações do dia a dia, baseadas na terapia cognitivo-comportamental.",
      content: `
        <p>A ansiedade é uma resposta natural do nosso corpo a situações de estresse, mas quando se torna excessiva, pode interferir significativamente na nossa qualidade de vida. Como psicóloga especializada em terapia cognitivo-comportamental, vejo diariamente como pequenas mudanças podem fazer uma grande diferença.</p>

        <h3>1. Técnica da Respiração 4-7-8</h3>
        <p>Esta técnica simples pode ser praticada em qualquer lugar:</p>
        <ul>
          <li>Inspire pelo nariz contando até 4</li>
          <li>Segure a respiração contando até 7</li>
          <li>Expire pela boca contando até 8</li>
          <li>Repita o ciclo 3-4 vezes</li>
        </ul>

        <h3>2. Reestruturação de Pensamentos</h3>
        <p>Quando perceber pensamentos ansiosos, questione-se:</p>
        <ul>
          <li>Este pensamento é realista?</li>
          <li>Qual a evidência real para esta preocupação?</li>
          <li>Como eu aconselharia um amigo nesta situação?</li>
        </ul>

        <h3>3. Técnica do 5-4-3-2-1</h3>
        <p>Para momentos de ansiedade aguda, use seus sentidos:</p>
        <ul>
          <li>5 coisas que você pode ver</li>
          <li>4 coisas que você pode tocar</li>
          <li>3 coisas que você pode ouvir</li>
          <li>2 coisas que você pode cheirar</li>
          <li>1 coisa que você pode saborear</li>
        </ul>

        <h3>4. Exercício Físico Regular</h3>
        <p>A atividade física libera endorfinas naturais que combatem a ansiedade. Mesmo uma caminhada de 10 minutos pode fazer diferença.</p>

        <h3>5. Estabeleça uma Rotina de Autocuidado</h3>
        <p>Dedique tempo diário para atividades que te relaxam: leitura, banho quente, meditação ou hobbies que você gosta.</p>

        <p><strong>Lembre-se:</strong> Se a ansiedade persistir ou interferir significativamente na sua vida, procure ajuda profissional. A terapia pode fornecer ferramentas personalizadas para sua situação específica.</p>
      `,
      image: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-01-15",
      readTime: "5 min",
      category: "Ansiedade",
      views: 1247,
      likes: 89,
      metaDescription: "Aprenda 5 técnicas práticas baseadas na TCC para gerenciar a ansiedade no dia a dia. Estratégias simples e eficazes para uma vida mais tranquila."
    },
    {
      id: 'relacionamentos-saudaveis',
      title: "Construindo Relacionamentos Saudáveis: Comunicação e Limites",
      slug: "construindo-relacionamentos-saudaveis-comunicacao-limites",
      excerpt: "Explore os pilares fundamentais para relacionamentos duradouros e satisfatórios, incluindo comunicação assertiva e estabelecimento de limites saudáveis.",
      content: `
        <p>Relacionamentos saudáveis são a base do nosso bem-estar emocional. Como terapeuta de casais e relacionamentos, observo que os mesmos padrões se repetem em relacionamentos bem-sucedidos.</p>

        <h3>Os Pilares da Comunicação Assertiva</h3>
        <p>A comunicação assertiva é fundamental para relacionamentos saudáveis:</p>
        <ul>
          <li><strong>Seja claro e direto:</strong> Expresse suas necessidades sem rodeios</li>
          <li><strong>Use "eu" ao invés de "você":</strong> "Eu me sinto..." ao invés de "Você sempre..."</li>
          <li><strong>Escute ativamente:</strong> Dê atenção total ao que o outro está dizendo</li>
          <li><strong>Valide os sentimentos:</strong> Reconheça as emoções do outro, mesmo discordando</li>
        </ul>

        <h3>A Importância dos Limites Saudáveis</h3>
        <p>Estabelecer limites não é egoísmo, é autocuidado:</p>
        <ul>
          <li>Defina claramente o que é aceitável para você</li>
          <li>Comunique seus limites de forma respeitosa</li>
          <li>Seja consistente na manutenção dos limites</li>
          <li>Respeite também os limites do outro</li>
        </ul>

        <h3>Resolvendo Conflitos de Forma Construtiva</h3>
        <p>Conflitos são normais, o importante é como os resolvemos:</p>
        <ul>
          <li>Foque no problema, não na pessoa</li>
          <li>Busque soluções em conjunto</li>
          <li>Evite generalizações como "sempre" e "nunca"</li>
          <li>Saiba quando fazer uma pausa na discussão</li>
        </ul>

        <h3>Cultivando a Intimidade Emocional</h3>
        <p>A intimidade vai além do físico:</p>
        <ul>
          <li>Compartilhe vulnerabilidades de forma gradual</li>
          <li>Demonstre interesse genuíno pela vida do outro</li>
          <li>Celebre conquistas juntos</li>
          <li>Ofereça apoio nos momentos difíceis</li>
        </ul>

        <p><strong>Conclusão:</strong> Relacionamentos saudáveis requerem trabalho contínuo de ambas as partes. Se você está enfrentando dificuldades relacionais, a terapia de casal pode oferecer ferramentas valiosas para fortalecer sua conexão.</p>
      `,
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-01-08",
      readTime: "7 min",
      category: "Relacionamentos",
      views: 892,
      likes: 67,
      metaDescription: "Descubra como construir relacionamentos saudáveis através da comunicação assertiva e estabelecimento de limites. Dicas práticas de uma terapeuta de casais."
    },
    {
      id: 'autoestima-autocompaixao',
      title: "Autoestima vs Autocompaixão: Qual a Diferença e Por Que Importa",
      slug: "autoestima-vs-autocompaixao-diferenca-importancia",
      excerpt: "Entenda a diferença entre autoestima e autocompaixão, e descubra por que desenvolver autocompaixão pode ser mais benéfico para sua saúde mental.",
      content: `
        <p>Muitas pessoas confundem autoestima com autocompaixão, mas são conceitos diferentes que impactam nossa saúde mental de formas distintas. Como psicóloga, vejo frequentemente os benefícios de cultivar a autocompaixão.</p>

        <h3>O Que É Autoestima?</h3>
        <p>A autoestima está relacionada à avaliação que fazemos de nós mesmos:</p>
        <ul>
          <li>Baseada em comparações com outros</li>
          <li>Pode flutuar dependendo de sucessos e fracassos</li>
          <li>Foca em "ser melhor que" ou "ser especial"</li>
          <li>Pode levar ao narcisismo ou arrogância</li>
        </ul>

        <h3>O Que É Autocompaixão?</h3>
        <p>A autocompaixão, segundo Kristin Neff, tem três componentes:</p>
        <ul>
          <li><strong>Bondade consigo mesmo:</strong> Tratar-se com gentileza nos momentos difíceis</li>
          <li><strong>Humanidade comum:</strong> Reconhecer que o sofrimento faz parte da experiência humana</li>
          <li><strong>Mindfulness:</strong> Observar pensamentos e sentimentos sem julgamento</li>
        </ul>

        <h3>Por Que a Autocompaixão É Mais Benéfica?</h3>
        <p>Pesquisas mostram que a autocompaixão oferece benefícios mais estáveis:</p>
        <ul>
          <li>Reduz ansiedade e depressão</li>
          <li>Aumenta a motivação para mudanças positivas</li>
          <li>Melhora relacionamentos interpessoais</li>
          <li>Promove resiliência emocional</li>
          <li>Não depende de comparações externas</li>
        </ul>

        <h3>Como Desenvolver Autocompaixão</h3>
        <p>Práticas simples para cultivar autocompaixão:</p>
        <ul>
          <li><strong>Diálogo interno gentil:</strong> Fale consigo como falaria com um bom amigo</li>
          <li><strong>Meditação da autocompaixão:</strong> Dedique alguns minutos diários para esta prática</li>
          <li><strong>Reconheça a humanidade comum:</strong> Lembre-se que todos cometem erros</li>
          <li><strong>Pratique mindfulness:</strong> Observe seus pensamentos sem se identificar com eles</li>
        </ul>

        <h3>Exercício Prático: A Carta da Autocompaixão</h3>
        <p>Quando estiver passando por um momento difícil:</p>
        <ol>
          <li>Escreva uma carta para si mesmo como se fosse um amigo querido</li>
          <li>Reconheça sua dor sem minimizá-la</li>
          <li>Lembre-se que você não está sozinho nesta experiência</li>
          <li>Ofereça palavras de encorajamento e compreensão</li>
        </ol>

        <p><strong>Reflexão Final:</strong> Desenvolver autocompaixão é um processo gradual. Seja paciente consigo mesmo nesta jornada. Se precisar de apoio, a terapia pode ser um espaço seguro para explorar e desenvolver essas habilidades.</p>
      `,
      image: "https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-01-02",
      readTime: "6 min",
      category: "Autoestima",
      views: 1156,
      likes: 94,
      metaDescription: "Entenda a diferença entre autoestima e autocompaixão. Descubra por que a autocompaixão é mais benéfica para sua saúde mental e como desenvolvê-la."
    }
  ]

  const handleShare = (platform: string, article: any) => {
    const url = `${window.location.origin}/blog/${article.slug}`
    const text = `${article.title} - ${article.excerpt}`
    
    let shareUrl = ''
    
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`
        break
      case 'instagram':
        // Instagram doesn't support direct URL sharing, so we copy to clipboard
        navigator.clipboard.writeText(`${text} ${url}`)
        toast.success('Link copiado! Cole no Instagram Stories ou Bio.')
        return
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
        break
      case 'copy':
        navigator.clipboard.writeText(url)
        toast.success('Link copiado para a área de transferência!')
        return
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }

  return (
    <section id="blog" className="py-24 bg-sophisticated" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center space-y-6 mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <Badge variant="outline" className="text-primary border-primary">
            Blog & Artigos
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Conteúdo para seu 
            <span className="text-gradient"> bem-estar mental</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Artigos baseados em evidências científicas para te ajudar a compreender melhor 
            sua saúde mental e desenvolver habilidades para uma vida mais equilibrada.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article, index) => (
            <Dialog key={article.id} open={openModal === article.id} onOpenChange={(open) => setOpenModal(open ? article.id : null)}>
              <DialogTrigger asChild>
                <Card 
                  className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-primary/10 bg-background/50 backdrop-blur-sm card-hover ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={240}
                      className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-primary/90 text-white">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{article.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-3 h-3" />
                          <span>{article.likes}</span>
                        </div>
                      </div>
                      
                      <Button 
                        size="sm"
                        className="btn-hover bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                      >
                        <span>Ler artigo</span>
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden">
                <DialogHeader className="space-y-4 pb-6 border-b border-primary/10">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3 flex-1">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {article.category}
                      </Badge>
                      <DialogTitle className="text-2xl md:text-3xl font-serif text-primary leading-tight">
                        {article.title}
                      </DialogTitle>
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>Yanca Pina</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.date).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime} de leitura</span>
                        </div>
                      </div>
                    </div>
                    

                  </div>
                </DialogHeader>

                <div className="py-6">
                  <div className="relative mb-8">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={800}
                      height={400}
                      className="object-cover w-full h-64 rounded-lg"
                    />
                  </div>
                  
                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-primary prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                  
                  <Separator className="my-8" />
                  
                  <div className="flex items-center justify-between">
                    <Dialog open={shareOpen} onOpenChange={setShareOpen}>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Share2 className="w-4 h-4 mr-2" />
                          Compartilhar
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Compartilhar Artigo</DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-2 gap-4 py-4">
                          <Button
                            variant="outline"
                            onClick={() => handleShare('whatsapp', article)}
                            className="flex items-center space-x-2 hover:bg-green-50 hover:border-green-200"
                          >
                            <MessageCircle className="w-4 h-4 text-green-600" />
                            <span>WhatsApp</span>
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => handleShare('instagram', article)}
                            className="flex items-center space-x-2 hover:bg-pink-50 hover:border-pink-200"
                          >
                            <Instagram className="w-4 h-4 text-pink-600" />
                            <span>Instagram</span>
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => handleShare('linkedin', article)}
                            className="flex items-center space-x-2 hover:bg-blue-50 hover:border-blue-200"
                          >
                            <Linkedin className="w-4 h-4 text-blue-600" />
                            <span>LinkedIn</span>
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => handleShare('facebook', article)}
                            className="flex items-center space-x-2 hover:bg-blue-50 hover:border-blue-200"
                          >
                            <Facebook className="w-4 h-4 text-blue-700" />
                            <span>Facebook</span>
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => handleShare('twitter', article)}
                            className="flex items-center space-x-2 hover:bg-sky-50 hover:border-sky-200"
                          >
                            <Twitter className="w-4 h-4 text-sky-500" />
                            <span>Twitter</span>
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => handleShare('copy', article)}
                            className="flex items-center space-x-2 hover:bg-gray-50 hover:border-gray-200"
                          >
                            <Copy className="w-4 h-4 text-gray-600" />
                            <span>Copiar Link</span>
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Button 
                      asChild
                      className="btn-hover gradient-primary text-gray-800 drop-shadow-lg"
                      onClick={() => setOpenModal(null)}
                    >
                      <Link href="#agendamento" className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Agendar Consulta</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="gradient-sophisticated rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Quer receber mais conteúdo sobre saúde mental?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Siga-me nas redes sociais para dicas diárias de bem-estar mental e 
              seja o primeiro a saber sobre novos artigos e conteúdos exclusivos.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                asChild
                variant="outline"
                className="btn-hover border-primary/30 hover:bg-primary/5"
              >
                <a 
                  href="https://instagram.com/yancapina.psi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="btn-hover border-primary/30 hover:bg-primary/5"
              >
                <a 
                  href="https://linkedin.com/in/yancapina" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}