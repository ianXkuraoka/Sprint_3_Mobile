export const assets = [
  { name: "Tesouro Selic", value: 100.50, change: "+0,12%", risk: "baixo" },
  { name: "PETR4", value: 32.75, change: "-1,23%", risk: "alto" },
  { name: "CDB XP", value: 105.20, change: "+0,05%", risk: "baixo" },
  { name: "VALE3", value: 62.80, change: "+2,15%", risk: "alto" },
];

export const recommendations = {
  "Conservador": {
    assets: ["Tesouro Selic", "CDB XP"],
    allocation: "80% Renda Fixa, 20% Fundos",
    return: "8-12% ao ano",
    explanation: "Foco em segurança e preservação do capital"
  },
  "Moderado": {
    assets: ["Tesouro Selic", "PETR4", "CDB XP"],
    allocation: "50% Renda Fixa, 30% Ações, 20% Fundos",
    return: "12-18% ao ano",
    explanation: "Equilibrio entre segurança e crescimento"
  },
  "Arriscado": {
    assets: ["PETR4", "VALE3"],
    allocation: "60% Ações, 40% Fundos",
    return: "18-25% ao ano",
    explanation: "Foco em crescimento com maior volatilidade"
  }
};