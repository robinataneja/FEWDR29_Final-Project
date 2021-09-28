function onClick(element) {
  const imageUrl = getComputedStyle(element).getPropertyValue('background-image').slice(4, -1).replace(/["']/g, "");
  document.getElementById("img01").src = imageUrl;
  document.getElementById("modal01").style.display = "block";
}
