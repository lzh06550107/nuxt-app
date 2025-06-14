---
title: DashboardToolbar
description: 一个用于在仪表盘导航栏下方显示的工具栏。
category: layout
module: ui-pro
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui-pro/tree/v3/src/runtime/components/DashboardToolbar.vue
---

## 用法 (Usage)

**`DashboardToolbar`** 组件用于在 **`DashboardNavbar`** 组件下方显示一个工具栏。

在 `DashboardPanel` 组件的 `header` 插槽中使用它：

```vue{9-13} [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar />

      <UDashboardToolbar />
    </template>
  </UDashboardPanel>
</template>
```

使用 `left`、`default` 和 `right` 插槽来自定义工具栏。

::component-example
---
name: 'dashboard-toolbar-example'
class: '!px-0 !pt-0'
collapse: true
props:
  class: 'w-full'
---
::

::note
在此示例中，我们使用 **`NavigationMenu`** 组件来渲染一些链接。
::

## API

### 属性 (Props)

:component-props

### Slots

:component-slots

## 主题 (Theme)

:component-theme{pro=true}
