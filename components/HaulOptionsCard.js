import React from 'react';
import { 
  FlatList, 
  SafeAreaView, 
  StyleSheet, Text, 
  TouchableOpacity, 
  View, 
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { image } from "react-native";
import { useSelector } from 'react-redux';

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

// Tonnage Surcharge Rate multiplier
const TONNAGE_SURCHARGE_RATE = 1.5;

const HaulOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView Style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity 
          onPress={() => navigation.navigate("NavigateCard")} 
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" /> 
        </TouchableOpacity>
        <Text Style={tw`text-center py-5 text-xl`}>Hire a hauler - 
        {travelTimeInformation?.distance.text}</Text>
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
              <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>

              {new Intl.NumberFormat('en-us', {
                style: 'currency',
                currency: 'USD'
              }).format(

                (travelTimeInformation?.duration.value * TONNAGE_SURCHARGE_RATE * multiplier)

              )}

            </Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity 
          disabled={!selected} 
          style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
        >
          <Text style={tw`text-center text-white text-xl`} >
            Choose {selected?.title} / 100
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HaulOptionsCard

const styles = StyleSheet.create({});