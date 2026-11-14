# 发布说明

在将公开仓库地址和 Pages 网址写入 `SITE_URL` 之前，先把当日 HTML 写到本目录的 `site/`。

发布步骤（仓库就绪后）：
1. 生成 `site/issues/ai-daily-briefing-YYYY-MM-DD.html`
2. 更新 `site/index.html`，首页即今日早报，底部或侧栏保留近期归档链接
3. 将 `site/` 发布到 GitHub Pages（或 SITE_URL 指定的静态托管）
4. 钉钉消息里带上当日页面的公开链接
5. 切勿把 `.secrets/` 或 webhook 地址推到仓库
