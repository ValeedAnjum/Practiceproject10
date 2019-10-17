const initState = {
    currency:null,
    items:[],
    carditems:[],
    loading:false
}

export const userSetting = (state = initState,action) => {
    switch (action.type) {
        case 'USD':
            return state;
        case 'PRODUCT_ITEM_FETCH_START':
            return {...state,items:[],loading:true}
        case 'PRODUCT_ITEM_FETCH_FINISH':
            return {...state,items:action.payload,loading:false}
        case 'CARD_ITEMS_FETCH_END':
            return {...state,carditems:action.payload}
        default:
            return state;
    }
}