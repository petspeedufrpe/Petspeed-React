import React, {useState, useEffect} from 'react';

import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../services/api';

export default function PetList({navigation}) {
  const [data, setData] = useState([]);
  const user = navigation.state.params;


  useEffect(() => {
    async function loadAnimals() {
      try {
        const {id} = user;
        const response = await api.get(
          `/cliente/encontrarAnimalPorCliente/${id}`,
        );
        setData(response.data);
      } catch (error) {
        console.warn(error.message);
      }
    }
    loadAnimals();
  }, [data]);
  return (
    <>
      <View style={{flex: 3}}>
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={data => data.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={navigation.navigate('AnimalDetails',item)}>
            <View style={styles.listItem}>
              <Text style={styles.nome}>{`Nome: ${item.nome}`}</Text>
              <Text style={styles.nome}>{`Raça: ${item.raca}`}</Text>
              <Text style={styles.nome}>{`Peso: ${item.peso}kg`}</Text>
            </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.fab}
          onPress={() => {
            navigation.navigate('AnimalRegister', navigation.state.params);
          }}>
          <Icon name={'plus'} size={22} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
    backgroundColor: '#00b894',
  },
  listItem: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30,
    minHeight: 30,
  },
  container: {
    marginTop: 30,
  },
  fab: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
});
