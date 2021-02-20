import $ from 'jquery'
import './app2.css'

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
