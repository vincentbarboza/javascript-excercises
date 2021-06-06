let num = document.getElementById('fNum')
let list = document.querySelector('select#fList')
let res = document.querySelector('div#res')
let array1 = [] 

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
    return true
    }
    else {
        return false
    }
    
}
function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }

}


function add() {
    if(isNumber(num.value) && !inList(num.value, array1)) {
        array1.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Number ${num.value} is added`
        list.appendChild(item)
        res.innerHTML = ''
    }
    else {
        alert('Invalid number or already in the list')
    }
    num.value = ''
    num.focus()
}

function finished() {
    if(array1.length == 0) {
        alert('Numbers not added!')
    }
    else {
        let total = array1.length
        let higher = array1[0]
        let lower = array1[0]
        sum = 0
        average = 0
        for(let pos  in array1) {
            sum += array1[pos]
            if(array1[pos] > higher) {
                higher = array1[pos]
            }
            if(array1[pos] < lower) {
                lower = array1[pos]
            }
        }
        average = sum / total
        res.innerHTML = ''
        res.innerHTML += `<p>We have ${total} numbers in total.</p>`
        res.innerHTML += `<p>The highest number is ${higher}.</p>`
        res.innerHTML += `<p>The lowest number is ${lower}.</p>`
        res.innerHTML += `<p>The sum of all numbers is ${sum}.</p>`
        res.innerHTML += `<p>The average is ${average}.</p>`
    }
}