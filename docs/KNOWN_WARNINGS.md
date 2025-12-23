# Known Warnings & Advisories

This document tracks known warnings that appear during build/runtime and provides context on whether they need to be addressed.

Last updated: 2025-12-23

---

## Build Warnings

### 1. Next.js Workspace Root Warning

**Warning:**
```
⚠ Warning: Next.js inferred your workspace root, but it may not be correct.
We detected multiple lockfiles and selected the directory of /Users/mvellandi/pnpm-lock.yaml as the root directory.
```

**Status:** ⚠️ Can be ignored (informational)

**Cause:** Parent directory contains a pnpm-lock.yaml file, while this project uses npm (package-lock.json)

**Impact:** None - Next.js correctly uses the project's package-lock.json

**Fix (optional):**
Add to `next.config.js`:
```javascript
turbopack: {
  root: process.cwd()
}
```

---

### 2. Middleware Deprecation Warning

**Warning:**
```
⚠ The "middleware" file convention is deprecated. Please use "proxy" instead.
Learn more: https://nextjs.org/docs/messages/middleware-to-proxy
```

**Status:** ⚠️ Low priority - will migrate in future

**Cause:** Next.js 16 introduced new "proxy" pattern to replace middleware

**Current file:** `middleware.ts` (used for Tidewave routing)

**Impact:** Still works in Next.js 16, but may be removed in future versions

**Fix (when needed):**
Migrate `middleware.ts` to new proxy pattern per Next.js 16 documentation

---

### 3. @sanity/image-url Default Export Deprecation

**Warning:**
```
The default export of @sanity/image-url has been deprecated.
Use the named export `createImageUrlBuilder` instead.
```

**Status:** ✅ Already fixed in our code

**Our code:** Already uses named import in `lib/sanity.js`:
```javascript
import createImageUrlBuilder from '@sanity/image-url'
```

**Cause:** Warning likely comes from internal Sanity package dependencies, not our code

**Impact:** None on our codebase

**Fix:** No action needed - already using correct import pattern

---

### 4. Invalid href Warnings

**Warning:**
```
Invalid href 'https://web.archive.org/web/20140131144207/http://www.sustainablebrands.com/user/11083#'
passed to next/router in page: '/projects/[slug]'.
Repeated forward-slashes (//) or backslashes \ are not valid in the href.
```

**Status:** ⚠️ Data issue - low priority

**Cause:** Legacy project data contains web archive URLs with embedded URLs (double `//` after http:)

**Affected projects:** Sustainable Brands related projects

**Impact:** Links work correctly in browsers, warning is cosmetic

**Fix (optional):**
Update Sanity CMS data to escape or modify these URLs, or suppress this specific warning in Next.js config

---

## Runtime Warnings

None currently

---

## Vulnerability Audit

**Current status:** ✅ 0 vulnerabilities (as of last `npm install`)

**Previous vulnerabilities:** 14 (7 moderate, 7 high) - resolved by dependency updates

---

## Actionable Items

### Immediate (before merging to main)
- None

### Low Priority (future branches)
1. Migrate `middleware.ts` to proxy pattern (when time permits)
2. Clean up web archive URLs in Sanity CMS data (data quality improvement)
3. Optionally add `turbopack.root` to next.config.js to suppress workspace warning

### Deferred (separate branches)
1. Tailwind v4 migration - see `TAILWIND_V4_MIGRATION.md`

---

## Next.js Config Recommendations

Optional additions to `next.config.js` to suppress informational warnings:

```javascript
const nextConfig = {
  // Suppress workspace root warning
  turbopack: {
    root: process.cwd()
  },

  // Current config remains unchanged
  reactStrictMode: true,
  // ... other settings
}

module.exports = nextConfig
```

---

## Update History

- **2025-12-23**: Initial documentation after completing dependency upgrades
  - Next.js 15 → 16
  - ESLint 8 → 9
  - Sanity ecosystem updates
  - @portabletext/react 3 → 6
  - All vulnerabilities resolved
