import {StyleSheet, Text, View} from "react-native";

function List ({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <View style={styles.listItem} key={`${item}_${index}`}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </>
  )
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#b7785c'
  },
  
  itemText: {
    color: '#351401',
  }
});