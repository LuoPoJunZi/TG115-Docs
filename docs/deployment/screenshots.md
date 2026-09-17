# 部署器截图说明

文档站已经预留 4 个部署截图位置。当前使用统一风格占位图，正式发布前可直接替换为真实截图。

## 需要准备的截图

### 1. 部署器主界面

![部署器主界面截图位置](/images/deployer-main.svg)

建议展示 VPS、Telegram、CloudDrive2/WebDAV 三个主要配置区，以及底部操作按钮。

### 2. SSH 主机指纹确认

![SSH 指纹截图位置](/images/ssh-fingerprint.svg)

建议展示“首次连接 → 查看主机指纹 → 确认”的安全步骤。

### 3. 部署成功与健康检查

![部署完成截图位置](/images/deployment-success.svg)

建议展示部署完成、Bot 健康状态、CloudDrive2 状态等关键信息。

### 4. CloudDrive2 管理页

![CloudDrive2 管理页截图位置](/images/clouddrive2-tunnel.svg)

建议展示通过 `127.0.0.1:随机端口` 打开的管理页，不要展示任何登录凭据或个人网盘内容。

## 正式截图的安全要求

截图前必须遮挡：

- VPS IP / 域名（如果不希望公开）；
- VPS 密码、SSH 私钥内容、私钥口令；
- Bot Token；
- API Hash；
- WebDAV 用户名与密码；
- 115 / CloudDrive2 登录信息；
- 任何可识别个人账号的信息。

## 替换方法

最简单的做法是把真实截图放到：

```text
docs/public/images/
```

例如：

```text
deployer-main.png
ssh-fingerprint.png
deployment-success.png
clouddrive2-tunnel.png
```

然后把对应 Markdown 中的：

```markdown
/images/deployer-main.svg
```

改成：

```markdown
/images/deployer-main.png
```

即可。
