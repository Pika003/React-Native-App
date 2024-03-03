import { Text, View , Image, Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

export default function WelcomeScreen() {
    const navigation = useNavigation();
    return (
      <SafeAreaView className="flex-1 flex justify-around bg-white">
        <View className="space-y-2">
            <Text className="text-center text-4xl font-bold text-gray-700">
                Jarvis
            </Text>
            <Text className="text-center tracking-wider text-gray-600 font-semibold">
                The Futureis here, power by AI.
            </Text>
        </View>
        <View className="flex-row justify-center">
            <Image source={require('../../assets/images/welcome.jpg')} className="w-72 h-72"/>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('Home')} className="bg-emerald-600 mx-5 p-4 rounded-2xl">
            <Text className="text-center font-bold text-1xl text-white">Get Started</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
}