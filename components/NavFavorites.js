import React from 'react'
import { 
    FlatList,
    StyleSheet, 
    Text,
    TouchableOpacity,
    View, 
} from 'react-native'

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
        renderItem={({ item }) => (
            <TouchableOpacity>
                <Text>Ola!!</Text>
            </TouchableOpacity>
        )}
    />
  );
};

export default NavFavorites

const styles = StyleSheet.create({})
