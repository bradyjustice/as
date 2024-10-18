// ==UserScript==
// @name        Auto-Submit Login Script
// @namespace   http://yournamespace.com
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
        // Locate the password input field on the page
        const passwordField = document.querySelector('input[type="password"]');

        // If a password field is detected
        if (passwordField) {
            // Check if Firefox has already filled in the password field
            if (passwordField.value !== "") {
                // Locate the nearest form element surrounding the password field
                const form = passwordField.closest('form');
                if (form) {
                    // Submit the form automatically
                    form.submit();
                }
            }

            // Add an event listener for any change in the password field
            passwordField.addEventListener('input', function() {
                const form = passwordField.closest('form');
                if (form) {
                    // Submit the form automatically
                    form.submit();
                }
            });
        }
    });
})();