/* eslint-disable */
export default {
    state: {
        todos : null
    },
    getters: {
        getTodos(state) {
            console.log('getTodos');
            return state.todos;
        }
    },
    mutations: {
        SET_TODO : (state, payload) => {
            console.log('SET TODO');
            state.todos = payload;
        },
        ADD_TODO : (state, payload) => {
            state.todos.push(payload)
        }
    },
    actions: {
        GET_TODO : (context) => {
            let data  = ['arbeiten'];
            console.log('GET TODO')
            context.commit('SET_TODO', data);
        },
        SAVE_TODO : (context, payload) => {
            console.log(payload);
            context.commit('ADD_TODO', payload)
        }
    }
}
/* eslint-disable */