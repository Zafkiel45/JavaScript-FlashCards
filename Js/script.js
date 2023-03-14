const button = document.querySelector('#button');
const flash_cards = document.querySelectorAll('.result')
const data = new Date()

button.addEventListener('click', function(){
    let random = Math.floor(Math.random() * 3 + 1)
    console.log(random)
    
    flash_cards.forEach(function(remove){
        remove.classList.remove('ativo')
    })
    
    if(random == 1) {
        flash_cards[0].classList.add('ativo')
    } else if(random == 2) {
        flash_cards[1].classList.add('ativo')
    } else if(random == 3) {
        flash_cards[2].classList.add('ativo')
    }
})