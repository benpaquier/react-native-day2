import React from 'react'
import { NativeRouter, Routes, Route } from 'react-router-native'
import { View, Text, StyleSheet } from 'react-native'

import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Form from './pages/Form'

const styles = StyleSheet.create({
  container: {
    marginVertical: 60,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
})

const App = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <View>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </View>
        <Nav />
      </View>
    </NativeRouter>
  )
}

export default App