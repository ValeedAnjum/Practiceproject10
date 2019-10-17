import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {getFirebase,reactReduxFirebase} from 'react-redux-firebase';
import {getFirestore,reduxFirestore} from 'redux-firestore';
import {Provider} from 'react-redux';
import { Reducer } from './store/Reducers/Reducer';
import config from './config/config';
import Loader from './components/models/loader';
const store = createStore(Reducer,compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reactReduxFirebase(config,{attachAuthIsReady:true,useFirestoreForProfile:true,userProfile:'users'}),
        reduxFirestore(config)
));

// const store = createStore(rootReducer,
//         compose(
//             applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
//             reactReduxFirebase(config,{attachAuthIsReady:true,useFirestoreForProfile:true,userProfile:'users'}),
//             reduxFirestore(config)
//         )
// );

ReactDOM.render(<Loader/>,document.getElementById('root'));
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
})
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// serviceWorker.unregister();