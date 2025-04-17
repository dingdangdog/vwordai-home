// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/base.css"],
  app: {
    head: {
      title: "文声AI（VwordAi.com)",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content:
            "VwordAi 是一款文本转语音工具，支持多种语音服务提供商，让您轻松将文本转为自然流畅的语音。",
        },
        {
          name: "keywords",
          content:
            "VwordAi, 文声AI, 文本转语音, 语音合成, 语音转换, 语音合成工具, 语音转换工具, 语音合成服务, 语音转换服务",
        },
        // Open Graph
        {
          property: "og:title",
          content: "文声AI (VwordAi) - 专业文本转语音工具",
        },
        {
          property: "og:description",
          content: "文声AI是一款功能强大的文本转语音工具，支持多种语音服务提供商，让您轻松将文本转为自然流畅的语音。",
        },
        {
          property: "og:type", 
          content: "website",
        },
        {
          property: "og:url",
          content: "https://vwordai.com",
        },
        {
          property: "og:image",
          content: "https://vwordai.com/og-image.svg",
        },
        {
          property: "og:site_name",
          content: "VwordAi",
        },
        {
          property: "og:locale",
          content: "zh_CN",
        },
        // Twitter
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "文声AI (VwordAi) - 专业文本转语音工具",
        },
        {
          name: "twitter:description",
          content: "文声AI是一款功能强大的文本转语音工具，支持多种语音服务提供商，让您轻松将文本转为自然流畅的语音。",
        },
        {
          name: "twitter:image",
          content: "https://vwordai.com/twitter-image.svg",
        },
        // Additional SEO
        {
          name: "author",
          content: "VwordAi Team",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "googlebot",
          content: "index, follow",
        },
        {
          name: "theme-color",
          content: "#3b82f6", // Blue color used in the site
        },
      ],
      link: [
        {
          rel: "icon",
          href: "/logo.svg",
        },
        {
          rel: "canonical",
          href: "https://vwordai.com",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      github: "https://github.com/dingdangdog/vwrodai",
    },
  },
  modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss"],
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "zh",
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "zh",
        name: "简体中文",
      },
    ],
    vueI18n: "./i18n.config.ts",
    // By default, Nuxt i18n module attempts to redirect users to their preferred language by detecting their browser's language. This is controlled by the detectBrowserLanguage option.
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  },
});
