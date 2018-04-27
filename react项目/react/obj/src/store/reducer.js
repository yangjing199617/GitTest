

const reducer = (state,{type,payload}) => {
    // console.log('reducer',type,payload);
    switch (type){
        case 'ADD_ITEM':
            //处理业务逻辑的
            return Object.assign({},state,{list:state.list.concat(payload)});
        case 'UPDATE_NAV':
            return Object.assign({},state,{bNav:payload});
        case 'UPDATE_FOOT':
            return Object.assign({},state,{bFoot:payload});
        default:
            return state
    }
};

export default reducer;