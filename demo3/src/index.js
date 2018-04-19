import $ from 'jquery'  // 引入第三方的js模块
import {cube} from "./js/math"; // 引入自定义js模块
import './assets/css/style.css' // 引入css模块
import lessons from './assets/json/lessons.json' // 引入json模块
// import * as atguigu from './js/atguigu'


$(function () {
  console.log(cube(3))
  const $ul = $('<ul>')
  lessons.forEach(lesson => {
    $ul.append(`<li>课程名: <span class="lesson-name">${lesson.name}</span>, 时间: ${lesson.days}天</li>`)
  })
  // $ul.appendTo('#app')
  $('#app').append($ul)
  const $button = $('<button>去尚硅谷吗?</button>')
  $button.appendTo('#app').on('click', () => {
    import('./js/atguigu').then(atguigu => {
      if(atguigu.studyConfirm()) {
        atguigu.goAtguigu()
      }
    })
  })
})

