import * as d3 from 'd3';
import { showInfo, closePanel } from './ui.js';

export function initializeGraph(nodes, links) {
    // Color Mapping
    const colorScale = d3.scaleOrdinal()
        .domain([1, 2, 3, 4, 5])
        .range(["#dc2626", "#9333ea", "#64748b", "#3b82f6", "#cbd5e1"]);

    // SVG Selection (create once or select existing)
    let svg = d3.select("#graph-container").select("svg");

    // Setup SVG only if it doesn't exist
    if (svg.empty()) {
        const container = document.getElementById('graph-container');
        const width = container.clientWidth;
        const height = container.clientHeight;

        svg = d3.select("#graph-container")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .call(d3.zoom().on("zoom", (event) => {
                g.attr("transform", event.transform);
            }))
            .on("click", (event) => {
                if (event.target.tagName === 'svg') {
                    closePanel();
                }
            });
    }

    // Clear previous contents if any (simple reset for now to ensure clean slate on init, 
    // though update pattern prefers keeping elements. Let's use a group 'g' reuse pattern)
    let g = svg.select("g");
    if (g.empty()) {
        g = svg.append("g");
    }



    // Simulation
    const width = +svg.attr("width");
    const height = +svg.attr("height");

    // We keep simulation as a local variable but we might need to restart it.
    // Ideally, we want one simulation instance that gets updated.
    // For simplicity in this existing structure, I will define a function to update data.

    let simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(d => d.id).distance(150))
        .force("charge", d3.forceManyBody().strength(-600))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collide", d3.forceCollide().radius(60));

    // Define elements (selections)
    let link = g.selectAll(".link");
    let linkLabel = g.selectAll(".link-label"); // Assuming we might want labels, or just line styling
    let node = g.selectAll(".node");

    // --- Update Function ---
    function update(nodesData, linksData) {
        // Deep copy relationships to avoid D3 mutation issues when switching back and forth
        // (D3 modifies properties like source/target to objects)
        // Actually, if we pass fresh new objects every time it's fine.
        // But here we are passing the same raw data from data.js.
        // We should map them to mutable objects for D3 if we swap back and forth.
        const nodes = nodesData.map(d => ({ ...d }));
        // We need to preserve positions if we want smooth transitions? 
        // For now, let's just restart to avoid "sticking" issues relative to hidden nodes.
        // Or better: map new nodes to existing simulation nodes to keep positions.

        // Link processing: source/target must be IDs for the initialization, 
        // but D3 replaces them with object references. 
        // Since we are re-creating the nodes array, we can just pass IDs in links.
        const links = linksData.map(d => ({ ...d }));

        // Update Simulation Nodes
        simulation.nodes(nodes).on("tick", ticked);
        simulation.force("link").links(links);

        // --- LINKS ---
        // Key includes the label so parallel edges (e.g. a normal + a spoiler
        // relationship between the same two people) don't collide and get dropped.
        const linkKey = d => d.source.id + "-" + d.target.id + "-" + (d.label || "");

        link = g.selectAll(".link")
            .data(links, linkKey);

        link.exit().remove();

        const linkEnter = link.enter().append("line")
            .attr("class", "link")
            .attr("stroke-width", 2)
            .attr("stroke", "#94a3b8"); // default color

        link = linkEnter.merge(link);

        // Update Link Styles based on spoiler
        link.attr("stroke", d => d.spoiler ? "#ef4444" : "#94a3b8") // Red for spoiler
            .attr("stroke-dasharray", d => d.spoiler ? "5,5" : null) // Dashed for spoiler
            .attr("opacity", 0.6);

        // --- LINK LABELS ---
        linkLabel = g.selectAll(".link-label")
            .data(links, linkKey);

        linkLabel.exit().remove();

        const linkLabelEnter = linkLabel.enter().append("text")
            .attr("class", "link-label")
            .attr("text-anchor", "middle");

        linkLabel = linkLabelEnter.merge(linkLabel);

        linkLabel
            .text(d => d.label || "")
            // Offset spoiler labels below the line so parallel edges stay readable
            .attr("dy", d => d.spoiler ? 14 : -5)
            .attr("fill", d => d.spoiler ? "#f87171" : "#94a3b8");

        // --- NODES ---
        node = g.selectAll(".node")
            .data(nodes, d => d.id);

        node.exit().remove();

        const nodeEnter = node.enter().append("g")
            .attr("class", "node")
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended))
            .on("click", (event, d) => {
                event.stopPropagation();
                showInfo(d, window.currentMode === 'spoiler'); // Pass mode
            });

        // Circle
        nodeEnter.append("circle")
            .attr("r", d => d.group === 1 ? 35 : (d.group === 4 ? 30 : 25))
            .attr("fill", d => colorScale(d.group))
            .attr("stroke", "#1e293b")
            .attr("stroke-width", 2);

        // Initial
        nodeEnter.append("text")
            .attr("dy", 5)
            .attr("text-anchor", "middle")
            .style("fill", "white")
            .style("font-weight", "bold")
            .style("font-size", d => d.group === 1 ? "14px" : "12px")
            .style("pointer-events", "none")
            .text(d => d.name.substring(0, 1));

        // Label
        nodeEnter.append("text")
            .attr("dy", d => d.group === 1 ? 55 : 45)
            .attr("text-anchor", "middle")
            .style("font-size", "12px")
            .style("fill", "#cbd5e1")
            .text(d => d.name);

        node = nodeEnter.merge(node);

        // Re-heat simulation
        simulation.alpha(1).restart();
    }

    // Run first update
    update(nodes, links);

    // Ticked
    function ticked() {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        linkLabel
            .attr("x", d => (d.source.x + d.target.x) / 2)
            .attr("y", d => (d.source.y + d.target.y) / 2);

        node
            .attr("transform", d => `translate(${d.x},${d.y})`);
    }

    // Drag functions
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    // Handle Resize
    window.addEventListener('resize', () => {
        const container = document.getElementById('graph-container');
        const width = container.clientWidth;
        const height = container.clientHeight;
        svg.attr("width", width).attr("height", height);
        simulation.force("center", d3.forceCenter(width / 2, height / 2));
        simulation.alpha(0.3).restart();
    });

    // Return update function for external use
    return { update };
}
