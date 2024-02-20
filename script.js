$(function () {
  // ボタンアニメーション
  $('.button-more').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    }, 100);
  });
  $('.button-more').on('mouseout', function () {
    $(this).animate({
      opacity: 1.0,
      marginLeft: 0
    }, 100);
  });
  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  // AjaxでSTATIC FOERM Sに出たを送信
  $('#submit').on('click', function (event){
    // formタグによる送信を拒否
    event.preventDefault();

    // 入力した結果、エラーがあるかないか判定
    let result = inpuctCheck();
  });

  // フォーカスが外れた時に(blur)にフォームの入力テェックをする
  $('#name').blur(function () {
    inpuctCheck();
  });
  $('#furigana').blre(function () {
    inpuctCheck();
  });
  $('#email').blur(function () {
    inpuctCheck();
  });
  $('#tel').blur(function () {
    inpuctCheck();
  });
  $('#message').blur(function () {
    inpuctCheck();
  });
  $('#agree').click(function () {
    inpuctCheck();
  });


  // お問い合わせフォームの入力chek
  function inputCheck() {
    // エラーのチェック結果
    let result;

    // エラーメッセージのテキスト
    let message = '';

    // エラーがなければfalse、エラーがあればtrue
    let error = false;

    // お名前のチェック
    if ($('#name').val() == '') {
      // エラーあり
      $('#name').css('background-color', '#f79999');
      error = true;
      message += 'お名前を入力してください。\n';
    } else {
      // エラーなし
      $('#name').css('background-color', '#fafafa');
    }

    // メールアドレスのチェック
    if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {
      // エラーあり
      $('#email').css('background-color', '#f79999');
      error = true;
      message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
    } else {
      // エラーなし
      $('#email').css('background-color', '#fafafa');
    }
  }
  });