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
