import './app4.css'
import $ from 'jquery'

const htmlApp4 =`
    <section id="app4">
            <div id="hovers">鼠标移入自动变色</div>
    </section>
`
const element = $(htmlApp4).appendTo($('body>#page'))

const $hover = $('#hovers')
$hover.on('mouseover', () => {
    $hover.addClass('active')
}).on('mouseout', () => {
    $hover.removeClass('active')
})