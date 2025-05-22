
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import products from '../data/products';

const productsScreen=()=>{
    return(
          <FlatList
              data={products}
              renderItem={({item})=>(
                <View style={styles.itemContainer}>
                  <Image source={{uri:item.image}}
             style={styles.image}/>
              </View>
              )}
              numColumns={2}
              />
           
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer:
{
  width:'50%',
  padding:1
},
  image:
  {
    width:"100%",
    aspectRatio:1,

  }
});
export default productsScreen;