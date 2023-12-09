import React, { useRef } from 'react'
import { Pressable, TextInput as RNTextInput, TextInputProps as RNTextInputProps, StyleSheet, TextStyle } from 'react-native'
import { Text, $fontFamily, $fontSizes } from '../Text/Text'
import { Box, BoxProps } from '../Box/Box'
import { useAppTheme } from '../../hooks/useAppTheme'

interface TextInputProps extends RNTextInputProps {
    label: string,
    errorMessage?: string,
    RightComponent?: React.ReactElement,
    boxProps?: BoxProps
}

export const TextInput = ({label, errorMessage, RightComponent, boxProps, ...rnTextInputProps}: TextInputProps) => {

    const {colors} = useAppTheme()
    const inputRef = useRef<RNTextInput>(null)

    const $textInputContainer: BoxProps = {
        borderWidth: errorMessage ? 2 : 1,
        borderColor: errorMessage ? "error" : "gray4",
        padding: "s16",
        borderRadius: "s12",
        flexDirection: "row"
    }

    function focusInput(){
        inputRef.current?.focus()
    }

    return (
        <Box {...boxProps}>
            <Pressable onPress={focusInput}>
                <Text preset="paragraphMedium" mb="s4">{label}</Text>
                <Box {...$textInputContainer}>
                    <RNTextInput
                        ref={inputRef}
                        style={$textInputStyle}
                        placeholderTextColor={colors.gray2}
                        {...rnTextInputProps}
                    />
                    {RightComponent && (
                        <Box ml="s16" justifyContent="center">
                            {RightComponent}
                        </Box>
                    )}
                </Box>
                {errorMessage && <Text preset="paragraphSmall" color="error" bold>{errorMessage}</Text>}
            </Pressable>
        </Box>
    )
}

const $textInputStyle: TextStyle = {
    padding: 0,
    fontFamily: $fontFamily.regular,
    flexGrow: 1,
    flexShrink: 1,
    ...$fontSizes.paragraphMedium,
}
