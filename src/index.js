import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const airlineReducer = (state = [], action) => {
    const airlineName = action.airlineName;
    console.log(action);
    if (action.type === 'NAME') {
        return [
            ...state,
            airlineName
        ];
    }

    return [
        ...state
    ];
};





const storeInstance = createStore(
    combineReducers({
        airlineReducer
    })
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));