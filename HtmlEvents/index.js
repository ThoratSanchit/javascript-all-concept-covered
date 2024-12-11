document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('button');
    const inputField = document.getElementById('inputField');
    const form = document.getElementById('form');

    // Mouseover Event
    button.addEventListener('mouseover', () => {
        console.log('Mouseover event triggered on button');
    });

    // Keydown Event
    inputField.addEventListener('keydown', () => {
        console.log('Keydown event triggered in input field');
    });

    // Keyup Event
    inputField.addEventListener('keyup', () => {
        console.log('Keyup event triggered in input field');
    });

    // Submit Event
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting
        console.log('Submit event triggered on form');
    });

    // Focus Event
    inputField.addEventListener('focus', () => {
        console.log('Focus event triggered on input field');
    });

    // Blur Event
    inputField.addEventListener('blur', () => {
        console.log('Blur event triggered on input field');
    });

    // Change Event
    inputField.addEventListener('change', () => {
        console.log('Change event triggered on input field');
    });

    // Load Event
    window.addEventListener('load', () => {
        console.log('Load event triggered');
    });

    // Resize Event
    window.addEventListener('resize', () => {
        console.log('Resize event triggered');
    });
});
