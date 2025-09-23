import { View,  Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'
interface Props{
    placeholder:string,
    onPress?:()=>void
    }

const SearchBar = ({placeholder,onPress}:Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 px-5 py-4 rounded-full'>
      <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#aB8Bff"/>
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=''
        onChangeText={()=>{}}
        placeholderTextColor={'#a8B5db'}
        className='flex-1 ml-3 text-white'
      />
    </View>
  )
}

export default SearchBar