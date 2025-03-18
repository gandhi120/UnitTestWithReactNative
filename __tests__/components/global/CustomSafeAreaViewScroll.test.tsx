import { render } from "@testing-library/react-native"
import CustomSafeAreaScrollView from "../../../src/components/global/CustomSafeAreaViewScroll"
import { Text } from "react-native";

describe('test scroll view', () => {
  test('should be test scroll view children', () => {
    const{getByText}=render(<CustomSafeAreaScrollView>
        <Text>{'Test child'}</Text>
    </CustomSafeAreaScrollView>)
  expect(getByText('Test child')).toBeTruthy();

  });

});

