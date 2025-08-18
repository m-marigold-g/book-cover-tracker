// Function handling the layout display
function showMonth(month) {
  document.getElementById('landing').style.display = 'none';
  document.getElementById('month-page').style.display = 'block';
  document.getElementById('month').textContent = month.charAt(0).toUpperCase() + month.slice(1);
  document.body.className = month;
  window.history.pushState({}, '', `?month=${month}`);
}

function showLanding() {
  document.getElementById('landing').style.display = 'block';
  document.getElementById('month-page').style.display = 'none';
  document.body.className = '';
  window.history.pushState({}, '', '?');
}

window.onload = function() {
  const params = new URLSearchParams(window.location.search);
  const month = params.get('month');
  if (month) showMonth(month);
}

// Function to change the background color
const colors = ['#EEE2DF', '#CCD5AE', '#C89F9C', '#C89F9C', '#C97C5D', '#B36A5E'];

function bgColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

document.getElementById('bgButton').addEventListener('click', bgColor);

// Handling the user query using fetch() and the Open Library API
const buttons = document.querySelectorAll('.choose-btn');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    const container = button.parentElement;
    const input = container.querySelector('.book-query');
    const isbn = input.value.trim();
    const img = container.querySelector('img');

    if (isbn === "") {
      alert("Please enter an ISBN !");
      return;
    }

    img.src = "https://covers.openlibrary.org/b/isbn/" + isbn + "-M.jpg";

    img.onerror = function() {
      img.src = "../assets/favicon.png";
      alert("Title not found");
    };
  });
});

// Function hiding the input field and buttons ("collage mode")
function hideControls() {
  document.getElementById('hideButton').addEventListener('click', function() {
    document.querySelectorAll('.book-query, .choose-btn, #hideButton').forEach(itm => {
      itm.style.display = "none";
    });
  });
}
hideControls();
