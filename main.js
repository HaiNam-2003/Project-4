const cardName = document.querySelector('.info-name')
const nameInp = document.querySelector('.name-input')

const cardNumber = document.querySelector('.number')
const numberInp = document.querySelector('.number-input')

const cardMonth = document.querySelector('.month')
const monthInp = document.querySelector('.month-input')

const cardYear = document.querySelector('.year')
const yearInp = document.querySelector('.year-input')

const cardCvc = document.querySelector('.cvc')
const cvcInp = document.querySelector('.cvc-input')

const btn = document.querySelector('.submit-btn')
const successed = document.querySelector('.thank')
const form = document.querySelector('form')
const btnContinue = document.querySelector('.thank button')


// function xu li event
function renderName(e) {
    cardName.innerText = e.target.value
}

function renderNumber(e) {
    cardNumber.innerText = formatNumber(e.target.value)
}

function renderMonth(e) {
    cardMonth.innerText = e.target.value
}

function renderYear(e) {
    cardYear.innerText = e.target.value
}

function renderCvc(e) {
    cardCvc.innerText = e.target.value
}

// forrmat number
function formatNumber(number) {
    const str = number.toString();
    const parts = [];
    for (let i = str.length - 1; i >= 0; i -= 4) {
      const part = str.slice(Math.max(0, i - 3), i + 1);
      parts.unshift(part);
    }
    return parts.join(' ');
}

function handleSubmit(e) {
    e.preventDefault()
    if(!nameInp.value) {
        nameInp.classList.add('error')
        nameInp.parentElement.classList.add('error-mess')
    } else {
        nameInp.classList.remove('error')
        nameInp.parentElement.classList.remove('error-mess')
    }
    if(!numberInp.value) {
        numberInp.classList.add('error')
        numberInp.parentElement.classList.add('error-mess')
    } else {
        numberInp.classList.remove('error')
        numberInp.parentElement.classList.remove('error-mess')
    }
    if(!monthInp.value) {
        monthInp.classList.add('error')
        monthInp.parentElement.classList.add('error-mess')
    } else {
        monthInp.classList.remove('error')
        monthInp.parentElement.classList.remove('error-mess')
    }
    if(!yearInp.value) {
        yearInp.classList.add('error')
        yearInp.parentElement.classList.add('error-mess')
    } else {
        yearInp.classList.remove('error')
        yearInp.parentElement.classList.remove('error-mess')
    }
    if(!cvcInp.value) {
        cvcInp.classList.add('error')
        cvcInp.parentElement.classList.add('error-mess')
    } else {
        cvcInp.classList.remove('error')
        cvcInp.parentElement.classList.remove('error-mess')
    }
    
    if( nameInp.value &&
        numberInp.value &&
        monthInp.value &&
        yearInp.value &&
        cvcInp.value &&
        numberInp.value.length == 16) {
        successed.classList.remove('hidden')
        form.classList.add('hidden')
    }
}

nameInp.addEventListener('input', renderName)
numberInp.addEventListener('input', renderNumber)
monthInp.addEventListener('input', renderMonth)
yearInp.addEventListener('input', renderYear)
cvcInp.addEventListener('input', renderCvc)

btn.addEventListener('click', handleSubmit)
btnContinue.addEventListener('click', () => {
    // successed.classList.add('hidden')
    // form.classList.remove('hidden')
    window.location.reload()
})