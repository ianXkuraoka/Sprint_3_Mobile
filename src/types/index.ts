type RootStack = {
  Login: undefined;
  Cadastro: undefined;
  Recomendation: undefined,
  Menu: { email: string; username?: string };
  Recommendations: { username?: string; email: string; profile: string };
};

export { RootStack };