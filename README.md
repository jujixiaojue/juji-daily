# 狙击日报

给 Agent / 本体中台项目同事看的 AI 每日早报站点。

- 每日页面：`site/issues/ai-daily-briefing-YYYY-MM-DD.html`
- 首页：`site/index.html`（展示当日早报，并列出历史归档）
- 钉钉 webhook 存在 `.secrets/dingtalk_webhook_url`，不要提交到仓库
- 公开地址写在 `SITE_URL`（发布成功后填写，一行，不要提交密钥）

工作日早上由「狙击日报」定时任务自动更新。
