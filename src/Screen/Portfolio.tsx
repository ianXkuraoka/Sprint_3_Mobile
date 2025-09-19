import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { investments } from '../data/mockData';

const Portfolio = ({ navigation }: any) => {
  const [userData, setUserData] = useState<any>(null);
  const [portfolio, setPortfolio] = useState<any[]>([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    loadUserData();
    loadPortfolio();
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

  const loadPortfolio = () => {
    // Simula um portfólio com alguns investimentos
    const simulatedPortfolio = investments.slice(0, 4).map((inv, index) => ({
      ...inv,
      quantity: Math.floor(Math.random() * 10) + 1,
      purchaseValue: inv.value * (0.9 + Math.random() * 0.2),
    }));
    
    setPortfolio(simulatedPortfolio);
    
    const total = simulatedPortfolio.reduce((sum, inv) => 
      sum + (inv.value * inv.quantity), 0);
    setTotalValue(total);
  };

  const calculateProfitLoss = (current: number, purchase: number) => {
    return current - purchase;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meu Portfólio</Text>
        <Text style={styles.subtitle}>{userData?.username || 'Investidor'}</Text>
      </View>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Valor Total do Portfólio</Text>
        <Text style={styles.totalValue}>
          R$ {totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </Text>
        <Text style={styles.portfolioCount}>{portfolio.length} investimentos</Text>
      </View>

      <View style={styles.investmentsSection}>
        <Text style={styles.sectionTitle}>Meus Investimentos</Text>
        
        {portfolio.map((investment) => {
          const profitLoss = calculateProfitLoss(
            investment.value * investment.quantity,
            investment.purchaseValue * investment.quantity
          );
          
          return (
            <View key={investment.id} style={styles.investmentCard}>
              <View style={styles.investmentHeader}>
                <Text style={styles.investmentName}>{investment.name}</Text>
                <Text style={styles.investmentType}>{investment.type}</Text>
              </View>
              
              <View style={styles.investmentDetails}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Quantidade:</Text>
                  <Text style={styles.detailValue}>{investment.quantity}</Text>
                </View>
                
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Valor Atual:</Text>
                  <Text style={styles.detailValue}>
                    R$ {investment.value.toFixed(2)}
                  </Text>
                </View>
                
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Valor Total:</Text>
                  <Text style={styles.detailValue}>
                    R$ {(investment.value * investment.quantity).toFixed(2)}
                  </Text>
                </View>
                
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Lucro/Prejuízo:</Text>
                  <Text style={[
                    styles.profitLoss,
                    profitLoss >= 0 ? styles.profit : styles.loss
                  ]}>
                    R$ {profitLoss.toFixed(2)}
                  </Text>
                </View>
              </View>
              
              <Text style={styles.investmentDescription}>
                {investment.description}
              </Text>
            </View>
          );
        })}
      </View>

      <View style={styles.actionSection}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => navigation.navigate('Recommendations')}
        >
          <Text style={styles.actionButtonText}>Ver Novas Recomendações</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.actionButton, styles.secondaryButton]}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={[styles.actionButtonText, styles.secondaryButtonText]}>
            Atualizar Perfil
          </Text>
        </TouchableOpacity>
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
  summaryCard: {
    backgroundColor: '#111111',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
  },
  summaryTitle: {
    fontSize: 16,
    color: '#CCCCCC',
    marginBottom: 8,
  },
  totalValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  portfolioCount: {
    fontSize: 12,
    color: '#999999',
  },
  investmentsSection: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FFFFFF',
  },
  investmentCard: {
    backgroundColor: '#111111',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#333333',
  },
  investmentHeader: {
    marginBottom: 12,
  },
  investmentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  investmentType: {
    fontSize: 12,
    color: '#666',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  investmentDetails: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  profitLoss: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  profit: {
    color: '#28a745',
  },
  loss: {
    color: '#dc3545',
  },
  investmentDescription: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
  },
  actionSection: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  actionButton: {
    backgroundColor: '#6200ee',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#6200ee',
  },
  secondaryButtonText: {
    color: '#6200ee',
  },
});

export default Portfolio;