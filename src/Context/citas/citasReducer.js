
export default (state, action) => {

    switch (action.type) {

        case 'OBTENER_CITAS':
            return {
                ...state,
                citas: action.payload,
                cita: null
            }
        
        case 'OBTENER_CITA':
            return {
                ...state,
                cita: action.payload
            }
        
        case 'CREAR_CITA':
            return {
                ...state,
                citas: [...state.citas, action.payload],
                cita: null
            }
        
        case 'ELIMINAR_CITA':
            return {
                ...state,
                citas: state.citas.filter(cita => cita.id !== action.payload)
            }
        
        case 'ACTUALIZAR_CITA':
            return {
                ...state,
                citas: state.citas.map(cita => cita.id === action.payload.id ? action.payload : cita),
                cita: null
            }

        case 'CITA_NULL':
            return {
                ...state,
                cita: null
            }

        default: return state;
    }

}