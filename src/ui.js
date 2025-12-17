import * as d3 from 'd3';

export function showInfo(d, isSpoilerMode = false) {
    const panel = document.getElementById('info-panel');

    // Populate Data
    document.getElementById('char-name').innerText = d.name;
    document.getElementById('char-name-en').innerText = d.en;

    const descEl = document.getElementById('char-desc');
    const roleEl = document.getElementById('char-role');

    // Handle Spoiler Content
    if (isSpoilerMode) {
        // Description
        const safeDesc = d.desc;
        const secretDesc = d.trueDesc ? `<br><br><strong class="text-red-400">[真相]</strong> ${d.trueDesc}` : "";
        descEl.innerHTML = safeDesc + secretDesc;

        // Role
        if (d.trueRole) {
            roleEl.innerHTML = `<span class="line-through opacity-60">${d.role}</span> <span class="text-red-400 font-bold ml-1">${d.trueRole}</span>`;
        } else {
            roleEl.innerText = d.role;
        }

    } else {
        // Normal Mode
        descEl.innerText = d.desc;
        roleEl.innerText = d.role;
    }

    // Color Mapping
    const colors = {
        1: "#dc2626",
        2: "#9333ea",
        3: "#64748b",
        4: "#3b82f6",
        5: "#cbd5e1"
    };

    const color = colors[d.group] || "#94a3b8";

    document.getElementById('char-name').style.color = color;
    roleEl.style.borderColor = color;

    // If we're updating innerHTML of roleEl, we need to be careful about style reset if we used it before
    // The previous code set style.color on roleEl which might conflict with my innerHTML span styling.
    // Let's reset it to white generally, and let inner spans handle colors.
    roleEl.style.color = "#fff";

    // Show Panel
    panel.classList.add('active');
}

export function closePanel() {
    const panel = document.getElementById('info-panel');
    if (panel) {
        panel.classList.remove('active');
    }
}
