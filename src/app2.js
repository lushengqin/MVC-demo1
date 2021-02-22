import $ from 'jquery'
import './app2.css'

const htmlApp2 = `
        <section id="app2">
            <ul id="title">
                <li>我是标题1</li>
                <li>我是标题2</li>
            </ul>
            <ol id="content">
                <li>我是标题1对应的内容1</li>
                <li>我是标题2对应的内容2</li>
            </ol>
        </section>
`
const $element = $(htmlApp2).appendTo($('body>#page'))



const $titleLi = $('#title')
const $contentLi = $('#content')
const index = localStorage.getItem('app2-index') || 0

$titleLi.on('click', 'li', (e) => {
   const $li = $(e.currentTarget) //获取到用户点击的元素
    // console.log($li.index()) //得到用户点击的元素的下标
    const index = $li.index()
    localStorage.setItem('app2-index',index) //app2-index随便取
    $contentLi.children().eq(index).addClass('active').siblings().removeClass('active')
    $titleLi.children().eq(index).addClass('active').siblings().removeClass('active')
})

$titleLi.children().eq(index).trigger('click')
