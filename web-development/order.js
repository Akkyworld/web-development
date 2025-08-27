document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');
    const orderConfirmation = document.getElementById('orderConfirmation');
    const confirmName = document.getElementById('confirmName');
    const confirmQuantity = document.getElementById('confirmQuantity');
    const confirmProduct = document.getElementById('confirmProduct');
    const confirmAddress = document.getElementById('confirmAddress');

    orderForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const productSelect = document.getElementById('product');
        const selectedProductText = productSelect.options[productSelect.selectedIndex].text;
        const quantity = document.getElementById('quantity').value;
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;

        // Populate confirmation details
        confirmName.textContent = name;
        confirmQuantity.textContent = quantity;
        confirmProduct.textContent = selectedProductText;
        confirmAddress.textContent = address;

        // Hide the form and show the confirmation
        orderForm.classList.add('hidden');
        orderConfirmation.classList.remove('hidden');
    });
});
