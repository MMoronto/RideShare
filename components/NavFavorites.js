import React from 'react'
import { 
    FlatList,
    StyleSheet, 
    Text,
    TouchableOpacity,
    View, 
} from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Allen Avenue, Lagos, Nigeria",
    },
    {
        id: "456",
        icon: "portmanteau",
        location: "Home",
        destination: "Opebi Rd, Lagos, Nigeria",
    },
];

const NavFavorites = () => {
  return (
    <FlatList 
        data={data} 
        keyExtractor={(item) => item.id}
        renderItem={({ item: { location, destination, icon } }) => (
            <TouchableOpacity>
                <Icon
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18} 
                />
            </TouchableOpacity>
        )}
    />
  );
};

export default NavFavorites

const styles = StyleSheet.create({})
