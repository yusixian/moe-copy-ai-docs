# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a documentation site for the MoeCopy AI browser extension, built with Fumadocs and Next.js. The site serves as the official documentation for the extension.

## Development Commands

### Core Commands

- `pnpm dev` or `npm run dev` - Start development server with Turbo
- `pnpm build` or `npm run build` - Build production site
- `pnpm start` or `npm run start` - Start production server
- `pnpm postinstall` or `npm run postinstall` - Run fumadocs-mdx setup after install

### Linting and Formatting

- `pnpm prettier --write .` - Format code with Prettier
- ESLint is configured for Next.js

## Architecture Overview

### Tech Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Documentation**: Fumadocs (MDX-based documentation framework)
- **Styling**: Tailwind CSS v4 with PostCSS
- **TypeScript**: Strict mode enabled
- **Package Manager**: pnpm (preferred) or npm

### Project Structure

```
├── app/                    # Next.js app directory
│   ├── (home)/            # Home page routes
│   ├── docs/              # Documentation pages
│   │   └── [[...slug]]/   # Dynamic documentation routes
│   └── api/               # API routes
│       └── search/        # Search functionality
├── content/               # MDX documentation content
│   └── docs/             # Documentation files
├── lib/                   # Shared utilities
│   └── source.ts         # Fumadocs source configuration
└── source.config.ts      # MDX/Fumadocs configuration
```

### Documentation System

The documentation uses Fumadocs with MDX files in `content/docs/`. Key features:

- **Dynamic routing**: `[[...slug]]` pattern for flexible documentation URLs
- **MDX support**: Write documentation in Markdown with React components
- **Search API**: Built-in search at `/api/search`
- **Frontmatter validation**: All MDX files require a `title` field in frontmatter

### Configuration

- **Prettier**: Custom configuration in `.prettierrc.mjs`
  - 80 character line width
  - No semicolons
  - Double quotes
  - Tailwind CSS plugin for class sorting
- **TypeScript**: Configured in `tsconfig.json`
- **Fumadocs**: Configured in `source.config.ts`

### Important Notes

1. **MDX Frontmatter**: All documentation files in `content/docs/` must include frontmatter with at least a `title` field:

   ```mdx
   ---
   title: "Page Title"
   ---
   ```

2. **Development Server**: Uses Next.js Turbo mode for faster rebuilds

3. **Build Issues**: The project currently has build errors due to missing frontmatter in documentation files. Fix by adding required frontmatter to:
   - `content/docs/README.md`
   - `content/docs/CHANGELOG.md`

### Common Tasks

#### Adding Documentation

1. Create MDX file in `content/docs/`
2. Add required frontmatter with `title`
3. Write content using Markdown and React components
4. File will be automatically available at `/docs/[filename]`

#### Testing Builds

Before deploying:

1. Run `pnpm build` to ensure no build errors
2. Test with `pnpm start` to verify production build
3. Check that all documentation pages render correctly
