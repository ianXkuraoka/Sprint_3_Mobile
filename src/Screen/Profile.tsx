import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ navigation }: any) => {
  const [userData, setUserData] = useState<any>(null);
  const [investmentProfile, setInvestmentProfile] = useState('Conservador');
  const [patrimony, setPatrimony] = useState('10.000 - 50.000');
  const [investmentGoal, setInvestmentGoal] = useState('Reserva de emergência');

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('@userLogado');
      if (userData) {
        setUserData(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };

  const saveProfile = async () => {
    try {
      const updatedProfile = {
        ...userData,
        investmentProfile,
        patrimony,
        investmentGoal,
      };
      
      await AsyncStorage.setItem('@userLogado', JSON.stringify(updatedProfile));
      setUserData(updatedProfile);
      
      Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar perfil:', error);
      Alert.alert('Erro', 'Não foi possível salvar o perfil.');
    }
  };

  const profileOptions = ['Conservador', 'Moderado', 'Arriscado'];
  const patrimonyOptions = [
    '10.000 - 50.000',
    '50.000 - 100.000',
    'Acima de 100.000'
  ];
  const goalOptions = [
    'Reserva de emergência',
    'Aposentadoria',
    'Compra de imóvel',
    'Viagem',
    'Educação dos filhos',
    'Crescimento patrimonial'
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Perfil do Investidor</Text>
        <Text style={styles.subtitle}>{userData?.username || 'Investidor'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações Pessoais</Text>
        
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Nome:</Text>
          <Text style={styles.infoValue}>{userData?.username}</Text>
        </View>
        
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>{userData?.email}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Perfil de Investimento</Text>
        <Text style={styles.sectionDescription}>
          Escolha o perfil que melhor se adequa ao seu comportamento como investidor:
        </Text>
        
        {profileOptions.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionCard,
              investmentProfile === option && styles.selectedCard
            ]}
            onPress={() => setInvestmentProfile(option)}
          >
            <Text style={[
              styles.optionText,
              investmentProfile === option && styles.selectedText
            ]}>
              {option}
            </Text>
            <Text style={styles.optionDescription}>
              {option === 'Conservador' && 'Prefere segurança e baixo risco'}
              {option === 'Moderado' && 'Equilibra risco e retorno'}
              {option === 'Arriscado' && 'Busca alto retorno, aceita volatilidade'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Patrimônio (R$)</Text>
        <Text style={styles.sectionDescription}>
          Selecione a faixa que representa seu patrimônio atual:
        </Text>
        
        {patrimonyOptions.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionCard,
              patrimony === option && styles.selectedCard
            ]}
            onPress={() => setPatrimony(option)}
          >
            <Text style={[
              styles.optionText,
              patrimony === option && styles.selectedText
            ]}>
              R$ {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objetivo de Investimento</Text>
        <Text style={styles.sectionDescription}>
          Qual é seu principal objetivo ao investir?
        </Text>
        
        {goalOptions.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionCard,
              investmentGoal === option && styles.selectedCard
            ]}
            onPress={() => setInvestmentGoal(option)}
          >
            <Text style={[
              styles.optionText,
              investmentGoal === option && styles.selectedText
            ]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.actionSection}>
        <TouchableOpacity style={styles.saveButton} onPress={saveProfile}>
          <Text style={styles.saveButtonText}>Salvar Perfil</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.recommendButton}
          onPress={() => navigation.navigate('Recommendations')}
        >
          <Text style={styles.recommendButtonText}>Ver Recomendações</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>💡 Dica Importante</Text>
        <Text style={styles.infoText}>
          Seu perfil de investimento é fundamental para receber recomendações adequadas. 
          Seja honesto ao definir sua tolerância ao risco e objetivos financeiros.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    backgroundColor: '#000000',
    padding: 20,
    alignItems: 'center',
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
  section: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#CCCCCC',
    marginBottom: 16,
    lineHeight: 20,
  },
  infoCard: {
    backgroundColor: '#111111',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#333333',
  },
  infoLabel: {
    fontSize: 14,
    color: '#CCCCCC',
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  optionCard: {
    backgroundColor: '#111111',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#333333',
  },
  selectedCard: {
    borderColor: '#FFFFFF',
    backgroundColor: '#222222',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  selectedText: {
    color: '#6200ee',
  },
  optionDescription: {
    fontSize: 12,
    color: '#666',
  },
  actionSection: {
    padding: 16,
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#6200ee',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recommendButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#6200ee',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  recommendButtonText: {
    color: '#6200ee',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoSection: {
    backgroundColor: '#e8f5e8',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#4caf50',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#388e3c',
    lineHeight: 20,
  },
});

export default Profile;