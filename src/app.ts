const button = document.querySelector('button')!;

function clickHandler(message: string) {
    // let username = 'Andy';
    console.log('Clicked! ' + message)
}

button.addEventListener("click", clickHandler.bind(null, 'you\'re welcome'));