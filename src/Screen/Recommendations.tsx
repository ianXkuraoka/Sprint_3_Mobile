import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { recommendations, investments } from '../data/mockData';

const Recommendations = ({ navigation }: any) => {
  const [selectedProfile, setSelectedProfile] = useState<string>('Conservador');

  const recommendation = recommendations[selectedProfile as keyof typeof recommendations];

  const handleInvest = () => {
    Alert.alert(
      'Investimento Simulado',
      `Perfil ${selectedProfile} selecionado. Em um app real, redirecionaria para investimentos.`,
      [{ text: 'OK' }]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recomendações Personalizadas</Text>
        <Text style={styles.subtitle}>Escolha seu perfil de investimento</Text>
      </View>

      <View style={styles.profileSelection}>
        <Text style={styles.sectionTitle}>Selecione seu Perfil:</Text>
        {Object.keys(recommendations).map((profile) => (
          <TouchableOpacity
            key={profile}
            style={[
              styles.profileButton,
              selectedProfile === profile && styles.profileButtonSelected
            ]}
            onPress={() => setSelectedProfile(profile)}
          >
            <Text style={[
              styles.profileButtonText,
              selectedProfile === profile && styles.profileButtonTextSelected
            ]}>
              {profile}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.recommendationCard}>
        <Text style={styles.profileTitle}>Perfil: {selectedProfile}</Text>
        <Text style={styles.returnText}>Retorno: {recommendation.return}</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Explicação:</Text>
          <Text style={styles.sectionText}>{recommendation.explanation}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Ativos Recomendados:</Text>
          {recommendation.assets.map((asset, index) => (
            <Text key={index} style={styles.assetItem}>• {asset}</Text>
          ))}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Distribuição Sugerida:</Text>
          <Text style={styles.sectionText}>{recommendation.allocation}</Text>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleInvest}>
          <Text style={styles.buttonText}>Simular Investimento</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.secondaryButton}>
        <TouchableOpacity onPress={() => navigation.navigate('Portfolio')}>
          <Text style={styles.link}>Ver Meu Portfólio</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.disclaimer}>
        <Text style={styles.disclaimerText}>
          ⚠️ As recomendações são baseadas em perfis genéricos e servem apenas para fins educativos. 
          Consulte sempre um especialista antes de investir.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000000',
    padding: 16,
  },
  header: {
    backgroundColor: '#111111',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 14,
    color: '#CCCCCC',
    marginTop: 4,
  },
  profileSelection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  profileButton: {
    backgroundColor: '#111111',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#333333',
  },
  profileButtonSelected: {
    borderColor: '#FFFFFF',
    backgroundColor: '#222222',
  },
  profileButtonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#CCCCCC',
    fontWeight: 'bold',
  },
  profileButtonTextSelected: {
    color: '#FFFFFF',
  },
  recommendationCard: {
    backgroundColor: '#111111',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333333',
  },
  profileTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  returnText: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  sectionText: {
    fontSize: 14,
    color: '#CCCCCC',
    lineHeight: 20,
  },
  assetItem: {
    fontSize: 14,
    color: '#CCCCCC',
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  link: {
    textAlign: 'center',
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
  disclaimer: {
    backgroundColor: '#333333',
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#FFFFFF',
  },
  disclaimerText: {
    fontSize: 12,
    color: '#CCCCCC',
    textAlign: 'center',
  },
});

export default Recommendations;