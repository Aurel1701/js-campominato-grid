document.querySelector(".play").addEventListener("click",print);


  function print(params) {

      let difficoltà = document.querySelector('#difficoltà').value
      console.log(difficoltà);

      if (difficoltà == easy) {
          
      }else if (difficoltà == medium){

      } else if (difficoltà == hard) {

      }

      
      for (let i = 1; i <= 100; i++) {
        document.querySelector('.container').insertAdjacentHTML('beforeend',` <div class="cells">${i}  
        </div>`)
          
          
      }

      
  }
  