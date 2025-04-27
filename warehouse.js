// Data dummy inventory
let inventory = [
    { id: 'BRG001', name: 'Laptop ASUS X441', category: 'Elektronik', stock: 15, location: 'Rak A1' },
    { id: 'BRG002', name: 'Mouse Wireless', category: 'Aksesoris', stock: 42, location: 'Rak B2' },
    { id: 'BRG003', name: 'Kabel HDMI 2m', category: 'Aksesoris', stock: 28, location: 'Rak B3' },
    { id: 'BRG004', name: 'Printer Epson L120', category: 'Elektronik', stock: 8, location: 'Rak A2' },
    { id: 'BRG005', name: 'Kertas A4 70gr', category: 'ATK', stock: 120, location: 'Rak C1' }
];

// Fungsi untuk menampilkan inventory ke tabel
function displayInventory() {
    const tableBody = document.querySelector('#inventory-list tbody');
    tableBody.innerHTML = '';
    
    inventory.forEach(item => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.stock}</td>
            <td>${item.location}</td>
            <td>
                <button class="edit-btn" data-id="${item.id}">Edit</button>
                <button class="delete-btn" data-id="${item.id}">Hapus</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
    
    // Update summary cards
    document.getElementById('total-items').textContent = inventory.length;
    document.getElementById('out-of-stock').textContent = inventory.filter(item => item.stock === 0).length;
}

// Fungsi untuk menambahkan item baru
function addItem(newItem) {
    inventory.push(newItem);
    displayInventory();
}

// Fungsi untuk menghapus item
function deleteItem(itemId) {
    inventory = inventory.filter(item => item.id !== itemId);
    displayInventory();
}

// Event listener ketika DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    displayInventory();
    
    // Event delegation untuk tombol edit dan hapus
    document.querySelector('#inventory-list').addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const itemId = e.target.getAttribute('data-id');
            if (confirm('Apakah Anda yakin ingin menghapus item ini?')) {
                deleteItem(itemId);
            }
        }
        
        if (e.target.classList.contains('edit-btn')) {
            const itemId = e.target.getAttribute('data-id');
            // Implementasi edit sesuai kebutuhan
            alert(`Edit item dengan ID: ${itemId}`);
        }
    });
});