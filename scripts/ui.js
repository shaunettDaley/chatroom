
//render chAT DATA TO the dom


//render the chat templaye to DOM
// clear the list of chat ( when the room changes)

class ChatUI{
    constructor(list){
        this.list = list
    }

    //clear the chat window
    clear(){
        this.list.innerText = '';
    }

    render(data){ // creating the html template
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            {addSuffix: true}
        );
        const html = `
        <li class="list-group-item">
        <span class="username">${data.username}</span>
        <span class="message">${data.message}</span>
        <div class="time">${when}</div>
        `
        this.list.innerHTML += html;
    }
}




