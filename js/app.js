// Variables
const currentInput = document.querySelector('.currentInput');
const answerScreen = document.querySelector('.answerScreen');
const buttons = document.querySelectorAll('button');
const erasebtn = document.querySelector('#erase');
const clearbtn = document.querySelector('#clear');
const evaluate = document.querySelector('#evaluate');



// Calculator Display
let realTimeScreenValue = []

// To Clear

clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
})

// Get value of any button clicked and display to the screen

const fnEvaluate = (fnBody) => Function(`return ${fnBody}`)();

buttons.forEach((btn) => {


    btn.addEventListener("click", () => {
        // when clicked button is not erased button 
        if (!btn.id.match('erase')) {
            // To display value on btn press
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');
            
            // To evaluate answer in real time
            if (btn.classList.contains('num_btn')) {

                answerScreen.innerHTML = fnEvaluate(realTimeScreenValue.join(''));

            }   

        }

        // When erase button is clicked
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = fnEvaluate(realTimeScreenValue.join(''));
        }

        // When clicked button is evaluate button
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }

        // To prevent undefined error in screen
        if (typeof fnEvaluate(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0
        }

    })
})
