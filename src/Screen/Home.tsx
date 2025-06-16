import React from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { RootStack } from "../types/index";
import { Header } from '../Components/Header';
import { assets } from '../data/mockData';

const Menu = ({ route, navigation }: NativeStackScreenProps<RootStack, 'Menu'>) => {
  const { username, email } = route.params;

  const handleProfileSelect = (profile: string) => {
    navigation.navigate('Recommendations', { username, email, profile });
  };

  return (
    <View style={styles.container}>
      <Header
        title="XP Investimentos"
        username={username}
        showLogout={true}
        onLogoutPress={() => navigation.replace('Login')}
      />

      <ScrollView>
        {/* Perfis */}
        <Text style={styles.sectionTitle}>Escolha seu Perfil</Text>
        <View style={styles.profilesContainer}>
          {['Conservador', 'Moderado', 'Arriscado'].map(profile => (
            <TouchableOpacity 
              key={profile}
              style={styles.profileCard} 
              onPress={() => handleProfileSelect(profile)}
            >
              <Text style={styles.profileText}>{profile}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Ativos */}
        <Text style={styles.sectionTitle}>Ativos Disponíveis</Text>
        <View style={styles.assetsContainer}>
          {assets.map((asset, idx) => (
            <View key={idx} style={styles.assetCard}>
              <Text style={styles.assetName}>{asset.name}</Text>
              <Text style={styles.assetValue}>R$ {asset.value.toFixed(2)}</Text>
              <Text style={[
                styles.assetChange,
                asset.change.startsWith('+') ? styles.positive : styles.negative
              ]}>{asset.change}</Text>
            </View>
          ))}
        </View>
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
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 24,
  },
  profilesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileCard: {
    backgroundColor: "#1e1e1e",
    padding: 16,
    borderRadius: 12,
    width: "30%",
    alignItems: "center",
  },
  profileText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
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
});

export default Menu;