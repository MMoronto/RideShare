import React from 'react';
import { Image, TouchableOpacity, FlatList, Text, View } from 'react-native';
import tw from "tailwind-react-native-classnames";

const data = [
    {
        id: "123",
        title: "Hire a hauler",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order item",
        image: "https://links.papareact.com/28w",
        // image: "/Users/t2wycemo/Dev/RideShare/assets/splash.png",
        screen: "ShopsScreen", // Revise later       
    },
];

const NavOptions = () => {
  return (
    <FlatList 
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            >
                <View>
                    <Image 
                    style={{ width: 120, height: 120, resizeMode: "contain" }}
                        source={{ uri: item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
  );
};

export default NavOptions;
