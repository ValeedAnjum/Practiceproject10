import { toastr } from "react-redux-toastr";

export const Register = (cred) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        dispatch({type:'AsynchronousStart'});
        firebase.auth().createUserWithEmailAndPassword(
            cred.email,
            cred.password
        ).then(res => {
            return firestore.collection('users').doc(res.user.uid).set({
                fname:cred.fname,
                lname:cred.lname,
                currency:'USD'
            })
        }).then(() => {
            toastr.success('Success','Your account has been successfully created');
            dispatch({type:'AsynchronousFinish'});
        }).catch(err => {
            toastr.error('Error',err.message);
            dispatch({type:'AsynchronousError'});

        })
    }
}

export const Login = cred => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        dispatch({type:'AsynchronousStart'});
        firebase.auth().signInWithEmailAndPassword(
            cred.email,
            cred.password
        ).then(() => {
            dispatch({type:'AsynchronousFinish'});
        }).catch(err => {
            toastr.error('Error',err.message);
            dispatch({type:'AsynchronousError'});
        })
    }
}

export const Logout = () => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            toastr.success('Logout','Your logout successfully');
        }).catch(err => {
            toastr.error('Error',err.message);
        })
    }
}