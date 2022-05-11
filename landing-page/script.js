// image slider

let slides = document.getElementsByClassName("slide");

slidePosition = 0;
totalSlides = slides.length;

const updateSlidePosition = () => {
  for (let slide of slides) {
    // slide.classList.remove("slide-img");
    slide.classList.remove("slide-visible");
  }
  slides[slidePosition].classList.add("slide-visible");
};

function next() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}
setInterval(next, 10000);
function prev() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}
setInterval(next, 10000);
// Product Slider

const products = document.getElementsByClassName("product");
const prevButton = document.querySelector("button:first-of-type");
const nextButton = document.querySelector("button:last-of-type");
let logo = document.getElementById("text-logo");
productPosition = 0;
totalProducts = products.length;
console.log(nextButton, logo);
nextButton.addEventListener("click", function () {
  nextProduct();
});
prevButton.addEventListener("click", function () {
  prevProduct();
});
const updateProductPosition = () => {
  for (let product of products) {
    // product.classList.remove("product-img");
    product.classList.remove("product-visible");
  }
  products[productPosition].classList.add("product-visible");
};

function nextProduct() {
  if (productPosition === totalProducts - 1) {
    productPosition = 0;
  } else {
    productPosition++;
  }
  console.log(productPosition);
  updateProductPosition();
}
function prevProduct() {
  if (productPosition === 0) {
    productPosition = totalProducts - 1;
  } else {
    productPosition--;
  }
  updateProductPosition();
}
