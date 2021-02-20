import './app3.css'
import $ from 'jquery'

const $move = $('#move')
const active = localStorage.getItem('app3-index') === 'yes'
if (active) {
    $move.addClass('active')
} else {
    $move.removeClass('active')
}
$move.on('click', () => {
    // $move.toggleClass('active')
    if ($move.hasClass('active')) {
        $move.removeClass('active')
        localStorage.setItem('app3-index','no')
    } else {
        $move.addClass('active')
        localStorage.setItem('app3-index','yes')
    }
})
