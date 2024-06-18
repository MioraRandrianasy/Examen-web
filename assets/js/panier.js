document.addEventListener('DOMContentLoaded', () => {
    updateTotal();

    
    document.querySelectorAll('.item-quantity').forEach(input => {
        input.addEventListener('change', updateTotal);
    });

    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', event => {
            const item = event.target.closest('.panier-item');
            // console.log(item);
            item.remove();
            updateTotal();
        });
    });
});

function updateTotal() {
    let total = 0;
    document.querySelectorAll('.panier-item').forEach(item => {
        const prix = parseFloat(item.querySelector('.item-prix').textContent.replace('€', ''));
        const quantity = item.querySelector('.item-quantity').value;
        total += prix * quantity;
    });
    document.getElementById('total-prix').textContent = total + '€';
}
