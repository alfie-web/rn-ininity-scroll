import axios from 'axios'
import { useGlobalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, ActivityIndicator, Image, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const PostScreen = () => {
  const { id } = useGlobalSearchParams()

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    setIsLoading(true)

    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(({ data }) => {
        setData(data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
      })
  }, [])

  const renderLoader = () => {
    return isLoading ? (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#bada55" />
        <Text className="mt-4">Загружаем...</Text>
      </View>
    ) : null
  }

  if (isLoading) return renderLoader()

  return (
    <>
      <SafeAreaView className="flex-1 bg-white">
        <Text className="text-[#000] text-[24px] ml-4 py-4">Post {id}</Text>

        {data && (
          <ScrollView className="flex-1">
            <Text className="text-[25px] px-4 font-bold my-4">{data.title}</Text>
            <Image
              source={{
                uri: 'https://dummyimage.com/800x600/ff0000/fff'
              }}
              style={{
                height: 300,
                flex:1,
              }}
              resizeMode="contain"
            />

            <View className="flex-1 px-4 pb-8">
              <Text>{data.body}</Text>
              <Text>{data.body}</Text>
              <Text>{data.body}</Text>
              <Text>{data.body}</Text>
              <Text>{data.body}</Text>
              <Text>{data.body}</Text>
            </View>

          </ScrollView>
        )}
      </SafeAreaView>
    </>
  )
}

export default PostScreen
