import { View, Text, Input, Button } from 'react-native'
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
      <Input></Input>
      <Input></Input>
      <Button>Log In</Button>
    </View>
  )
}

export default login