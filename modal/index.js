$(function () {
  /**
   * モーダルオープン
   */
  $('#openModal').click(function () {
    $('#modalArea').fadeIn();
  });

  /**
   * モーダルクローズ
   */
  $('#no , #modalBg').click(function () {
    $('#modalArea').fadeOut();
  });

  /**
   * モーダルクローズ＋別タブ遷移
   */
  $('#yes').click(function () {
    $('#modalArea').fadeOut();
    window.open('https://www.yahoo.co.jp/', '_blank');
  });
});