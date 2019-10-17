import { toastr } from 'react-redux-toastr';
import firebase from '../../config/config';
export const currency = name => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        const userId = getState().firebase.auth.uid;
        firestore.collection('users').doc(userId).get().then(res => {
            const data = res.data();
            firestore.collection('users').doc(userId).set({
                ...data,
                currency:name
            }).then(() => {
                toastr.success("Updated","Your account has been successfully updated");
            }).catch(err => {
                toastr.error('Error',err.message);
            })
        }).catch(err => {
            console.log(err.message);
        })
        
    }
}

export const loadItems = lastItem => async (dispatch,getState) => {
    const firestore = firebase.firestore();
    const eventRef = firestore.collection('items');
    dispatch({type:'AsynchronousStart'});
    dispatch({type:'PRODUCT_ITEM_FETCH_START'});

    try {
        let startAfter = lastItem && (await firestore.collection('items').doc(lastItem.id).get());
        let query;
        lastItem
            ? (query = eventRef.orderBy('name').startAfter(startAfter).limit(4))
            : (query = eventRef.orderBy('name').limit(4));
        let querySnap = await query.get();
        // console.log(querySnap);
        dispatch({type:'AsynchronousFinish'});
        if (querySnap.docs.length === 0) {
        //   dispatch({type:'HOME_EVENTS_FETCHED1'})
          return querySnap;
        }
        let items = [];
        for(let i = 0;i<querySnap.docs.length;i++){
            items.push({...querySnap.docs[i].data(),id:querySnap.docs[i].id});
        }
        // console.log(JSON.stringify(items));
        dispatch({type:'PRODUCT_ITEM_FETCH_FINISH',payload:items});
        return querySnap;
    } catch (err) {
      console.log(err);
      dispatch({type:'AsynchronousError'});
    }
}

export const additemtocard = item => async (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        const userId = getState().firebase.auth.uid;
        if(!userId){
            toastr.warning('Login','to order');
            return;
        }
        dispatch({type:'AsynchronousStart'});
        const check = await firestore.collection('card').doc(userId + '_' + item.id).get();
        // console.log(userId);
        const {name,picture,price} = item;
        if(check.data()){
            toastr.warning('','Item is already in list');
            dispatch({type:'AsynchronousFinish'});

        }else{
            firestore.collection('card').doc(userId + '_' + item.id).set({
                name:name,
                picture:picture,
                price:price,
                quantity:1,
                uid:userId
            }).then(() => {
                dispatch({type:'AsynchronousFinish'});
                toastr.success('','Item added to the card');
            }).catch(err => {
                dispatch({type:'AsynchronousFinish'});
                toastr.error('','something went wrong');
                console.log(err.message);
            })
        }
        
}

export const incrementcarditem = (id,qun) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('card').doc(id).update({
            quantity:qun+1
        }).then(() => {
            console.log('Success');
        }).catch(err => {
            console.log('e',err.message);
        })
    }
}

export const decrementcarditem = (id,qun) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        if(Number(qun) === 1){
            firestore.collection('card').doc(id).delete().then(() => {
                toastr.success('','Item deleted from the card');
            }).catch(err => {
                toastr.error('',err.message);
            })
        }else{
            firestore.collection('card').doc(id).update({
                quantity:qun-1
            }).then(() => {
                toastr.success('','item incremented');
            }).catch(err => {
                toastr.error('',err.message);
            })
        }

    }
}
export const deletecarditems = (id) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('card').doc(id).delete().then(() => {
            toastr.success('','Item delete from the card');
        }).catch(err => {
            toastr.error('',err.message);
        })
    }
}