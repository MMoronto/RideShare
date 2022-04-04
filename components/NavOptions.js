import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const data = [
        {
            id: "123",
            title: "Hire a hauler",
            image: 'https://unsplash.com/photos/wWlHbRE6FD0',
            // image: 'https://links.papareact.com/3pn',
            screen: "MapScreen",
        },
        {
            id: "456",
            title: "order items",
            image: 'https://unsplash.com/photos/8PKEeac1hzw',
            // image: 'https://links.papareact.com/28w',
            screen: "ItemsScreen", // Revise later
        }
    ];

const NavOptions = () => {
  return (
    <FlatList 
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity >
                <View>
                    <Image 
                        style={{ width: 120, height: 120, resizeMode: "contain" }}
                        source={{ uri: item.image }}
                    />
                </View>
                <Text >{item.title}</Text>
            </TouchableOpacity>
         ) }
    />
  );
};

export default NavOptions;
