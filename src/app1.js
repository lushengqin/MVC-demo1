import $ from 'jquery'

const $button1 = $('#button1')
const $button2 = $('#button2')
const $button3 = $('#button3')
const $button4 = $('#button4')
const $number = $('#number')

//增加刷新存储功能
let n = localStorage.getItem('n')
$number.text(n||100)


// 加1
$button1.on('click', () => {
    let n = parseInt($number.text())
    n += 1
    localStorage.setItem('n',n)
    $number.text(n) //把得到的n放在新的$number.text()里面
})

// 减1
$button2.on('click', () => {
    let n = parseInt($number.text())
    n -= 1
    localStorage.setItem('n',n)
    $number.text(n)
})

// 乘2
$button3.on('click', () => {
    let n = parseInt($number.text())
    n *= 2
    localStorage.setItem('n',n)
    $number.text(n)
})
// 除2
$button4.on('click', () => {
    let n = parseInt($number.text())
    n /= 2
    localStorage.setItem('n',n)
    $number.text(n)
})