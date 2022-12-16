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

# Day 4

Looks like handling the head of the page has been considered. Definitely wish this existed at previous jobs.

Can construct the header on the server-side via a `head.jsx` file.

The `head.jsx` is relative to the directory with the `page.jsx` file.

Good to keep in mind:

> head.js should return a React fragment component and not a wrapping <head> tag.
> head.js should only return to the following tags: <title>, <meta>, <link> (with the precedence attribute) or <script> (with the async attribute). Learn more about the supported head tags

It's helpful that there's shared info: https://beta.nextjs.org/docs/api-reference/file-conventions/head#sharing-tags-across-multiple-routes

> Nested head.js files do not inherit or merge tags from head.js files higher up in the tree. This means, if a tag is not returned in the currently selected head.js file, it will not be rendered in the document's <head> element.

# Day 5

Calling out big templates in ember ha:

> As an app becomes more complex, layout files find one of two popular anti-patterns:
>
> - A single structure with lots of conditional statements
> - Lots of files duplicating a single (mostly similar) structure

`layout.jsx` renders around their nested `page.jsx` file, and subsequent `page.jsx` files can be nested.

# Day 6

Route groups are cosmetic organization rather than by url using parenthesis. But they can also be used to share layouts between routes.

Good to not mess-up (docs)[https://beta.nextjs.org/docs/routing/defining-routes#example-creating-multiple-root-layouts]:

> Routes inside route groups should not resolve to the same URL path. For example, since route groups don't affect URL structure, (marketing)/about/page.js and (shop)/about/page.js would both resolve to /about and cause an error.

Kind of trippy to share layouts by route groups rather than by specific routes. In this way, I guess you can theme the app by route group and reduce duplication.

# Day 7

Summary video: https://www.youtube.com/watch?v=zdyftlnWm-E

Good summary of what's done before as a catch-up on `head.jsx`, `page.jsx`, `layout.jsx`, and `(route-groups)`. Also, talked about the difference between server and client components. All of these conventions are within the experimental `app` directory.

Also, didn't realize in vs code that you can write a nested page with its folder name: `folder-name/page-name.jsx`.

# Day 8

Interesting, looks like a fetch component that can be called directly on the server.

Looks fairly isolated to test. Cool. So only absolute urls are allowed. Initially I thought it was because the client could resolve the relative url.

In the default page, there's an pages/api/hello.js that gets automatically updated.

https://beta.nextjs.org/docs/data-fetching/fundamentals

# Day 9

Right, the bane of existence of react dev existence: `isLoading`.

> there's a new, special file named loading.jsx.

Lol you can actually slow down the whole page:

```js
// process the loading state
await new Promise((resolve) => setTimeout(resolve, 1000));
```

Nice, didn't need to setup suspense or lots of wrapping.

# Day 10

Errors! Looks like there's a new `error.jsx` file that can be used to customize the error page for that particular route. Needs to be client-side.

Nice, in next, you get a popup for an error too in the bottom right I assume in dev mode.

Useful site for testing: https://httpstat.us/

# Day 11

You can log out more information than just `digest` hash of the error message with useEffect: https://beta.nextjs.org/docs/routing/error-handling#handling-server-errors

The reset param taken into the error component by default is useful.

# Day 12
