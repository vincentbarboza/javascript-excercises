function verify() {
    let numStart = document.getElementById('txtStart')
    let numEnd = document.getElementById('txtEnd')
    let steps = document.getElementById('txtSteps')
    let answer = document.querySelector('div#answer')

    if(numStart.value.length == 0 || numEnd.value.length == 0 || steps.value.length == 0) {
        answer.innerHTML = '[ERROR] Impossible to count'
        
    }

    else {
        answer.innerHTML = `Counting <br>`
        let st = Number(numStart.value)
        let e = Number(numEnd.value)
        let s = Number(steps.value)
        if(s <= 0) {
            window.alert('Invalid step value! Considering step as 1')
            s = 1
        }
        if(st <= e) {
            for(let c = st; c <= e; c += s){
                answer.innerHTML += ` ${c} \u{1F449}`
            }

        }
        else {
            for(let c = st; c >= e; c -= s){
                answer.innerHTML += ` ${c} \u{1F449}`
            }

        }
        answer.innerHTML += `\u{1F3C1}`

    }
    
    
}