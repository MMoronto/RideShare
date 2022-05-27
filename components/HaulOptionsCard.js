import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: "Dumptruck-X-123",
    title: "X type Hauler",
    multiplier: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBzj_U2xUXkBirJ8Q9TCWWmJA_oBWn7wbuQ&usqp=CAU"
  },
  {
    id: "Box-XL-456",
    title: "XL type Hauler",
    multiplier: 1.25,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBzj_U2xUXkBirJ8Q9TCWWmJA_oBWn7wbuQ&usqp=CAU"
  },
  {
    id: "Flatbed-XXL-789",
    title: "XXL type Hauler",
    multiplier: 1.75,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBzj_U2xUXkBirJ8Q9TCWWmJA_oBWn7wbuQ&usqp=CAU"
  },
];

const HaulOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  return (
    <SafeAreaView Style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity 
          onPress={() => navigation.navigate("NavigateCard")} 
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" /> 
        </TouchableOpacity>
        <Text Style={tw`text-center py-5 text-xl`}>Hire a hauler</Text>
      </View>

      <FlatList 
        data={data} 
        keyExtractor={(item) => item.id}
        renderItem={({item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity 
          onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${
              id === selected?.id && "bg-0gray-200"
            }`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }} 
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>Travel time ...</Text>
            </View>
            <Text style={tw`text-xl`}>$450</Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity>
              <Text style={tw`text-center text-white text-xl`} >
                Choose {selected?.title}
              </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HaulOptionsCard

const styles = StyleSheet.create({});