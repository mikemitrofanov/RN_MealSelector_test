import {StyleSheet, Text, View} from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: '#b7785c',
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  
  subtitle: {
    color: '#b7785c',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  }
});