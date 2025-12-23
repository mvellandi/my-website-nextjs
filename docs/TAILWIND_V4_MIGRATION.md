# Tailwind CSS v4 Migration Plan

## Overview

This document covers the remaining high-risk migration to Tailwind CSS v4. This should be done on a separate branch after integrating the current dependency updates into main.

**Status**: Not started - waiting for current upgrades to be merged to main
**Recommended branch**: `tailwind-v4` (create from main after merge)
**Risk level**: 🔥 VERY HIGH RISK - Complete CSS framework rewrite

---

## Prerequisites

Before starting this migration, ensure the following updates are completed and merged to main:
- ✅ Next.js 16
- ✅ ESLint v9
- ✅ Sanity ecosystem updates
- ✅ @portabletext/react v6
- ✅ PostCSS dependencies updated

---

## Phase 7-Commit 10: Tailwind CSS v4 Migration

### Files Changed
- `package.json`
- `tailwind.config.js` (major rewrite or delete)
- `styles/tailwind.css` (create new or update existing)
- `postcss.config.js` (may need updates)
- `@tailwindcss/typography` plugin (check compatibility)
- `prettier-plugin-tailwindcss` to `^0.7.2`

### Actions

#### 1. Update Dependencies
```bash
npm install -D tailwindcss@^4.1.18
npm install -D @tailwindcss/typography@latest  # v4 compatible version
npm install -D prettier-plugin-tailwindcss@^0.7.2
npm install
```

#### 2. Migration Strategy - CSS-Based Configuration

Tailwind v4 uses CSS-based configuration instead of JavaScript config. The entire `tailwind.config.js` needs to be migrated to CSS using the `@theme` directive.

**Current tailwind.config.js customizations to migrate:**
- Custom breakpoints: `plg`, `lgtall`, `2k`, `2k3`
- Custom colors: purple palette (purple-25 through purple-950), gray palette
- Custom font weights: 350, 450, 550, 650, 750
- Custom spacing scale
- Custom typography variants
- Custom font families

**New structure** (`styles/tailwind.css` or dedicated theme file):
```css
@import "tailwindcss";

@theme {
  /* Custom Breakpoints */
  --breakpoint-plg: 450px;
  --breakpoint-lgtall: 1080px;
  --breakpoint-2k: 1920px;
  --breakpoint-2k3: 2304px;

  /* Custom Purple Palette */
  --color-purple-25: #fbf8fc;
  --color-purple-50: #f7f1f9;
  --color-purple-100: #ede3f3;
  --color-purple-200: #dbc7e7;
  --color-purple-300: #c9abdb;
  --color-purple-400: #b78fcf;
  --color-purple-500: #a573c3;
  --color-purple-600: #9357b7;
  --color-purple-700: #7a4797;
  --color-purple-800: #613777;
  --color-purple-900: #482757;
  --color-purple-950: #2f1737;

  /* Custom Gray Palette */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;

  /* Custom Font Weights */
  --font-weight-350: 350;
  --font-weight-450: 450;
  --font-weight-550: 550;
  --font-weight-650: 650;
  --font-weight-750: 750;

  /* Custom Spacing (if any) */
  /* Add custom spacing values here */

  /* Custom Font Families (if any) */
  /* Add custom font stacks here */
}
```

#### 3. Update Main CSS Import

Update `styles/app.css` to import the new Tailwind v4 CSS:
```css
@import "./tailwind.css";
/* Or if using inline @theme in app.css: */
@import "tailwindcss";
@theme {
  /* theme values here */
}
```

#### 4. Update postcss.config.js

Remove nesting plugin if nested @apply issues are resolved:
```javascript
module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},  // v4 has built-in nesting
    autoprefixer: {},
  },
}
```

**Note**: If nested @apply still causes issues, investigate refactoring CSS to avoid nested @apply or keep nesting plugin temporarily.

#### 5. Delete or Archive Old Config

```bash
mv tailwind.config.js tailwind.config.js.backup
# Or delete if migration successful
```

---

## Testing Strategy

### Automated Browser Inspection (via Puppeteer MCP)

Claude Code can autonomously verify:
- DOM structure for key pages
- Computed CSS styles match expectations
- Custom Tailwind classes render correctly
- Responsive behavior at all breakpoints

### Critical Visual Checks

**Custom Breakpoints** - Test at each viewport:
- `plg` (450px)
- `sm` (640px)
- `md` (768px)
- `lg` (1024px)
- `lgtall` (1080px)
- `xl` (1280px)
- `2xl` (1536px)
- `2k` (1920px)
- `2k3` (2304px)

**Custom Color Palette**:
- Purple palette (purple-25 through purple-950)
- Gray palette
- Verify all color values render correctly

**Custom Font Weights**:
- 350, 450, 550, 650, 750
- Verify font-weight CSS properties

**Custom Spacing**:
- Verify spacing scale works correctly

**Typography Plugin**:
- `prose` classes work
- `prose-lg`, `prose-xl` variants
- Custom typography styles

**Components to Test**:
- Navigation (responsive behavior)
- Hero section
- Card components
- Article bodies (typography)
- Project galleries
- Footer

### Manual Visual Testing

Use Tidewave Web/Desktop app for human inspection:
- Compare before/after screenshots
- Verify visual consistency
- Check for any regressions

---

## Build & Runtime Checks

```bash
# Build must succeed
npm run build

# Dev server starts
npm run dev

# No console errors
# No CSS warnings
```

---

## Rollback Strategy

If migration fails or has issues:
```bash
# Revert to previous commit
git reset --hard HEAD~1

# Or checkout main
git checkout main

# Restore packages
npm install
```

---

## Known Issues & Considerations

### Nested @apply with prose Classes

**Current issue**: Some CSS files use nested selectors with `@apply prose-lg`, which Tailwind v3 doesn't support without the nesting plugin.

**Files affected**:
- `styles/pages/article.css:30`
- `styles/site/typography.css:15`

**Solutions**:
1. **Refactor CSS** - Flatten selectors to avoid nesting
2. **Keep nesting plugin** - Tailwind v4 may still support it
3. **Use Tailwind classes directly** - Replace @apply with utility classes

### Typography Plugin Compatibility

The `@tailwindcss/typography` plugin needs a v4-compatible version. Check npm for latest version that supports Tailwind v4.

### Prettier Plugin

Update `prettier-plugin-tailwindcss` to v0.7.2 for Tailwind v4 compatibility.

---

## Post-Migration Validation

After successful migration:

1. **Full Build Test**
   ```bash
   npm run build
   npm start
   ```

2. **Visual Regression Testing**
   - Test all pages on multiple screen sizes
   - Verify all custom breakpoints work
   - Check color consistency
   - Verify typography renders correctly

3. **Content Validation**
   - Test all article pages
   - Test all project pages
   - Test all demo pages
   - Verify images, rich text, and galleries

4. **Performance Check**
   - Check build times
   - Check bundle sizes
   - Test page load speeds

5. **Development Experience**
   - Test hot reload
   - Test Tailwind IntelliSense
   - Verify CSS autocomplete works

---

## Commit Message Template

```
chore: migrate to Tailwind CSS v4

BREAKING: Complete config migration from JS to CSS.
Migrate all custom theme values to @theme directive.
Update typography and prettier plugins for v4 compatibility.

Changes:
- Update tailwindcss to v4.1.18
- Update @tailwindcss/typography to v4 compatible version
- Update prettier-plugin-tailwindcss to v0.7.2
- Migrate tailwind.config.js to CSS @theme directive
- [Update/Remove] PostCSS nesting plugin
- Test all custom breakpoints, colors, and typography

All visual tests passing. No regressions detected.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

---

## Additional Resources

- [Tailwind v4 Documentation](https://tailwindcss.com/docs)
- [Tailwind v4 Migration Guide](https://tailwindcss.com/docs/upgrade-guide)
- [CSS @theme Directive](https://tailwindcss.com/docs/adding-custom-styles#using-css-theme)
- [Tailwind v4 Release Notes](https://tailwindcss.com/blog)
