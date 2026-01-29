import Vue from 'vue'

// Locale messages
const messages = {
  en: {
    // Navigation
    'nav.overview': 'Overview',
    'nav.install': 'Install',
    'nav.features': 'Features',
    'nav.output': 'Output',
    'nav.api': 'API',
    'nav.changelog': 'Changelog',
    'nav.faq': 'FAQ',
    'nav.new': 'New',

    // Index page
    'index.title': 'Overview',
    'index.tagline': 'Point at problems, not code',
    'index.madeBy': 'Made by',
    'index.forkedFrom': ', forked from',
    'index.and': 'and',
    'index.reactVersion': "'s React version",
    'index.originalReactVersion': 'Original React Version:',
    'index.description1': 'Agentation (agent + annotation) is a dev tool that lets you annotate elements on your webpage and generate structured feedback for AI coding agents.',
    'index.description2': "Click elements, select text, add notes, and paste the output into Claude Code, Cursor, or any agent that has access to your codebase. It's fully agent-agnostic, so the markdown output works with any AI tool. Zero dependencies beyond Vue.",
    'index.description3': 'The key insight: agents can find and fix code much faster when they know exactly which element you\'re referring to. Agentation captures class names, selectors, and positions so the agent can locate the corresponding source files.',
    'index.description4': 'It grew out of',
    'index.aPostBy': 'a post by Benji Taylor',
    'index.exploring': 'exploring how to give better feedback to AI coding agents.',

    // Quick start
    'quickStart.title': 'Quick start',
    'quickStart.step1': 'Click the icon in the bottom-right corner to activate',
    'quickStart.step2Hover': 'Hover',
    'quickStart.step2Text': 'over elements to see their names highlighted',
    'quickStart.step3Click': 'Click',
    'quickStart.step3Text': 'any element to add an annotation',
    'quickStart.step4': 'Write your feedback and click',
    'quickStart.step4Add': 'Add',
    'quickStart.step5': 'Click',
    'quickStart.step5Text': 'to copy formatted markdown',
    'quickStart.step6': 'Paste into your agent',

    // How it works
    'howItWorks.title': 'How it works with agents',
    'howItWorks.intro': 'Agentation works best with AI tools that have access to your codebase (Claude Code, Cursor, Windsurf, etc.):',
    'howItWorks.step1': 'You see a bug or want a change in your running app',
    'howItWorks.step2': 'Use Agentation to annotate the element with your feedback',
    'howItWorks.step3': 'Copy the output and paste it into your agent',
    'howItWorks.step4': 'The agent uses the class names and selectors to',
    'howItWorks.step4Bold': 'search your codebase',
    'howItWorks.step5': 'It finds the relevant component/file and makes the fix',
    'howItWorks.without': 'Without Agentation, you\'d have to describe the element ("the blue button in the sidebar") and hope the agent guesses right. With Agentation, you give it',
    'howItWorks.andItCan': 'and it can grep for that directly.',

    // Try it
    'tryIt.title': 'Try it',
    'tryIt.intro': 'The toolbar is active on this page. Try annotating these demo elements:',
    'tryIt.primaryButton': 'Primary Button',
    'tryIt.secondaryButton': 'Secondary Button',
    'tryIt.inputPlaceholder': 'Try selecting this text...',
    'tryIt.cardTitle': 'Example Card',
    'tryIt.cardText': 'Click on this card or select this text to create an annotation. The output will include the element path and your feedback.',

    // Animation demo
    'animationDemo.title': 'Animation pause demo',
    'animationDemo.intro': 'Click',
    'animationDemo.introEnd': 'in the toolbar to freeze this animation:',

    // Best practices
    'bestPractices.title': 'Best practices',
    'bestPractices.specific': 'Be specific',
    'bestPractices.specificDesc': '— "Button text unclear" is better than "fix this"',
    'bestPractices.oneIssue': 'One issue per annotation',
    'bestPractices.oneIssueDesc': '— easier for the agent to address individually',
    'bestPractices.includeContext': 'Include context',
    'bestPractices.includeContextDesc': '— mention what you expected vs. what you see',
    'bestPractices.useTextSelection': 'Use text selection',
    'bestPractices.useTextSelectionDesc': '— for typos or content issues, select the exact text',
    'bestPractices.pauseAnimations': 'Pause animations',
    'bestPractices.pauseAnimationsDesc': '— to annotate a specific animation frame',

    // Language selector
    'language': 'Language',
    'language.en': 'English',
    'language.zh': '中文',

    // Install page
    'install.title': 'Installation',
    'install.tagline': 'Get started with Agentation in your project',
    'install.installPackage': 'Install the package',
    'install.orUse': 'Or use yarn, pnpm, or bun.',
    'install.addToApp': 'Add to your app',
    'install.addToAppDesc': 'Add the component anywhere in your Vue app, ideally at the root level. The',
    'install.addToAppDesc2': 'check ensures it only loads in development.',
    'install.nuxt2': 'Nuxt 2',
    'install.nuxt2Desc': 'For Nuxt 2, add the component to your',
    'install.nuxt2Desc2': 'or layout:',
    'install.nuxt2Css': "Don't forget to add the CSS in your",
    'install.requirements': 'Requirements',
    'install.reqVue': 'Vue 2.6+',
    'install.reqVueDesc': '— Uses Vue 2 Options API',
    'install.reqClient': 'Client-side only',
    'install.reqClientDesc': '— Requires DOM access',
    'install.reqDesktop': 'Desktop only',
    'install.reqDesktopDesc': '— Not optimized for mobile devices',
    'install.reqZero': 'Zero dependencies',
    'install.reqZeroDesc': '— Only requires portal-vue',
    'install.props': 'Props',
    'install.propsDesc': 'The',
    'install.propsDesc2': 'component accepts optional props for programmatic integration:',
    'install.propEvent': 'Event fired when an annotation is added',
    'install.propCopyDesc': 'Whether to copy to clipboard (default:',
    'install.programmatic': 'Programmatic integration',
    'install.programmaticDesc': 'Use the',
    'install.programmaticDesc2': 'event to receive structured annotation data directly. See the',
    'install.programmaticDesc3': 'for all available events.',
    'install.security': 'Security notes',
    'install.securityDesc': 'Agentation runs in your browser and reads DOM content to generate feedback. It does',
    'install.securityNot': 'not',
    'install.securityDesc2': 'send data anywhere — everything stays local until you manually copy and paste.',
    'install.secNoNetwork': 'No network requests',
    'install.secNoNetworkDesc': '— all processing is client-side',
    'install.secNoData': 'No data collection',
    'install.secNoDataDesc': '— nothing is tracked or stored remotely',
    'install.secDevOnly': 'Dev-only',
    'install.secDevOnlyDesc': '— use the',
    'install.secDevOnlyDesc2': 'check to exclude from production',

    // Features page
    'features.title': 'Features',
    'features.tagline': 'Everything Agentation can do',
    'features.annotationModes': 'Annotation modes',
    'features.annotationModesDesc': 'Click the tabs below to see examples of each annotation mode:',
    'features.toolbarControls': 'Toolbar controls',
    'features.pause': 'Pause',
    'features.pauseDesc': 'Freeze CSS animations to annotate specific states',
    'features.visibility': 'Visibility',
    'features.visibilityDesc': 'Toggle annotation markers on/off while working',
    'features.copy': 'Copy',
    'features.copyDesc': 'Get structured markdown for AI agents',
    'features.clear': 'Clear',
    'features.clearDesc': 'Remove all annotations',
    'features.settings': 'Settings',
    'features.settingsDesc': 'Configure output detail, marker color, and behavior',
    'features.toolbarTip': 'Drag the toolbar to reposition it. Click a marker to remove it, or right-click to edit.',
    'features.markerTypes': 'Marker types',
    'features.markerTypesDesc': 'Different annotation modes use different marker styles.',
    'features.smartId': 'Smart identification',
    'features.smartIdDesc': "Agentation automatically identifies elements in a way that's useful for code search. This makes it easy for agents to",
    'features.smartIdDesc2': 'for the exact element in your codebase.',
    'features.computedStyles': 'Computed styles',
    'features.computedStylesDesc': 'View the computed CSS styles for any element directly in the annotation popup. Expand the collapsible section to see relevant properties like colors, fonts, and spacing.',
    'features.keyboardShortcuts': 'Keyboard shortcuts',
    'features.shortcutToggle': 'Toggle feedback mode',
    'features.shortcutClose': 'Close toolbar or cancel',
    'features.shortcutPause': 'Pause/resume animations',
    'features.shortcutHide': 'Hide/show markers',
    'features.shortcutCopy': 'Copy feedback',
    'features.shortcutClear': 'Clear all annotations',
    'features.shortcutNote': 'Shortcuts are disabled when typing in an input field.',
    'features.settingsSection': 'Settings',
    'features.settingsDesc2': 'icon lets you customize Agentation to fit your workflow.',
    'features.limitations': 'Limitations',
    'features.limDesktop': 'Desktop only',
    'features.limDesktopDesc': '— The tool requires a desktop browser, but you can still request mobile changes in your feedback',
    'features.limStorage': 'Per-page storage',
    'features.limStorageDesc': '— Annotations persist in localStorage for 7 days',
    'features.limSingle': 'Single page',
    'features.limSingleDesc': "— Annotations don't follow across navigation",
    'features.limStatic': 'Static positions',
    'features.limStaticDesc': "— Markers don't update if layout changes",
    'features.limNoScreenshot': 'No screenshots',
    'features.limNoScreenshotDesc': '— Output is text-only (paste alongside screenshots if needed)',
    'features.limCssOnly': 'CSS animations only',
    'features.limCssOnlyDesc': '— Pause works on CSS animations, not JS-driven animations (framer-motion, GSAP, etc.)',
    'features.limVue': 'Vue 2 only',
    'features.limVueDesc': '— Currently requires Vue 2.6+',

    // Features Demo
    'featuresDemo.text': 'Text',
    'featuresDemo.textCaption': 'Select text to annotate typos, content issues, or copy changes.\nThe quoted text is included in the output.',
    'featuresDemo.elements': 'Elements',
    'featuresDemo.elementsCaption': 'Click any element to add feedback.\nAgentation identifies it by class name, ID, or semantic content.',
    'featuresDemo.multiSelect': 'Multi-Select',
    'featuresDemo.multiSelectCaption': 'Drag to select multiple elements at once.\nAll selected elements are included in a single annotation.',
    'featuresDemo.area': 'Area',
    'featuresDemo.areaCaption': 'Drag to select any region, even empty space.\nUseful for layout feedback or indicating where something should go.',
    'featuresDemo.animation': 'Animation',
    'featuresDemo.animationCaption': 'Freeze CSS animations to annotate specific states.\nClick pause in the toolbar to stop all animations.',

    // Marker Key Demo
    'markerKeyDemo.single': 'Single element or text selection',
    'markerKeyDemo.multi': 'Multi-select or area (always green)',

    // Smart Identification Demo
    'smartIdDemo.buttonCaption': 'Buttons and links are named by their text content.',
    'smartIdDemo.linkCaption': 'Buttons and links are named by their text content.',
    'smartIdDemo.headingCaption': 'Headings are identified by their content.',
    'smartIdDemo.imageCaption': 'Images use alt text or src filename.',
    'smartIdDemo.inputCaption': 'Inputs use labels or placeholder text.',
    'smartIdDemo.cardCaption': 'Other elements use class names or IDs.',

    // Computed Styles Demo
    'computedStylesDemo.caption': 'Click the chevron to expand computed CSS styles for the selected element.\nUseful for debugging styling issues or communicating design specs.',

    // Settings Demo
    'settingsDemo.outputCaption': 'Choose how much detail to include in your output.',
    'settingsDemo.colorCaption': 'Pick a marker colour that stands out against your design.',
    'settingsDemo.clearCaption': 'Automatically clear all annotations after copying.',
    'settingsDemo.blockCaption': 'Prevent accidental clicks on page elements while annotating.',
    'settingsDemo.themeCaption': 'Switch between dark and light mode.',

    // Output page
    'output.title': 'Output',
    'output.tagline': 'How Agentation structures feedback for AI agents',
    'output.intro': 'When you copy, you get structured markdown that agents can parse and act on. Four formats are available:',
    'output.compact': 'Compact',
    'output.standard': 'Standard',
    'output.detailed': 'Detailed',
    'output.forensic': 'Forensic',
    'output.whenToUse': 'When to use each format',
    'output.compactDesc': 'Quick feedback with minimal context. Good for small fixes.',
    'output.standardDesc': 'Balanced detail for most use cases. Includes location and classes.',
    'output.detailedDesc': 'Full context with bounding boxes and nearby text. Good for complex issues.',
    'output.forensicDesc': 'Maximum detail including computed styles. For debugging layout/style issues.',
    'output.whyStructured': 'Why structured output?',
    'output.whyStructuredDesc': 'The output includes searchable selectors and class names that agents can',
    'output.whyStructuredDesc2': 'for in your codebase to find the exact component.',
    'output.whyStructuredDesc3': 'Without Agentation, you\'d have to describe the element ("the blue button in the sidebar") and hope the agent guesses right. With Agentation, you give it',
    'output.whyStructuredDesc4': 'and it can search for that directly.',
    'output.customizing': 'Customizing output',
    'output.customizingDesc': 'The copied output is plain markdown. Feel free to edit it before pasting into your agent:',
    'output.addContext': 'Add context',
    'output.addContextDesc': '— prepend with "I\'m working on the dashboard page..."',
    'output.prioritize': 'Prioritize',
    'output.prioritizeDesc': '— reorder annotations by importance',
    'output.removeNoise': 'Remove noise',
    'output.removeNoiseDesc': "— delete annotations that aren't relevant",
    'output.addInstructions': 'Add instructions',
    'output.addInstructionsDesc': '— append "Fix these issues and run the tests"',

    // API page
    'api.title': 'API',
    'api.tagline': 'Programmatic access for developers',
    'api.overview': 'Overview',
    'api.overviewDesc': 'Agentation exposes callbacks that let you integrate annotations into your own workflows — send to a backend, pipe to terminal, trigger automations, or build custom AI integrations.',
    'api.overviewItem1': 'Sync annotations to a database or backend service',
    'api.overviewItem2': 'Build analytics dashboards tracking feedback patterns',
    'api.overviewItem3': 'Create custom AI integrations (MCP servers, agent tools)',
    'api.overviewItem4': 'Trigger webhooks or Slack notifications on new feedback',
    'api.propsEvents': 'Props & Events',
    'api.annotationAddDesc': 'Called when an annotation is created',
    'api.annotationDeleteDesc': 'Called when an annotation is deleted',
    'api.annotationUpdateDesc': 'Called when an annotation comment is edited',
    'api.annotationsClearDesc': 'Called when all annotations are cleared',
    'api.copyDesc': 'Callback with the markdown output when copy is clicked',
    'api.copyToClipboardDesc': 'Set to false to prevent writing to clipboard (if handling via @copy)',
    'api.basicUsage': 'Basic usage',
    'api.basicUsageDesc': 'Receive annotation data directly in your code:',
    'api.annotationType': 'Annotation type',
    'api.annotationTypeDesc': 'The',
    'api.annotationTypeDesc2': 'object passed to callbacks:',

    // Changelog page
    'changelog.title': 'Changelog',
    'changelog.tagline': 'Release history',
    'changelog.features': 'Features',
    'changelog.fixes': 'Fixes',
    'changelog.changes': 'Changes',

    // Changelog v1.1.0
    'changelog.date.v110': 'January 29, 2026',
    'changelog.v110.summary': 'Zero-dependency release. Replaced portal-vue with native implementation.',
    'changelog.v110.c1': 'Replace portal-vue with native TeleportToBody component',
    'changelog.v110.c2': 'Zero runtime dependencies - only requires Vue 2.6+',
    'changelog.v110.c3': 'Eliminates Vue 2.7 compatibility warnings ($attrs/$listeners readonly)',
    'changelog.v110.c4': 'Reduced bundle size by removing portal-vue (~20KB)',
    'changelog.v110.c5': 'Users no longer need to install portal-vue or add portal-target',

    // Changelog v1.0.1
    'changelog.date.v101': 'January 29, 2026',
    'changelog.v101.summary': 'Bug fix release for SPA navigation support.',
    'changelog.v101.fix1': 'Fix pathname not updating on SPA route navigation',
    'changelog.v101.fix2': 'Add listeners for pushState/replaceState and popstate events',

    // Changelog v1.0.0
    'changelog.date.v100': 'January 29, 2026',
    'changelog.v100.summary': 'First stable release of agentation-vue2. Vue 2 port of the React version with full feature parity.',
    'changelog.v100.f1': 'Click elements to annotate with structured feedback',
    'changelog.v100.f2': 'Text selection annotation for typos and content issues',
    'changelog.v100.f3': 'Multi-select mode: drag to select multiple elements',
    'changelog.v100.f4': 'Area selection for layout feedback',
    'changelog.v100.f5': 'CSS animation pause to annotate specific states',
    'changelog.v100.f6': 'Four output formats: Compact, Standard, Detailed, Forensic',
    'changelog.v100.f7': 'Collapsible computed styles in annotation popup',
    'changelog.v100.f8': 'Customizable marker colors with localStorage persistence',
    'changelog.v100.f9': 'Keyboard shortcuts for all major actions',
    'changelog.v100.f10': 'Programmatic API with events: @annotation-add, @annotation-delete, @annotation-update, @annotations-clear, @copy',

    // FAQ page
    'faq.title': 'FAQ',
    'faq.tagline': 'Common questions about Agentation',
    'faq.basics': 'Basics',
    'faq.usage': 'Usage',
    'faq.outputSection': 'Output',
    'faq.technical': 'Technical',

    // FAQ Questions & Answers - Basics
    'faq.q1': 'What is Agentation?',
    'faq.a1': 'Agentation is a floating toolbar that lets you annotate web pages and generate structured feedback for AI coding agents. Click elements, select text, and copy markdown that agents can parse to find and fix issues in your codebase.<br><br>It grew out of <a href="https://benji.org/annotating" target="_blank" rel="noopener noreferrer" class="faq-link">a post by Benji Taylor</a> exploring how to give better feedback to AI agents.',
    'faq.q2': 'Why not just screenshot and annotate?',
    'faq.a2': 'Screenshots lose the connection to code. When you annotate a screenshot, the AI has to guess which component you mean by "the blue button." Agentation gives agents actual selectors like <code>.sidebar > button.primary</code> that they can <code>grep</code> for in your codebase. It\'s the difference between "fix this" and "fix this at <code>src/components/Button.vue:42</code>."',
    'faq.q3': 'How do I install it?',
    'faq.a3': 'Install via npm with <code>npm install agentation-vue2</code>, then import and add the <code>&lt;Agentation /&gt;</code> component to your app. Works with Vue 2.6+ and Nuxt 2.',

    // FAQ Questions & Answers - Usage
    'faq.q4': 'How does element identification work?',
    'faq.a4': 'Agentation automatically identifies elements using class names, IDs, text content, and semantic structure. Buttons are named by their text, headings by content, images by <code>alt</code> text. This makes it easy for agents to <code>grep</code> for elements in your codebase.',
    'faq.q5': 'Can I annotate text selections?',
    'faq.a5': 'Yes. Select any text on the page to annotate specific content. The selected text is quoted in the output, making it easy for agents to search for exact strings in your code.',
    'faq.q6': 'How do I collapse the toolbar?',
    'faq.a6': 'Click the X icon or press <code>Escape</code> to collapse the toolbar. It stays minimal until you need it again.',
    'faq.q7': 'Can I pause animations?',
    'faq.a7': 'Yes. Click the pause icon to freeze CSS animations and transitions. Note that JavaScript-driven animations (like GSAP or custom animations) won\'t be affected.',
    'faq.q8': 'Can I customize marker colors?',
    'faq.a8': 'Yes. Click the settings icon to choose from preset colors for annotation markers. Your preference is saved in <code>localStorage</code>.',
    'faq.q9': 'Where are annotations stored?',
    'faq.a9': 'Annotations are stored in <code>localStorage</code>, keyed by page pathname. They persist across page refreshes but are cleared after 7 days or when you click "Clear all".',

    // FAQ Questions & Answers - Output
    'faq.q10': 'What output formats are available?',
    'faq.a10': 'Four formats: <code>Compact</code> (minimal context), <code>Standard</code> (balanced), <code>Detailed</code> (full context with bounding boxes), and <code>Forensic</code> (maximum detail including computed styles). Choose based on how much context your AI agent needs.',
    'faq.q11': 'Which AI agents work with Agentation?',
    'faq.a11': 'Any AI coding agent that accepts text input. The markdown output is agent-agnostic and works with Claude, GPT-4, Cursor, Copilot, and others. Just paste the copied output into your agent\'s chat.',
    'faq.q12': 'Can multiple people share annotations?',
    'faq.a12': 'Annotations are stored locally in each user\'s browser, so they\'re not shared automatically. For collaboration, copy and share the markdown output directly.',

    // FAQ Questions & Answers - Technical
    'faq.q13': 'Is there a Vue dependency?',
    'faq.a13': 'Yes, Agentation Vue 2 requires Vue 2.6+ as a peer dependency. It\'s built as a Vue component to integrate seamlessly with Vue 2 applications.',
    'faq.q14': 'Does it work with SSR/SSG?',
    'faq.a14': 'Yes, but only on the client side. Use <code>client-only</code> wrapper in Nuxt 2. It works with Nuxt 2 and other SSR/SSG frameworks.',
    'faq.q15': 'Does it affect performance?',
    'faq.a15': 'Minimal impact. Agentation only adds event listeners and renders a small toolbar. It doesn\'t modify your existing DOM or intercept network requests. The annotation markers are lightweight SVG overlays.',
    'faq.q16': 'Should I include it in production?',
    'faq.a16': 'You can, but it\'s designed as a development tool. We recommend conditionally rendering it only in development or behind a feature flag. The toolbar is invisible to users until activated.',
    'faq.q17': 'Can I annotate iframes or shadow DOM?',
    'faq.a17': 'Currently, Agentation only annotates elements in the main document. Iframes and shadow DOM content are not accessible due to browser security restrictions.',
    'faq.q18': 'How do I report bugs or request features?',
    'faq.a18': 'Open an issue on <a href="https://github.com/408460486/agentation" target="_blank" rel="noopener noreferrer" class="faq-link">GitHub</a>. Pull requests are welcome too.',
  },
  zh: {
    // Navigation
    'nav.overview': '概述',
    'nav.install': '安装',
    'nav.features': '功能',
    'nav.output': '输出',
    'nav.api': 'API',
    'nav.changelog': '更新日志',
    'nav.faq': '常见问题',
    'nav.new': '新',

    // Index page
    'index.title': '概述',
    'index.tagline': '指向问题，而非代码',
    'index.madeBy': '作者',
    'index.forkedFrom': '，基于',
    'index.and': '和',
    'index.reactVersion': '的 React 版本',
    'index.originalReactVersion': '原始 React 版本：',
    'index.description1': 'Agentation（agent + annotation）是一个开发工具，可让您在网页上标注元素并为 AI 编程助手生成结构化反馈。',
    'index.description2': '点击元素、选择文本、添加注释，然后将输出粘贴到 Claude Code、Cursor 或任何可以访问您代码库的 AI 助手中。它完全与 AI 工具无关，因此 markdown 输出可与任何 AI 工具配合使用。除 Vue 外零依赖。',
    'index.description3': '关键洞察：当 AI 助手确切知道您指的是哪个元素时，它们可以更快地找到并修复代码。Agentation 捕获类名、选择器和位置，以便 AI 助手可以定位相应的源文件。',
    'index.description4': '它源于',
    'index.aPostBy': 'Benji Taylor 的一篇文章',
    'index.exploring': '，探讨如何向 AI 编程助手提供更好的反馈。',

    // Quick start
    'quickStart.title': '快速开始',
    'quickStart.step1': '点击右下角的图标以激活',
    'quickStart.step2Hover': '悬停',
    'quickStart.step2Text': '在元素上查看其高亮显示的名称',
    'quickStart.step3Click': '点击',
    'quickStart.step3Text': '任意元素以添加标注',
    'quickStart.step4': '写下您的反馈并点击',
    'quickStart.step4Add': '添加',
    'quickStart.step5': '点击',
    'quickStart.step5Text': '复制格式化的 markdown',
    'quickStart.step6': '粘贴到您的 AI 助手中',

    // How it works
    'howItWorks.title': '如何与 AI 助手配合使用',
    'howItWorks.intro': 'Agentation 最适合与可以访问您代码库的 AI 工具配合使用（Claude Code、Cursor、Windsurf 等）：',
    'howItWorks.step1': '您在运行的应用中发现错误或想要更改',
    'howItWorks.step2': '使用 Agentation 为元素添加反馈标注',
    'howItWorks.step3': '复制输出并粘贴到您的 AI 助手中',
    'howItWorks.step4': 'AI 助手使用类名和选择器来',
    'howItWorks.step4Bold': '搜索您的代码库',
    'howItWorks.step5': '它找到相关组件/文件并进行修复',
    'howItWorks.without': '如果没有 Agentation，您必须描述元素（"侧边栏中的蓝色按钮"）并希望 AI 助手猜对。使用 Agentation，您可以给它',
    'howItWorks.andItCan': '然后它可以直接搜索。',

    // Try it
    'tryIt.title': '试一试',
    'tryIt.intro': '工具栏在此页面上已激活。尝试标注这些演示元素：',
    'tryIt.primaryButton': '主要按钮',
    'tryIt.secondaryButton': '次要按钮',
    'tryIt.inputPlaceholder': '尝试选择此文本...',
    'tryIt.cardTitle': '示例卡片',
    'tryIt.cardText': '点击此卡片或选择此文本以创建标注。输出将包含元素路径和您的反馈。',

    // Animation demo
    'animationDemo.title': '动画暂停演示',
    'animationDemo.intro': '点击工具栏中的',
    'animationDemo.introEnd': '以冻结此动画：',

    // Best practices
    'bestPractices.title': '最佳实践',
    'bestPractices.specific': '具体明确',
    'bestPractices.specificDesc': '——"按钮文字不清晰"比"修复这个"更好',
    'bestPractices.oneIssue': '每个标注一个问题',
    'bestPractices.oneIssueDesc': '——便于 AI 助手逐个处理',
    'bestPractices.includeContext': '包含上下文',
    'bestPractices.includeContextDesc': '——说明您期望的与您看到的',
    'bestPractices.useTextSelection': '使用文本选择',
    'bestPractices.useTextSelectionDesc': '——对于错别字或内容问题，选择确切的文本',
    'bestPractices.pauseAnimations': '暂停动画',
    'bestPractices.pauseAnimationsDesc': '——以标注特定的动画帧',

    // Language selector
    'language': '语言',
    'language.en': 'English',
    'language.zh': '中文',

    // Install page
    'install.title': '安装',
    'install.tagline': '在您的项目中开始使用 Agentation',
    'install.installPackage': '安装包',
    'install.orUse': '或者使用 yarn、pnpm 或 bun。',
    'install.addToApp': '添加到您的应用',
    'install.addToAppDesc': '在您的 Vue 应用中的任意位置添加组件，最好是在根级别。',
    'install.addToAppDesc2': '检查确保它仅在开发环境中加载。',
    'install.nuxt2': 'Nuxt 2',
    'install.nuxt2Desc': '对于 Nuxt 2，请将组件添加到您的',
    'install.nuxt2Desc2': '或布局中：',
    'install.nuxt2Css': '不要忘记在您的',
    'install.requirements': '系统要求',
    'install.reqVue': 'Vue 2.6+',
    'install.reqVueDesc': '——使用 Vue 2 Options API',
    'install.reqClient': '仅客户端',
    'install.reqClientDesc': '——需要 DOM 访问',
    'install.reqDesktop': '仅桌面端',
    'install.reqDesktopDesc': '——未针对移动设备优化',
    'install.reqZero': '零依赖',
    'install.reqZeroDesc': '——仅需要 portal-vue',
    'install.props': '属性',
    'install.propsDesc': '',
    'install.propsDesc2': '组件接受用于程序化集成的可选属性：',
    'install.propEvent': '添加注释时触发的事件',
    'install.propCopyDesc': '是否复制到剪贴板（默认：',
    'install.programmatic': '程序化集成',
    'install.programmaticDesc': '使用',
    'install.programmaticDesc2': '事件直接接收结构化注释数据。有关所有可用事件，请参阅',
    'install.programmaticDesc3': '。',
    'install.security': '安全说明',
    'install.securityDesc': 'Agentation 在您的浏览器中运行，并读取 DOM 内容以生成反馈。它',
    'install.securityNot': '不会',
    'install.securityDesc2': '将数据发送到任何地方——一切都保留在本地，直到您手动复制和粘贴。',
    'install.secNoNetwork': '无网络请求',
    'install.secNoNetworkDesc': '——所有处理都在客户端进行',
    'install.secNoData': '无数据收集',
    'install.secNoDataDesc': '——不会远程跟踪或存储任何内容',
    'install.secDevOnly': '仅开发环境',
    'install.secDevOnlyDesc': '——使用',
    'install.secDevOnlyDesc2': '检查从生产环境中排除',

    // Features page
    'features.title': '功能',
    'features.tagline': 'Agentation 的所有功能',
    'features.annotationModes': '标注模式',
    'features.annotationModesDesc': '点击下面的标签查看每种标注模式的示例：',
    'features.toolbarControls': '工具栏控件',
    'features.pause': '暂停',
    'features.pauseDesc': '冻结 CSS 动画以标注特定状态',
    'features.visibility': '可见性',
    'features.visibilityDesc': '工作时切换标注标记的显示/隐藏',
    'features.copy': '复制',
    'features.copyDesc': '获取用于 AI 助手的结构化 markdown',
    'features.clear': '清除',
    'features.clearDesc': '移除所有标注',
    'features.settings': '设置',
    'features.settingsDesc': '配置输出详细程度、标记颜色和行为',
    'features.toolbarTip': '拖动工具栏重新定位。点击标记删除它，右键点击编辑。',
    'features.markerTypes': '标记类型',
    'features.markerTypesDesc': '不同的标注模式使用不同的标记样式。',
    'features.smartId': '智能识别',
    'features.smartIdDesc': 'Agentation 自动以对代码搜索有用的方式识别元素。这使 AI 助手可以轻松地在您的代码库中',
    'features.smartIdDesc2': '搜索确切的元素。',
    'features.computedStyles': '计算样式',
    'features.computedStylesDesc': '直接在标注弹窗中查看任意元素的计算 CSS 样式。展开可折叠部分以查看相关属性，如颜色、字体和间距。',
    'features.keyboardShortcuts': '键盘快捷键',
    'features.shortcutToggle': '切换反馈模式',
    'features.shortcutClose': '关闭工具栏或取消',
    'features.shortcutPause': '暂停/恢复动画',
    'features.shortcutHide': '隐藏/显示标记',
    'features.shortcutCopy': '复制反馈',
    'features.shortcutClear': '清除所有标注',
    'features.shortcutNote': '在输入框中输入时快捷键被禁用。',
    'features.settingsSection': '设置',
    'features.settingsDesc2': '图标让您可以自定义 Agentation 以适应您的工作流程。',
    'features.limitations': '限制',
    'features.limDesktop': '仅桌面端',
    'features.limDesktopDesc': '——该工具需要桌面浏览器，但您仍可以在反馈中请求移动端更改',
    'features.limStorage': '按页面存储',
    'features.limStorageDesc': '——标注在 localStorage 中保留 7 天',
    'features.limSingle': '单页面',
    'features.limSingleDesc': '——标注不会在导航时跟随',
    'features.limStatic': '静态位置',
    'features.limStaticDesc': '——如果布局更改，标记不会更新',
    'features.limNoScreenshot': '无截图',
    'features.limNoScreenshotDesc': '——输出仅为文本（如需要可与截图一起粘贴）',
    'features.limCssOnly': '仅 CSS 动画',
    'features.limCssOnlyDesc': '——暂停功能适用于 CSS 动画，不适用于 JS 驱动的动画（framer-motion、GSAP 等）',
    'features.limVue': '仅 Vue 2',
    'features.limVueDesc': '——目前需要 Vue 2.6+',

    // Features Demo
    'featuresDemo.text': '文本',
    'featuresDemo.textCaption': '选择文本以标注错别字、内容问题或复制更改。\n引用的文本将包含在输出中。',
    'featuresDemo.elements': '元素',
    'featuresDemo.elementsCaption': '点击任意元素添加反馈。\nAgentation 通过类名、ID 或语义内容识别它。',
    'featuresDemo.multiSelect': '多选',
    'featuresDemo.multiSelectCaption': '拖动以一次选择多个元素。\n所有选中的元素都包含在单个标注中。',
    'featuresDemo.area': '区域',
    'featuresDemo.areaCaption': '拖动以选择任意区域，包括空白区域。\n适用于布局反馈或指示内容应放置的位置。',
    'featuresDemo.animation': '动画',
    'featuresDemo.animationCaption': '冻结 CSS 动画以标注特定状态。\n点击工具栏中的暂停按钮停止所有动画。',

    // Marker Key Demo
    'markerKeyDemo.single': '单元素或文本选择',
    'markerKeyDemo.multi': '多选或区域（始终为绿色）',

    // Smart Identification Demo
    'smartIdDemo.buttonCaption': '按钮和链接以其文本内容命名。',
    'smartIdDemo.linkCaption': '按钮和链接以其文本内容命名。',
    'smartIdDemo.headingCaption': '标题以其内容识别。',
    'smartIdDemo.imageCaption': '图片使用 alt 文本或 src 文件名。',
    'smartIdDemo.inputCaption': '输入框使用标签或占位符文本。',
    'smartIdDemo.cardCaption': '其他元素使用类名或 ID。',

    // Computed Styles Demo
    'computedStylesDemo.caption': '点击箭头展开所选元素的计算 CSS 样式。\n用于调试样式问题或传达设计规范。',

    // Settings Demo
    'settingsDemo.outputCaption': '选择输出中包含的详细程度。',
    'settingsDemo.colorCaption': '选择在您的设计中突出显示的标记颜色。',
    'settingsDemo.clearCaption': '复制后自动清除所有标注。',
    'settingsDemo.blockCaption': '标注时防止意外点击页面元素。',
    'settingsDemo.themeCaption': '在深色和浅色模式之间切换。',

    // Output page
    'output.title': '输出',
    'output.tagline': 'Agentation 如何为 AI 助手构建反馈',
    'output.intro': '当您复制时，您将获得 AI 助手可以解析和执行的结构化 markdown。有四种格式可用：',
    'output.compact': '简洁',
    'output.standard': '标准',
    'output.detailed': '详细',
    'output.forensic': '取证',
    'output.whenToUse': '何时使用每种格式',
    'output.compactDesc': '带有最少上下文的快速反馈。适合小修复。',
    'output.standardDesc': '适用于大多数用例的平衡详细程度。包含位置和类名。',
    'output.detailedDesc': '包含边界框和附近文本的完整上下文。适合复杂问题。',
    'output.forensicDesc': '包括计算样式的最大详细程度。用于调试布局/样式问题。',
    'output.whyStructured': '为什么使用结构化输出？',
    'output.whyStructuredDesc': '输出包含可搜索的选择器和类名，AI 助手可以在您的代码库中',
    'output.whyStructuredDesc2': '搜索以找到确切的组件。',
    'output.whyStructuredDesc3': '如果没有 Agentation，您必须描述元素（"侧边栏中的蓝色按钮"）并希望 AI 助手猜对。使用 Agentation，您可以给它',
    'output.whyStructuredDesc4': '然后它可以直接搜索。',
    'output.customizing': '自定义输出',
    'output.customizingDesc': '复制的输出是纯 markdown。在粘贴到 AI 助手之前随意编辑它：',
    'output.addContext': '添加上下文',
    'output.addContextDesc': '——前面加上"我正在处理仪表板页面..."',
    'output.prioritize': '优先级排序',
    'output.prioritizeDesc': '——按重要性重新排序标注',
    'output.removeNoise': '移除噪音',
    'output.removeNoiseDesc': '——删除不相关的标注',
    'output.addInstructions': '添加说明',
    'output.addInstructionsDesc': '——附加"修复这些问题并运行测试"',

    // API page
    'api.title': 'API',
    'api.tagline': '开发者的程序化访问',
    'api.overview': '概述',
    'api.overviewDesc': 'Agentation 公开回调函数，让您可以将标注集成到自己的工作流程中——发送到后端、输出到终端、触发自动化，或构建自定义 AI 集成。',
    'api.overviewItem1': '将标注同步到数据库或后端服务',
    'api.overviewItem2': '构建跟踪反馈模式的分析仪表板',
    'api.overviewItem3': '创建自定义 AI 集成（MCP 服务器、代理工具）',
    'api.overviewItem4': '在收到新反馈时触发 webhook 或 Slack 通知',
    'api.propsEvents': '属性和事件',
    'api.annotationAddDesc': '创建标注时调用',
    'api.annotationDeleteDesc': '删除标注时调用',
    'api.annotationUpdateDesc': '编辑标注评论时调用',
    'api.annotationsClearDesc': '清除所有标注时调用',
    'api.copyDesc': '点击复制时使用 markdown 输出的回调',
    'api.copyToClipboardDesc': '设置为 false 以阻止写入剪贴板（如果通过 @copy 处理）',
    'api.basicUsage': '基本用法',
    'api.basicUsageDesc': '直接在代码中接收标注数据：',
    'api.annotationType': '标注类型',
    'api.annotationTypeDesc': '传递给回调的',
    'api.annotationTypeDesc2': '对象：',

    // Changelog page
    'changelog.title': '更新日志',
    'changelog.tagline': '版本发布历史',
    'changelog.features': '功能特性',
    'changelog.fixes': '修复',
    'changelog.changes': '变更',

    // Changelog v1.1.0
    'changelog.date.v110': '2026年1月29日',
    'changelog.v110.summary': '零依赖版本。用原生实现替代 portal-vue。',
    'changelog.v110.c1': '用原生 TeleportToBody 组件替代 portal-vue',
    'changelog.v110.c2': '零运行时依赖 - 仅需要 Vue 2.6+',
    'changelog.v110.c3': '消除 Vue 2.7 兼容性警告（$attrs/$listeners readonly）',
    'changelog.v110.c4': '移除 portal-vue 减小打包体积（约 20KB）',
    'changelog.v110.c5': '用户无需再安装 portal-vue 或添加 portal-target',

    // Changelog v1.0.1
    'changelog.date.v101': '2026年1月29日',
    'changelog.v101.summary': 'SPA 导航支持修复版本。',
    'changelog.v101.fix1': '修复 SPA 路由导航时 pathname 不更新的问题',
    'changelog.v101.fix2': '添加对 pushState/replaceState 和 popstate 事件的监听',

    // Changelog v1.0.0
    'changelog.date.v100': '2026年1月29日',
    'changelog.v100.summary': 'agentation-vue2 首个稳定版本。React 版本的 Vue 2 移植版，功能完全对等。',
    'changelog.v100.f1': '点击元素进行结构化反馈标注',
    'changelog.v100.f2': '文本选择标注，用于错别字和内容问题',
    'changelog.v100.f3': '多选模式：拖动选择多个元素',
    'changelog.v100.f4': '区域选择，用于布局反馈',
    'changelog.v100.f5': 'CSS 动画暂停，标注特定状态',
    'changelog.v100.f6': '四种输出格式：简洁、标准、详细、取证',
    'changelog.v100.f7': '标注弹窗中的可折叠计算样式',
    'changelog.v100.f8': '可自定义标记颜色，支持 localStorage 持久化',
    'changelog.v100.f9': '所有主要操作的键盘快捷键',
    'changelog.v100.f10': '程序化 API 事件：@annotation-add、@annotation-delete、@annotation-update、@annotations-clear、@copy',

    // FAQ page
    'faq.title': '常见问题',
    'faq.tagline': '关于 Agentation 的常见问题',
    'faq.basics': '基础',
    'faq.usage': '使用',
    'faq.outputSection': '输出',
    'faq.technical': '技术',

    // FAQ Questions & Answers - Basics
    'faq.q1': '什么是 Agentation？',
    'faq.a1': 'Agentation 是一个浮动工具栏，可让您标注网页并为 AI 编程助手生成结构化反馈。点击元素、选择文本，然后复制 AI 助手可以解析的 markdown，以在代码库中找到并修复问题。<br><br>它源于 <a href="https://benji.org/annotating" target="_blank" rel="noopener noreferrer" class="faq-link">Benji Taylor 的一篇文章</a>，探讨如何向 AI 助手提供更好的反馈。',
    'faq.q2': '为什么不直接截图标注？',
    'faq.a2': '截图会丢失与代码的连接。当您标注截图时，AI 必须猜测您说的"蓝色按钮"是指哪个组件。Agentation 为 AI 助手提供实际的选择器，如 <code>.sidebar > button.primary</code>，它们可以在您的代码库中 <code>grep</code> 搜索。这是"修复这个"和"修复 <code>src/components/Button.vue:42</code> 这里"之间的区别。',
    'faq.q3': '如何安装？',
    'faq.a3': '通过 npm 安装 <code>npm install agentation-vue2</code>，然后导入并将 <code>&lt;Agentation /&gt;</code> 组件添加到您的应用中。适用于 Vue 2.6+ 和 Nuxt 2。',

    // FAQ Questions & Answers - Usage
    'faq.q4': '元素识别是如何工作的？',
    'faq.a4': 'Agentation 使用类名、ID、文本内容和语义结构自动识别元素。按钮以其文本命名，标题以内容命名，图片以 <code>alt</code> 文本命名。这使 AI 助手可以轻松地在您的代码库中 <code>grep</code> 搜索元素。',
    'faq.q5': '可以标注文本选择吗？',
    'faq.a5': '可以。选择页面上的任意文本来标注特定内容。选中的文本会在输出中被引用，使 AI 助手可以轻松搜索代码中的确切字符串。',
    'faq.q6': '如何折叠工具栏？',
    'faq.a6': '点击 X 图标或按 <code>Escape</code> 键折叠工具栏。它会保持最小化状态，直到您再次需要它。',
    'faq.q7': '可以暂停动画吗？',
    'faq.a7': '可以。点击暂停图标冻结 CSS 动画和过渡。请注意，JavaScript 驱动的动画（如 GSAP 或自定义动画）不会受到影响。',
    'faq.q8': '可以自定义标记颜色吗？',
    'faq.a8': '可以。点击设置图标从预设颜色中选择标注标记的颜色。您的偏好会保存在 <code>localStorage</code> 中。',
    'faq.q9': '标注存储在哪里？',
    'faq.a9': '标注存储在 <code>localStorage</code> 中，以页面路径为键。它们会在页面刷新后保留，但在 7 天后或点击"清除全部"时会被清除。',

    // FAQ Questions & Answers - Output
    'faq.q10': '有哪些输出格式？',
    'faq.a10': '四种格式：<code>简洁</code>（最少上下文）、<code>标准</code>（平衡）、<code>详细</code>（包含边界框的完整上下文）和<code>取证</code>（包括计算样式的最大详细程度）。根据您的 AI 助手需要多少上下文来选择。',
    'faq.q11': '哪些 AI 助手可以使用 Agentation？',
    'faq.a11': '任何接受文本输入的 AI 编程助手。markdown 输出与 AI 工具无关，可与 Claude、GPT-4、Cursor、Copilot 等配合使用。只需将复制的输出粘贴到您的 AI 助手对话中。',
    'faq.q12': '多人可以共享标注吗？',
    'faq.a12': '标注存储在每个用户的浏览器本地，因此不会自动共享。如需协作，请直接复制和共享 markdown 输出。',

    // FAQ Questions & Answers - Technical
    'faq.q13': '有 Vue 依赖吗？',
    'faq.a13': '是的，Agentation Vue 2 需要 Vue 2.6+ 作为对等依赖。它被构建为 Vue 组件，可与 Vue 2 应用程序无缝集成。',
    'faq.q14': '支持 SSR/SSG 吗？',
    'faq.a14': '支持，但仅在客户端。在 Nuxt 2 中使用 <code>client-only</code> 包装器。它可与 Nuxt 2 和其他 SSR/SSG 框架配合使用。',
    'faq.q15': '会影响性能吗？',
    'faq.a15': '影响很小。Agentation 只添加事件监听器并渲染一个小工具栏。它不会修改您现有的 DOM 或拦截网络请求。标注标记是轻量级的 SVG 覆盖层。',
    'faq.q16': '应该在生产环境中包含它吗？',
    'faq.a16': '可以，但它被设计为开发工具。我们建议仅在开发环境中或在功能标志后面有条件地渲染它。工具栏在激活前对用户不可见。',
    'faq.q17': '可以标注 iframe 或 shadow DOM 吗？',
    'faq.a17': '目前，Agentation 只能标注主文档中的元素。由于浏览器安全限制，iframe 和 shadow DOM 内容无法访问。',
    'faq.q18': '如何报告错误或请求功能？',
    'faq.a18': '在 <a href="https://github.com/408460486/agentation" target="_blank" rel="noopener noreferrer" class="faq-link">GitHub</a> 上提交 issue。也欢迎提交 Pull Request。',
  }
}

// Global reactive state
const state = Vue.observable({
  locale: 'en'
})

// Initialize from localStorage
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('agentation-locale')
  if (saved === 'en' || saved === 'zh') {
    state.locale = saved
  }
}

// Translation function
function t(key) {
  return messages[state.locale][key] || key
}

// Set locale
function setLocale(val) {
  state.locale = val
  if (typeof window !== 'undefined') {
    localStorage.setItem('agentation-locale', val)
  }
}

// Get current locale
function getLocale() {
  return state.locale
}

// Export as Vue plugin
export default (context, inject) => {
  inject('t', t)
  inject('setLocale', setLocale)
  inject('getLocale', getLocale)
  inject('availableLocales', ['en', 'zh'])
}

// Also export for direct use
export { t, setLocale, getLocale, messages }
