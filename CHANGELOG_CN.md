# 更新日志

本文件记录项目的所有重要变更。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)，
版本号遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [未发布]

## [1.1.1] - 2026-01-30

### 修复
- 修复 SPA hash 路由模式下 pathname 不更新的问题（如 `#/path` 或 `#!/path`）
- 添加 hashchange 事件监听以支持 hash 路由导航

### 变更
- 更新安装文档，添加 CSS 导入示例
- 在 README 中添加官方地址链接

## [1.1.0] - 2026-01-29

### 变更
- 用原生 TeleportToBody 组件替代 portal-vue
- 零运行时依赖 - 仅需要 Vue 2.6+
- 消除 Vue 2.7 兼容性警告（$attrs/$listeners readonly）
- 移除 portal-vue 减小打包体积（约 20KB）
- 用户无需再安装 portal-vue 或添加 portal-target

## [1.0.1] - 2026-01-29

### 修复
- 修复 SPA 路由导航时 pathname 不更新的问题
- 添加对 pushState/replaceState 和 popstate 事件的监听

## [1.0.0] - 2025-01-29

### 新增
- agentation-vue2 首次发布
- AI 编程代理的可视化反馈组件
- Vue 2 兼容版本，移植自 agentation-vue3
