import React from "react";
import { View, StyleSheet, ViewStyle, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../styles/Colors";

interface Props {
	onPress: () => void;
}

//TODO: move to components folder
const ShopNavigationButton: React.VFC<Props> = ({ onPress }) => (
	<TouchableOpacity onPress={onPress}>
		<View style={styles.container}>
			<MaterialCommunityIcons
				name="shopping"
				color={Colors.Secondary}
				size={35}
			/>
		</View>
	</TouchableOpacity>
);

interface Style {
	container: ViewStyle;
	inactiveBackground: ViewStyle;
}

const stylesObj: Style = {
	container: {
		backgroundColor: Colors.Primary,
		borderRadius: 40,
		borderColor: Colors.Secondary,
		borderWidth: 10,
		height: 80,
		width: 80,
		bottom: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	inactiveBackground: {
		backgroundColor: Colors.Grey,
	},
};

const styles = StyleSheet.create<Style>(stylesObj);

export default ShopNavigationButton;
