# Where is Eleni?
A travel story.

## 🚀 Project Structure

Inside of the project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   └── qwik.svg
│   ├── components/
│   │   ├── counter.module.css
│   │   └── counter.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── globals.css
└── package.json
```

- **public/** : This directory contains static resources such as images, accessible from the root of the deployed site.

- **src/** : This directory is the core of the application. Here's an overview of its structure:

  - **assets/** : This directory is for resources such as images, SVG files, etc.
  
  - **components/** : Qwik components are stored here. Use this directory to organize and create reusable components for the application.
  
  - **layouts/** : Astro layouts reside in this directory. Layout files define the overall structure of the pages.
  
  - **pages/** : This directory contains the pages of the Astro application. Each file with the `.astro` or `.md` extension is exposed as a route based on its file name.
  
  - **styles/** : Global style files for the application are stored here, such as `globals.css`.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command              | Action                                         |
| :------------------- | :----------------------------------------------|
| `bun install`         | Installs dependencies                          |
| `bun start`           | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build the production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying   |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check`   |
| `bun astro -- --help` | Get help using the Astro CLI                   |

## 📚 References

- [Astro Documentation](https://astro.build/) - Explore more about Astro.

- [Qwik Documentation](https://qwik.dev/) - Learn about Qwik and its features.
