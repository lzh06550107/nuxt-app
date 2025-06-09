---
title: "clearError"
description: "clearError 组合式函数清除所有已处理的错误。"
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/error.ts
    size: xs
---

在你的页面、组件和插件中，你可以使用 `clearError` 来清除所有错误并重定向用户。

**参数:**

- `options?: { redirect?: string }`

你可以提供一个可选的重定向路径（例如，如果你想导航到一个 “安全” 页面）。

```js
// Without redirect
clearError()

// With redirect
clearError({ redirect: '/homepage' })
```

错误使用 [`useError()`](/docs/api/composables/use-error) 设置在状态中。`clearError` 组合式函数将重置此状态，并使用提供的选项调用 `app:error:cleared` 钩子。

:read-more{to="/docs/getting-started/error-handling"}
