document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productItem = event.target.closest(".product-item");
            const productName = productItem.querySelector("h3").textContent;
            const productPrice = productItem.querySelector("p:nth-of-type(2)").textContent;
            const productImage = productItem.querySelector("img").src;

            // Create a product object
            const product = {
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1 // Default quantity is 1
            };

            // Get the existing cart from localStorage or initialize an empty array
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Check if the product already exists in the cart
            const existingProduct = cart.find(item => item.name === product.name);

            if (existingProduct) {
                // If the product exists, increment its quantity
                existingProduct.quantity += 1;
            } else {
                // If the product doesn't exist, add it to the cart
                cart.push(product);
            }

            // Save the updated cart back to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Show a popup message
            alert(`${productName} has been added to your cart!`);
        });
    });
});