const html = document.querySelector('html')
const checkbox = document.querySelector('input#check')
const container = document.querySelector('div.container')
const headLabel = document.querySelector('label#headTxt')
const titleElement = document.querySelector('title#pageTitle')





let appTheme = localStorage.getItem('theme') || 'light'

const pageTitle = `Dark/Light Mode System`


const darkTheme = {
    bgColor : '#121011',
    contColor: '#122011',
    fontColor: 'white'
}
const lightTheme = {
    bgColor: 'white',
    contColor: 'lightsalmon',
    fontColor: 'rgb(65, 58, 58)'
}


function render(){
    let colors
    if(appTheme == 'light'){
        appTheme = 'dark'
        headLabel.innerHTML = `${appTheme.toUpperCase().charAt(0)}${appTheme.slice(1)} Theme`
        colors = darkTheme
        saveTheme()
    } else if (appTheme == 'dark'){
        appTheme = 'light'
        headLabel.innerHTML = `${appTheme.toUpperCase().charAt(0)}${appTheme.slice(1)} Theme`
        colors = lightTheme
        saveTheme()
    }
    const { bgColor, contColor, fontColor } = colors
    html.style.background = bgColor
    container.style.background = contColor
    container.style.color = fontColor
    titleElement.innerHTML = pageTitle

}

function saveTheme(){
    localStorage.setItem('theme', appTheme)
}

function generateLabel(){
    if(appTheme == 'light'){
        headLabel.innerHTML = `Light Theme`
    } else if (appTheme == 'dark'){
        headLabel.innerHTML = `Dark Theme`
    }
}

window.onload = () => {
    
    titleElement.innerHTML = pageTitle
    
    if(appTheme == 'light'){
        generateLabel()
        const { bgColor, contColor, fontColor } = lightTheme
        html.style.background = bgColor
        container.style.background = contColor
        container.style.color = fontColor
        checkbox.checked = false
    } else if (appTheme == 'dark'){
        generateLabel()
        const { bgColor, contColor, fontColor } = darkTheme
        html.style.background = bgColor
        container.style.background = contColor
        container.style.color = fontColor
        checkbox.checked = true
    }
}
checkbox.addEventListener('change', render)
