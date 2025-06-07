'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TailwindExamplesPage() {
  const [activeTab, setActiveTab] = useState('responsive');

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="link">
            ← Voltar para Home
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Exemplos de Tailwind CSS
        </h1>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            {['responsive', 'state', 'components', 'arbitrary', 'spacing'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Examples Content */}
        <div className="bg-white shadow-sm rounded-lg p-6">
          {/* Responsive Example */}
          {activeTab === 'responsive' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Exemplos Responsivos</h2>
              <p className="mb-4">
                Use prefixos responsivos para design mobile-first:
              </p>

              <div className="border p-4 rounded-lg mb-6">
                <div className="bg-blue-100 p-4 text-center rounded">
                  <div className="w-full md:w-1/2 lg:w-1/3 mx-auto bg-white p-4 rounded shadow-sm">
                    <p>
                      w-full em telas pequenas<br />
                      md:w-1/2 em telas médias<br />
                      lg:w-1/3 em telas grandes
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-gray-100 p-4 rounded text-center">
                    Item {item}
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <p className="font-mono text-sm bg-gray-100 p-2 rounded">
                  {'<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">'}
                </p>
              </div>
            </div>
          )}

          {/* State Variants Example */}
          {activeTab === 'state' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Variantes de Estado</h2>
              <p className="mb-4">Use variantes para elementos interativos:</p>

              <div className="space-y-4 mb-6">
                <button className="bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 active:bg-blue-700 px-4 py-2 text-white rounded">
                  Passe o mouse / Clique / Foque
                </button>

                <div className="p-4 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50 focus-within:ring-2 focus-within:ring-blue-300">
                  <input
                    type="text"
                    placeholder="Foque neste campo"
                    className="w-full border-none focus:outline-none bg-transparent"
                  />
                </div>

                <div className="group border border-gray-200 rounded p-4 hover:bg-blue-50">
                  <p className="text-gray-700 group-hover:text-blue-600">
                    Efeito de grupo - passe o mouse sobre esta caixa
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-mono text-sm bg-gray-100 p-2 rounded">
                  {'<button className="bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 active:bg-blue-700">'}
                </p>
              </div>
            </div>
          )}

          {/* Components Example */}
          {activeTab === 'components' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Componentes com @apply</h2>
              <p className="mb-4">
                Utilizamos componentes predefinidos para padrões comuns:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary">Botão Primário</button>
                  <button className="btn-secondary">Botão Secundário</button>
                </div>

                <div className="card p-4">
                  <h3 className="font-bold mb-2">Card Component</h3>
                  <p>Este é um exemplo do componente card.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-green">Verde</span>
                  <span className="badge badge-blue">Azul</span>
                </div>

                <div>
                  <a href="#" className="link">Link Component</a>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-mono text-sm bg-gray-100 p-2 rounded">
                  {'<button className="btn-primary">Botão Primário</button>'}
                </p>
              </div>
            </div>
          )}

          {/* Arbitrary Values Example */}
          {activeTab === 'arbitrary' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Valores Arbitrários</h2>
              <p className="mb-4">
                Use valores arbitrários para requisitos específicos:
              </p>

              <div className="space-y-8 mb-6">
                <div className="relative h-[200px] bg-gray-100 rounded">
                  <div className="absolute top-[20px] left-[30px] w-[100px] h-[50px] bg-blue-500 rounded"></div>
                  <div className="absolute top-[85px] left-[50px] w-[150px] h-[30px] bg-green-500 rounded"></div>
                  <div className="absolute bottom-[25px] right-[40px] w-[120px] h-[40px] bg-purple-500 rounded"></div>
                </div>

                <div className="grid grid-cols-[1fr_2fr_1fr] gap-4">
                  <div className="bg-blue-100 p-4 rounded text-center">1fr</div>
                  <div className="bg-blue-200 p-4 rounded text-center">2fr</div>
                  <div className="bg-blue-100 p-4 rounded text-center">1fr</div>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-mono text-sm bg-gray-100 p-2 rounded">
                  {'<div className="top-[20px] left-[30px] grid-cols-[1fr_2fr_1fr]">'}
                </p>
              </div>
            </div>
          )}

          {/* Spacing Example */}
          {activeTab === 'spacing' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Utilitários de Espaçamento</h2>
              <p className="mb-4">
                Use utilitários de espaçamento para layouts consistentes:
              </p>

              <div className="space-y-8 mb-6">
                <div className="space-y-4">
                  <div className="bg-blue-100 p-4 rounded">Item 1</div>
                  <div className="bg-blue-100 p-4 rounded">Item 2</div>
                  <div className="bg-blue-100 p-4 rounded">Item 3</div>
                </div>

                <div className="space-x-4 flex">
                  <div className="bg-green-100 p-4 rounded">Item A</div>
                  <div className="bg-green-100 p-4 rounded">Item B</div>
                  <div className="bg-green-100 p-4 rounded">Item C</div>
                </div>

                <div className="divide-y divide-gray-200">
                  <div className="py-4">Item Dividido 1</div>
                  <div className="py-4">Item Dividido 2</div>
                  <div className="py-4">Item Dividido 3</div>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-mono text-sm bg-gray-100 p-2 rounded">
                  {'<div className="space-y-4">...</div>'}
                </p>
                <p className="font-mono text-sm bg-gray-100 p-2 rounded mt-2">
                  {'<div className="space-x-4 flex">...</div>'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 