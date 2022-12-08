# Day 1

This is experimental. Don't assume prod behavior but still learning next. I like that experimental features are opt-in though:

`npx create-next-app@latest --experimental-app`

- name the repo after this command
- opted out of ts
- opted into eslint

```
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
warn  - You have enabled experimental feature (appDir) in next.config.js.
warn  - Experimental features are not covered by semver, and may cause unexpected or broken application behavior. Use at your own risk.
info  - Thank you for testing `appDir` please leave your feedback at https://nextjs.link/app-feedback
```

`app` directory requires node 16.

# Day 2

Interesting that co-location is the top feature. This seems to be one of the many back-and-forth trends.

> The idea is straight forward. Any file in the /pages directory becomes a page in the app.
>
> But this poses a problem. You can't easy co-locate supporting modules in the /pages directory.

Looks like it's framed as trying to reduce magic via [explicit programming](https://www.cloudbees.com/blog/what-is-the-difference-between-implicit-vs-explicit-programming). This feels like a departure from the rails conventions that are seen as a benefit.

# Day 3

Cool that the pages are by default on the server as server components. But surprisingly, this console did not show up in the turborepo console using `next dev --turbo`.

Surprising that the `log` using `"use client"` is showing up in the server and the client console. I thought the server console would then be empty.

I like that it shows incremental compiles `wait  - compiling /about/page (client and server)...`.

react server components limits (via [react rfc](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md#capabilities--constraints-of-server-and-client-components)):

> ❌ May not use state, because they execute (conceptually) only once per request, on the server. So useState() and useReducer() are > not supported.
> ❌ May not use rendering lifecycle (effects). So useEffect() and useLayoutEffect() are not supported.
> ❌ May not use browser-only APIs such as the DOM (unless you polyfill them on the server).
> ❌ May not use custom hooks that depend on state or effects, or utility functions that depend on browser-only APIs.
> ✅ May use async / await with server-only data sources such as databases, internal (micro)services, filesystems, etc.
> ✅ May render other Server Components, native elements (div, span, etc), or Client Components.
> Server Hooks/Utilities: Developers may also create custom hooks or utility libraries that are designed for the server. All of the rules for Server Components apply. For example, one use-case for server hooks is to provide helpers for accessing server-side data sources.
