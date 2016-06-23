var reducer = function (state, action){
	//change the state base on the action

	switch( action.type ){
		case 'ADD_CARD':
			let newCard = Object.assign({}, action.data,{
				score	:1,
				id		:+new Date
			});

			return Object.assign({}, state ,{
				cards	: state.cards ? state.cards.concat([newCard]) : [newCard]
			});

		default:
			return state || {cards : []}
	}
}


const store = Redux.createStore( reducer );

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch({
	type: "ADD_CARD", 
	data:{
		front	:'',
		back	:''
	}
});
