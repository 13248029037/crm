import React, { Component } from 'react'
import { View , Text ,StyleSheet,ScrollView,FlatList} from 'react-native'


export default class Css extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,]
        }
    }
    render(){
        // return <View style={{height:3300,overflow:'visible',backgroundColor:'pink'}}>
            // {this.state.data.map(item=><Text style={[styles.text,styles.color]} key={item} >{item}</Text>)}

                   {/* <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                     <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
                     <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
                     <View style={{ height: 150, backgroundColor: 'steelblue'}} /> */}
                     {/* <ScrollView>
                         {this.state.data.map(item=><Text style={[styles.text,styles.color]} key={item} >{item}</Text>)}
                    </ScrollView>  */}
                     {/* <View style={{flex:1,backgroundColor:'red',position:'absolute',zIndex:1000,height:100,width:100,top:40}}></View> */}

        // </View>
        // return <View style={{backgroundColor:'pink',flex:1}}>
        //                 <Text style={{position:'absolute',width:100,height:100,backgroundColor:'red',bottom:'50%',zIndex:4}}>
        //                   1
        //                 </Text>
        //                 <Text style={{position:'relative',backgroundColor:'green',width:120,top:190,zIndex:5}}>2</Text>
        // </View>
        return <FlatList data={this.state.data}
                         renderItem={({item}) =>
                         {
                             return   <View key={item}  style={{height:250,backgroundColor:'blue',display:'flex',flexDirection:'row'}}>
                                 <Text style={{flex:1,backgroundColor:'green',margin:2}}>{item}</Text>
                                 <Text style={{flex:1,backgroundColor:'green',margin:2}}>{item}</Text>
                              </View>
                         }
                         
                        }
                // return (
                //     <View  style={{height:250,backgroundColor:'blue',display:'flex',flexDirection:'row'}}>
                //     <Text style={{flex:1,backgroundColor:'green',margin:2}}>{item}</Text>
                //     <Text style={{flex:1,backgroundColor:'green',margin:2}}>{item}</Text>
                // </View>
                // )
            
          style={{flex:1,borderColor:'blue',borderStyle:'solid',borderWidth:2}}>
                {/* {this.state.data.map(item=>{
                    return (
                        <View key={item} style={{height:250,backgroundColor:'blue',display:'flex',flexDirection:'row'}}>
                        <Text style={{flex:1,backgroundColor:'green',margin:2}}>{item}</Text>
                        <Text style={{flex:1,backgroundColor:'green',margin:2}}>{item}</Text>
                    </View>
                    )
                })} */}
        
        {/* <Text style={{width:100,height:100,lineHeight:100,textAlign:'center',backgroundColor:'red'}}>1</Text> */}
            {/* <View style={{flex:1,backgroundColor:'red'}}></View> */}
            {/* <View style={{flex:2,backgroundColor:'blue'}}></View>
            <View style={{flex:3,backgroundColor:'green'}}></View> */}
        </FlatList>
    }
}


const styles = StyleSheet.create({
    text:{
        color:'blue'
    },
    color:{
        color:'red'
    },
    box:{
        
    }
})