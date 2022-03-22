console.log ('Olá mundo!');


const WAIT_TIME = 2*1000 // 2 segundos
function mensagem() {
    return new Promise((resolve) => {
        setTimeout(() => { resolve() }, WAIT_TIME)
    })
}
mensagem () 
    .then(() => {    
        console.log('2 segundos depois...(acho que era essa a mensagem rsrsrs)');
    })
