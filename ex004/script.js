function multiply() {
    let multiplyNumber = document.getElementById('txtTable')
    let tab = document.getElementById('answer')
    
    if(multiplyNumber.value.length == 0) {
        alert('[ERROR] Please type a number')
    }
    else {
        let mN = Number(multiplyNumber.value)
        let c = 1
        tab.innerHTML = ''

       while (c <= 10) {
           let item = document.createElement('option')
            item.text = `${mN} x ${c} = ${mN * c}`
            item.value = `tab${c}`
            c++
            answer.appendChild(item) 
        }
    }

 
    
}