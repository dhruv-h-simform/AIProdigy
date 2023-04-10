import { StyleSheet } from 'react-native';
import { Colors, isAndroid, isIPad, verticalScale } from '../../theme';

const tabHeight = isIPad ? 110 : 83;
const androidHeight = 60;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary.light,
    height: verticalScale(isAndroid ? androidHeight : tabHeight),
  },
  containerDark: {
    backgroundColor: Colors.primary.light,
    height: verticalScale(isAndroid ? androidHeight : tabHeight),
  },
  iconStyle: {
    marginTop: verticalScale(10),
  },
});

export default styles;
