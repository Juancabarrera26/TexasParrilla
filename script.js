document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("product-form");
    const inventoryTable = document.getElementById("inventory-table").querySelector("tbody");

    // Añadir producto
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Obtener valores del formulario
        const name = document.getElementById("product-name").value;
        const quantity = document.getElementById("product-quantity").value;
        const price = document.getElementById("product-price").value;

        // Crear fila en la tabla
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${quantity}</td>
            <td>${parseFloat(price).toFixed(2)}</td>
            <td>
                <button class="edit-btn">Editar</button>
                <button class="delete-btn">Eliminar</button>
            </td>
        `;

        // Añadir eventos a los botones
        row.querySelector(".edit-btn").addEventListener("click", () => editProduct(row));
        row.querySelector(".delete-btn").addEventListener("click", () => row.remove());

        // Añadir la fila a la tabla
        inventoryTable.appendChild(row);

        // Limpiar formulario
        form.reset();
    });

    // Editar producto
    function editProduct(row) {
        const cells = row.children;
        const name = cells[0].textContent;
        const quantity = cells[1].textContent;
        const price = cells[2].textContent;

        // Rellenar el formulario con los valores actuales
        document.getElementById("product-name").value = name;
        document.getElementById("product-quantity").value = quantity;
        document.getElementById("product-price").value = price;

        // Eliminar la fila actual
        row.remove();
    }
});
