import{FlatList, Text, View,StyleSheet, Pressable} from'react-native';
import cart from '../data/cart';
import CartListItem from '../components/CartListItem';


const ShoppingCart=()=>{
    return(
      <> 
      <FlatList
      data={cart} 
      renderItem={({item})=><CartListItem cartItem={item}/>}
      ListFooterComponent={()=>(
        <View style={styles.totalsContainer}>
          <View stle={styles.row}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>410,00 US$</Text>
          </View>
                <View stle={styles.row}>
            <Text style={styles.text}>Deliery</Text>
            <Text style={styles.text}>100,00 US$</Text>
          </View>
                <View stle={styles.row}>
            <Text style={styles.textBold}>Total</Text>
            <Text style={styles.textBold}>420,00 US$</Text>
          </View>
        </View>
      )}

      />
          <Pressable  style={styles.button}>
              <Text style={styles.buttonText}>CheckOut</Text>
            </Pressable>
            </>
    );
};
const styles=StyleSheet.create(
  {
    totalsContainer:
    {
      margin:20,
      paddingTop:10,
      borderBlockColor:'gainsboro',
      borderTopWidth:1,
    },
    row:
    {
      flexDirection:'row',
      justifyContent:'space-around',
      marginVertical:2,
    },
    text:{
      fontSize:16,
      Color:'gray',
    },
    textBold:
    {
      fontSize:16,
      fontWeight:500,
    }, button: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  }
)
export default ShoppingCart;