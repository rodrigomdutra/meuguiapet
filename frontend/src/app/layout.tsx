import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Meu Guia Pet',
  description: 'Conteúdo de qualidade sobre cuidados com pets, validado por especialistas veterinários.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                MeuGuia.Pet
              </Link>
              
              <nav className="hidden md:flex gap-6">
                <Link href="/" className="font-medium hover:text-blue-600">
                  Home
                </Link>
                <Link href="/artigos" className="font-medium hover:text-blue-600">
                  Artigos
                </Link>
                <Link href="/categorias" className="font-medium hover:text-blue-600">
                  Categorias
                </Link>
                <Link href="/especialistas" className="font-medium hover:text-blue-600">
                  Especialistas
                </Link>
                <Link href="/exemplos" className="font-medium hover:text-blue-600">
                  Exemplos Tailwind
                </Link>
              </nav>
              
              <div className="md:hidden">
                {/* Mobile menu button */}
                <button className="p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu (simplified, would need JS for toggle functionality) */}
          <div className="hidden md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 rounded-md font-medium hover:bg-blue-50 hover:text-blue-600">
                Home
              </Link>
              <Link href="/artigos" className="block px-3 py-2 rounded-md font-medium hover:bg-blue-50 hover:text-blue-600">
                Artigos
              </Link>
              <Link href="/categorias" className="block px-3 py-2 rounded-md font-medium hover:bg-blue-50 hover:text-blue-600">
                Categorias
              </Link>
              <Link href="/especialistas" className="block px-3 py-2 rounded-md font-medium hover:bg-blue-50 hover:text-blue-600">
                Especialistas
              </Link>
              <Link href="/exemplos" className="block px-3 py-2 rounded-md font-medium hover:bg-blue-50 hover:text-blue-600">
                Exemplos Tailwind
              </Link>
            </div>
          </div>
        </header>
        
        {children}
        
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-xl font-bold mb-4">MeuGuia.Pet</h3>
                <p className="text-gray-400 mb-4">
                  Conteúdo de qualidade sobre cuidados com pets, validado por especialistas veterinários.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/artigos" className="text-gray-400 hover:text-white">
                      Artigos
                    </Link>
                  </li>
                  <li>
                    <Link href="/categorias" className="text-gray-400 hover:text-white">
                      Categorias
                    </Link>
                  </li>
                  <li>
                    <Link href="/especialistas" className="text-gray-400 hover:text-white">
                      Especialistas
                    </Link>
                  </li>
                  <li>
                    <Link href="/exemplos" className="text-gray-400 hover:text-white">
                      Exemplos Tailwind
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Contato</h3>
                <p className="text-gray-400 mb-2">
                  contato@meuguia.pet
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} MeuGuia.Pet. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 