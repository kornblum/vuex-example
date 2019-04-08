/* eslint-disable */
export default {
    state: {
        isFormValid : false
    },
    getters: {
        getIsFormValid(state) {
            console.log('getter form valid');
            return state.isFormValid;
        }
    },
    mutations: {
        CHANGE_FORMVALID : (state, payload) => {
            state.isFormValid = payload;
            //console.log(state.isFormValid);
        }
    },
    actions: {
        FORMVALID : (context, payload) => {
            // Backend-Calls, API
            context.commit('CHANGE_FORMVALID', payload)
        }
    }
}
/* eslint-disable */