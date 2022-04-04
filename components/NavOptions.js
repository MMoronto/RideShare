import React from 'react';
import { TouchableOpacity, FlatList, Text, View } from 'react-native';

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
        image: "https://links.papareact.com/2Bw",
        screen: "ShopsScreen", // Revise later       
    },
];

const NavOptions = () => {
  return (
    <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity>
                <View>
                    <image 
                        source={{ uri: item.image}}
                    />
                </View>
            </TouchableOpacity>
        )}
    />
  );
};

export default NavOptions;
