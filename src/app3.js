import './app3.css'
import $ from 'jquery'

const $move = $('#move')
$move.on('click', () => {
    $move.toggleClass('active')
})