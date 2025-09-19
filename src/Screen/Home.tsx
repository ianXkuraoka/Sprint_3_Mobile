import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const Home = ({ navigation }: any) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>InvestSmart</Text>
        <Text style={styles.subtitle}>Seu Assessor Virtual de Investimentos</Text>
      </View>

      <View style={styles.summaryCard}>
        <Text style={styles.cardTitle}>Bem-vindo ao InvestSmart</Text>
        <Text style={styles.cardDescription}>
          Descubra as melhores oportunidades de investimento para seu perfil
        </Text>
      </View>

      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Ferramentas Disponíveis</Text>
        
        <TouchableOpacity 
          style={styles.menuCard} 
          onPress={() => navigation.navigate('Recommendations')}
        >
          <Text style={styles.menuTitle}>🎯 Recomendações</Text>
          <Text style={styles.menuDescription}>
            Receba sugestões de investimentos baseadas no seu perfil
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuCard} 
          onPress={() => navigation.navigate('Portfolio')}
        >
          <Text style={styles.menuTitle}>💼 Meu Portfólio</Text>
          <Text style={styles.menuDescription}>
            Visualize seus investimentos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuCard} 
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.menuTitle}>👤 Meu Perfil</Text>
          <Text style={styles.menuDescription}>
            Configure suas preferências
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>💰 Público-alvo</Text>
        <Text style={styles.infoText}>
          Pessoas físicas com patrimônio entre R$ 10.000 e R$ 100.000
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000000',
  },
  header: {
    backgroundColor: '#000000',
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#CCCCCC',
    textAlign: 'center',
  },
  summaryCard: {
    backgroundColor: '#111111',
    margin: 16,
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#CCCCCC',
    textAlign: 'center',
    lineHeight: 20,
  },
  menuSection: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FFFFFF',
  },
  menuCard: {
    backgroundColor: '#111111',
    padding: 20,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333333',
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  menuDescription: {
    fontSize: 14,
    color: '#CCCCCC',
    lineHeight: 20,
  },
  infoSection: {
    backgroundColor: '#111111',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#333333',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#CCCCCC',
    lineHeight: 20,
  },
});

export default Home;


