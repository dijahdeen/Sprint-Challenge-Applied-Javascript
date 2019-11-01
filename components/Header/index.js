// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(date, title, temPera) {

    const heaDer = document.createElement('div')
    const DaTe = document.createElement('span')
    const tiTle = document.createElement('h1')
    const temPerature = document.createElement('span')

    heaDer.classList.add('header')
    DaTe.classList.add('date')
    temPerature.classList.add('temp')

    heaDer.appendChild(DaTe);
    heaDer.appendChild(tiTle);
    heaDer.appendChild(temPerature);

    DaTe.textContent = date;
    tiTle.textContent = title;
    temPerature.textContent = temPera;

    return heaDer;




}

const headercontainer = document.querySelector('.header-container');
headercontainer.appendChild(Header('March 28, 2019', 'Lambda Times', '98°'));
