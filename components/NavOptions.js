import { Text, View } from 'react-native';
import React from 'react';

const data = [
        {
            id: "123",
            title: "Hire a hauler",
            image: 'https://images.unsplash.com/photos/ki19VJAGh6w',
            screen: "MapScreen",
        },
        {
            id: "456",
            title: "order items",
            image: 'https://images.unsplash.com/photos/ki19VJAGh6w',
            screen: "ItemsScreen",
        },
    ];

const NavOptions = () => {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};

export default NavOptions;
