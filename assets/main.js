document.querySelector(".play").addEventListener("click", print);
let arrayBomb = []
function print(params) {
    document.querySelector('.container').innerHTML = ''

    let difficoltà = document.querySelector('#difficoltà').value
    console.log(difficoltà);

// assegno le celle a seconda della difficoltà 

// difficoltà facile

    if (difficoltà === 'easy') {
        for (let i = 1; i <= 100; i++) {
            document.querySelector('.container').insertAdjacentHTML('beforeend', ` <div class="cells">${i}  
            </div>`)

        }
        for (let y = 0; y < 16; y++) {
            
        }
// difficoltà media

    } else if (difficoltà == 'medium') {
        for (let i = 1; i <= 81; i++) {
            document.querySelector('.container').insertAdjacentHTML('beforeend', ` <div class="cells">${i}  
            </div>`)
            Bomb()

        }

// difficoltà alta

    } else if (difficoltà == 'hard') {
        for (let i = 1; i <= 49; i++) {
            document.querySelector('.container').insertAdjacentHTML('beforeend', ` <div class="cells">${i}  
            </div>`)
            Bomb()
        }

    }
    colorBlue()
    
}

// genero numeri random

function Bomb(params) {
    let canpush = true;
    let numberRandom = Math.floor(Math.random() * 100);
    console.log(numberRandom);
    for (let b = 0; b < arrayBomb.length; b++) {
        if (numberRandom == arrayBomb[b]) {
            numberRandom.addEventListener('click', function () {
                this.style.backgroundColor = 'red'
       
               });
               Bomb()
            canpush = false
        } else {
            canpush = true;
            colorBlue()
        }
    }
    if (canpush) {
        arrayBomb.push(x)
    }
    console.log(arrayBomb);
    canpush = false;
}

// colore le celle di blu al click

function colorBlue() {
     const cells = document.querySelectorAll('.cells')

     console.log(cells);

        for (let i = 0; i < cells.length; i++) {

        const cellElement = cells[i];

        cellElement.addEventListener('click', function () {
         this.style.backgroundColor = 'cornflowerblue'

        });

  }
}
