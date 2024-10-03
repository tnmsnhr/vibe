// types.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: undefined;
    ItemDetails: undefined
    // Add more routes as needed
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type DetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ItemDetails'>;
