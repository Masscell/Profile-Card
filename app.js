(function () {
  const el = document.getElementById('epoch-time');
  function tick() {
    const now = Date.now();
    el.textContent = now.toLocaleString();
    el.setAttribute('datetime', new Date(now).toISOString());
    el.setAttribute('data-epoch-ms', now);
  }
  tick();
  setInterval(tick, 1000);
})();
