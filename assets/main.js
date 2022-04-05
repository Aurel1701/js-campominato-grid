document.querySelector(".play").addEventListener("click", print);
let arrayBomb = []
function print(params) {
    document.querySelector('.container').innerHTML = ''

    let difficoltà = document.querySelector('#difficoltà').value
    console.log(difficoltà);

    if (difficoltà === 'easy') {
        for (let i = 1; i <= 100; i++) {
            document.querySelector('.container').insertAdjacentHTML('beforeend', ` <div class="cells">${i}  
            </div>`)

        }
        for (let y = 0; y < 16; y++) {
            Bomb()
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
            Bomb()
        }



    }


    colorBlue()
}

function Bomb(params) {
    let x = Math.floor(Math.random() * 100);

    do {
        for (let b = 0; b < arrayBomb.length; b++) {
            if (x === arrayBomb[b]) {
                x = Math.floor(Math.random() * 100);
            }

        }

            } while (x !== arrayBomb[b]);
        




        arrayBomb.push(x)
        console.log(arrayBomb);
    }



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
