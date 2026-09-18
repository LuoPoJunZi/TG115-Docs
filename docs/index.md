---
layout: home

title: TG115
titleTemplate: Telegram → 115 自托管文件转存

hero:
  name: TG115
  text: Telegram → 115 自托管文件转存
  tagline: 把文件转发给自己的 Telegram Bot，由 VPS 自动排队、下载，并通过 CloudDrive2 WebDAV 写入你自己的 115 网盘。
  image:
    src: /tg115-logo.png
    alt: TG115 Logo
  actions:
    - theme: brand
      text: 从零开始部署
      link: /deployment/from-zero
    - theme: alt
      text: 下载 v1.6.2
      link: https://github.com/LuoPoJunZi/TG115/releases/latest
    - theme: alt
      text: GitHub
      link: https://github.com/LuoPoJunZi/TG115

features:
  - icon: 🖥️
    title: Windows 图形化部署
    details: 通过一键部署器检查 VPS、安装环境、部署 Bot，并完成基础健康检查。
  - icon: 📥
    title: SQLite 持久化队列
    details: 任务写入持久化队列，服务重启后可以继续处理未完成任务。
  - icon: 🚀
    title: 大文件流式传输
    details: 单文件超过本地任务预算时，自动切换 Telegram → rclone → CloudDrive2 流式路径。
  - icon: 📊
    title: 动态资源调度
    details: 根据 CPU、内存、磁盘、网络和目的端状态动态控制任务放行与传输。
  - icon: 🛡️
    title: 个人自托管安全边界
    details: 仅允许配置的 Telegram 数字 ID 使用；CloudDrive2 管理页通过 SSH 隧道访问。
  - icon: ✅
    title: 明确的完成状态
    details: “Bot 完成”只代表 CloudDrive2 已接收并通过大小复验；115 官方端仍由用户按需核验。
---

<div class="tg115-release-card">
  <div>
    <span class="tg115-release-badge">当前稳定版</span>
    <h2>v1.6.2</h2>
    <p>推荐通过 GitHub Releases 下载部署器，并使用 <code>SHA256SUMS.txt</code> 校验文件完整性。</p>
  </div>
  <div class="tg115-release-actions">
    <a class="tg115-btn primary" href="https://github.com/LuoPoJunZi/TG115/releases/latest" target="_blank" rel="noreferrer">下载最新 Release</a>
    <a class="tg115-btn" href="/reference/changelog">查看更新日志</a>
  </div>
</div>

## 5 分钟了解 TG115

<div class="tg115-flow">
  <div><b>1</b><span>Telegram</span><small>转发文件给私人 Bot</small></div>
  <i>→</i>
  <div><b>2</b><span>VPS</span><small>排队、下载或流式传输</small></div>
  <i>→</i>
  <div><b>3</b><span>CloudDrive2</span><small>通过 WebDAV 写入</small></div>
  <i>→</i>
  <div><b>4</b><span>115</span><small>官方客户端最终核验</small></div>
</div>

## 推荐阅读路径

第一次部署建议按下面顺序阅读：

1. [部署前准备](/guide/prerequisites) —— 准备 VPS、Telegram、CloudDrive2 和 115；
2. [从零部署完整教程](/deployment/from-zero) —— 从下载部署器到第一次成功转存；
3. [文件转存流程](/usage/workflow) —— 理解普通模式与大文件流式模式；
4. [FAQ](/faq/) —— 遇到排队、SSH、FUSE、WebDAV 等问题时快速定位。

::: warning 使用前请注意
TG115 是个人自托管工具。请只转存你有权保存和使用的内容，并遵守相关平台条款与所在地法律法规。不要在 Issue、截图、群聊或公开页面中暴露 VPS 密码、SSH 私钥、Bot Token、Telegram API Hash、WebDAV 密码等敏感信息。
:::

TG115 当前不自动监听频道，也不批量抓取频道历史。本项目是在 [whyhhh20/TG115](https://github.com/whyhhh20/TG115) 基础上的二次开发版本，详见 [项目介绍](/guide/introduction)。
