// let $music = document.getElementById("water_music");


// window.onload = function() {
//     // 実行したい処理
//     if (confirm('音が流れます。大丈夫ですか？')) {
//         console.log('OKボタンが押されました。')
//         console.log($music)
//         $music.play()
//     } else {
//         console.log('キャンセルボタンが押されました。')
//     }
// }
let el = document.getElementById("water_music");

function enableMute() {
  el.muted = true;
  console.log(el.muted)
}

function disableMute() {
  el.muted = false;
  console.log(el.muted)
  el.play()
}

$(function(){
  $('#Audio-Control button').click(function(){
    $('#Audio-Control button').toggleClass('active');
  });
});
