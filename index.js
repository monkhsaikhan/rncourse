import React from 'react'
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux'
import App from './App';
import confirgureStore from './src/store/confirgureStore';
import {name as appName} from './app.json';

const store = confirgureStore();

const RNRedux = () => (
    <Provider store={store}>
        <App /> 
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
