import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = {
  categories: [
    { name: "Cuidados", href: "/categoria/cuidados" },
    { name: "Alimentação", href: "/categoria/alimentacao" },
    { name: "Acessórios", href: "/categoria/acessorios" },
    { name: "Banho e Tosa", href: "/categoria/banho-e-tosa" },
    { name: "Saúde", href: "/categoria/saude" },
  ],
  tools: [
    { name: "Carteira de Vacinação", href: "/ferramentas/carteira-vacinacao" },
    { name: "Calculadora de Nutrição", href: "/ferramentas/calculadora-nutricao" },
    { name: "Planejador Financeiro", href: "/ferramentas/planejador-financeiro" },
  ],
  company: [
    { name: "Sobre", href: "/sobre" },
    { name: "Blog", href: "/blog" },
    { name: "Nossos Especialistas", href: "/especialistas" },
    { name: "Contato", href: "/contato" },
  ],
  legal: [
    { name: "Termos de Uso", href: "/termos" },
    { name: "Política de Privacidade", href: "/privacidade" },
    { name: "Cookies", href: "/cookies" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      
      {/* Newsletter Section */}
      <div className="bg-primary-green py-10">
        <div className="container-custom">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="mb-6 md:mb-0 md:max-w-md">
              <h3 className="text-lg font-bold mb-2">Assine nossa newsletter</h3>
              <p className="text-white/80">
                Receba novidades sobre cuidados com pets diretamente no seu email.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
                <Button className="bg-secondary-yellow hover:bg-secondary-yellow/90 text-neutral-900">
                  Assinar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/placeholder-logo.svg"
                alt="meuguia.pet Logo"
                width={150}
                height={35}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              A primeira plataforma de conteúdo pet genuinamente brasileira, com validação científica e contextualização local.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-secondary-yellow">Categorias</h3>
                <ul className="mt-4 space-y-3">
                  {navigation.categories.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-400 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/categorias" className="text-sm text-gray-400 hover:text-white underline">
                      Ver todas as categorias
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-secondary-yellow">Ferramentas</h3>
                <ul className="mt-4 space-y-3">
                  {navigation.tools.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-400 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/ferramentas" className="text-sm text-gray-400 hover:text-white underline">
                      Ver todas as ferramentas
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-secondary-yellow">Empresa</h3>
                <ul className="mt-4 space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-400 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-secondary-yellow">Legal</h3>
                <ul className="mt-4 space-y-3">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-400 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-400 text-center">
            &copy; {new Date().getFullYear()} meuguia.pet. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
} 