messages = []

addEventListener('load', () => {
    registerEvents();
});

function registerEvents() {
    const formElement = document.getElementById("messages-form")
    formElement.addEventListener("submit", (e) => {
        e.preventDefault();
        e.stopPropagation();
        addMessage()
        render()
    })
}

function render() {
    const messagesListElement = document.getElementById("messages-list");
    messagesListElement.innerHTML = "";

    for (const message of messages) {
        message.render();
    }
}

function addMessage() {
    const content = document.getElementById("messages-form-content").value.trim();
    const username = document.getElementById("messages-form-username").value.trim();

    if (content.length > 0 && username.length > 0) {
        messages.push(new MessageElement(username, content));

        document.getElementById("messages-form-content").value = "";
        document.getElementById("messages-form-username").value = "";
    }
}

class MessageElement {
    constructor(username, message) {
        this.id = uuidv4();
        this.username = username
        this.message = message
        this.like = false
    }

    render() {
        const messagesListElement = document.getElementById("messages-list");

        const messageElement = document.createElement("li");
        messageElement.classList.add("main__community-container__list-message")
        messageElement.setAttribute("id", this.id);

        const messageContentElement = document.createElement("p")
        messageContentElement.classList.add("main__community-container__list-message__content")
        messageContentElement.textContent = this.message

        const messageContentUsername = document.createElement("span")
        messageContentUsername.classList.add("main__community-container__list-message__username")
        messageContentUsername.textContent = this.username

        const messageLikeElement = document.createElement("span");
        messageLikeElement.classList.add("main__community-container__list-message__like")
        messageLikeElement.classList.add("noselect")
        if (this.like) messageLikeElement.classList.add("liked");
        messageLikeElement.textContent = "❤";
        messageLikeElement.addEventListener("click", () => {this.likeMessage()})

        const messageRemoveButtonElement = document.createElement("button");
        messageRemoveButtonElement.classList.add("main__community-container__list-message__remove-button")
        messageRemoveButtonElement.textContent = "Remove";
        messageRemoveButtonElement.addEventListener("click", () => {this.remove()})

        messageElement.appendChild(messageContentElement)
        messageElement.appendChild(messageContentUsername)
        messageElement.appendChild(messageLikeElement)
        messageElement.appendChild(messageRemoveButtonElement)

        messagesListElement.appendChild(messageElement);

        this.element = messageElement;
    }

    remove() {
        if (this.element) {
            const index = messages.indexOf(this);
            if (index > -1) {
                messages.splice(index, 1);
            }
            render()
        }
    }

    likeMessage() {
        this.like = !this.like;
        render()
    }
}

function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
}