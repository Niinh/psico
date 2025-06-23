"use client"

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, Apple as WhatsApp, Video, MapPin } from 'lucide-react'
import { toast } from 'sonner'

export function AppointmentSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    modality: '',
    preferred_time: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast.success("Agendamento solicitado com sucesso! Entraremos em contato em até 2 horas.")
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        modality: '',
        preferred_time: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 2000)
  }

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de agendar uma consulta com a psicóloga Yanca Pina. Meu nome é ${formData.name || '[Seu Nome]'}.`
  )

  const availableSlots = [
    "Segunda 09:00 - 18:00",
    "Terça 09:00 - 18:00", 
    "Quarta 09:00 - 18:00",
    "Quinta 09:00 - 18:00",
    "Sexta 09:00 - 16:00",
    "Sábado 09:00 - 12:00"
  ]

  return (
    <section id="agendamento" className="py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center space-y-6 mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <Badge variant="outline" className="text-primary border-primary">
            Agendamento
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Dê o primeiro passo para sua 
            <span className="text-gradient"> transformação</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Agende sua consulta de forma simples e rápida. Responderemos em até 2 horas 
            para confirmar sua sessão e esclarecer qualquer dúvida.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className={`space-y-6 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h3 className="text-xl font-semibold mb-6">Formas de Contato</h3>
            
            {/* WhatsApp */}
            <Card className="card-hover border-green-200 dark:border-green-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <WhatsApp className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <p className="text-sm text-muted-foreground">Resposta rápida</p>
                  </div>
                </div>
                <Button 
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <a 
                    href={`https://wa.me/5511999999999?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <WhatsApp className="w-4 h-4" />
                    <span>(11) 99999-9999</span>
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Telefone</h4>
                    <p className="text-sm text-muted-foreground">Seg-Sex 9h às 18h</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  (11) 3456-7890
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">E-mail</h4>
                    <p className="text-sm text-muted-foreground">24-48h resposta</p>
                  </div>
                </div>
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full"
                >
                  <a href="mailto:contato@yancapina.com.br">
                    <Mail className="w-4 h-4 mr-2" />
                    contato@yancapina.com.br
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Available Slots */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Horários Disponíveis</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {availableSlots.map((slot, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{slot}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Appointment Form */}
          <div className={`lg:col-span-2 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Consulta</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="service">Tipo de Serviço *</Label>
                      <Select onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">Terapia Individual</SelectItem>
                          <SelectItem value="casal">Terapia de Casal</SelectItem>
                          <SelectItem value="familia">Terapia Familiar</SelectItem>
                          <SelectItem value="consulta">Primeira Consulta</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="modality">Modalidade *</Label>
                      <Select onValueChange={(value) => handleInputChange('modality', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a modalidade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="online">Online</SelectItem>
                          <SelectItem value="presencial">Presencial</SelectItem>
                          <SelectItem value="ambos">Sem preferência</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferred_time">Horário Preferencial</Label>
                    <Select onValueChange={(value) => handleInputChange('preferred_time', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione seu horário preferencial" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manha">Manhã (9h às 12h)</SelectItem>
                        <SelectItem value="tarde">Tarde (13h às 17h)</SelectItem>
                        <SelectItem value="noite">Noite (18h às 20h)</SelectItem>
                        <SelectItem value="sabado">Sábado manhã</SelectItem>
                        <SelectItem value="flexivel">Horário flexível</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem (Opcional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Conte um pouco sobre o que te motivou a buscar terapia..."
                      rows={4}
                    />
                  </div>

                  {/* Privacy Note */}
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Privacidade:</strong> Todas as informações são tratadas com total confidencialidade 
                      conforme o código de ética profissional. Seus dados não serão compartilhados com terceiros.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full btn-hover gradient-primary text-gray-800 drop-shadow-lg"
                    disabled={isSubmitting}
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-4 h-4 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 mr-2" />
                        Solicitar Agendamento
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className={`mt-16 grid md:grid-cols-3 gap-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <Card className="text-center">
            <CardContent className="p-6">
              <Video className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Consulta Online</h4>
              <p className="text-sm text-muted-foreground">
                Atendimento por videoconferência com a mesma qualidade do presencial
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Localização</h4>
              <p className="text-sm text-muted-foreground">
                Consultório no centro de São Paulo, próximo ao metrô
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Confirmação Rápida</h4>
              <p className="text-sm text-muted-foreground">
                Resposta em até 2 horas para confirmar sua consulta
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}