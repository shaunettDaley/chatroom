//instance of the chat class
const chatroom = new Chatroom('general', 'Jai');

//get the data from the chat database and render on UI
chatroom.getChat(data => {
        
    console.log(data);
      });