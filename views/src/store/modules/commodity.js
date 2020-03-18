const commodity = {
    state: {
        categoryId: ''
    },

    mutations: {
        CHANGE_CATEGORY_ID: (state, categoryId) => {
            state.categoryId = categoryId
        }
    }
}

export default commodity