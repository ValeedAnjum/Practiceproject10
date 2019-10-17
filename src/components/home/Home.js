import React from 'react';
import ItemList from './ItemList';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
const Home = ({items}) => {
    // console.log(items);
    return (
        <div className="container items">
            <div className="row">
                {
                    items && items.map((item,key) => {
                        return (
                            <ItemList item={item} key={key} />
                        );
                    })
                }
                {/* <ItemList /> */}
            </div>
        </div>
    );
};

const mapState = state => {
    // console.log(state);
    return {
        items:state.firestore.ordered.items
    }
}
export default compose(
    connect(mapState,null),
    firestoreConnect([
        {
            collection:'items'
        }
    ])
)(Home);

