const initState = {
    name:null
}

export const Model = (state = initState,action) => {
    switch (action.type) {
        case 'AsynchronousStart':
            return {...state,name:'AsynchronousStart'}
        case 'AsynchronousFinish':
            return {...state,name:null}
        case 'AsynchronousError':
                return {...state,name:null}
        default:
            return state;
    }
}