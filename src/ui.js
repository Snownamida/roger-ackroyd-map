import * as d3 from 'd3';

export function showInfo(d) {
    const panel = document.getElementById('info-panel');

    // Populate Data
    document.getElementById('char-name').innerText = d.name;
    document.getElementById('char-name-en').innerText = d.en;
    document.getElementById('char-desc').innerText = d.desc;
    document.getElementById('char-role').innerText = d.role;

    // Color Mapping (Need to match the one in graph.js, or pass it in)
    // For simplicity, let's redefine the scale basic logic or export it from graph.js.
    // Ideally, UI shouldn't know about D3 scales directly if possible, or we share a config.
    // Let's just hardcode the color logic here for now or import it if I export it.
    // To match exactly: Red (1), Purple (2), Slate (3), Blue (4)
    const colors = {
        1: "#dc2626",
        2: "#9333ea",
        3: "#64748b",
        4: "#3b82f6",
        5: "#cbd5e1"
    };

    const color = colors[d.group] || "#94a3b8";

    document.getElementById('char-name').style.color = color;
    document.getElementById('char-role').style.borderColor = color;
    document.getElementById('char-role').style.color = "#fff"; // Reset to white text

    // Show Panel
    panel.classList.add('active');
}

export function closePanel() {
    const panel = document.getElementById('info-panel');
    if (panel) {
        panel.classList.remove('active');
    }
}
