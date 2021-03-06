const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'HI, HOW ARE YOU', likesCount: 15},
                {id: 2, message: 'HOW ARE YOU', likesCount: 12},
                {id: 3, message: 'SOME WORDS', likesCount: 20},
                {id: 4, message: 'WRITE ME PLS', likesCount: 10},
                {id: 5, message: 'GO', likesCount: 0},
                {id: 6, message: 'GO', likesCount: 0},
            ],
            newPostText: 'Easy to study'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'ROKSANA'},
                {id: 2, name: 'KARINA'},
                {id: 3, name: 'VERONIKA'},
                {id: 4, name: 'ALEXANDR'},
                {id: 5, name: 'LUDMILA'},
                {id: 6, name: 'AZ_1254'},
            ],
            messages: [
                {id: 1, message: 'HI'},
                {id: 2, message: 'HOW ARE YOU'},
                {id: 3, message: 'WHAT ARE YOU DOING'},
                {id: 4, message: 'GO'},
                {id: 5, message: 'GO'},
                {id: 6, message: 'GO'},
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() { 
        console.log('State changed');
       },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    
    dispatch(action) {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 7,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            
            this._state.dialogsPage.messages.push({id: 7, message: body});
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => 
       ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => 
              ({type: UPDATE_NEW_MESSAGE_BODY, body: body})       

export default store;
window.store = store;