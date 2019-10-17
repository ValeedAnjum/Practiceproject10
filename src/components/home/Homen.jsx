import React, { Component } from 'react'
import {connect} from 'react-redux';
import ItemList from './ItemList';
import { loadItems } from '../../store/Actions/UserSetting';
class Homen extends Component {
    state = {
        loadedItems:[],
        moreItems:true
    }
    async componentDidMount() {
        let next = await this.props.loadItemsFun();
        if(next && next.docs && next.docs.length > 1){
            this.setState({
                loadedItems:[...this.props.items],
                moreItems:true
            })
        }
    }
    nextItems = async () => {
        const {items} = this.props;
        const lastItem = items && items[items.length - 1];
        const next = await this.props.loadItemsFun(lastItem);
        this.setState({
            loadedItems:[...this.state.loadedItems,...this.props.items]
        })
        if(next && next.docs && next.docs.length <= 1){
            console.log('Ok');
            this.setState({
                moreItems:false,
            })
        }
    }
    render() {
        // console.log(this.props.events);
        const {loadedItems} = this.state;
        const {loading,currency} = this.props;
        return (
        <div className="container items">
            <div className="row">
            {
                    loadedItems && loadedItems.map((item,key) => {
                        return (
                            <ItemList currency={currency} item={item} key={key} />
                        );
                    })
                }
            </div>
            {
                this.state.moreItems ? 
                (!loading && <button onClick={this.nextItems} className="LoadMore">More</button>) 
                : 
                <h2 className="nomoreItems">No More Items</h2>
            }

        </div>
        )
    }
}
const mapDispatch = dispatch => {
    return {
        loadItemsFun:lastItem => dispatch(loadItems(lastItem))
    }
}
const mapState = state => {
    return {
        items:state.usersettings.items,
        loading:state.usersettings.loading,
        currency:state.firebase.profile.currency
    }
}
export default connect(mapState,mapDispatch)(Homen);