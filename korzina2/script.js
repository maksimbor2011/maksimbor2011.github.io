
const cartItems = document.querySelectorAll('tbody tr');
const itemQuantityInputs = document.querySelectorAll('.item-quantity');
const cartTotalElement = document.querySelector('.cart-total span');
const orderCompletedOverlay = document.querySelector('.order-completed-overlay');
const orderCompletedModal = document.getElementById("orderCompletedModal");






// Функция для обновления общей суммы
function updateCartTotal() {
    let total = 0;

    // Перебираем строки в таблице
    cartItems.forEach((item, index) => {
        // Получаем количество и цену товара
        const quantity = parseInt(itemQuantityInputs[index].value);
        const price = parseFloat(item.querySelector('td:nth-child(2)').textContent.replace(' руб.', ''));

        // Вычисляем сумму для текущего товара
        const itemTotal = quantity * price;
        item.querySelector('td:nth-child(4)').textContent = `${itemTotal} руб.`;

        // Добавляем сумму к общей
        total += itemTotal;
    });

    // Обновляем отображение общей суммы
    cartTotalElement.textContent = `${total} руб.`;
}

// Добавляем обработчики событий на изменение количества
itemQuantityInputs.forEach(input => {
    input.addEventListener('input', updateCartTotal);
});

// Вызываем функцию для первоначального расчета суммы
updateCartTotal();




