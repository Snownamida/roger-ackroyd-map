import * as d3 from 'd3';
import { showInfo, closePanel } from './ui.js';

export function initializeGraph(nodes, links) {
    // Color Mapping
    const colorScale = d3.scaleOrdinal()
        .domain([1, 2, 3, 4, 5])
        .range(["#dc2626", "#9333ea", "#64748b", "#3b82f6", "#cbd5e1"]);

    // Setup SVG
    const container = document.getElementById('graph-container');
    const width = container.clientWidth;
    const height = container.clientHeight;

    const svg = d3.select("#graph-container")
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

    const g = svg.append("g");

    // Simulation
    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id).distance(150))
        .force("charge", d3.forceManyBody().strength(-600))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collide", d3.forceCollide().radius(60));

    // Draw Links
    const link = g.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(links)
        .enter().append("line")
        .attr("class", "link");

    // Draw Nodes
    const node = g.append("g")
        .attr("class", "nodes")
        .selectAll("g")
        .data(nodes)
        .enter().append("g")
        .attr("class", "node")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended))
        .on("click", (event, d) => {
            event.stopPropagation(); // Prevent background click from firing
            showInfo(d);
        });

    // Node Circles
    node.append("circle")
        .attr("r", d => d.group === 1 ? 35 : (d.group === 4 ? 30 : 25))
        .attr("fill", d => colorScale(d.group))
        .attr("stroke", "#1e293b")
        .attr("stroke-width", 2);

    // Node Initials
    node.append("text")
        .attr("dy", 5)
        .attr("text-anchor", "middle")
        .style("fill", "white")
        .style("font-weight", "bold")
        .style("font-size", d => d.group === 1 ? "14px" : "12px")
        .style("pointer-events", "none")
        .text(d => d.name.substring(0, 1));

    // Node Labels
    node.append("text")
        .attr("dy", d => d.group === 1 ? 55 : 45)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#cbd5e1")
        .text(d => d.name);

    // Simulation Tick
    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("transform", d => `translate(${d.x},${d.y})`);
    });

    // Functions
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

    // Handle Window Resize
    window.addEventListener('resize', () => {
        const width = container.clientWidth; // Recalculate based on container
        const height = container.clientHeight;
        svg.attr("width", width).attr("height", height);
        simulation.force("center", d3.forceCenter(width / 2, height / 2));
        simulation.alpha(0.3).restart();
    });
}
