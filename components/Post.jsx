import { router } from 'expo-router'
import React from 'react'
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native'

const Post = ({ id, image, title, description }) => {
  return (
    <TouchableOpacity
      onPress={() => router.push({
        pathname: 'post/[id]',
        params: { id }
      })}
      className={`w-full flex flex-row items-start py-2 ${id !== 1 && 'border-t-[1px] border-[#d8d9db]'}`}
    >
      <Image
        className="w-[50px] h-[50px] rounded mr-4 mt-[6px]"
        source={{ uri: image }}
        resizeMode="contain"
      />
      <View className="flex-1">
        <Text className="text-[18px] font-bold">{id}. {title}</Text>
        <Text className="text-[14px] color-[#ccc]">{description}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Post
