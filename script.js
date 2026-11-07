let step = 1;          // 何問目か
let firstAnswer = '';  // 1問目の答え（'yes' か 'no'）

// 1問目を表示する
function showFirst() {
  step = 1;
  $('#step').text('質問 1 / 2');
  $('#question-text').text('かためのグミが好き？');
  $('#back-btn').hide();
}

// 2問目を表示する
function showSecond() {
  step = 2;
  $('#step').text('質問 2 / 2');
  $('#question-text').text('すっぱい味が好き？');
  $('#back-btn').show();
}

// 結果画面に切り替える
function showResult() {
  $('#question').hide();
  $('#result').show();
}

// スタートボタン
$('#start-btn').on('click', function () {
  showFirst();
  $('#start').hide();
  $('#question').show();
});

// YESボタン
$('#yes-btn').on('click', function () {
  if (step === 1) {
    firstAnswer = 'yes';
    showSecond();
  } else {
    if (firstAnswer === 'yes') {
      // かため：YES、すっぱい：YES
      $('#result-name').text('シゲキックス');
      $('#result-maker').text('メーカー：UHA味覚糖');
      $('#result-hard').text('かたさ：4 / 5');
      $('#result-sour').text('すっぱさ：5 / 5');
      $('#result-text').text('すっぱい刺激と噛みごたえ、どちらもほしいあなたにおすすめ！');
    } else {
      // かため：NO、すっぱい：YES
      $('#result-name').text('ピュレグミ');
      $('#result-maker').text('メーカー：カンロ');
      $('#result-hard').text('かたさ：2 / 5');
      $('#result-sour').text('すっぱさ：4 / 5');
      $('#result-text').text('やわらかくて、すっぱいパウダーがおいしいグミです。');
    }
    showResult();
  }
});

// NOボタン
$('#no-btn').on('click', function () {
  if (step === 1) {
    firstAnswer = 'no';
    showSecond();
  } else {
    if (firstAnswer === 'yes') {
      // かため：YES、すっぱい：NO
      $('#result-name').text('タフグミ');
      $('#result-maker').text('メーカー：カバヤ食品');
      $('#result-hard').text('かたさ：5 / 5');
      $('#result-sour').text('すっぱさ：2 / 5');
      $('#result-text').text('とにかく強い噛みごたえがほしいあなたにおすすめ！');
    } else {
      // かため：NO、すっぱい：NO
      $('#result-name').text('果汁グミ');
      $('#result-maker').text('メーカー：明治');
      $('#result-hard').text('かたさ：2 / 5');
      $('#result-sour').text('すっぱさ：1 / 5');
      $('#result-text').text('やさしい甘さの定番グミ。迷ったらこれ！');
    }
    showResult();
  }
});

// もどるボタン
$('#back-btn').on('click', function () {
  showFirst();
});

// もう一度ボタン
$('#retry-btn').on('click', function () {
  $('#result').hide();
  $('#start').show();
});
