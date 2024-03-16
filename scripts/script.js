
const addBlock = document.querySelector('#add-block');
const deleteBlock = document.querySelector('#delete-block');
const container = document.querySelector('#container-round');

//создали переменную для хранения количества кругов при старте
let counterRound;
//функция получения куки (взял  с https://www.w3schools.com/js/js_cookies.asp )
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
  
  
  //сохранили строку куки в переменную
  let stringCounter = getCookie('counter');

  //инициализировали счетчик
  if(stringCounter != '') {
    counterRound = parseInt(stringCounter);
  }
  else {
    counterRound = 3;
  }

//добавили круги
addRound();


//обработка события - добавление круга при нажатии кнопки
addBlock.addEventListener('click', () => {
    let newBlock = document.createElement('div');
    newBlock.className = 'round';
    counterRound++;
    // создаем куки, но почему то запись не происходит  - идея записать сделать куки вида 'counter=counterRound'
    const d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    let expires = d.toUTCString();
    document.cookie = `counter=${counterRound}; expires=${expires}`;
    container.appendChild(newBlock);
});


//обработка события - удаление круга при нажатии кнопки
deleteBlock.addEventListener('click', ()=> {
    const roundCOllection = document.querySelectorAll('.round');
    for(let i = 0; i < counterRound; ++i) {
    if(i == roundCOllection.length - 1) {
        roundCOllection[i].remove();
        counterRound--;
        // создаем куки, но почему то запись не происходит  - идея записать сделать куки вида 'counter=counterRound'
        const d = new Date();
        d.setTime(d.getTime() + (24*60*60*1000));
        let expires = d.toUTCString();
        document.cookie = `counter=${counterRound}; expires=${expires}`;
    }
  }
    });

//функция создания кругов
function addRound() {
    for(let i = 0; i < counterRound; ++i) {
        let newBlock = document.createElement('div');
        newBlock.className = 'round';
        newBlock.style.width = '100px';
        newBlock.style.height = '100px';
        newBlock.style.borderRadius = '50%';
        newBlock.style.backgroundColor = 'red';
        newBlock.style.margin = '30px';
        container.appendChild(newBlock);
        }
}





