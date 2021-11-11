import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import HomePage from "../index";

configure({ adapter: new Adapter() });

describe('Should render correctly "Home"', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<HomePage />);
    });
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1);
    });
});