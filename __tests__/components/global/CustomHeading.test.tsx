import {fireEvent, render} from '@testing-library/react-native'
import CustomHeading from '../../../src/components/global/CustomHeading'
import { goBack } from '../../../src/utils/NavigationUtil';
jest.mock('../../../src/utils/NavigationUtil',()=>({
    goBack:jest.fn()
}))
describe('Custom Heading', () => {
  test('should render the title correctly', () => {
    const title='Test title'
    const {getByText}=render(<CustomHeading title={title}/>);
    expect(getByText(title)).toBeTruthy();
  });

  test('should call the go back function', () => {
    const {getByTestId}=render(<CustomHeading title={'test'}/>);
    const backButton=getByTestId('back-button');
    fireEvent.press(backButton);
    expect(goBack).toHaveBeenCalled();
  });
})
