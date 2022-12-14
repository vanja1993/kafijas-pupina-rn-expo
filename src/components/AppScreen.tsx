import React from "react";
import { View, StyleSheet, ViewStyle, SafeAreaView } from "react-native";

import appStyles from "../styles/Application";
import Colors from "../../src/styles/Colors";

interface Props {
	children: React.ReactNode;
	safeAreaViewBackgroundColor?: string;
	additionalStyles?: ViewStyle;
}

const AppScreen: React.VFC<Props> = ({
	children,
	safeAreaViewBackgroundColor,
	additionalStyles,
}) => (
	//Known issue: SafeAreaView currently only applicable to iOS devices with iOS version 11 or later
	<SafeAreaView
		style={[
			styles.safeAreaView,
			{ backgroundColor: safeAreaViewBackgroundColor },
		]}
	>
		<View style={[styles.contentContainer, additionalStyles]}>{children}</View>
	</SafeAreaView>
);

interface Style {
	safeAreaView: ViewStyle;
	contentContainer: ViewStyle;
}

const stylesObj: Style = {
	safeAreaView: {
		...appStyles.fullSize,
		backgroundColor: Colors.Secondary,
	},
	contentContainer: {
		...appStyles.fullSize,
		paddingHorizontal: 20,
	},
};

const styles = StyleSheet.create<Style>(stylesObj);

export default AppScreen;
