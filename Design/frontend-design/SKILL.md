---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when users ask to build or redesign web pages, landing pages, dashboards, React components, HTML/CSS layouts, posters, or any UI that needs strong visual direction and polished implementation.
---

# Frontend Design

## Overview

Use this skill when the task is primarily about designing and implementing a frontend interface, not just wiring behavior. The goal is to ship real working UI with a clear aesthetic point of view, strong execution, and enough refinement that it does not read like generic template output.

Pick a bold direction early and carry it through typography, color, spacing, composition, and motion. Do not default to safe, average patterns.

## Workflow

### 1. Read the context first

Identify:

- Purpose: what the interface needs to do
- Audience: who will use it
- Constraints: framework, design system, accessibility, performance, responsiveness
- Surface area: page, component, app shell, dashboard, poster, or static artifact

If the project already has an established style, extend it instead of fighting it.

### 2. Commit to a specific aesthetic

Choose one strong design direction before coding. Examples:

- editorial / magazine
- brutalist / raw
- luxury / refined
- industrial / utilitarian
- retro-futurist
- soft natural / organic
- playful / toy-like
- maximalist collage
- restrained modernist minimalism

State the direction to the user in one short line when starting substantial work. Also decide what makes the result memorable: an unusual grid, distinctive typography, a dramatic hero treatment, a motion system, a texture layer, or a shape language.

### 3. Build the interface, not just the styling

Implement production-grade code that actually works in the repo's stack. Match the implementation to the visual concept:

- maximalist directions need richer layering, motion, and decorative detail
- minimalist directions need restraint, spacing precision, and typographic discipline

Use CSS variables for repeated colors, spacing, and visual tokens. Favor reusable structure over one-off styling noise.

### 4. Refine until the UI feels intentional

Check:

- desktop and mobile layouts both hold together
- hierarchy is clear at a glance
- spacing and alignment are consistent
- hover, focus, and loading states feel designed
- decorative elements support the concept instead of cluttering it

## Design Rules

### Typography

- Avoid generic defaults like Arial, Roboto, Inter, and plain system stacks unless the existing product already depends on them.
- Prefer a distinctive display face plus a calmer body face.
- Use scale, weight, case, and spacing intentionally. Typography should carry part of the identity.

### Color and atmosphere

- Commit to a narrow palette with decisive accents.
- Avoid the common purple-gradient-on-white look.
- Build atmosphere with gradients, texture, shadows, patterns, transparency, or shape layers instead of flat blank backgrounds.

### Composition

- Prefer layouts with tension and rhythm over repetitive card grids by default.
- Use asymmetry, overlap, framing devices, diagonal movement, or deliberate negative space when appropriate.
- Break the grid carefully, not randomly.

### Motion

- Use a few noticeable, coordinated animations instead of many weak micro-interactions.
- Prioritize high-impact moments: page-load reveals, staggered entrances, scroll-triggered sections, and satisfying hover behavior.
- Prefer CSS-first motion for static sites and lightweight interfaces. Use the project's motion library when one is already present.

### Implementation quality

- Keep the UI accessible: semantic structure, keyboard access, contrast, reduced-motion consideration where needed.
- Respect the codebase conventions and existing component patterns.
- Do not introduce heavy dependencies for small visual gains.

## Anti-Patterns

Avoid:

- interchangeable SaaS layouts with generic hero, feature cards, and testimonial blocks
- timid palettes with evenly distributed colors and no focal point
- default font stacks that erase character
- adding visual noise without a concept
- copying trends that do not fit the task

## Output Expectations

When using this skill:

- produce working frontend code, not just design commentary
- explain the chosen aesthetic direction briefly
- keep implementation grounded in the project's stack and constraints
- verify responsive behavior when feasible

If the user asks only for ideas or direction, provide a concise concept and then move to implementation as soon as the path is clear.
