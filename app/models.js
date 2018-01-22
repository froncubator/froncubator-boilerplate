const f_db = require('./f_db')

module.exports = function () {
    f_db.models.recipe = function() {
        return {
            name: '',
            ingredients: [],
            avatar: '',
            avatarInfo: {},
            image: '',
            url: '',
            type: '',
            domain: '',
            score: 0,
            rating: 0,
            category: [],
            time: '',
            search: '',
            compilation: ''
        }
    },
    f_db.models.recipe_cache = function() {
        return {
            _id: {},
            name: '',
            ingredients: [],
            avatar: '',
            avatarInfo: {},
            image: '',
            url: '',
            type: '',
            domain: '',
            score: 0,
            rating: 0,
            category: [],
            time: '',
            search: '',
            compilation: ''
        }
    },
    f_db.models.ingredients = function() {
        return {
            name: '',
            parent: ''
        }
    },
    f_db.models.categoryOfIngredients = function() {
        return {
            name: '',
            categorys: []
        }
    },
    f_db.models.categorys = function() {
        return {
            name: '',
            parent: ''
        }
    },
    f_db.models.user = function() {
        return {
            name: '',
            email: '',
            password: '',
            role: '',
            token: []
        }
    },
    f_db.models.parentCategorys = function() {
        return {
            name: '',
            id: 0,
            categorys: []
        }
    },
    f_db.models.telegramChat = function() {
        return {
            chat_id: 0
        }
    },
    f_db.models.vkBot = function() {
        return {
            user_id: 0,
            request_history: [],
            groupe: '',
            message_id: 0
        }
    },
    f_db.models.telBot = function() {
        return {
            user_id: 0,
            request_history: '',
            page: 0
        }
    },
    f_db.models.account = function() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            favorites: [],
            token: [],
            wherefrom: '',
            avatar: '',
            socialId : ''
        }
    },
    f_db.models.okBot = function() {
        return {
            user_id: '',
            request_history: '',
            page: 0
        }
    },
    f_db.models.fbBot = function() {
        return {
            user_id: '',
            request_history: '',
            page: 0
        }
    },
    f_db.models.compilation = function() {
        return {
            name: '',
            description: '',
            compilationImage: '',
            content: []
        }
    }
}