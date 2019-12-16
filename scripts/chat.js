//add new chat document
//setting up a real time listener
//updating the username
//updating the room

class Chatroom{
    constructor(room,username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chat');
    }

    //create an asny function since i am talking to an external server
        async addChat(message){
            const now = new Date();
            const chat = {
                message: message,
                username: this.username,
                room: this.room,
                created_at: firebase.firestore.Timestamp.fromDate(now)

            };
            const response = await this.chats.add(chat);
            return response;
        }

        //get the chat real time 
        getChat(callback){
            //connect to the database and get the  data
            this.chats.onSnapshot(snapshot => {
                snapshot.docChanges().forEach(changes => {
                   if(changes.type === "added"){
                       //u[date my ui
                       callback(changes.doc.data());
                   }
                })
            })
        }

    }



    
/*console.log(chatroom);
chatroom.addChat('hello there').then(()=>{
    console.log('chat added');
}).catch(err => {
    console.log("error found");
})*/

