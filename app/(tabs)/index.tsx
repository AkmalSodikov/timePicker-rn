import {Image, StyleSheet, Platform, View, Text} from 'react-native';

import Wheel from "@/app/(tabs)/TimePicker/Wheel";

import {useCallback, useState} from "react";


export default function HomeScreen() {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);

  function createNumberList(num: number) {
    return new Array(num)
        .fill(0)
        .map((_, index) =>
            index < 10 ? `0${index.toString()}` : index.toString()
        );
  }

  const hours = createNumberList(24);
  const minutes = createNumberList(60);

  console.log("%d : %d", hour, minute)


  return (
      <View style={styles.container} testID="time-selector">
        <View style={styles.timePickerContainer}>
          <View style={styles.wheelContainer}>
            <Wheel value={hour} items={hours} setValue={(hour) => setHour(hour)} />
          </View>
          <Text
              style={{
                marginHorizontal: 5,
                ...styles.timePickerText,
              }}
          >
            :
          </Text>
          <View style={styles.wheelContainer}>
            <Wheel value={minute} items={minutes} setValue={(hour) => setMinute(hour)} />
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
      backgroundColor: "white",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wheelContainer: {
    flex: 1,
  },
  timePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300 / 2,
    height: 300 / 2,
  },
  timePickerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
