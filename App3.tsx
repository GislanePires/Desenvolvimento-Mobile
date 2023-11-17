import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from "react-native";
import { styles } from "./styles";
import image from "./src/images/mulher.jpg";
import logo from "./src/images/logo.png";
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);

  const handleLogin = () => {
  
    console.log("Usuário:", username);
    console.log("Senha:", password);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.logo}>
        <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.inputArea}>
          <View style={styles.Cnpj}>
          <Text>CPF/CNPJ</Text>
          </View>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholder="Nome de Usuário"
          />
            <View style={styles.Senha}>
          <Text>Senha</Text>
          </View>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Senha"
            secureTextEntry={hidePass}
          />
          <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
            <Ionicons name={hidePass ? "eye-off" : "eye"} color="#fff" size={25} />
          </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>ENTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.textConfirm}>Confirmar compra</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.textpass}>Esqueci minha senha</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default App;



