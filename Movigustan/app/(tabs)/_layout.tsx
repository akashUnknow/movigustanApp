import { ImageBackground } from "expo-image"
import { Tabs } from "expo-router"


const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{ headerShown: false, title: 'Home',
            tabBarIcon:({focused})=>{
                <>
                <ImageBackground
                source={images.hei}
                </>
            }
         }} />
        <Tabs.Screen name="search" options={{ headerShown: false, title: 'Search' }} />
        <Tabs.Screen name="saved" options={{ headerShown: false, title: 'Saved' }} />
    </Tabs>

  )
}

export default _layout