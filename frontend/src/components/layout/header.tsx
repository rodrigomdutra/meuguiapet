"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  {
    name: "Categorias",
    href: "/categorias",
    submenu: [
      { name: "Cuidados", href: "/categoria/cuidados" },
      { name: "Alimentação", href: "/categoria/alimentacao" },
      { name: "Acessórios", href: "/categoria/acessorios" },
      { name: "Banho e Tosa", href: "/categoria/banho-e-tosa" },
      { name: "Saúde", href: "/categoria/saude" },
      { name: "Comportamento", href: "/categoria/comportamento" },
      { name: "Nomes", href: "/categoria/nomes" },
      { name: "Custos", href: "/categoria/custos" },
      { name: "Pets Exóticos", href: "/categoria/exoticos" },
      { name: "Pet Friendly", href: "/categoria/pet-friendly" },
    ],
  },
  { name: "Especialistas", href: "/especialistas" },
  { name: "Ferramentas", href: "/ferramentas" },
  { name: "Blog", href: "/blog" },
  { name: "Sobre", href: "/sobre" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header className="bg-white shadow-sm">
      {/* Top bar with logo and search */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="sr-only">meuguia.pet</span>
            <Image
              src="/placeholder-logo.svg"
              alt="meuguia.pet Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-4">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Buscar no meuguia.pet..."
                className="w-full rounded-full border border-gray-300 pl-4 pr-10 py-2 focus:border-primary-green focus:outline-none focus:ring-1 focus:ring-primary-green"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-primary-green"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
            <Button variant="green">Entrar</Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-gray-200 bg-white">
        <div className="container-custom">
          <div className="flex h-12 items-center justify-between">
            <div className="hidden md:flex md:space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center text-gray-700 hover:text-primary-green"
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-primary-green"
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.submenu && activeDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                      <div className="py-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex md:hidden">
              <Button variant="outline" size="sm" className="ml-auto">
                <Search className="h-4 w-4 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-lg">
            <div className="flex items-center justify-between p-4">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">meuguia.pet</span>
                <Image
                  src="/placeholder-logo.svg"
                  alt="meuguia.pet Logo"
                  width={140}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                className="rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fechar menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="p-4">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Buscar no meuguia.pet..."
                  className="w-full rounded-full border border-gray-300 pl-4 pr-10 py-2 focus:border-primary-green focus:outline-none focus:ring-1 focus:ring-primary-green"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-primary-green"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-1 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex w-full items-center justify-between rounded-md py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                          <ChevronDown
                            className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                className="block rounded-md py-2 pl-4 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-primary-green"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subitem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block rounded-md py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-primary-green"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Button variant="green" className="w-full">
                  Entrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 