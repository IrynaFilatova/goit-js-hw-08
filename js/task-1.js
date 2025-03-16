"use strict";
const categories = document.querySelector("#categories");
const numberOfCategories = categories.children.length;
console.log("Number of categories:", numberOfCategories);

const categoriesItems = document.querySelectorAll(".item");
categoriesItems.forEach((item) => {
  const categoryName = item.firstElementChild.textContent;
  const categoryLength = item.lastElementChild.children.length;
  console.log("Category:", categoryName);
  console.log("Elements:", categoryLength);
});
