<template>
  <div
    class="min-h-screen bg-gradient-to-b from-blue-200 to-blue-500 text-blue-900 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div
      class="max-w-md w-full bg-white bg-opacity-60 backdrop-blur-sm p-8 rounded-xl border border-blue-300 shadow-lg text-center"
    >
      <img src="/logo.svg" alt="VwordAi Logo" class="w-24 h-24 mx-auto mb-4" />

      <div class="text-9xl font-bold text-blue-600 mb-2">404</div>

      <h1 class="text-3xl font-bold mb-4 text-blue-800">页面未找到</h1>

      <p class="text-xl text-blue-700 mb-8">
        抱歉，您访问的页面不存在或已被移除
      </p>

      <a
        href="/"
        class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition inline-flex items-center justify-center"
      >
        返回首页
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
// No custom layout needed
</script>

<style scoped></style>
