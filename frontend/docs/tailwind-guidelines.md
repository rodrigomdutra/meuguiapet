# Tailwind CSS Guidelines

Este documento contém orientações para uso do Tailwind CSS no projeto MeuGuia.Pet.

## Princípios Básicos

- Use uma abordagem "utility-first" com classes do Tailwind diretamente nos elementos
- Extraia componentes reutilizáveis com `@apply` somente quando necessário
- Mantenha consistência utilizando as classes e componentes definidos

## Responsividade

Use prefixos responsivos para design mobile-first:

```html
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Largura total em mobile, metade em telas médias, um terço em telas grandes -->
</div>
```

Breakpoints padrão:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Variantes de Estado

Use variantes para elementos interativos:

```html
<button class="bg-blue-500 hover:bg-blue-600 focus:ring-2">
  Clique aqui
</button>
```

Variantes comuns:
- `hover:` - ao passar o mouse
- `focus:` - ao focar o elemento
- `active:` - quando o elemento está ativo
- `disabled:` - quando o elemento está desabilitado
- `dark:` - para modo escuro

## Componentes Reutilizáveis

Usamos classes predefinidas para padrões comuns:

```html
<button class="btn-primary">Botão Primário</button>
<button class="btn-secondary">Botão Secundário</button>
<div class="card">Conteúdo do Card</div>
```

Defina novos componentes apenas quando necessário usando `@apply`:

```css
@layer components {
  .novo-componente {
    @apply px-4 py-2 bg-gray-100 rounded;
  }
}
```

## Valores Arbitrários

Use valores arbitrários para requisitos específicos:

```html
<div class="top-[117px] grid-cols-[1fr_2fr]">
  <!-- Posicionamento personalizado e layout de grid -->
</div>
```

## Utilitários de Espaçamento

Use utilitários de espaçamento para layouts consistentes:

```html
<div class="space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## Organização do Código

Ordem recomendada para as classes:
1. Layout (display, position, etc.)
2. Flexbox/Grid (flex, grid, etc.)
3. Tamanho/Espaçamento (width, height, padding, margin, etc.)
4. Tipografia (font, text, etc.)
5. Visual (bg, border, shadow, etc.)
6. Interatividade (hover, focus, etc.)

Exemplo:
```html
<div class="flex justify-between items-center p-4 text-lg font-bold bg-white hover:bg-gray-50">
  <!-- Conteúdo -->
</div>
```

## Extensões e Plugins

Este projeto utiliza os seguintes plugins do Tailwind:
- `@tailwindcss/typography`: Para estilos de conteúdo rico e blog
- `@tailwindcss/forms`: Para estilos de formulários mais consistentes

## Personalização

A personalização do tema está definida em `tailwind.config.js`. Consulte este arquivo para cores, fontes e espaçamentos personalizados. 