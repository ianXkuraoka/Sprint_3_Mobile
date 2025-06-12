import { Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView,} from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStack } from "../types/index";

const Login = ({ navigation }: NativeStackScreenProps<RootStack>) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleLogin = async () => {
    try {
      const jsonUsuarios = await AsyncStorage.getItem("@usuarios");
      const usuarios = jsonUsuarios ? JSON.parse(jsonUsuarios) : [];

      const usuarioValido = usuarios.find(
        (u: any) => u.email === email && u.senha === senha
      );

      if (usuarioValido) {
        navigation.navigate("Menu", {
          username: usuarioValido.username,
          email: usuarioValido.email,
        });
      } else {
        setMensagem("Email ou senha inválidos. Cadastre-se.");
      }
    } catch (error) {
      console.error("Erro ao verificar login:", error);
      setMensagem("Erro interno ao fazer login.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Login</Text>

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

      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Text style={styles.link}>Não possui uma conta?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setMensagem("Função em construção.")}>
        <Text style={styles.link}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#6200ee",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  link: {
    color: "#0066cc",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  mensagem: {
    textAlign: "center",
    color: "red",
    marginBottom: 12,
  },
});

export default Login;
