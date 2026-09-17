# 下载 TG115

当前文档对应稳定版 **v1.6.2**。

<div class="tg115-download-panel">
  <div>
    <strong>TG115 v1.6.2</strong>
    <p>Windows 图形化一键部署器 + 完整项目源代码。</p>
  </div>
  <a class="tg115-btn primary" href="https://github.com/LuoPoJunZi/TG115/releases/latest" target="_blank" rel="noreferrer">前往 GitHub Releases 下载</a>
</div>

## 推荐下载方式

请从项目正式 GitHub Releases 获取发布文件：

**[打开最新 Release](https://github.com/LuoPoJunZi/TG115/releases/latest)**

不要从来历不明的网盘、聊天附件或二次打包站点下载部署器。

## v1.6.2 部署器

当前文档使用的文件名：

```text
TG115-Deployer-v1.6.2.exe
```

下载后应同时获取 `SHA256SUMS.txt` 并校验。

## Windows 校验命令

PowerShell：

```powershell
Get-FileHash .\TG115-Deployer-v1.6.2.exe -Algorithm SHA256
```

将输出哈希与 Release 中的 `SHA256SUMS.txt` 核对一致后再运行。

## 为什么不直接在文档站托管 EXE？

文档站只负责说明与导航，二进制文件统一通过 GitHub Releases 发布，便于：

- 明确版本来源；
- 集中展示 Release Notes；
- 配合 SHA-256 校验；
- 避免文档站缓存旧版本；
- 后续版本升级时只更新 Release，无需复制多份安装文件。
