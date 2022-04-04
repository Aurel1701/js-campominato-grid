document.querySelector(".play").addEventListener("click", print);
document.querySelector('.cells').addEventListener('click', colorBlue)

function print(params) {

    let difficoltà = document.querySelector('#difficoltà').value
    console.log(difficoltà);

    if (difficoltà === 'easy') {
        for (let i = 1; i <= 100; i++) {
            document.querySelector('.container').insertAdjacentHTML('beforeend', ` <div class="cells">${i}  
            </div>`)
        }

    } else if (difficoltà == 'medium') {
        for (let i = 1; i <= 81; i++) {
            document.querySelector('.container').insertAdjacentHTML('beforeend', ` <div class="cells">${i}  
            </div>`)
        }
    } else if (difficoltà == 'hard') {
        for (let i = 1; i <= 49; i++) {
            document.querySelector('.container').insertAdjacentHTML('beforeend', ` <div class="cells">${i}  
            </div>`)
        }


    }
    


}

function colorBlue() {

    document.querySelector('.cells').classList.add('blue')



}
