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
        // Locate the password input field on the page
        const passwordField = document.querySelector('input[type="password"]');

        if (passwordField) {
            console.log("Password field found:", passwordField);

            // Check if Firefox has already filled in the password field
            if (passwordField.value !== "") {
                // Locate the nearest form element surrounding the password field
                const form = passwordField.closest('form');
                if (form) {
                    console.log("Form found, attempting to auto-submit:", form);
                    form.submit();
                } else {
                    console.log("No form found for the password field.");
                }
            } else {
                console.log("Password field is empty, waiting for input.");
            }

            // Add an event listener for any change in the password field
            passwordField.addEventListener('input', function() {
                console.log("Password input event detected.");
                const form = passwordField.closest('form');
                if (form) {
                    console.log("Form found after input, attempting to auto-submit:", form);
                    form.submit();
                } else {
                    console.log("No form found for the password field after input.");
                }
            });
        } else {
            console.log("No password field found on the page.");
        }
    });
})();