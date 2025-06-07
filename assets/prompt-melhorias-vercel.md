# Prompt para Melhorias no meuguia.pet - Foco em Outreach para Veterinários

## Contexto do Projeto

O site meuguia.pet já foi desenvolvido com base no prompt anterior e está em operação. Agora, estamos implementando uma estratégia de outreach para veterinários brasileiros, que precisará de suporte técnico na plataforma. O objetivo é desenvolver funcionalidades que facilitem a participação de veterinários como especialistas verificados, oferecendo-lhes perfis profissionais em troca de validação científica do conteúdo.

## Requisitos para Evolução da Plataforma

### 1. Sistema de Perfis e Diretório de Especialistas

Precisamos implementar um diretório completo de veterinários parceiros com:

- **Esquema no Sanity CMS**:
  - Modelo de dados para perfis profissionais com campos para credenciais, especialidades (taxonomia), histórico profissional
  - Sistema de geocodificação para clínicas/consultórios
  - Galeria de imagens para fotos do profissional e da clínica
  - Campo para horários de atendimento e serviços oferecidos

- **Frontend para Diretório**:
  - Página de busca com filtros por especialidade, localização e avaliações
  - Mapa interativo para encontrar veterinários próximos (Google Maps API)
  - Páginas de perfil individuais com informações de contato e agenda
  - Sistema de agendamento de consultas integrado (ou redirecionamento para WhatsApp Business)

### 2. Fluxo de Validação de Conteúdo

Implementar um sistema de workflow para revisão e validação de conteúdo:

- **Painel de Revisão para Veterinários**:
  - Interface simplificada no Sanity para revisores não-técnicos
  - Sistema de anotações inline para feedback em trechos específicos
  - Opções claras: "Aprovar", "Aprovar com sugestões", "Solicitar alterações"
  - Editor WYSIWYG para comentários e correções

- **Rastreamento de Status**:
  - Sistema de status para conteúdo: "Rascunho", "Em revisão", "Aprovado", "Publicado"
  - Histórico de revisões com registro de alterações e comentários
  - Notificações por email para novas solicitações de revisão e feedback aplicado

### 3. Badges e Atribuições de Especialistas

Desenvolver um sistema visual de credibilidade:

- **Componentes de UI**:
  - Badge "Verificado por Especialista" com tooltip mostrando o revisor
  - Componente de autor/revisor com foto, mini-bio e link para perfil completo
  - Seção "Especialistas que contribuíram" nos artigos com múltiplos revisores

- **Implementação Técnica**:
  - Schema.org markup aprimorado (MedicalWebPage, Person, Review)
  - Componente React reutilizável para badges em diferentes contextos
  - Sistema de atribuição automática baseado no fluxo de aprovação

### 4. Portal do Colaborador Veterinário

Criar uma área restrita para veterinários parceiros:

- **Dashboard Personalizado**:
  - Visão geral de contribuições e estatísticas de impacto
  - Lista de artigos pendentes para revisão com filtros por especialidade
  - Histórico de conteúdos revisados com métricas de performance
  - Feedback dos leitores sobre conteúdos que o veterinário validou

- **Sistema de Notificações**:
  - Alertas por email e push para novos conteúdos para revisão
  - Lembretes para artigos pendentes
  - Notificações de engajamento (visualizações, perguntas de leitores)
  - Opções de preferência para frequência e tipos de notificações

### 5. Sistema de Perguntas e Respostas

Implementar funcionalidade para interação direta:

- **Q&A em Artigos**:
  - Seção de perguntas moderadas ao final dos artigos
  - Sistema para veterinários parceiros responderem dúvidas
  - Upvotes e "Marcar como útil" para respostas
  - Notificações para usuários quando suas perguntas forem respondidas

- **Aspectos Técnicos**:
  - API endpoints para sistema de perguntas e respostas
  - Moderação automatizada com IA para filtrar spam
  - Indexação de Q&A para SEO (FAQPage schema)
  - Cache eficiente para carregamento rápido de threads de discussão

### 6. Analytics e Métricas para Parceiros

Desenvolver sistema de insights para veterinários:

- **Dashboard de Métricas**:
  - Visualizações de perfil e taxa de cliques para contato
  - Engajamento nos artigos revisados (tempo de leitura, compartilhamentos)
  - Comparativos anônimos com outros especialistas
  - Mapa de calor de localização dos usuários que acessam seu perfil

- **Relatórios Automatizados**:
  - Relatório mensal via email com métricas principais
  - Sugestões baseadas em dados para aumentar visibilidade
  - Insights sobre tópicos populares na especialidade do veterinário
  - Certificados digitais de contribuição para o conhecimento pet

### 7. Integração com Ferramentas Existentes

Conectar o sistema de outreach com funcionalidades já desenvolvidas:

- **Carteira de Vacinação Digital**:
  - Opção para vincular registros a veterinários parceiros
  - Notificações contextuais sobre saúde baseadas em conteúdo validado
  - Recomendações personalizadas de especialistas próximos
  - Sistema de lembretes para vacinação com opção de agendamento

- **Calculadoras e Ferramentas**:
  - Assinatura de especialista nas recomendações das calculadoras
  - Customização de parâmetros das ferramentas por veterinários
  - Versões white-label das ferramentas para clínicas parceiras
  - Dados agregados anônimos para pesquisa veterinária

## Requisitos de UX/UI

- **Experiência do Veterinário**:
  - Onboarding simplificado com tutorial interativo
  - Interface intuitiva para revisão de conteúdo (máximo 3 cliques para aprovar)
  - Painel administrativo com design limpo e focado em ações principais
  - Versão mobile otimizada para revisões rápidas em qualquer dispositivo

- **Experiência do Usuário**:
  - Indicadores claros de conteúdo verificado em todo o site
  - Perfis de especialistas acessíveis e ricos em informação
  - Fácil navegação entre conteúdo e especialistas relacionados
  - Transparência sobre o processo de validação científica

## Considerações Técnicas

- **Performance**:
  - Carregamento otimizado do diretório de especialistas (virtualização para listas longas)
  - Pré-carregamento inteligente de dados de perfis mais acessados
  - Compressão e otimização de imagens de perfil e clínicas
  - Cache estratégico para reduzir chamadas ao banco de dados

- **Segurança**:
  - Verificação em duas etapas para contas de especialistas
  - Proteção contra perfis falsos (verificação de credenciais)
  - Políticas de privacidade específicas para dados profissionais
  - Logs detalhados de atividades de revisão para auditoria

- **Escalabilidade**:
  - Arquitetura preparada para 500+ veterinários ativos
  - Indexação eficiente para busca no diretório
  - Isolamento de recursos para evitar gargalos no site principal
  - Monitoramento específico de endpoints relacionados ao sistema de outreach

## Cronograma Sugerido

1. **Fase 1 (3 semanas)**: Implementação do esquema de dados e perfis de veterinários no Sanity
2. **Fase 2 (2 semanas)**: Desenvolvimento do frontend do diretório e páginas de perfil
3. **Fase 3 (3 semanas)**: Sistema de fluxo de trabalho de revisão e validação
4. **Fase 4 (2 semanas)**: Portal do colaborador e dashboard de métricas
5. **Fase 5 (2 semanas)**: Integrações com ferramentas existentes e testes finais

## Priorização

Entendemos que este é um projeto de evolução e sugerimos a seguinte ordem de prioridade:

1. Sistema de perfis e diretório (essencial para outreach)
2. Fluxo de validação de conteúdo (valor central da parceria)
3. Badges e atribuições de especialistas (credibilidade visível)
4. Portal do colaborador (experiência do veterinário)
5. Sistema de perguntas e respostas (engajamento adicional)
6. Analytics para parceiros (retenção de longo prazo)
7. Integrações avançadas (valor agregado)

Esta especificação complementa o desenvolvimento já realizado, focando nas funcionalidades necessárias para suportar a estratégia de outreach para veterinários e transformar suas contribuições em um diferencial técnico tangível, reforçando o posicionamento único do meuguia.pet como fonte autoritativa de informação pet validada cientificamente. 