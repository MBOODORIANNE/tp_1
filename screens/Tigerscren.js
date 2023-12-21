import react from 'react';
import { View,Text,Image,StyleSheet,ScrollView} from 'react-native';
import { createSheet } from 'react-native-web/dist/cjs/exports/StyleSheet/dom';

const Tigerscreen=() => {
    return(
        <View style={{flex:1, height:'100%',width:'100%',backgroundColor:'green',}}>
        <View style={style.container}>
           
            <View style={{
                width:'95%',
                height:'93%',
                backgroundColor:'#e6e6e6',
                top:-30,
                borderTopEndRadius:18,
                borderTopLeftRadius:18,
            }}>
                       <Text style={{fontWeight:'300',fontSize:14,top:30,}}>Your Location </Text>
                <View style={{flexDirection:'row',gap:65,top:25,width:'100%',}}>      
                <Text style={{fontWeight:'bold',fontSize:17,}}>3892 Olen Thomas Drive,NY ^ </Text>
                <Image style={{height:35,width:35, borderRadius:60,}} source={require('../assets/lion.jpg')}/>

   

                </View>

                <View style={{flexDirection:'row',gap:30,top:140,width:'100%',}}>

<View style={{height:50,width:270,backgroundColor:'white',borderRadius:20,top:-100,flexDirection:'row',gap:10,}}>
<Image style={{height:30,width:30,top:10, left:10,}} source={require('../assets/search.png')}/>
<Text style={{fontWeight:'400',fontSize:17,marginBottom:'auto',marginTop:'auto',}}>Search foods,graceries</Text>
<Image style={{height:25,width:25,top:10, left:10,}} source={require('../assets/panier.png')}/>
</View>

<View style={{width:50,height:50,backgroundColor:'green',
                borderRadius:25,top:-100,marginLeft:'auto',marginRight:'auto', }}>
                <Image style={{height:25,width:25,marginLeft:'auto',marginRight:'auto',top:10,}} source ={require('../assets/food.png')}/>
                </View>

                </View>

        <Text style={{fontWeight:'bold',fontSize:20,top:65,left:10,}}>Categories</Text>
<View style={{flexDirection:'row',gap:30,top:80,width:'100%',}}>
  <ScrollView horizontal={true} height={200} >
    <View style={{height:70,width:70,borderRadius:35,backgroundColor:'white',flexDirection:'column',}}>
    <Image style={{height:50,width:50,top:10, left:10,}} source={require('../assets/cad.png')}/>
  <Text style={{fontWeight:'400',fontSize:14,top:20,}}>Vegetables</Text>
    </View>
    <View style={{height:70,width:70,borderRadius:53,backgroundColor:'white',}}>
    <Image style={{height:50,width:50,top:10, left:10,}} source={require('../assets/banane.png')}/>
  <Text style={{fontWeight:'400',fontSize:14,top:20,left:11,}}>Dairies</Text>
    </View>
    <View style={{height:70,width:70,borderRadius:35,backgroundColor:'white',}}>
    <Image style={{height:50,width:50,top:10, left:10,}} source={require('../assets/mani.png')}/>
  <Text style={{fontWeight:'400',fontSize:14,top:20,left:13,}}>Meats</Text>
    </View>
    <View style={{height:70,width:70,borderRadius:35,backgroundColor:'white',}}>
    <Image style={{height:50,width:50,top:10, left:10,}} source={require('../assets/raisain.png')}/>
  <Text style={{fontWeight:'400',fontSize:14,top:20,left:20,}}>Fish</Text>
    </View>

    <View style={{height:70,width:70,borderRadius:35,backgroundColor:'white',}}>
    <Image style={{height:50,width:50,top:10, left:10,}} source={require('../assets/blue.jpg')}/>
  <Text style={{fontWeight:'400',fontSize:14,top:20,left:20,}}>Fish</Text>
    </View>

    <View style={{height:70,width:70,borderRadius:35,backgroundColor:'white',}}>
    <Image style={{height:50,width:50,top:10, left:10,}} source={require('../assets/emoji.png')}/>
  <Text style={{fontWeight:'400',fontSize:14,top:20,left:20,}}>Emoji</Text>
    </View>

    <View style={{height:70,width:70,borderRadius:35,backgroundColor:'white',}}>
    <Image style={{height:50,width:50,top:10, left:10,}} source={require('../assets/mani.png')}/>
  <Text style={{fontWeight:'400',fontSize:14,top:20,left:20,}}>Manicu</Text>
    </View>
    </ScrollView>
</View>

                <Text style={{fontWeight:'bold',fontSize:'20',top:305,left:10,position:'absolute',}}>Deals</Text>
                <Text style={{position:'absolute', fontWeight:'bold',fontSize:'17',top:305,left:320,color:'green',}}>See all</Text>
        <View style={{position:'absolute',width:'100%',height:130, borderRadius:16,backgroundColor:'blue',top:330,}}>
        <Text style={{ position:'relative', fontSize:20,fontWeight:'bold', top:15, left:15,}}>50% OFF</Text>
        <Text style={{ position:'relative', fontWeight:'300', top:15, left:15,}}>On Grocery Combo pack</Text>   
        <Image style={{height:70,width:70,top:3, right:-300,}} source={require('../assets/autre.jpg')}/>
<View style={{height:40,width:100,backgroundColor:'white',top:-45,left:20,borderRadius:18,}}>
<Text style={{ position:'relative', fontSize:17,fontWeight:'bold', top:10, left:15,color:'green',}}>Shop now</Text>

</View>
        </View>
<Text style={{position:'absolute',fontWeight:'bold',fontSize:'20',top:480,}}>Popular items</Text>
<View style={{flexDirection:'row',gap:5,position:'absolute',}}>

<View style={style.cont1}>
  <Image style={{height:25,width:25,top:15, marginLeft:'auto',marginRight:'auto',right:-70, borderRadius:20,}} source={require('../assets/blue.jpg')}/>
  <Image style={style.edite} 
  source={require('../assets/blue.jpg')}/>
  <Text style={{ position:'relative', fontWeight:'bold', top:-13, left:15,}}>Bitroot</Text>
  <Text style={{ position:'relative', fontWeight:'300', top:-13, left:15,}}>$1.25</Text>

  <View style={{position:'relative',width:35,height:35,backgroundColor:'green',
                borderRadius:35,top:-50,marginLeft:'auto',marginRight:'auto', left:50,}}>
                <Image style={{height:18,width:18,marginLeft:'auto',marginRight:'auto',top:10,}} source ={require('../assets/food.png')}/>
                </View>
  
  </View>



  <View style={style.cont2}>
  <Image style={{height:25,width:25,top:15, marginLeft:'auto',marginRight:'auto',right:-70, borderRadius:20,}} source={require('../assets/blue.jpg')}/>
  <Image style={style.edite} 
  source={require('../assets/blue.jpg')}/>
  <Text style={{ position:'relative', fontWeight:'bold', top:-13, left:15,}}>Brocolli</Text>
  <Text style={{ position:'relative', fontWeight:'300', top:-13, left:15,}}>$1.50</Text>

  <View style={{position:'relative',width:35,height:35,backgroundColor:'green',
                borderRadius:35,top:-50,marginLeft:'auto',marginRight:'auto', left:50,}}>
                <Image style={{height:18,width:18,marginLeft:'auto',marginRight:'auto',top:10,}} source ={require('../assets/food.png')}/>
                </View>
  
  </View>
  </View>

                
                <View style={{position:'absolute',width:50,height:50,backgroundColor:'green',
                borderRadius:35,top:720,marginLeft:'auto',marginRight:'auto', left:170,}}>
                <Image style={{height:25,width:25,marginLeft:'auto',marginRight:'auto',top:10,}} source ={require('../assets/food.png')}/>
                </View>

            </View>
 <View style={{flexDirection:'row',gap:70,top:-15}}>
 <Image style={{height:30,width:30,}} source ={require('../assets/food.png')}/>
 <Image style={{height:30,width:30,}} source ={require('../assets/food.png')}/>
 <Image style={{height:30,width:30,}} source ={require('../assets/food.png')}/>
 <Image style={{height:30,width:30,}} source ={require('../assets/food.png')}/>
 </View>
        </View>

        </View>
        );
    }
    const style = StyleSheet.create({
        container:{
        
                flex:1,
                alignItems:'center',
                justifyContent:'center',
                height:100,
                width:400,
                marginLeft:"auto",
                marginRight:"auto",
                backgroundColor:'white',
                borderRadius:18,
            },
            edite:{
                left:8,
                marginRight:'auto',
              height:130,
              width:130,
              top:-20,
              },
              cont1:{
                position:'relative',
                left:5,
                top:530,
                height:195,
                width:180,
                borderRadius:18,
                backgroundColor:'yellow',
              },
              cont2:{
                position:'relative',
                left:10,
                top:530,
                height:195,
                width:180,
                borderRadius:18,
                backgroundColor:'yellow',
              },
    });
    export default Tigerscreen;