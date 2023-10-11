var stripe = Stripe('kunci-api-stripe');
var elements = stripe.elements();

// Mencipta medan kad kredit Stripe
var card = elements.create('card');

// Menambahkannya ke bentuk pembayaran
card.mount('#card-element');

var form = document.getElementById('payment-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Melakukan pengesahan pembayaran apabila borang dihantar
    stripe.createToken(card).then(function(result) {
        if (result.error) {
            // Paparkan ralat jika terdapat sebarang ralat
            var errorElement = document.getElementById('card-errors');
            errorElement.textContent = result.error.message;
        } else {
            // Kirim token ke pelayan untuk pemprosesan pembayaran selanjutnya
            var token = result.token;
            // Hantar token ke pelayan anda dan proses pembayaran di sana
        }
    });
});