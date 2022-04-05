document.querySelector(".play").addEventListener("click", print);

function print(params) {
    document.querySelector('.container').innerHTML = ''

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


    colorBlue()
}



function colorBlue() {

    const cells = document.querySelectorAll('.cells')

    console.log(cells);

    for (let i = 0; i < cells.length; i++ ) {

        const cellElement = cells[i];


        cellElement.addEventListener('click', function () {
            this.style.backgroundColor = 'cornflowerblue'

        });

    }



}
console.log(colorBlue());