const radioBtns = document.querySelectorAll('label');

let selectedRating;

for (const btn of radioBtns) {
  btn.addEventListener('click', () => {
    // clear out any other orange state
    radioBtns.forEach(b => b.classList.remove('orange'));
    // make this one orange
    btn.classList.toggle('orange');
    // keep track of selected rating
    selectedRating = Number(btn.innerText);
  });
}
