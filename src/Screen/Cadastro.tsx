import { Text, TextInput, View, StyleSheet, ScrollView, TouchableOpacity, Alert,} from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStack } from "../types/index";

const Cadastro = ({ navigation }: NativeStackScreenProps<RootStack>) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = async () => {
    if (!username || !email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      const jsonUsuarios = await AsyncStorage.getItem("@usuarios");
      const usuarios = jsonUsuarios ? JSON.parse(jsonUsuarios) : [];

      const usuarioExiste = usuarios.find((u: any) => u.email === email);
      if (usuarioExiste) {
        Alert.alert("Erro", "Usuário já cadastrado.");
        return;
      }

      const novoUsuario = { username, email, senha };
      const novaLista = [...usuarios, novoUsuario];

      await AsyncStorage.setItem("@usuarios", JSON.stringify(novaLista));

      navigation.navigate("Menu", { username, email });
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      Alert.alert("Erro", "Não foi possível completar o cadastro.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput
        placeholder="Nome"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Registro</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Já possui conta? Entrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#6200ee",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  link: {
    textAlign: "center",
    color: "#0066cc",
    textDecorationLine: "underline",
  },
});

export default Cadastro;


