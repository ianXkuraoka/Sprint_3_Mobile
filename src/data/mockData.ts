import { Investment } from '../types';

export const investments: Investment[] = [
  {
    id: '1',
    name: 'Tesouro Selic 2029',
    type: 'Tesouro Direto',
    value: 100.50,
    change: '+0.12%',
    changePercent: 0.12,
    risk: 'baixo',
    description: 'Título público indexado à taxa Selic, ideal para reserva de emergência',
    minInvestment: 100,
    liquidity: 'Diária',
    profitability: '100% da Selic'
  },
  {
    id: '2',
    name: 'PETR4',
    type: 'Ações',
    value: 32.75,
    change: '-1.23%',
    changePercent: -1.23,
    risk: 'alto',
    description: 'Ações ordinárias da Petrobras, maior empresa de energia do Brasil',
    minInvestment: 33,
    liquidity: 'Imediata',
    profitability: 'Variável'
  },
  {
    id: '3',
    name: 'CDB XP Investimentos',
    type: 'CDB',
    value: 105.20,
    change: '+0.05%',
    changePercent: 0.05,
    risk: 'baixo',
    description: 'Certificado de Depósito Bancário com garantia do FGC',
    minInvestment: 1000,
    liquidity: '90 dias',
    profitability: '110% do CDI'
  },
  {
    id: '4',
    name: 'VALE3',
    type: 'Ações',
    value: 62.80,
    change: '+2.15%',
    changePercent: 2.15,
    risk: 'alto',
    description: 'Ações ordinárias da Vale, maior mineradora das Américas',
    minInvestment: 63,
    liquidity: 'Imediata',
    profitability: 'Variável'
  },
  {
    id: '5',
    name: 'LCI Banco Inter',
    type: 'LCI',
    value: 103.45,
    change: '+0.08%',
    changePercent: 0.08,
    risk: 'baixo',
    description: 'Letra de Crédito Imobiliário isenta de IR para pessoa física',
    minInvestment: 5000,
    liquidity: '180 dias',
    profitability: '95% do CDI'
  },
  {
    id: '6',
    name: 'ITUB4',
    type: 'Ações',
    value: 28.90,
    change: '+0.87%',
    changePercent: 0.87,
    risk: 'medio',
    description: 'Ações preferenciais do Itaú Unibanco, maior banco privado do Brasil',
    minInvestment: 29,
    liquidity: 'Imediata',
    profitability: 'Variável'
  },
  {
    id: '7',
    name: 'Tesouro IPCA+ 2035',
    type: 'Tesouro Direto',
    value: 2156.78,
    change: '+0.34%',
    changePercent: 0.34,
    risk: 'baixo',
    description: 'Título público indexado ao IPCA, proteção contra inflação',
    minInvestment: 100,
    liquidity: 'Diária',
    profitability: 'IPCA + 5.50%'
  },
  {
    id: '8',
    name: 'FII HGLG11',
    type: 'FII',
    value: 156.20,
    change: '+1.45%',
    changePercent: 1.45,
    risk: 'medio',
    description: 'Fundo de Investimento Imobiliário de shoppings centers',
    minInvestment: 157,
    liquidity: 'Imediata',
    profitability: 'Variável'
  },
  {
    id: '9',
    name: 'Debênture Suzano',
    type: 'Debêntures',
    value: 1012.34,
    change: '+0.15%',
    changePercent: 0.15,
    risk: 'medio',
    description: 'Debênture incentivada da Suzano com benefício fiscal',
    minInvestment: 1000,
    liquidity: '365 dias',
    profitability: 'IPCA + 4.85%'
  },
  {
    id: '10',
    name: 'BBAS3',
    type: 'Ações',
    value: 45.67,
    change: '+0.92%',
    changePercent: 0.92,
    risk: 'medio',
    description: 'Ações ordinárias do Banco do Brasil',
    minInvestment: 46,
    liquidity: 'Imediata',
    profitability: 'Variável'
  }
];

export const recommendations = {
  "Conservador": {
    assets: ["Tesouro Selic 2029", "CDB XP Investimentos", "LCI Banco Inter"],
    allocation: "70% Renda Fixa, 20% Tesouro Direto, 10% Reserva",
    return: "8-12% ao ano",
    explanation: "Foco em segurança e preservação do capital com baixo risco",
    investmentIds: ['1', '3', '5']
  },
  "Moderado": {
    assets: ["Tesouro IPCA+ 2035", "ITUB4", "FII HGLG11", "CDB XP Investimentos"],
    allocation: "40% Renda Fixa, 35% Ações/FIIs, 25% Tesouro Direto",
    return: "12-18% ao ano",
    explanation: "Equilibrio entre segurança e crescimento com risco moderado",
    investmentIds: ['7', '6', '8', '3']
  },
  "Arriscado": {
    assets: ["PETR4", "VALE3", "FII HGLG11", "Debênture Suzano"],
    allocation: "50% Ações, 25% FIIs, 25% Renda Fixa",
    return: "18-30% ao ano",
    explanation: "Foco em crescimento com maior volatilidade e potencial de retorno",
    investmentIds: ['2', '4', '8', '9']
  }
};

export const investmentTips = [
  {
    title: "Diversificação é fundamental",
    content: "Nunca coloque todos os ovos na mesma cesta. Distribua seus investimentos entre diferentes classes de ativos."
  },
  {
    title: "Conheça seu perfil",
    content: "Invista de acordo com seu perfil de risco e seus objetivos financeiros."
  },
  {
    title: "Reserva de emergência",
    content: "Mantenha de 6 a 12 meses de gastos em investimentos de alta liquidez antes de investir em produtos de maior risco."
  },
  {
    title: "Investimento a longo prazo",
    content: "O tempo é seu aliado. Investimentos de longo prazo tendem a apresentar melhores resultados."
  }
];

export const marketNews = [
  {
    id: '1',
    title: 'Selic mantida em 10.75%',
    summary: 'Banco Central mantém taxa básica de juros no mesmo patamar',
    date: '2025-09-18'
  },
  {
    id: '2',
    title: 'Tesouro Direto bate recorde',
    summary: 'Programa registra maior volume de investimentos em 2025',
    date: '2025-09-17'
  },
  {
    id: '3',
    title: 'Petrobras anuncia dividendos',
    summary: 'Empresa anuncia pagamento de dividendos excepcionais',
    date: '2025-09-16'
  }
];

// Dados para simulação de usuário teste
export const testUser = {
  email: 'usuario@teste.com',
  senha: '123456',
  username: 'Usuario Teste'
};