# CloudDrive2 与 115

TG115 通过 CloudDrive2 提供的 WebDAV 接口将文件写入已挂载的 115 网盘。

## 推荐流程

1. 完成 TG115 基础环境部署；
2. 从部署器打开 CloudDrive2 管理页；
3. 登录 CloudDrive2；
4. 添加并登录 115；
5. 确认可以浏览 115 文件；
6. 开启 WebDAV；
7. 回到部署器执行真实写入验收。

## 为什么通过 SSH 隧道访问

管理页没有必要直接暴露到公网。推荐让 CloudDrive2 端口只监听 VPS 本地地址，再通过 SSH 隧道从你的 Windows 电脑访问。

## WebDAV 验收代表什么

验收通过说明 TG115 能通过 rclone 向 CloudDrive2 WebDAV 写入文件并完成基本远端检查。

它不等价于“115 官方端已经完成最终落盘”。最终状态仍建议在 115 官方客户端核对。
