<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "文声AI (VwordAi)",
        description:
          "VwordAi 是一款文本转语音工具，支持多种语音服务提供商，让您轻松将文本转为自然流畅的语音。",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Windows, macOS, Linux",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        author: {
          "@type": "Organization",
          name: "VwordAi Team",
          url: "https://vwordai.com",
        },
        softwareVersion: "1.0.0",
        downloadUrl: "https://github.com/dingdangdog/vwordai/releases",
        screenshot: "https://vwordai.com/screenshot.jpg",
      }),
    },
  ],
});
</script>
