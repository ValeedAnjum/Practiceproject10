import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';
import { userSetting } from './userSetting';
import {reducer as FormReducer} from 'redux-form';
import {reducer as ToastrReducer} from 'react-redux-toastr';
import { Model } from './Model';
export const Reducer = combineReducers({
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    usersettings:userSetting,
    form:FormReducer,
    model:Model,
    toastr:ToastrReducer
})