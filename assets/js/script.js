document.addEventListener("DOMContentLoaded", function () {
    const link = document.querySelector(".link");
    const hamburger = document.querySelector(".hamburger");
  
    link.style.display = "none";
  
    const productTab = document.querySelector('input[name="tabset"]:checked');
  
    const catalogue = document.querySelectorAll(".catalogue");
  
    let isMenuOpen = false;
    hamburger.addEventListener("click", function () {
      if (isMenuOpen) {
        link.style.display = "none";
      } else {
        link.style.display = "block";
      }
      isMenuOpen = !isMenuOpen;
    });
  
    const tabRadioButtons = document.querySelectorAll('input[name="tabset"]');
    tabRadioButtons.forEach(function (radio) {
      radio.addEventListener("change", function () {
        const selectedTab = this.value;
        catalogue.forEach(function (product) {
          const productTag = product.querySelector(".tag");
          if (selectedTab === "All" || productTag.textContent === selectedTab) {
            product.style.display = "block";
          } else {
            product.style.display = "none";
          }
        });
      });
    });
  
    const search = document.querySelector(".search_product");
  
    search.addEventListener("input", function () {
      const searchTerm = search.value.toLowerCase();
      catalogue.forEach(function (product) {
        const productTitle = product.querySelector("p").textContent.toLowerCase();
        if (productTitle.includes(searchTerm)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
  
    const searchMessage = document.getElementById("search-message");
  
    search.addEventListener("input", function () {
      const searchTerm = search.value.toLowerCase();
      let noResults = true;
  
      catalogue.forEach(function (product) {
        const productTitle = product.querySelector("p").textContent.toLowerCase();
        if (productTitle.includes(searchTerm)) {
          product.style.display = "block";
          noResults = false;
        } else {
          product.style.display = "none";
        }
      });
  
      if (noResults) {
        searchMessage.textContent = "No matching products found.";
        searchMessage.style.display = "block";
      } else {
        searchMessage.textContent = ""; 
        searchMessage.style.display = "none";
      }
    });
  
    tabRadioButtons.forEach(function (radio) {
      radio.addEventListener("change", function () {
        const selectedTab = this.value;
        let productsFound = false;
        catalogue.forEach(function (product) {
          const productTag = product.querySelector(".tag").textContent;
          if (selectedTab === "All" || productTag === selectedTab) {
            productsFound = true;
          }
        });
  
        const tabNotFoundMessage = document.getElementById(
          "tab-not-found-message"
        );
        if (!productsFound) {
          tabNotFoundMessage.textContent = "No products found for this category.";
        } else {
          tabNotFoundMessage.textContent = ""; 
        }
      });
    });
  });