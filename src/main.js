import './style.css';
import * as d3 from 'd3';
import { nodes, links } from './data.js';
import { initializeGraph } from './graph.js';
import { closePanel } from './ui.js';

// Expose closePanel to global scope for the inline onclick handler in HTML
// Alternatively, we should remove the inline handler and attach event listener in code.
// Let's stick to attaching it in code to be "proper".

document.addEventListener('DOMContentLoaded', () => {
    initializeGraph(nodes, links);

    // Attach event listener for close button
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closePanel);
    }

    // Attach event listener for svg background click
    const svgElement = document.querySelector("#graph-container svg");
    // This will be created by initializeGraph, so we might need to do it inside there 
    // or wait. Actually initializeGraph creates it.
});
