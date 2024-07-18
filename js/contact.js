// contact.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // JavaScript Object
        const contactData = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        };

        // Ternary Operator
        const isEmailValid = contactData.email.includes('@') ? 'valid' : 'invalid';

        // Symbol == & ===
        if (isEmailValid == 'valid' && contactData.email === emailInput.value) {
            // Functions
            displayConfirmation(contactData);
        } else {
            alert('Invalid email address');
        }
    });

    function displayConfirmation(data) {
        console.log('Contact Data:', data);

        // JavaScript Object
        const confirmationMessage = {
            title: 'Thank you for contacting us!',
            body: `Dear ${data.name},\n\nWe have received your message:\n\n"${data.message}"\n\nWe will get back to you at ${data.email} soon.`
        };

        alert(`${confirmationMessage.title}\n\n${confirmationMessage.body}`);
    }

    // Filter Function and ForEach Loop
    const contactMethods = [
        { method: 'Email', value: 'email@example.com' },
        { method: 'Phone', value: '123-456-7890' },
        { method: 'Address', value: '123 Main St, Anytown, USA' }
    ];

    const emailMethods = contactMethods.filter(method => method.method === 'Email');
    emailMethods.forEach(method => console.log(`${method.method}: ${method.value}`));
});
