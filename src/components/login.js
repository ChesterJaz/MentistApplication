import { View, Text, Input, Button, TextInput } from 'react-native'
import React from 'react'

const login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleLogin = (email, password) => {
        console.log(email, password)
    }

  return (
    <View>
      <Text>login</Text>
      <TextInput onChange={val => setEmail(val)}></TextInput>
      <TextInput onChange={val => setPassword(val)}></TextInput>
      <Button onPress={(handleLogin(email, password))}>Log In</Button>
    </View>
  )
}

export default login