# InvestSmart - Aplicativo de Recomendações de Investimentos

**Global Solution FIAP 2025** - **Mobile Development and IoT**.

## Sobre o Projeto

O InvestSmart é um assessor virtual de investimentos projetado para pessoas físicas com patrimônio entre R$ 10.000 e R$ 100.000. O aplicativo oferece recomendações personalizadas de investimentos baseadas no perfil de risco do usuário e seus objetivos financeiros.

## Integrantes do Grupo

- **[Ian Xavier Kuraoka]**       - RM98860
- **[Aksel Viktor Caminha Rae]** - RM99011
- **[Miguel Ruan de Souza]**     - RM551239
- **[Arthur Wollmann Petrin]**   - RM98735

## Tecnologias Utilizadas

- **React Native** com **Expo**
- **TypeScript** para tipagem estática
- **React Navigation** para navegação (Drawer Navigation)
- **AsyncStorage** para persistência de dados local
- **Expo Vector Icons** para ícones

## Funcionalidades Implementadas

### Requisitos Atendidos:

#### Tela Home com Navegação (25 pts)
- **Drawer Navigation** implementada com React Navigation
- Navegação fluida entre todas as telas do aplicativo
- Interface intuitiva e bem organizada

#### Tela de Login com AsyncStorage (25 pts)
- Sistema de login completo e funcional
- **Persistência de dados** com AsyncStorage
- **Dados de teste disponíveis:**
  - **Email:** `usuario@teste.com`
  - **Senha:** `123456`
- Validação de campos e tratamento de erros
- Sistema de cadastro de novos usuários

#### Sistema de Telas Completo (40 pts)
1. **Home** - Tela inicial com resumo e navegação
2. **Login** - Autenticação de usuários
3. **Cadastro** - Registro de novos usuários
4. **Recomendações** - Sistema de recomendações personalizadas
5. **Portfólio** - Visualização de investimentos
6. **Perfil** - Configuração de preferências do investidor

#### Arquitetura e Organização (10 pts)
- Estrutura de pastas bem organizada:
  ```
  src/
  ├── Components/     # Componentes reutilizáveis
  ├── Screen/         # Telas do aplicativo
  ├── data/          # Dados mockados
  └── types/         # Definições de tipos TypeScript
  ```
- Componentes reutilizáveis e código limpo
- Tipagem TypeScript em todo o projeto

## Características Específicas do Negócio

### Público-Alvo
- Pessoas físicas com patrimônio entre **R$ 10.000 e R$ 100.000**
- Investidores iniciantes e intermediários
- Usuários que buscam orientação profissional para investimentos

### Tipos de Investimento Cobertos
- **Tesouro Direto** (Selic, IPCA+)
- **CDBs e LCIs** 
- **Ações** (PETR4, VALE3, ITUB4, etc.)
- **Fundos Imobiliários** (FIIs)
- **Debêntures Incentivadas**

### Perfis de Investimento
- **Conservador:** Foco em segurança (8-12% ao ano)
- **Moderado:** Equilíbrio risco/retorno (12-18% ao ano)
- **Arriscado:** Maior volatilidade (18-30% ao ano)

## Como Executar o Projeto

### Pré-requisitos
- Node.js instalado
- Expo CLI (`npm install -g @expo/cli`)

### Passos para execução

1. **Clone o repositório:**
```bash
git clone 
cd 
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o projeto:**
```bash
npm start
```

4. **Abra no navegador:**
- Pressione `w` para abrir no navegador web
- Acesse: `http://localhost:8081`

### Dados para Teste
- **Email:** `usuario@teste.com`
- **Senha:** `123456`

## Destaques da Implementação

-  **Navegação Drawer** totalmente funcional
-  **Sistema de Login** com persistência real
-  **5 telas principais** bem estruturadas
-  **Dados mockados extensivos** (10+ investimentos)
-  **Interface responsiva** e user-friendly
-  **Código TypeScript** bem tipado
-  **Arquitetura limpa** e organizada

## Design e UX

- Interface moderna e profissional
- Cores consistentes com o tema de investimentos
- Feedback visual adequado para ações do usuário
- Navegação intuitiva e fluida

## Considerações Técnicas

- **Build testado e funcional** no navegador web
- **Sem erros críticos** de compilação
- **Performance otimizada** para dispositivos móveis
- **Código preparado** para futuras expansões

## Aviso Legal

Este aplicativo é uma **simulação educativa** desenvolvida para fins acadêmicos. As recomendações apresentadas não constituem orientação financeira profissional. Sempre consulte um profissional qualificado antes de tomar decisões de investimento.

---

**Desenvolvido para Global Solution FIAP 2025 - Mobile Development and IoT**
