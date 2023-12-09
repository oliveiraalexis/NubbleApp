import React, { useRef } from 'react'
import { Pressable, TextInput as RNTextInput, TextInputProps as RNTextInputProps, StyleSheet, TextStyle } from 'react-native'
import { Text, $fontFamily, $fontSizes } from '../Text/Text'
import { Box, BoxProps } from '../Box/Box'
import { useAppTheme } from '../../hooks/useAppTheme'

interface TextInputProps extends RNTextInputProps {
    label: string,
}

export const TextInput = ({label,...rnTextInputProps}: TextInputProps) => {

    const {colors} = useAppTheme()
    const inputRef = useRef<RNTextInput>(null)

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
            </Box>
        </Pressable>
    )
}

const $textInputContainer: BoxProps = {
    borderWidth:1,
    padding: "s16",
    borderColor: "gray4",
    borderRadius: "s12"
}

const $textInputStyle: TextStyle = {
    padding: 0,
    fontFamily: $fontFamily.regular,
    ...$fontSizes.paragraphMedium,borderColor: "gray4",
}
