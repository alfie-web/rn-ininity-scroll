import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

const RootLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="(posts)" options={{
          headerShown: false
        }} />
      </Stack>
      <StatusBar style="dark" />
    </>
  )
}

export default RootLayout
