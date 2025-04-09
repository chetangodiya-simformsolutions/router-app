import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useSegments } from 'expo-router'

const SearchUser = () => {
  const segment = useSegments();
  const navigation = useNavigation()
  console.log(segment, 'seg')
  
  const isFromUserSegment = segment?.[1] === "(user)"
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: true
    })
  },[])
console.log(isFromUserSegment,' isFromUserSegment')
  return (
    <View>
      {isFromUserSegment && <Text style={{fontSize: 22, textAlign:'center',padding: 10}}>Special Component For User Segment</Text>}
      <Text>{JSON.stringify(segment)}</Text>
    </View>
  )
}

export default SearchUser