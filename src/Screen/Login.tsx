import React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView, Alert} from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStack } from "../types/index";
import { testUser } from "../data/mockData";

const Login = ({ navigation }: NativeStackScreenProps<RootStack>) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  // Inicializar usuário de teste
  useEffect(() => {
    const initTestUser = async () => {
      try {
        const jsonUsuarios = await AsyncStorage.getItem("@usuarios");
        const usuarios = jsonUsuarios ? JSON.parse(jsonUsuarios) : [];
        
        const testUserExists = usuarios.find((u: any) => u.email === testUser.email);
        if (!testUserExists) {
          const updatedUsers = [...usuarios, testUser];
          await AsyncStorage.setItem("@usuarios", JSON.stringify(updatedUsers));
        }
      } catch (error) {
        console.error("Erro ao inicializar usuário teste:", error);
      }
    };
    
    initTestUser();
  }, []);

  const handleLogin = async () => {
    if (!email || !senha) {
      setMensagem("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const jsonUsuarios = await AsyncStorage.getItem("@usuarios");
      const usuarios = jsonUsuarios ? JSON.parse(jsonUsuarios) : [];

      const usuarioValido = usuarios.find(
        (u: any) => u.email === email && u.senha === senha
      );

      if (usuarioValido) {
        // Salvar dados do usuário logado
        await AsyncStorage.setItem("@userLogado", JSON.stringify(usuarioValido));
        
        navigation.navigate("Menu", {
          username: usuarioValido.username,
          email: usuarioValido.email,
        });
      } else {
        setMensagem("Email ou senha inválidos. Verifique seus dados ou cadastre-se.");
      }
    } catch (error) {
      console.error("Erro ao verificar login:", error);
      setMensagem("Erro interno ao fazer login.");
    }
  };

  const fillTestUser = () => {
    setEmail(testUser.email);
    setSenha(testUser.senha);
    setMensagem("Dados de teste preenchidos. Clique em 'Entrar' para acessar.");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>InvestSmart</Text>
        <Text style={styles.subtitle}>Seu Assessor Virtual de Investimentos</Text>
      </View>

      <View style={styles.loginBox}>
        <Text style={styles.loginTitle}>Fazer Login</Text>

        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
        />

        {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.testButton} onPress={fillTestUser}>
          <Text style={styles.testButtonText}>Usar dados de teste</Text>
        </TouchableOpacity>

        <View style={styles.links}>
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <Text style={styles.link}>Não possui uma conta? Cadastre-se</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setMensagem("Função em construção.")}>
            <Text style={styles.link}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Dados de teste:{'\n'}
          Email: {testUser.email}{'\n'}
          Senha: {testUser.senha}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#000000',
    justifyContent: "center",
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: '#FFFFFF',
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: '#CCCCCC',
    textAlign: 'center',
    marginTop: 8,
  },
  loginBox: {
    backgroundColor: '#111111',
    borderRadius: 12,
    padding: 24,
    borderWidth: 1,
    borderColor: '#333333',
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#FFFFFF',
  },
  input: {
    borderWidth: 1,
    borderColor: "#444444",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: "#222222",
    color: "#FFFFFF",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 16,
  },
  testButton: {
    backgroundColor: "#333333",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#555555",
  },
  testButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
  links: {
    alignItems: 'center',
    gap: 12,
  },
  link: {
    color: "#FFFFFF",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  mensagem: {
    textAlign: "center",
    color: "#FF6B6B",
    marginBottom: 12,
    fontSize: 14,
  },
  footer: {
    marginTop: 30,
    padding: 16,
    backgroundColor: '#111111',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333333',
  },
  footerText: {
    textAlign: 'center',
    color: '#CCCCCC',
    fontSize: 12,
  },
});

export default Login;
