import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image, FlatList, Switch } from 'react-native'

export default function App() {
  const [characters, setCharacters] = useState([])
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
  }
  
  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(response => response.json())
      .then(data => setCharacters(data))
  }, [])

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => toggleSwitch()}
        value={isEnabled}
      />
      <FlatList data={characters} renderItem={Character} />
    </View>
  )
}

const Character = ({ item }) => {
  return (
    <View style={styles.imageContainer}>
      <Text>{item.fullName}</Text>
      <Image
        style={styles.image}
        source={{
          uri: item.imageUrl
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200
  },
  message: {
    marginBottom: 40
  },
  pressable: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 40,
    paddingVertical: 20
  },
  counterText: {
    color: "green",
    fontWeight: "bold",
    fontSize: 90
  },
  image: {
    width: 200,
    height: 200
  },
  imageContainer: {
    marginBottom: 10
  }
})
