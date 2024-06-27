import React from 'react';
import { Platform } from 'react-native';
import WheelNative from './WheelNative';

interface WheelProps {
    value: number;
    setValue?: (value: number) => void;
    items: string[];
}

export default function Wheel(props: WheelProps) {
    return  (
        <WheelNative {...props} />
    );
}