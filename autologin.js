// ==UserScript==
// @name        Auto-Submit Login Script
// @namespace   https://justices.me
// @description Automatically submits a login form after Firefox autofills the password
// @include     *://*/*   // Change this line to target specific websites if needed (e.g., *://example.com/*)
// @version     1.0
// @grant       none
// @run-at      document-idle
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the page to fully load
    window.addEventListener('load', function() {
        const passwordField = document.querySelector('input[type="password"]');

        if (passwordField && passwordField.value !== "") {
            const form = passwordField.closest('form');
            if (form) {
                console.log("Form found, attempting to auto-submit via fetch.");

                const formData = new FormData(form);

                // Use fetch to submit the form
                fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: {
                        'X-CSRF-Token': formData.get('csrf_token') || '',  // Example for CSRF
                        // Add other necessary headers here
                    },
                    credentials: 'include'  // Include cookies if necessary
                })
                .then(response => {
                    if (!response.ok) {
                        console.error('Form submission failed:', response.status, response.statusText);
                    } else {
                        console.log('Form submitted successfully.');
                    }
                })
                .catch(error => {
                    console.error('Error during form submission:', error);
                });
            }
        }
    });
})();
