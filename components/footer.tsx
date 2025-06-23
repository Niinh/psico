"use client"

import Link from 'next/link'
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Instagram,
  Linkedin,
  Youtube,
  Calendar,
  Shield,
  CheckCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contato" className="bg-muted/30 border-t pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="md:col-span-2 space-y-6">
            <Link 
              href="#inicio" 
              className="flex items-center space-x-2 text-xl font-serif font-bold text-primary"
            >
              <Heart className="w-6 h-6" />
              <span>Yanca Pina</span>
            </Link>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Psicóloga especializada em terapia cognitivo-comportamental, oferecendo 
              atendimento humanizado e personalizado para seu bem-estar emocional.
            </p>
            
            {/* CRP */}
            <div className="flex items-center space-x-2 text-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">CRP 06/123456</span>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="https://www.instagram.com/psi.yancapinna" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="https://linkedin.com/in/yancapina" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="https://youtube.com/@yancapina" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Contato</h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">(11) 3456-7890</div>
                  <div className="text-sm text-muted-foreground">Consultório</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">(11) 99999-9999</div>
                  <div className="text-sm text-muted-foreground">WhatsApp</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:contato@yancapina.com.br"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    contato@yancapina.com.br
                  </a>
                  <div className="text-sm text-muted-foreground">E-mail profissional</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">São Paulo - SP</div>
                  <div className="text-sm text-muted-foreground">
                    Região central, próximo ao metrô
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Hours */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Informações</h4>
            
            {/* Office Hours */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-medium text-sm">Horários de Atendimento</span>
              </div>
              <div className="text-sm text-muted-foreground space-y-1 ml-6">
                <div>Segunda à Quinta: 9h às 18h</div>
                <div>Sexta: 9h às 16h</div>
                <div>Sábado: 9h às 12h</div>
                <div>Domingo: Fechado</div>
              </div>
            </div>
            
            {/* Certifications */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="font-medium text-sm">Certificações</span>
              </div>
              <div className="text-sm text-muted-foreground space-y-1 ml-6">
                <div>• Terapia Cognitivo-Comportamental</div>
                <div>• Mindfulness e Meditação</div>
                <div>• Terapia de Casal</div>
                <div>• Atendimento Online</div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} Yanca Pina - Psicóloga. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center space-x-6">
            <Link 
              href="/politica-privacidade" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link 
              href="/termos-uso" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Termos de Uso
            </Link>
            <Button 
              asChild
              size="sm"
              className="btn-hover gradient-primary text-gray-800 drop-shadow-lg w-full md:w-auto"
            >
              <Link href="#agendamento" className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>Agendar</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Professional Disclaimer */}
        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground text-center">
            Este site é exclusivamente informativo e não substitui consulta, diagnóstico ou tratamento médico. 
            Sempre consulte um profissional de saúde qualificado para questões relacionadas à sua saúde mental.
          </p>
        </div>
      </div>
    </footer>
  )
}