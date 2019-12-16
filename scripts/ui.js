//render the chat templaye to DOM
// clear the list of chat ( when the room changes)

class ChatUI{
    constructor(list){
        this.list = list
    }
    render(data){ // creating the html template
        const html = `
        <li class="list-group-item">
        <span class="username">${data.username}</span>
        <span class="message">${data.message}</span>
        <div class="time">${data.created_at.toDate()}</div>
        `
        this.list.innerHTML += html;
    }
}



