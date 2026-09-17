# 部署器界面预览

下面 4 张图片来自 TG115 的交互式 UI 设计稿，对应当前部署器的四个核心页面。预览版本已同步为 **v1.6.2**。

::: info 关于这些图片
这些是根据此前的 `TG115_UI_Preview.html` 生成的界面预览，用于文档展示和 UI 审阅，不连接 VPS、不执行远程操作，也不是原生 Qt 实机截图。正式 Qt 程序在字体、系统控件渲染等细节上可能略有差异。
:::

## 1. 连接 VPS

![TG115 连接 VPS 页面预览](/images/deployer-vps.png)

这里集中配置：

- VPS 主机地址与 SSH 端口；
- SSH 用户名；
- 密码或 SSH 密钥认证；
- 可选 sudo 密码；
- 测试 SSH 与 VPS 资源预检。

## 2. Telegram

![TG115 Telegram 页面预览](/images/deployer-telegram.png)

这里填写：

- Bot Token；
- Telegram API ID；
- Telegram API Hash；
- 允许使用 Bot 的个人 Telegram 数字 ID。

预览中的敏感字段均为空，不包含任何真实凭据。

## 3. CloudDrive2 / 115

![TG115 CloudDrive2 / 115 页面预览](/images/deployer-clouddrive.png)

这里配置：

- WebDAV 地址；
- WebDAV 用户名与密码；
- WebDAV 根目录后的可选子目录。

部署器托管 CloudDrive2 时，默认使用 Docker 内网地址 `http://clouddrive2:19798/dav`。

## 4. 部署选项

![TG115 部署选项页面预览](/images/deployer-options.png)

这里主要管理：

- 是否由 VPS 托管 CloudDrive2；
- 安装目录；
- 时区；
- 本地任务预算；
- 磁盘最少保留空间；
- VPS 资源检测与实例级建议。

## 运行时界面为什么没有放截图？

SSH 主机指纹确认、实际部署进度、部署成功状态以及 CloudDrive2 浏览器管理页都属于真实运行时界面。此前的交互式 UI 设计稿没有模拟这些状态，因此这里不使用伪造截图。相关操作步骤仍在 [从零部署教程](/deployment/from-zero) 中完整说明。

如果未来加入真实运行截图，发布前应遮挡 VPS 地址、密码、SSH 私钥、Bot Token、API Hash、WebDAV 凭据、115 / CloudDrive2 登录信息等敏感内容。
