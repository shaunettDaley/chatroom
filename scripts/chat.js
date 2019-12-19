//add new chat document
//setting up a real time listener
//updating the username
//updating the room

class Chatroom{
    constructor(room,username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chat');
        this.unsub;
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
           this.unsub = this.chats
            .where('room','==',this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(changes => {
                   if(changes.type === "added"){
                       //u[date my ui
                       callback(changes.doc.data());
                   }
                })
            })
        }

        //update room
        updateRoom(room){
            this.room =room;
            console.log('room updated');
            if(this.unsub){
                this.unsub(); //this will unsubscribe from any current 
            }
            
        }

        //update the username
        updateUsername(username){
            this.username = username;
    //set the local storage to store in browser
    localStorage.setItem('username',username);
        }

    }



    
/*console.log(chatroom);
chatroom.addChat('hello there').then(()=>{
    console.log('chat added');
}).catch(err => {
    console.log("error found");
})*/

