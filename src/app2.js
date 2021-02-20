import $ from 'jquery'
import './app2.css'

const $titleLi = $('#title')
const $contentLi = $('#content')

$titleLi.on('click', 'li', (e) => {
   const $li = $(e.currentTarget) //获取到用户点击的元素
    // console.log($li.index()) //得到用户点击的元素的下标
    const index = $li.index()
    $contentLi.children().eq(index).addClass('active').siblings().removeClass('active')
    $titleLi.children().eq(index).addClass('active').siblings().removeClass('active')
    
})