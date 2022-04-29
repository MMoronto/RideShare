import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, FlatList, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from "tailwind-react-native-classnames";

const data = [
    {
        id: "123",
        title: "Hire a hauler",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWG75ix1Qprkgt0b7LC0Wbrmf32hbRPI7Nw&usqp=CAU",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order item",
        image: "https://structville.com/wp-content/uploads/2020/03/Cement-brands-in-Nigeria.jpg",
        screen: "ShopsScreen", // Revise later       
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

  return (
    <FlatList 
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                disabled={!origin}
            >
                <View>
                    <Image 
                    style={{ width: 100, height: 100, resizeMode: "contain" }}
                        source={{ uri: item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon 
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name="arrowright" 
                        color="white" 
                        type='antdesign'
                    />
                </View>
            </TouchableOpacity>
        )}
    />
  );
};

export default NavOptions;
