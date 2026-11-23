/**
 * 课程目录元数据（筛选 / 排序用）。正文在 courses/*.html。
 */
window.JUJI_XUETANG_COURSES = [
  {
    id: "muse-dots-agentmsgr",
    title: "个人常驻助手与跨助手群聊：Meta Muse、OpenAI Dots、AgentMsgr",
    summary:
      "三款定位不同：Muse 和 Dots 是跟你长期办事的一个个人助手，AgentMsgr 是把已有助手拉进同一条线程的群聊层。都做不到 Grok Bot 这种多机器人、@ 点名、拉群的完整交互。",
    tags: ["产品调研", "协作"],
    published: "2026-11-19",
    order: 1,
  },
  {
    id: "hermes-session-memory",
    title: "Hermes Agent：飞书与微信的会话记忆为什么不能互通",
    summary:
      "部署在阿里云的 Hermes，持久记忆工具可共用，但飞书和微信是两套独立会话历史。AgentMsgr 也拼不起这两个窗口的内部记忆。",
    tags: ["产品调研", "技术方案"],
    published: "2026-11-19",
    order: 2,
  },
  {
    id: "cc-switch-grok-bot",
    title: "CC Switch 接不进这套 Grok Bot",
    summary:
      "CC Switch 是给 Claude Code、Codex、Gemini CLI、Grok Build 管配置和自定义 API 的工具。这套 Grok Bot 应用没有对外的 OpenAI / Anthropic 兼容 API，不能当成后端接上去。",
    tags: ["使用教程"],
    published: "2026-11-19",
    order: 3,
  },
  {
    id: "grok-build-billing",
    title: "Grok Build 与 Grok Bot 是不是同一套用量",
    summary:
      "在当前 Cursor Pro+ 上，两者分账计量。SuperGrok 周限额不覆盖 Grok Bot；若后来换成 The X Subscription，Grok、Grok Bot 和 Cursor 会共用一个周池，但凭证仍不可互换。",
    tags: ["使用教程", "计费"],
    published: "2026-11-19",
    order: 4,
  },
  {
    id: "palantir-omcp-ontology",
    title: "Palantir OMCP 与本体问数：冻结契约、推理机与对象集",
    summary:
      "问数走业务库对象集，图数据库只校验已发布的 T-Box。推理机把术语落到 QueryIntent 并校验，通过后才调已发布的 Function / Logic / Action。对外是自家狭窄目录，不是直接说成 Palantir 产品。",
    tags: ["原理解析", "本体"],
    published: "2026-11-19",
    order: 5,
  },
  {
    id: "claude-for-manufacturing",
    title: "Claude for Manufacturing：插件能力与人审边界",
    summary:
      "Anthropic 2026 年 11 月 12 日推出的制造业插件：面向 Team / Enterprise，17 项技能、四个连接器，人工审核，不直接控设备。可借边界，不要期待 REA 整套复刻。",
    tags: ["产品调研", "制造业"],
    published: "2026-11-19",
    order: 6,
  },
  {
    id: "agentmsgr-grok-bot-setup",
    title: "用 AgentMsgr 把 Grok Bot 拉进跨助手群聊",
    summary:
      "用官方 MCP 地址加连接器，用 reply 工具回复，并建立 webhook 例行任务「AgentMsgr message check」。Grok Bot 不能把密钥交给 AgentMsgr，要把 POST to 链接和密钥贴进对方卡片。",
    tags: ["使用教程", "协作"],
    published: "2026-11-19",
    order: 7,
  },
  {
    id: "autoontology-ant-standard",
    title: "NVIDIA Auto Ontology 与蚂蚁的本体建模标准：工具和规范各自解决什么",
    summary:
      "英伟达 Auto Ontology 从库表生成可认证业务术语，再给智能体写 SQL。蚂蚁没有同名「本体建模标准」；最接近的是它牵头的 T/CCF 0008—2025，以及与 OpenKG 发布的 SPG 框架。一边是可部署工具，一边是建模规范。",
    tags: ["产品调研", "原理解析", "本体"],
    published: "2026-11-20",
    order: 8,
  },
  {
    id: "palantir-functions-aip-logic",
    title: "Palantir Functions 与 AIP Logic：代码函数和逻辑函数怎么分工",
    summary:
      "Foundry 里的 Functions 是用 TypeScript 或 Python 写的、在隔离环境里服务端执行的代码逻辑；AIP Logic 是无代码环境，用来编排可被平台当函数调用的「逻辑函数」。两者都能读本体，也能准备编辑，但真正改对象必须经过 Action。另外还有只读的 Query，以及用 SQL 定义的 Ontology SQL functions，不要和前两者混成一种东西。",
    tags: ["原理解析", "使用教程", "本体"],
    published: "2026-11-21",
    order: 9,
  },
  {
    id: "palantir-aip-insight",
    title: "Palantir AIP Insight：从自然语言提问到可检查的分析工作簿",
    summary:
      "官方正式名是 AIP Insight（单数）。它不是独立分析应用，而是内置于 Foundry Insight 的应用内助手（copilot）：用自然语言描述想探索的问题，由 AIP 查找相关本体数据并生成可检查、可修改、可保存的 Insight 工作簿。2026-11-19 发布说明称其对所有已启用 AIP 的 enrollment 可用，但目前仍处于 beta；表格、图表、地图布局需手工配置，interfaces 与 derived properties 尚不被该 copilot 支持。",
    tags: ["产品调研", "使用教程", "本体"],
    published: "2026-11-23",
    order: 10,
  },
];

window.JUJI_XUETANG_ALL_TAGS = [
  "产品调研",
  "使用教程",
  "原理解析",
  "技术方案",
  "协作",
  "计费",
  "本体",
  "制造业",
];
