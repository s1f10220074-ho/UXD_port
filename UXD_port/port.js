function toggleMenu() {
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('overlay');

  if (menu.classList.contains('show')) {
      menu.classList.remove('show');
      overlay.classList.remove('show'); // Overlayも隠す
      setTimeout(() => {
          menu.style.display = 'none'; // アニメーション後にメニューを隠す
      }, 300); // CSSのアニメーションと一致させる
  } else {
      menu.style.display = 'block'; // メニューを表示
      overlay.classList.add('show'); // Overlayも表示
      setTimeout(() => {
          menu.classList.add('show'); // メニューを表示
      }, 50); // オーバーレイが表示された後にメニューを表示
  }
}
  