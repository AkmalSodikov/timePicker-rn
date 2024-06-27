import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import WheelPicker from 'react-native-wheely';

interface WheelProps {
    value: number;
    setValue?: (value: number) => void;
    items: string[];
}

export default function WheelNative({
                                        value,
                                        setValue = () => {},
                                        items,
                                    }: WheelProps) {

    return (
        <WheelPicker
            selectedIndex={value}
            options={items}
            onChange={setValue}
            containerStyle={{
                ...styles.container,
            }}
            itemTextStyle={{
                ...styles.timePickerText,
            }}
            itemHeight={45}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        ...Platform.select({
            web: {
                userSelect: 'none',
            },
        }),
    },
    timePickerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});