import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { RootStack } from "../types/index";
import { Ionicons } from "@expo/vector-icons";

const simulatedAssets = [
  { name: "SimulTech", value: 120.75, change: "+1,23%" },
  { name: "GreenEnergy", value: 86.42, change: "-0,84%" },
  { name: "AutoDrive", value: 210.10, change: "+0,12%" },
];

const news = [
  "Mercado simulado fecha em alta após boas previsões",
  "Investidores conservadores aumentam sua exposição",
  "Ativos arriscados apresentam forte oscilação no simulado",
];

const Menu = ({ route, navigation }: NativeStackScreenProps<RootStack, 'Menu'>) => {
  const { username, email } = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Bem-vindo, {username ?? email}!</Text>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Ionicons name="log-out-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Carteira de Investidor */}
        <Text style={styles.sectionTitle}>Carteira</Text>
        <View style={styles.walletContainer}>
          <InvestorCard type="Conservador" />
          <InvestorCard type="Moderado" />
          <InvestorCard type="Arriscado" />
        </View>

        {/* Simulação de Ações */}
        <Text style={styles.sectionTitle}>Ações Simuladas</Text>
        <View style={styles.assetsContainer}>
          {simulatedAssets.map((asset, idx) => (
            <View key={idx} style={styles.assetCard}>
              <Text style={styles.assetName}>{asset.name}</Text>
              <Text style={styles.assetValue}>${asset.value.toFixed(2)}</Text>
              <Text style={[
                styles.assetChange,
                asset.change.startsWith('+') ? styles.positive : styles.negative
              ]}>{asset.change}</Text>
            </View>
          ))}
        </View>

        {/* Notícias */}
        <Text style={styles.sectionTitle}>Notícias</Text>
        <View style={styles.newsContainer}>
          {news.map((item, idx) => (
            <Text key={idx} style={styles.newsItem}>• {item}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const InvestorCard = ({ type }: { type: string }) => (
  <View style={styles.investorCard}>
    <Text style={styles.investorText}>{type}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  welcomeText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 12,
    marginTop: 24,
    fontWeight: "bold",
  },
  walletContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  investorCard: {
    backgroundColor: "#1e1e1e",
    padding: 12,
    borderRadius: 12,
    width: "30%",
    alignItems: "center",
  },
  investorText: {
    color: "#fff",
    fontWeight: "500",
  },
  assetsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  assetCard: {
    backgroundColor: "#1e1e1e",
    width: "48%",
    marginBottom: 16,
    padding: 12,
    borderRadius: 12,
  },
  assetName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  assetValue: {
    color: "#fff",
    fontSize: 14,
    marginTop: 4,
  },
  assetChange: {
    fontSize: 14,
    marginTop: 2,
  },
  positive: {
    color: "#4caf50",
  },
  negative: {
    color: "#f44336",
  },
  newsContainer: {
    marginTop: 12,
  },
  newsItem: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 6,
  },
});

export default Menu;
