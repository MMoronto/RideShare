import React from 'react';
import { Image, TouchableOpacity, FlatList, Text, View } from 'react-native';

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
            <TouchableOpacity>
                <View>
                    <Image 
                    style={{ width: 120, height: 120, resizeMode: "contain" }}
                        source={{ uri: item.image}}
                    />
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
  );
};

export default NavOptions;
