let desk = document.getElementById('desk')

let size = 8

desk.style.gridTemplate =  `repeat(${size}, 1fr) / repeat(${size}, 1fr)`

function reverse(row, col) {
    for (let i = 0; i < size; i++) {
        let cell = document.querySelector('[data-i="' + i + '"][data-j="' + col + '"]')
        if (cell.classList.contains('white')) {
            cell.classList.remove('white')
            cell.classList.add('black')
        } else if (cell.classList.contains('black')) {
            cell.classList.remove('black')
            cell.classList.add('white')
        }
        cell = document.querySelector('[data-i="' + row + '"][data-j="' + i + '"]')
        if (cell.classList.contains('white')) {
            cell.classList.remove('white')
            cell.classList.add('black')
        } else if (cell.classList.contains('black')) {
            cell.classList.remove('black')
            cell.classList.add('white')
        }
    }
    let clickCell = document.querySelector('[data-i="' + row + '"][data-j="' + col + '"]')
    if (clickCell.classList.contains('white')) {
        clickCell.classList.remove('white')
        clickCell.classList.add('black')
    } else if (clickCell.classList.contains('black')) {
        clickCell.classList.remove('black')
        clickCell.classList.add('white')
    }
}

for (let i = 0; i < size; i++) {
    if (i % 2 === 0 && i < size) {
        for (let j = 0; j < size; j++) {
            if (j % 2 === 0) {
                desk.innerHTML += `<div class="block white" data-i="${i}" data-j="${j}"></div>`
            } else {
                desk.innerHTML += `<div class="block black" data-i="${i}" data-j="${j}"></div>`
            }
        }
    } else {
        for (let j = 0; j < size; j++) {
            if (j % 2 === 0) {
                desk.innerHTML += `<div class="block black" data-i="${i}" data-j="${j}"></div>`
            } else {
                desk.innerHTML += `<div class="block white" data-i="${i}" data-j="${j}"></div>`
            }
        }
    }
}

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        document.querySelector('[data-i="' + i + '"][data-j="' + j + '"]').addEventListener('click', () => {
            console.log(i, j)
            reverse(i, j)
        })
    }
}
