const radioBtns = document.querySelectorAll('label');

for (const btn of radioBtns) {
  btn.addEventListener('click', () => {
    // clear out any other orange state
    radioBtns.forEach(b => b.classList.remove('orange'));
    // make this one orange
    btn.classList.toggle('orange');
  });
}
