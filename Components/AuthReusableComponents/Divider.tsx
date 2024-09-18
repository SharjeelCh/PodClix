import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../Styles/AuthStyles/SocialButton'

interface divderProps{
    text:string
}

const Divider:React.FC<divderProps> = ({text}) => {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.dividerLine}/>
      <Text style={styles.dividerText}>{text}</Text>
      <View style={styles.dividerLine}/>
    </View>
  )
}

export default Divider