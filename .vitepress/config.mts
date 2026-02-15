import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Stream Companion",
  description: "Your own customized stream AI assistant",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Streamer.Bot Configuration', link: '/guide/streamerbot-configuration' },
        ]
      },
      {
        text: 'Customization',
        items: [
          { text: "Customize the AI's behaviour", link: '/guide/ai-behavior' },
          { text: 'Setup custom triggers', link: '/guide/custom-triggers' }
        ]
      }
    ],

    logo: '/stream-companion_logo.png',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/theolliedev/stream-companion' }
    ]
  }
})
