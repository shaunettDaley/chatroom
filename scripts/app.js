
//dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newName = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

//update new user
newName.addEventListener('submit', e => {
    e.preventDefault();
    const getName = newName.name.value.trim();
    chatroom.updateUsername(getName);
    newName.reset();

    updateMsg.innerText = `Name update to ${getName}`
    setTimeout(()=>{
        updateMsg.innerText = '';
  },3000);
   
     })

//add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message).then(()=> {
        console.log('chat added successfully');
        //reset the form was submit
        newChatForm.reset();
    }).catch(err => {
        console.log(err);
    });
})

//check when rooms is clicked on
rooms.addEventListener('click',e => {
console.log(e);
if(e.target.tagName === "BUTTON"){
    //get the attribute for that button
   chatroom.updateRoom(e.target.getAttribute('id'));
   chatui.clear();
   //now get the data for the new room
   chatroom.getChat(chat => {
       chatui.render(chat);
   })
}

});

//check if name exist in local storage before  setting it
const usernameInfo = localStorage.username ? localStorage.username : 'anon';
// class instances 
const chatroom = new Chatroom('general', usernameInfo);
const chatui = new ChatUI(chatList);

//get the chat and render
chatroom.getChat(data => {
    chatui.render(data);
    });


