// let $music = document.getElementById("water_music");


// window.onload = function() {
//     // 実行したい処理
//     if (confirm('音量ボタンをonにすると、音が流れより当サイト楽しめます')) {
//         console.log('OKボタンが押されました。')

//     } else {
//         console.log('キャンセルボタンが押されました。')
//     }
// }

$(function () {
  $('#Audio-Control button').click(function () {
    $('#Audio-Control button').toggleClass('active');
  });

  $(window).scroll(function () {
    if(disableMute)
    if ($(this).scrollTop() > 100 && $(this).scrollTop() < 600) {


    } else {

    }
  });
});

class Sound{

  dom

  constructor(id) {
    this.dom = document.getElementById(id);
  }

  enableMute() {
    this.dom.muted = true;
    // console.log(this.dom.muted)
  }

  disableMute() {
    this.dom.muted = false;
    // console.log(this.dom.muted)
  }

  playSound() {
    this.dom.play()
  }

  pauseSound() {
    this.dom.pause()
  }
}




