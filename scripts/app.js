
//dom queries
const chatList = document.querySelector('.chat-list');

// class instances 
const chatroom = new Chatroom('general', 'Jai');
const chatui = new ChatUI(chatList);

//get the chat and render
chatroom.getChat(data => {
    chatui.render(data);
    });


