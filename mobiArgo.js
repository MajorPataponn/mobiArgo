// ==UserScript==
// @name         mobiArgo
// @version      1.0
// @description  A custom UI js script for Argo Workflows
// @author       SK
// @match        https://argo-workflows.*.quintet.de
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Get all elements with the class 'nav-bar__item'
    var parentElements = document.querySelectorAll('.nav-bar__item');

    // Loop through each parent element
    parentElements.forEach(function(parentElement) {
        // Check if the parent element contains a child element with the class 'fa fa-broadcast-tower'
        var childElement = parentElement.querySelector('.fa.fa-broadcast-tower');
        if (childElement) {
            // If found, hide the parent element
            parentElement.style.display = 'none';
        }
    });
})();
