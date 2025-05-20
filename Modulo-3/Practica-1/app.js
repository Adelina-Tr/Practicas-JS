const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order); // Asíncrono
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

function simulatePreparationTime() {
    return new Promise((resolve) => {
        const preparationTime = Math.floor(Math.random() * 3000) + 2000; // Entre 2 y 5 segundos
        setTimeout(() => {
            resolve();
        }, preparationTime);
    });
}

async function processOrder(order) {
    await simulatePreparationTime();
    order.status = 'Completado';
    updateOrderStatus(order, order.status);
    document.getElementById(`order-${order.id}`).classList.add('completed');
}
