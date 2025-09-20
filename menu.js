// menu.js
if (!localStorage.getItem("authenticated")) {
  window.location.href = "login.html";
}

// Show quantity box when item is checked
document.querySelectorAll(".menu-check").forEach(cb => {
  cb.addEventListener("change", function() {
    const qtyBox = this.closest(".menu-item").querySelector(".qty");
    if (this.checked) {
      qtyBox.style.display = "inline-block";
      qtyBox.value = 1; // default to 1
    } else {
      qtyBox.style.display = "none";
      qtyBox.value = 0;
    }
  });
});

// Handle bill generation
document.getElementById("menuForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const selectedItems = [];
  document.querySelectorAll(".menu-check:checked").forEach(cb => {
    const qty = parseInt(cb.closest(".menu-item").querySelector(".qty").value);
    const price = parseInt(cb.getAttribute("data-price"));
    selectedItems.push({
      name: cb.getAttribute("data-name"),
      price: price,
      quantity: qty
    });
  });

  localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
  window.location.href = "bill.html";
});