const INITIAL_STATE = {
    description: 'o cara ler livro kkkk',
    list: [
        {
            _id: 1,
            description: 'Pagar fatura do cartao',
            done: true
        },
        {
            _id: 2,
            description: 'Reuniao com a equipe as 10h',
            done: false,
        },
        {
            _id: 3,
            description: 'Consultas médicas na terça depois do almoço',
            done: false,
        }
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return{...state, description: action.payload}
        default:
            return state
    }
}