import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const data = [
        {
            id: "123",
            title: "Hire a hauler",
            image: 'https://unsplash.com/photos/wWlHbRE6FD0',
            screen: "MapScreen",
        },
        {
            id: "456",
            title: "order items",
            image: 'https://unsplash.com/photos/8PKEeac1hzw',
            screen: "ItemsScreen",
        }
    ];

const NavOptions = () => {
  return (
    <FlatList 
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity style={`twp-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-4`}>
                <View>
                    <Image 
                        style={{ width: 120, height: 120, resizeMode: "contain" }}
                        source={{ uri: item.image }}
                    />
                </View>
                {/* <Text>{item.title}</Text> */}
            </TouchableOpacity>
        )}
    />
  );
};

export default NavOptions;
