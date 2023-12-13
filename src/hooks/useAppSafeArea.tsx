import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAppTheme } from './useAppTheme'

export const useAppSafeArea = () => {

    const {top, bottom} = useSafeAreaInsets()
    const {spacing} = useAppTheme()

    return {
        top: Math.max(spacing.s20, top),
        bottom: Math.max(spacing.s20, bottom)
    }
}
