import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { overrideMatchMedia } from 'tests/overrideMatchMedia';

Enzyme.configure({ adapter: new Adapter() });

overrideMatchMedia();
