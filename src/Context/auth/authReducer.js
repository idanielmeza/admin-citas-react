
export default (state,action)=>{

    switch(action.type){

        case 'LOGIN':
            localStorage.setItem('x-token', action.payload.token);
            return{
                ...state,
                usuario:action.payload.usuario,
                autenticado:true,
                token: action.payload.token
            }

        case 'LOGOUT':
            return{
                ...state,
                usuario:null,
                autenticado:false,
                token: null
            }
        
        case 'USUARIO':{
            localStorage.setItem('x-token', action.payload.token);
            return{
                ...state,
                usuario:action.payload,
                autenticado:true,
                token: action.payload.token
            }
        }

        default:
            return state;
    }

}