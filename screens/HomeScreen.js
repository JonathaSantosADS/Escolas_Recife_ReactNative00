import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Container interno para centralizar o conteúdo */}
      <View style={styles.innerContainer}>
        {/* Título da tela */}
        <Text style={styles.title}>Escolas Municipais do Recife</Text>
        
        {/* Container para o botão de navegação */}
        <View style={styles.buttonContainer}>
          {/* Botão para navegar para a tela de Map */}
          <Button
            title="Map"
            onPress={() => navigation.navigate('Map')}
            color="#66cc99" // Cor do botão
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5', 
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
    elevation: 5, // Elevação para criar sombra
    width: '90%', 
    padding: 20, 
    borderRadius: 10, // Bordas arredondadas
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.1, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
    marginTop: 50, 
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#003366', 
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%', 
  },
});

export default HomeScreen;
