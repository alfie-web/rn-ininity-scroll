import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ActivityIndicator, FlatList, NativeModules, Platform, RefreshControl, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Post from '../../components/Post';

export default function Posts() {
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [total, setTotal] = useState(null)

  const getPosts = () => {
    if (isLoading && !page > 1 || total === data.length) return

    setIsLoading(true)

    axios({
      method: 'get',
      url: `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=25`,
    }).then((res) => {
      const newData = res.data.map(item => ({
        id: item.id,
        title: item.title,
        description: item.body.substring(0, 30) + '...',
        image: 'https://dummyimage.com/100x100/6699cc/000',
      }))

      setData([...data, ...newData])
      setTotal(+res.headers['x-total-count'])
      setPage(page + 1)
      setIsLoading(false)
    }).catch((error) => {
      setIsLoading(false)
    })
  }

  const loadMore = () => {
    getPosts()
  }

  const refresh = () => {
    setData([])
    setPage(1)
    setIsLoading(true)
  }

  const renderItem = ({ item }) => <Post {...item} />

  const renderLoader = () => {
    return isLoading ? (
      <View className={`${!data.length && 'h-[100vh] '}justify-center items-center`}>
        <ActivityIndicator size="large" color="#bada55" />
        {!data.length && <Text className="mt-4">Загружаем...</Text>}
      </View>
    ) : null
  }

  return (
    <>
      <SafeAreaView className="flex-1 bg-white">
        <Text className="text-[#000000] text-[24px] ml-4 py-4">Posts</Text>

        <FlatList
          className="w-full px-4 mb-2"
          data={data}
          refreshControl={<RefreshControl refreshing={page === 1 && isLoading} onRefresh={refresh} />}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          // ListHeaderComponent={<Text className="text-[#bada55]">Привет мир!!! {deviceLanguage}</Text>}
          ListFooterComponent={renderLoader}
          onEndReached={loadMore}
          onEndReachedThreshold={2}
        />
      </SafeAreaView>
    </>
  );
}
