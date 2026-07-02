**English** | [中文](README.zh-CN.md)

# The Murder of Roger Ackroyd — Character Map (Spoiler-Free)

An interactive character map for Agatha Christie's classic detective novel *The Murder of Roger Ackroyd* (1926), designed as a **reading companion**: the default view contains no spoilers whatsoever, and once you've finished the book you can flip on "Truth Mode" with a single click to reveal hidden characters and their real relationships.

**Live site: <https://ackroyd.snownamida.top/>**

![Character map screenshot](docs/screenshot.png)

## Features

- **Spoiler-free default view**: shows only the characters' public identities and relationships as revealed in the book
- **Truth Mode**: one click restores hidden characters, secret relationships, and everyone's true nature (marked with red dashed lines)
- **Interactive force-directed graph**: drag nodes to arrange the layout, scroll / pinch to zoom and pan
- **Character details**: click a node for a bilingual (English + Chinese) bio; Truth Mode adds an extra "Truth" section
- **Relationship labels**: every edge is annotated with the relationship (doctor, stepfather & stepson, engaged couple, …)

Truth Mode in action:

![Truth Mode screenshot](docs/screenshot-spoiler.png)

## Local development

```bash
npm install
npm run dev      # dev server
npm run build    # build to dist/
npm run preview  # preview the build
```

Tech stack: [Vite](https://vitejs.dev/) + [D3.js](https://d3js.org/) (force-directed graph) + Tailwind CSS (utility classes via CDN).

## Related projects

- [The Thursday Murder Club (Book 4) character map — bilingual](https://tmc.snownamida.top/) — Richard Osman's *The Last Devil to Die*

## Support

If this little tool helped your reading, feel free to [☕ buy me a coffee](https://ko-fi.com/snownamida).

## License

[MIT](LICENSE) © Snownamida
