let selectedRating;
// track if user submits without a selected rating
let isError = false;

const starIcon = document.getElementById('star-icon');
const thankyouIcon = document.getElementById('thank-you-icon');

const ratingBtns = document.querySelectorAll('label');
const cardContainer = document.querySelector('.card-container');
const cardContent = document.querySelector('.card-content-container'); // after icons
const submitBtn = document.querySelector('button');

// no rating selected + click submit -> user gets the warning
const errEl = document.createElement('div');
errEl.innerHTML = `<p style="color: red; font-size: 16px; font-weight: 500;">You need to pick a score before you can submit</p>`;

function genThanksHtml(rating) {
  return `
  <div id="result-badge">
    You selectetd ${rating} out of 5
  </div>
  <h1 class="thank-you-h1">Thank you!</h1>
  <div class="card-text">
    <p>
    We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
    </p>
  </div>
  `;
}

for (const btn of ratingBtns) {
  btn.addEventListener('click', () => {
    if (isError) {
      // clear out error state
      cardContainer.lastChild.remove();
      isError = false;
    }
    // only one btn should be orange at any moment
    ratingBtns.forEach(b => b.classList.remove('orange'));
    // make this one orange
    btn.classList.add('orange');
    // keep track of selected rating
    selectedRating = Number(btn.innerText);
  });
}

submitBtn.addEventListener('click', () => {
  if (selectedRating) {
    cardContent.innerHTML = genThanksHtml(selectedRating);
    // switch out icons when we change view
    thankyouIcon.style.display = 'block';
    starIcon.style.display = 'none';
  } else {
    cardContainer.append(errEl);
    isError = true;
  }
});
