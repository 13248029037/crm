let initialState ={
    citys:[],
}
function reducer(state=initialState,action={}){
    const {
        type,
        payload
    } = action

    switch (type) {
        case 'getCitys':
        return {...state,...payload};
        default :
        return {...state};
    }
}

export default reducer;
