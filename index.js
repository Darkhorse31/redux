const Cake_order ="Cake_order";
// action is a object 
function orderCake(){
    return{
        type: "Cake_order",
        quantity: 1
    }
}
// reducer accept state and action as object and return 
// initial state in application is a object 
const initial_state = {
    numberofCakes: 10,
    // anotherProperty: 0
}
const reducer = (state=initial_state,action)=>{
    switch(action.type){
        case "Cake_order":
            return {
                ...state,
                numberofCakes:state.numberofCakes-1
            }
            default:
                return state 
    }

}