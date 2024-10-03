import {
    View,
    TextInput as RNTextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    ViewStyle,
    TextStyle,
    TextInputProps
} from 'react-native';
import React, { ReactNode, useMemo, useState } from 'react'
import { useAppTheme } from 'theme/themeContext';

interface ETextInputProps extends TextInputProps {
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    placeholder?: string;
    children?: ReactNode;
    leadingView?: React.ReactNode;
    trailingView?: React.ReactNode;
}
const ETextInput: React.FC<ETextInputProps> & {
    Leading: React.FC<{ children?: React.ReactNode }>;
    Trailing: React.FC<{ children?: React.ReactNode }>;
} = ({
    containerStyle,
    inputStyle,
    placeholder,
    children,
    ...textInputProps
}) => {
        const [isFocused, setIsFocused] = useState<boolean>(false);

        const theme = useAppTheme()
        const [leadingView, trailingView] = useMemo(() => {
            const leading = React.Children.toArray(children).find(
                (child) => {
                    if (React.isValidElement(child))
                        return (child.type as React.FC).name === "Leading"
                }
            );
            const trailing = React.Children.toArray(children).find(
                (child) => {
                    if (React.isValidElement(child))
                        return (child.type as React.FC).name === "Trailing"
                }
            );
            return [leading, trailing];
        }, [children]);

        return (
            <View style={[
                { borderColor: isFocused ? theme.colors.inputBorder : "transparent" },
                { backgroundColor: theme.colors.inputBackground },
                styles.container,
                containerStyle
            ]}>
                {leadingView && (
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={(leadingView as React.ReactElement).props.onPress}
                    >
                        {leadingView}
                    </TouchableOpacity>
                )}
                <RNTextInput
                    onBlur={(e) => {
                        setIsFocused(false);
                    }}
                    onFocus={(e) => {
                        setIsFocused(true);
                    }}
                    placeholder={placeholder}
                    style={[
                        { color: theme.colors.text },
                        styles.input,
                        inputStyle
                    ]}
                    {...textInputProps}
                />
                {trailingView && (
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={(trailingView as React.ReactElement).props.onPress}
                    >
                        {trailingView}
                    </TouchableOpacity>
                )}
            </View>
        )
    }

const Leading: React.FC<{ children?: React.ReactNode }> = ({ children }) => <>{children}</>;
const Trailing: React.FC<{ children?: React.ReactNode }> = ({ children }) => <>{children}</>;

ETextInput.Leading = Leading;
ETextInput.Trailing = Trailing;

export default ETextInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 1,
        paddingHorizontal: 10,

    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 14,
        fontSize: 16,
    },
})