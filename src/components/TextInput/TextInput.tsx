import React, { useRef } from 'react'
import { Pressable, TextInput as RNTextInput, TextInputProps as RNTextInputProps, StyleSheet, TextStyle } from 'react-native'
import { Text, $fontFamily, $fontSizes } from '../Text/Text'
import { Box, BoxProps } from '../Box/Box'
import { useAppTheme } from '../../hooks/useAppTheme'

interface TextInputProps extends RNTextInputProps {
    label: string,
    errorMessage?: string
}

export const TextInput = ({label, errorMessage,...rnTextInputProps}: TextInputProps) => {

    const {colors} = useAppTheme()
    const inputRef = useRef<RNTextInput>(null)

    const $textInputContainer: BoxProps = {
        borderWidth: errorMessage ? 2 : 1,
        borderColor: errorMessage ? "error" : "gray4",
        padding: "s16",
        borderRadius: "s12"
    }

    function focusInput(){
        inputRef.current?.focus()
    }

    return (
        <Pressable onPress={focusInput}>
            <Box mb='s12'>
                <Text preset="paragraphMedium" mb="s4">{label}</Text>
                <Box {...$textInputContainer}>
                    <RNTextInput
                        ref={inputRef}
                        style={$textInputStyle}
                        placeholderTextColor={colors.gray2}
                        {...rnTextInputProps}
                    />
                </Box>
                {errorMessage && <Text preset="paragraphSmall" color="error" bold>{errorMessage}</Text>}
            </Box>
        </Pressable>
    )
}

const $textInputStyle: TextStyle = {
    padding: 0,
    fontFamily: $fontFamily.regular,
    ...$fontSizes.paragraphMedium,borderColor: "gray4",
}
