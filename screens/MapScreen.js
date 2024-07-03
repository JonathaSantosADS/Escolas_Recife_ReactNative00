import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';

// Componente principal da tela do mapa
const MapScreen = ({ navigation }) => {
  // Estado para armazenar a localização do usuário
  const [location, setLocation] = useState(null);
  // Estado para armazenar mensagens de erro
  const [errorMsg, setErrorMsg] = useState(null);
  // Estado para armazenar os dados das escolas
  const [schools, setSchools] = useState([]);
  // Estado para armazenar a localização do usuário
  const [userLocation, setUserLocation] = useState(null);

  // useEffect para buscar dados das escolas e a localização do usuário
  useEffect(() => {
    // Função para buscar dados das escolas
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://dados.recife.pe.gov.br/api/3/action/datastore_search?resource_id=7c613836-9edd-4c0f-bc72-495008dd29c3&limit=20'
        );
        const data = await response.json();
        if (data.success) {
          setSchools(data.result.records);
        } else {
          setErrorMsg('Erro ao buscar escolas');
        }
      } catch (error) {
        setErrorMsg('Erro ao buscar escolas');
        console.error('Erro ao buscar escolas:', error);
      }
    };

    // Função para obter a localização do usuário
    const getLocationAsync = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão para acessar a localização foi negada');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    };

    // Chama as funções definidas acima
    getLocationAsync();
    fetchData();
  }, []);

  // useEffect para obter a localização atual do usuário
  useEffect(() => {
    const getUserLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão para acessar a localização foi negada');
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      setUserLocation(userLocation.coords);
    };

    getUserLocation();
  }, []);

  return (
    <View style={styles.container}>
      {/* Exibe o mapa se a localização estiver disponível */}
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
          {/* Marcadores para escolas */}
          {schools.map((school) => (
            <Marker
              key={school._id}
              coordinate={{
                latitude: parseFloat(school.latitude),
                longitude: parseFloat(school.longitude),
              }}
              title={`Escola Municipal: ${school.escola}`}
              description={`Alunos: ${school.qtd_alunos}`}
            >
              <Callout>
                <View>
                  <Text style={styles.calloutTitle}>Escola Municipal: {school.escola}</Text>
                  <Text>Alunos: {school.qtd_alunos}</Text>
                </View>
              </Callout>
            </Marker>
          ))}

          {/* Marcador para a localização do usuário */}
          {userLocation && (
            <Marker
              coordinate={{
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
              }}
              title="Minha Localização"
              pinColor="blue" // Cor do marcador
            />
          )}
        </MapView>
      ) : (
        // Mensagem de erro ou de carregamento
        <Text style={styles.errorText}>{errorMsg || 'Buscando sua localização...'}</Text>
      )}
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Mapa</Text>
        <View style={styles.buttonContainer}>
          {/* Botão para voltar para a tela anterior */}
          <Button
            title="Home"
            onPress={() => navigation.goBack()}
            color="#66cc99"
          />
        </View>
      </View>
    </View>
  );
};

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  map: {
    flex: 1,
  },
  innerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    margin: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
    width: '60%',
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MapScreen;
