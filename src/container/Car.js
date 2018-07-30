import React ,{Component} from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 80,
  },
  screen: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 40,
    margin: 10,
    backgroundColor: '#EF4444',
  },
  text: {
    textAlign: 'center',
    paddingBottom: 40,
  },
  textContainer: {
    backgroundColor: '#AFECEC',
    padding: 20,
    borderRadius: 20,
  },
  image: {
    width: 200,
    height: 100,
    margin: 20,
    borderRadius: 10,
  },
});


class InitialScreen extends Component{
    constructor(props){
        super(props)
        this.state ={
            show:false
        }
    }

    render(){
        return   <View style={styles.container}>
        <Transition
          appear={(transitionInfo) => {
            const { progress, start, end } = transitionInfo;
            const scaleInterpolation = progress.interpolate({
              inputRange: [0, start, end, 1],
              outputRange: [88, 80, 1, 1],
            });
            return { transform: [{ scale: scaleInterpolation }] };
          }}
          disappear={
            (transitionInfo) => {
              const { progress, start, end } = transitionInfo;
              const rotateInterpolation = progress.interpolate({
                inputRange: [0, start, end, 1],
                outputRange: ['360deg', '360deg', '0deg', '0deg'],
              });
              const opacityInterpolation = progress.interpolate({
                inputRange: [0, start, end, 1],
                outputRange: [1, 1, 0, 0],
              });
              return { transform: [{ rotate: rotateInterpolation }],
                opacity: opacityInterpolation };
            }
          }
        >
          <Text style={styles.text}>Click toggle to see appearance animations.</Text>
        </Transition>
        <View style={{height:100,backgroundColor:'pink',width:'100%'}}>
            <InsidePage ></InsidePage>
        </View>
      
        <Transition shared="button" appear="scale">
          <Button title="Toggle" onPress={() => this.props.navigation.navigate('screen')} />
         
        </Transition>
        <Button title="change" onPress={this.change.bind(this)} />
      </View>
    }
    change(){
        this.props.navigation.navigate('newcar')
    }
}

const Second = (props)  => {
    return  <Transition
        appear={(transitionInfo) => {
          const { progress, start, end } = transitionInfo;
          const scaleInterpolation = progress.interpolate({
            inputRange: [0, start, end, 1],
            outputRange: [88, 80, 1, 1],
          });
          return { transform: [{ scale: scaleInterpolation }] };
        }}
        disappear={
          (transitionInfo) => {
            const { progress, start, end } = transitionInfo;
            const rotateInterpolation = progress.interpolate({
              inputRange: [0, start, end, 1],
              outputRange: ['360deg', '360deg', '0deg', '0deg'],
            });
            const opacityInterpolation = progress.interpolate({
              inputRange: [0, start, end, 1],
              outputRange: [1, 1, 0, 0],
            });
            return { transform: [{ rotate: rotateInterpolation }],
              opacity: opacityInterpolation };
          }
        }
      >
        <Text style={styles.text}>Click change to see appearance animations.</Text>
      </Transition>
}

const Module = (props) =>{
    return <View style={{height:300,width:400,backgroundColor:'rgba(0,0,0,.3)'}}>
        <Text onPress ={ ()=>{props.navigation.navigate('newcar')}}>disnji </Text>
    </View>
}


const InsidePage = FluidNavigator(
    {
        screen1:{
            screen:Module
        },
        newcar:{
            screen:Second
        }
    }
)
// const InitialScreen = (props) => (
//   <View style={styles.container}>
//     <Transition
//       appear={(transitionInfo) => {
//         const { progress, start, end } = transitionInfo;
//         const scaleInterpolation = progress.interpolate({
//           inputRange: [0, start, end, 1],
//           outputRange: [88, 80, 1, 1],
//         });
//         return { transform: [{ scale: scaleInterpolation }] };
//       }}
//       disappear={
//         (transitionInfo) => {
//           const { progress, start, end } = transitionInfo;
//           const rotateInterpolation = progress.interpolate({
//             inputRange: [0, start, end, 1],
//             outputRange: ['360deg', '360deg', '0deg', '0deg'],
//           });
//           const opacityInterpolation = progress.interpolate({
//             inputRange: [0, start, end, 1],
//             outputRange: [1, 1, 0, 0],
//           });
//           return { transform: [{ rotate: rotateInterpolation }],
//             opacity: opacityInterpolation };
//         }
//       }
//     >
//       <Text style={styles.text}>Click toggle to see appearance animations.</Text>
//     </Transition>
//     <Transition shared="button" appear="scale">
//       <Button title="Toggle" onPress={() => props.navigation.navigate('screen')} />
//     </Transition>
//   </View>
// );

const Screen = (props) => (
  <View style={[styles.container, { backgroundColor: '#EF000022' }]}>
    <Transition appear="scale">
      <View style={styles.textContainer}>
        <Text>Screen</Text>
      </View>
    </Transition>
    <View style={styles.screen}>
      <Transition appear="scale" delay>
        <View style={styles.circle} />
      </Transition>
      <Transition appear="scale" delay>
        <View style={styles.circle} />
      </Transition>
      <Transition appear="scale" delay>
        <View style={styles.circle} />
      </Transition>
      <Transition appear="scale" delay>
        <View style={styles.circle} />
      </Transition>
    </View>
    <Transition appear="bottom">
      <Image source={{ uri: 'https://picsum.photos/200/100?image=12' }} style={styles.image} />
    </Transition>
    <Transition shared="button">
      <View>
        <Button title="Toggle" onPress={() => props.navigation.goBack()} />
      </View>
    </Transition>
  </View>
);

const Navigator = FluidNavigator({
  home: { screen: InitialScreen },
  screen: { screen: Screen },
});

class AppearingElements extends React.Component {
  static router = Navigator.router;
  render() {
    return (
      <Navigator navigation={this.props.navigation} />
    );
  }
}

export default AppearingElements;

