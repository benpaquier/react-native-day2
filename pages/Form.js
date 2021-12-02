import React, { useState } from 'react'
import { Text, View, TextInput, Switch, Pressable } from 'react-native'
import DatePicker from 'react-native-datepicker'

const styles = {
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
}

const Form = () => {
  const [name, setName] = useState("")
  const [enable, setEnable] = useState(true)
  const [date, setDate] = useState(new Date())
  const [datePickerVisible, setDatePickerVisible] = useState(false)
 
  const handleChange = value => {
    setName(value)
  }

  const handleToggleSwitch = value => {
    setEnable(value)
  }

  console.log(date)

  return (
    <View>
      <Text>Form</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={handleChange}
        placeholder="Votre nom"
        keyboardType="numeric"
      />

      <Switch
        value={enable}
        onValueChange={handleToggleSwitch}
      />

      <Pressable onPress={() => setDatePickerVisible(true)}>
        <Text>Choisir la date</Text>
      </Pressable>

      <DatePicker
        style={{width: 200}}
        date={date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => setDate(date)}
      />
    </View>
  )
}

export default Form