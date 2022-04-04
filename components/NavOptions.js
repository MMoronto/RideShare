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
        horizontal
        renderItem={({ item }) => (
            <TouchableOpacity>
                <Text>{item.title}</Text>
            </TouchableOpacity>
        )}
    />
  );
};

export default NavOptions;
