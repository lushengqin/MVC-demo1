import './app4.css'
import $ from 'jquery'

const $hover = $('#hovers')
$hover.on('mouseover', () => {
    $hover.addClass('active')
}).on('mouseout', () => {
    $hover.removeClass('active')
})