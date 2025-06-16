import React from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { RootStack } from "../types/index";
import { Header } from '../Components/Header';
import { recommendations } from '../data/mockData';

const Recommendations = ({ route, navigation }: NativeStackScreenProps<RootStack, 'Recommendations'>) => {
  const { username, email, profile } = route.params;
  const recommendation = recommendations[profile as keyof typeof recommendations];

  return (
    <View style={styles.container}>
      <Header
        title="Recomendações"
        username={username}
        showBack={true}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView>
        {/* Perfil Selecionado */}
        <View style={styles.profileCard}>
          <Text style={styles.profileTitle}>Perfil: {profile}</Text>
          <Text style={styles.returnText}>Retorno: {recommendation.return}</Text>
        </View>

        {/* Alocação */}
        <Text style={styles.sectionTitle}>Alocação Sugerida</Text>
        <View style={styles.allocationCard}>
          <Text style={styles.allocationText}>{recommendation.allocation}</Text>
        </View>

        {/* Ativos Recomendados */}
        <Text style={styles.sectionTitle}>Ativos Recomendados</Text>
        <View style={styles.assetsContainer}>
          {recommendation.assets.map((asset, idx) => (
            <View key={idx} style={styles.assetCard}>
              <Text style={styles.assetName}>{asset}</Text>
            </View>
          ))}
        </View>

        {/* Explicação */}
        <Text style={styles.sectionTitle}>Por quê?</Text>
        <View style={styles.explanationCard}>
          <Text style={styles.explanationText}>{recommendation.explanation}</Text>
        </View>

        {/* Botão de Ação */}
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Aplicar Agora</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  profileCard: {
    backgroundColor: "#1e1e1e",
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
  },
  profileTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  returnText: {
    color: "#4caf50",
    fontSize: 16,
    marginTop: 8,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 24,
  },
  allocationCard: {
    backgroundColor: "#1e1e1e",
    padding: 16,
    borderRadius: 12,
  },
  allocationText: {
    color: "#fff",
    fontSize: 16,
  },
  assetsContainer: {
    marginTop: 8,
  },
  assetCard: {
    backgroundColor: "#1e1e1e",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  assetName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  explanationCard: {
    backgroundColor: "#1e1e1e",
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  explanationText: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20,
  },
  actionButton: {
    backgroundColor: "#4caf50",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 32,
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Recommendations;