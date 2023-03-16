const addH1 = () => {
  const h2 = document.createElement('h2');
  h2.id = 'h2-test';
  h2.textContent = 'another one!';
  document.body.appendChild(h2);
};

window.addEventListener('DOMContentLoaded', addH1);
