// import Exponent from 'exponent';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import CircularSlider from '../components/circleSlider';
import TimerText from '../components/timer';

const TEMP_ICON = (
  <G>
    <Path
      fill="#fff"
      d="M5.739,4.034c-0.941,0-1.705,0.763-1.705,1.705c0,0.941,0.763,1.705,1.705,1.705c0.941,0,1.705-0.764,1.705-1.705C7.443,4.797,6.68,4.034,5.739,4.034 M5.739,6.591c-0.47,0-0.853-0.382-0.853-0.852s0.382-0.853,0.853-0.853s0.852,0.382,0.852,0.853S6.209,6.591,5.739,6.591 M13.194,12.723c-0.289,0.157-0.587,0.235-0.894,0.235c-0.393,0-0.747-0.076-1.064-0.229c-0.316-0.152-0.59-0.362-0.818-0.63s-0.404-0.585-0.529-0.952c-0.125-0.367-0.187-0.768-0.187-1.204c0-0.405,0.062-0.783,0.187-1.135c0.125-0.351,0.301-0.659,0.529-0.923s0.501-0.47,0.818-0.619c0.317-0.149,0.672-0.224,1.064-0.224c0.264,0,0.526,0.054,0.786,0.162c0.261,0.106,0.529,0.32,0.808,0.641l1.049-0.825c-0.379-0.466-0.786-0.797-1.226-0.992c-0.438-0.195-0.914-0.292-1.427-0.292c-0.585,0-1.122,0.101-1.61,0.304c-0.488,0.202-0.909,0.491-1.262,0.865C9.065,7.28,8.79,7.732,8.59,8.264c-0.199,0.531-0.299,1.122-0.299,1.771c0,0.634,0.1,1.211,0.299,1.73c0.2,0.52,0.476,0.965,0.829,1.336c0.353,0.371,0.773,0.657,1.262,0.859c0.488,0.203,1.025,0.304,1.61,0.304c0.556,0,1.08-0.114,1.571-0.344c0.492-0.229,0.909-0.596,1.252-1.101l-1.112-0.849C13.752,12.316,13.483,12.566,13.194,12.723 M17.671,0.625H2.33c-0.941,0-1.705,0.763-1.705,1.705v15.341c0,0.94,0.763,1.704,1.705,1.704h15.341c0.94,0,1.704-0.764,1.704-1.704V2.33C19.375,1.388,18.611,0.625,17.671,0.625M18.522,17.671c0,0.47-0.382,0.852-0.852,0.852H2.33c-0.47,0-0.853-0.382-0.853-0.852V2.33c0-0.47,0.382-0.853,0.853-0.853h15.341c0.47,0,0.852,0.382,0.852,0.853V17.671z"></Path>
  </G>
);

function roundAngleToFives(angle) {
  const inDegAngle = (2 * Math.PI) / 10;

  return Math.round(angle / inDegAngle) * inDegAngle;
}

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      startAngle: Math.PI * 2,
      angleLength: Math.PI / 2,
      tabNo: 1
    };
  }

  onUpdate = ({ startAngle, angleLength }) => {
    this.setState({
      startAngle: roundAngleToFives(startAngle),
      angleLength: roundAngleToFives(angleLength)
    });
  };

  switchTab = tabNo => {
    this.setState({
      tabNo
    });
  };

  render() {
    const { startAngle, angleLength } = this.state;
    const temprature =
      10 - Math.round((2 * Math.PI - angleLength) / ((2 * Math.PI) / 10)) + 16;

    return (
      <View style={styles.container}>
        <View>
          <Text
            style={styles.textContainer}>
            Thermostat
          </Text>
        </View>
        <View style={styles.containerTemp}>
          <View>
            <TimerText style={styles.conterContainer} temprature={temprature} />
            <CircularSlider
              startAngle={startAngle}
              angleLength={angleLength}
              onUpdate={this.onUpdate}
              segments={30}
              strokeWidth={40}
              radius={145}
              gradientColorFrom="#021B79"
              gradientColorTo="#0575E6"
              bgCircleColor="#171717"
              stopIcon={
                <G scale="1.1" transform={{ translate: '-8, -8' }}>
                  {TEMP_ICON}
                </G>
              }
            />
          </View>
        </View>
        <View style={styles.TabView}>
          <TouchableOpacity onPress={() => this.switchTab(1)}>
            <View>
              <Text
                style={
                  this.state.tabNo === 1
                    ? styles.activeTab
                    : styles.textContainer
                }>
                On
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.switchTab(2)}>
            <View>
              <Text
                style={
                  this.state.tabNo === 2
                    ? styles.activeTab
                    : styles.textContainer
                }>
                Manual
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {this.state.tabNo === 1 && (
          <View style={styles.TabView}>
            <MaterialCommunityIcons
              style={styles.Icons}
              name="fan"
              size={55}
              color="#fff"
            />
            <Ionicons
              style={styles.Icons}
              name="md-snow"
              size={55}
              color="#fff"
            />
            <MaterialCommunityIcons
              style={styles.Icons}
              name="weather-windy"
              size={55}
              color="#fff"
            />
            <Ionicons
              style={styles.Icons}
              name="md-alarm"
              size={55}
              color="#fff"
            />
          </View>
        )}

        {this.state.tabNo === 2 && (
          <View style={styles.TabView}>
            <MaterialCommunityIcons
              style={styles.Icons}
              name="remote"
              size={55}
              color="#fff"
            />
            <MaterialCommunityIcons
              style={styles.Icons}
              name="power-sleep"
              size={55}
              color="#fff"
            />
            <MaterialCommunityIcons
              style={styles.Icons}
              name="sleep"
              size={55}
              color="#fff"
            />
            <Ionicons
              style={styles.Icons}
              name="ios-eye-off"
              size={55}
              color="#fff"
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
    paddingTop: 30,
    justifyContent: 'space-between'
  },
  containerTemp: {
    flex: 2
  },
  conterContainer: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  TabView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textContainer: {
    color: '#fff',
    margin: 20,
    fontSize: 25
  },
  activeTab: {
    color: '#0575E6',
    margin: 20,
    fontSize: 25
  },
  Icons: {
    marginLeft: 20,
    marginRight: 20
  }
});
