import React from 'react'
import { Link, useNavigate } from 'react-router-native'
import { View, Text, Pressable } from 'react-native'
import { Icon, TabBar } from '@ant-design/react-native';


const styles = {
  container: {
    padding: 20,
    backgroundColor: "#ddd"
  },
  navbar: {
  },
  text: {
    paddingVertical: 10
  }
}

const Nav = () => {
  const navigate = useNavigate()

  const handlePress = () => {
    navigate('/')
  }

  return (
    <View style={styles.container}>
      <Link to="/">
        <Text style={styles.text}>Home</Text>
      </Link>
      <Link to="/about">
        <Text style={styles.text}>About</Text>
      </Link>
      <Link to="/form">
        <Text style={styles.text}>Form</Text>
      </Link>

      <Pressable onPress={handlePress}>
        <Text style={styles.text}>Press to change route</Text>
      </Pressable>
    </View>
  )
}

export default Nav