import { MD3Typescale } from "react-native-paper/lib/typescript/types";
import { moderateScale, verticalScale } from "react-native-size-matters";

export type EFontType =
    | 'display'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'title1'
    | 'title2'
    | 'body1'
    | 'body2'
    | 'button1'
    | 'button2'
    | 'overline'
    | 'caption'
    | 'subHead'
    | 'captionSemiBold'
    | 'subTitleRegular'
    | 'subTitleSemiBold'
    | 'subTitleBold'
    | 'title';

type FontProperties = {
    fontSize: number;
    lineHeight: number;
    fontWeight: 'normal' | 'bold' | '600' | '700' | '400';
    fontFamily: string;
    letterSpacing?: number
};

const fonts: Record<EFontType, FontProperties> = {
    display: {
        fontSize: moderateScale(48),
        lineHeight: verticalScale(42),
        fontWeight: '700',
        fontFamily: 'Montserrat-SemiBold',
    },
    h1: {
        fontSize: moderateScale(42),
        lineHeight: verticalScale(36),
        fontWeight: '700',
        fontFamily: 'Montserrat-SemiBold',
    },
    h2: {
        fontSize: moderateScale(36),
        lineHeight: verticalScale(32),
        fontWeight: '700',
        fontFamily: 'Montserrat-SemiBold',
    },
    h3: {
        fontSize: moderateScale(32),
        lineHeight: verticalScale(30),
        fontWeight: '700',
        fontFamily: 'Montserrat-SemiBold',
    },
    h4: {
        fontSize: moderateScale(28),
        lineHeight: verticalScale(30),
        fontWeight: '700',
        fontFamily: 'Montserrat-SemiBold',
    },
    h5: {
        fontSize: moderateScale(24),
        lineHeight: verticalScale(24),
        fontWeight: '700',
        fontFamily: 'Montserrat-SemiBold',
    },
    h6: {
        fontSize: moderateScale(20),
        lineHeight: verticalScale(22),
        fontWeight: '700',
        fontFamily: 'Montserrat-SemiBold',
    },
    title1: {
        fontSize: moderateScale(16),
        lineHeight: verticalScale(16),
        fontWeight: '600',
        fontFamily: 'Montserrat-SemiBold',
    },
    title2: {
        fontSize: moderateScale(14),
        lineHeight: verticalScale(14),
        fontWeight: '600',
        fontFamily: 'Montserrat-Medium',
    },
    body1: {
        fontSize: moderateScale(16),
        lineHeight: verticalScale(14),
        fontWeight: '400',
        fontFamily: 'Montserrat-Regular',
    },
    body2: {
        fontSize: moderateScale(14),
        lineHeight: verticalScale(14),
        fontWeight: '400',
        fontFamily: 'Montserrat-Regular',
    },
    button1: {
        fontSize: moderateScale(16),
        lineHeight: verticalScale(22),
        fontWeight: '600',
        fontFamily: 'Montserrat-SemiBold',
    },
    button2: {
        fontSize: moderateScale(14),
        lineHeight: verticalScale(14),
        fontWeight: '600',
        fontFamily: 'Montserrat-SemiBold',
    },
    overline: {
        fontSize: moderateScale(12),
        lineHeight: verticalScale(16),
        fontWeight: '600',
        fontFamily: 'Montserrat-SemiBold',
        letterSpacing: 1.5
    },
    caption: {
        fontSize: moderateScale(12),
        lineHeight: verticalScale(12),
        fontWeight: '400',
        fontFamily: 'Montserrat-Regular',
    },
    subHead: {
        fontSize: moderateScale(18),
        lineHeight: verticalScale(24),
        fontWeight: '600',
        fontFamily: 'Montserrat-SemiBold',
    },
    captionSemiBold: {
        fontSize: moderateScale(12),
        lineHeight: verticalScale(12),
        fontWeight: '600',
        fontFamily: 'Montserrat-SemiBold',
    },
    subTitleRegular: {
        fontSize: moderateScale(10),
        lineHeight: verticalScale(12),
        fontWeight: '400',
        fontFamily: 'Montserrat-Regular',
    },
    subTitleSemiBold: {
        fontSize: moderateScale(10),
        lineHeight: verticalScale(12),
        fontWeight: '600',
        fontFamily: 'Montserrat-SemiBold',
    },
    subTitleBold: {
        fontSize: moderateScale(10),
        lineHeight: verticalScale(12),
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Bold',
    },
    title: {
        fontSize: moderateScale(18),
        lineHeight: verticalScale(24),
        fontWeight: 'bold',
        fontFamily: 'Montserrat-SemiBold',
    },
}

// const fonts: MD3Typescale = {
//     displaySmall: {
//         fontFamily: "Montserrat-SemiBold",
//         letterSpacing: 0,
//         fontWeight: "600",
//         lineHeight: verticalScale(44),
//         fontSize: moderateScale(36),
//     },
//     headlineSmall: {
//         fontFamily: "Montserrat-Medium",
//         letterSpacing: 0,
//         fontWeight: "500",
//         lineHeight: verticalScale(32),
//         fontSize: moderateScale(24),
//     },
//     bodySmall: {
//         fontFamily: "Montserrat-Regular",
//         letterSpacing: 0.4,
//         fontWeight: "400",
//         lineHeight: verticalScale(20),
//         fontSize: moderateScale(12),
//     },
//     labelSmall: {
//         fontFamily: "Montserrat-Medium",
//         letterSpacing: 0.5,
//         fontWeight: "500",
//         lineHeight: verticalScale(16),
//         fontSize: moderateScale(11),
//     },
//     titleSmall: {
//         fontFamily: "Montserrat-Medium",
//         letterSpacing: 0.1,
//         fontWeight: "500",
//         lineHeight: verticalScale(20),
//         fontSize: moderateScale(14),
//     },
//     bodyMedium: {
//         fontFamily: "Montserrat-Regular",
//         letterSpacing: 0.25,
//         fontWeight: "400",
//         lineHeight: verticalScale(20),
//         fontSize: moderateScale(14),
//     },
//     labelMedium: {
//         fontFamily: "Montserrat-Medium",
//         letterSpacing: 0.5,
//         fontWeight: "500",
//         lineHeight: verticalScale(16),
//         fontSize: moderateScale(12),
//     },
//     titleMedium: {
//         fontFamily: "Montserrat-SemiBold",
//         letterSpacing: 0.1,
//         fontWeight: "600",
//         lineHeight: verticalScale(24),
//         fontSize: moderateScale(16),
//     },
//     displayMedium: {
//         fontFamily: "Montserrat-SemiBold",
//         letterSpacing: 0,
//         fontWeight: "600",
//         lineHeight: verticalScale(52),
//         fontSize: moderateScale(45),
//     },
//     headlineMedium: {
//         fontFamily: "Montserrat-Medium",
//         letterSpacing: 0,
//         fontWeight: "500",
//         lineHeight: verticalScale(36),
//         fontSize: moderateScale(28),
//     },
//     bodyLarge: {
//         fontFamily: "Montserrat-Regular",
//         letterSpacing: 0.5,
//         fontWeight: "400",
//         lineHeight: verticalScale(24),
//         fontSize: moderateScale(16),
//     },
//     labelLarge: {
//         fontFamily: "Montserrat-Medium",
//         letterSpacing: 0.1,
//         fontWeight: "500",
//         lineHeight: verticalScale(20),
//         fontSize: moderateScale(14),
//     },
//     titleLarge: {
//         fontFamily: "Montserrat-SemiBold",
//         letterSpacing: 0,
//         fontWeight: "600",
//         lineHeight: verticalScale(28),
//         fontSize: moderateScale(22),
//     },
//     displayLarge: {
//         fontFamily: "Montserrat-SemiBold",
//         letterSpacing: 0,
//         fontWeight: "600",
//         lineHeight: verticalScale(64),
//         fontSize: moderateScale(57),
//     },
//     headlineLarge: {
//         fontFamily: "Montserrat-Medium",
//         letterSpacing: 0,
//         fontWeight: "500",
//         lineHeight: verticalScale(40),
//         fontSize: moderateScale(32),
//     },
//     default: {
//         fontFamily: "Montserrat-Regular",
//         letterSpacing: 0,
//         fontWeight: "400",
//     },
// };
export default fonts