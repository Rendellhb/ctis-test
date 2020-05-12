/* eslint-disable no-undef,import/no-extraneous-dependencies */
import { NativeModules } from 'react-native';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

NativeModules.StatusBarManager = { getHeight: jest.fn() };

jest.mock('react-native-simple-toast', () => ({
  show: jest.fn(),
  SHORT: jest.fn(),
}));

jest.mock('react-native/Libraries/Components/StatusBar/NativeStatusBarManager', () => ({ 
    ...require.requireActual('react-native/Libraries/Components/StatusBar/NativeStatusBarManager'),
    getConstants: () => ({
      DEFAULT_BACKGROUND_COLOR: 1
    })
}));

jest.mock( 'react-native/Libraries/Utilities/NativePlatformConstantsIOS', () => ({ 
  ...require.requireActual( 'react-native/Libraries/Utilities/NativePlatformConstantsIOS', ), 
  getConstants: () => ({ 
    forceTouchAvailable: false, 
    interfaceIdiom: 'en', 
    isTesting: false, 
    osVersion: 'ios', 
    reactNativeVersion: { major: 60, minor: 1, patch: 0, }, systemName: 'ios', }), 
}), )
