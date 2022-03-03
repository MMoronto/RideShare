import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const data = [
        {
            id: "123",
            title: "Hire a hauler",
            image: 'http://www.supercoloring.com/coloring-pages/dump-truck-1',
            screen: "MapScreen",
        },
        {
            id: "456",
            title: "order items",
            image: 'http://www.supercoloring.com/coloring-pages/dump-truck-1',
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
            <TouchableOpacity>
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
