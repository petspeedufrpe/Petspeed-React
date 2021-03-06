import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BottomNavBar({navigation}) {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity style={styles.tabButton}>
        <Icon name="home" size={22} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => {
          navigation.navigate('PetList', navigation.state.params);
        }}>
        <Icon name="paw" size={22} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => {
          navigation.navigate('ListOrdemServicoCliente', navigation.state.params);
        }}>
        <Icon name="ambulance" size={22} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => {
          navigation.navigate('UserProfile', navigation.state.params);
        }}>
        <Icon name="user" size={22} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  navContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#ffff',
    borderTopColor: '#000',
    elevation: 8,
    borderTopWidth: 0,
  },
  tabButton: {
    borderColor: '#CCC',
  },
});
