import './style.css';
import * as d3 from 'd3'; // Keep d3 import if needed by side effects or future use, though mainly used in graph.js
import { nodes, links } from './data.js';
import { initializeGraph } from './graph.js';
import { closePanel } from './ui.js';

// State
let isSpoilerMode = false;
window.currentMode = 'normal'; // Global for click handlers in graph.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Graph and capture update function
    // We pass initial filtered data (normal mode)
    const graphControl = initializeGraph(
        filterNodes(nodes, isSpoilerMode),
        filterLinks(links, isSpoilerMode)
    );

    // Attach event listener for close button (Existing functionality)
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closePanel);
    }

    // Toggle Button Logic
    const toggleBtn = document.getElementById('toggle-spoiler-btn');
    const subtitle = document.getElementById('subtitle');
    const spoilerLegend = document.getElementById('spoiler-legend');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            isSpoilerMode = !isSpoilerMode;
            window.currentMode = isSpoilerMode ? 'spoiler' : 'normal';
            updateUI(isSpoilerMode, toggleBtn, subtitle, spoilerLegend);

            // Update Graph
            if (graphControl && graphControl.update) {
                graphControl.update(
                    filterNodes(nodes, isSpoilerMode),
                    filterLinks(links, isSpoilerMode)
                );
            }
        });
    }
});

function updateUI(isSpoiler, btn, sub, legend) {
    if (isSpoiler) {
        btn.innerHTML = `<span>🕵️</span> <span>隐藏真相 (Hide Truth)</span>`;
        btn.classList.add('bg-amber-600', 'border-amber-500');
        btn.classList.remove('bg-slate-700', 'border-slate-600');

        if (sub) {
            sub.innerText = "真相大白 | Result of the Investigation";
            sub.classList.add('text-amber-500');
        }

        if (legend) legend.classList.remove('hidden');
    } else {
        btn.innerHTML = `<span>🔍</span> <span>还原真相 (Reveal Truth)</span>`;
        btn.classList.remove('bg-amber-600', 'border-amber-500');
        btn.classList.add('bg-slate-700', 'border-slate-600');

        if (sub) {
            sub.innerText = "无剧透人物关系图 | Spoiler-Free Character Map";
            sub.classList.remove('text-amber-500');
        }

        if (legend) legend.classList.add('hidden');
    }
}

// Helper: Filter Nodes
function filterNodes(allNodes, showSpoiler) {
    // Filter out nodes marked with spoiler: true if we are in normal mode
    return showSpoiler ? allNodes : allNodes.filter(n => !n.spoiler);
}

// Helper: Filter Links
function filterLinks(allLinks, showSpoiler) {
    return showSpoiler ? allLinks : allLinks.filter(l => !l.spoiler);
}
