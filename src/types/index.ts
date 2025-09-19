type RootStack = {
  Login: undefined;
  Cadastro: undefined;
  Menu: { email: string; username?: string };
  Home: undefined;
  Recommendations: { username?: string; email?: string; profile?: string };
  Portfolio: undefined;
  Profile: undefined;
};

type Investment = {
  id: string;
  name: string;
  type: string;
  value: number;
  change: string;
  changePercent: number;
  risk: 'baixo' | 'medio' | 'alto';
  description: string;
  minInvestment: number;
  liquidity: string;
  profitability: string;
};

type UserProfile = {
  username: string;
  email: string;
  investmentProfile: 'Conservador' | 'Moderado' | 'Arriscado';
  patrimony: number;
  monthlyIncome: number;
  investmentGoal: string;
  timeHorizon: string;
};

export { RootStack, Investment, UserProfile };