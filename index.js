// let $music = document.getElementById("water_music");


// window.onload = function() {
//     // 実行したい処理
//     if (confirm('音量ボタンをonにすると、音が流れより当サイト楽しめます')) {
//         console.log('OKボタンが押されました。')

//     } else {
//         console.log('キャンセルボタンが押されました。')
//     }
// }

function getId(dom) {
  const scrollTop = dom.scrollTop()
  if (scrollTop > 100 && scrollTop < 600) {
    return 'water_sound'
  }
  if (scrollTop > 800 && scrollTop < 1200) {
    return 'sizuku'
  }
}

$(function () {


  $('#Audio-Control button').click(function () {
    $('#Audio-Control button').toggleClass('active');
  });

  $('#off').click(function () {
    const sounds = new Sounds()
    sounds.enableMute();
  });

  $('#on').click(function () {
    const sounds = new Sounds()
    sounds.disableMute();
  });

  $(window).scroll(function () {
    const sound = new Sound(getId($(this)))
    const sounds = new Sounds()
    console.log(getId($(this)))
    if (!sounds.isMuted()) {
      sound.playSound()
    }
  });
});

class Sound {

  dom

  constructor(id) {
    this.dom = document.getElementById(id);
    console.log(this.dom)
  }

  playSound() {
    this.dom.play()
  }

  pauseSound() {
    this.dom.pause()
  }
}

class Sounds {


  enableMute() {
    document.querySelectorAll('audio').forEach(audio => audio.muted = true)
  }

  disableMute() {
    console.log(document.querySelectorAll('audio'))
    document.querySelectorAll('audio').forEach(audio => audio.muted = false)
  }

  isMuted() {
    return document.querySelector('button.active').id === 'off'
  }

}




