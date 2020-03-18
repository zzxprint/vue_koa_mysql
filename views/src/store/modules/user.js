const user = {
    state: {
        userInfo: {}
    },

    mutations: {
        SET_USERINFO: (state, userInfo) => {
            state.userInfo = userInfo
        }
    }
}

export default user