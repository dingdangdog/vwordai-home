<template>
  <div
    class="min-h-screen bg-gradient-to-b from-blue-200 to-blue-500 text-blue-900 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-7xl mx-auto">
      <!-- Hero Section -->
      <div class="flex flex-col items-center text-center mb-4 min-h-screen">
        <img src="/logo.svg" alt="VwordAi Logo" class="w-24 h-24 md:w-36 md:h-36 mb-4" />
        <h1 class="text-5xl font-bold mb-4 text-blue-800">
          文声AI
          <span class="text-3xl font-normal text-blue-700">(VwordAi)</span>
        </h1>
        <p class="text-xl text-blue-800 max-w-2xl">
          文本转语音工具，支持多种语音服务提供商，让您轻松将文本转为自然流畅的语音
        </p>

        <div class="flex justify-center items-center my-4">
          <div
            class="max-h-[30rem] w-full max-w-[50rem] object-contain rounded-lg overflow-hidden border-2 border-blue-600"
          >
            <img
              class="w-full h-full object-contain"
              src="/screenshot.jpg"
              alt="VwordAi Screenshot"
            />
          </div>
        </div>

        <div
          class="flex flex-col sm:flex-row gap-4 mt-2 items-center justify-center my-8"
        >
          <a
            href="https://github.com/dingdangdog/vwordai/releases"
            class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition flex items-center justify-center"
          >
            <svg
              v-if="!isLoading"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <svg
              v-if="isLoading"
              class="animate-spin h-5 w-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            下载 {{ isLoading ? "..." : latestVersion }}
          </a>
          <a
            href="https://github.com/dingdangdog/vwordai"
            class="bg-gray-700 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            GitHub 仓库
          </a>
        </div>
      </div>

      <!-- Features Section -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-10 text-center text-blue-900">
          功能特点
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            class="bg-white bg-opacity-60 backdrop-blur-sm p-6 rounded-xl border border-blue-300 shadow-md"
          >
            <div class="flex flex-col items-center justify-center">
              <div
                class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-blue-900">项目管理</h3>
            </div>
            <p class="text-blue-800">
              轻松管理您的文本内容，按项目和章节进行高效组织
            </p>
          </div>

          <div
            class="bg-white bg-opacity-60 backdrop-blur-sm p-6 rounded-xl border border-blue-300 shadow-md"
          >
            <div class="flex flex-col items-center justify-center">
              <div
                class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-blue-900">
                多服务商支持
              </h3>
            </div>
            <p class="text-blue-800">
              集成多种 TTS 服务，包括 Microsoft Azure、阿里云、腾讯云、百度云等
            </p>
          </div>

          <div
            class="bg-white bg-opacity-60 backdrop-blur-sm p-6 rounded-xl border border-blue-300 shadow-md"
          >
            <div class="flex flex-col items-center justify-center">
              <div
                class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-blue-900">
                自有密钥使用
              </h3>
            </div>
            <p class="text-blue-800">
              使用您自己的第三方服务密钥，所有功能完全免费
            </p>
          </div>

          <!-- <div
            class="bg-white bg-opacity-60 backdrop-blur-sm p-6 rounded-xl border border-blue-300 shadow-md"
          >
            <div
              class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-blue-900">
              自定义语音设置
            </h3>
            <p class="text-blue-800">可针对不同的文本内容配置不同的语音参数</p>
          </div> -->
        </div>
      </div>

      <!-- Supported Services -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-10 text-center text-blue-900">
          支持的服务提供商
        </h2>
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
        >
          <div
            class="bg-blue-600 p-4 rounded-lg text-center border border-blue-400 flex flex-col items-center shadow-md"
          >
            <div class="text-white text-sm mb-2">已支持</div>
            <div class="font-semibold text-white">Azure</div>
          </div>
          <div
            class="bg-white bg-opacity-70 p-4 rounded-lg text-center border border-blue-300 flex flex-col items-center text-blue-900 shadow-md"
          >
            <div class="text-blue-700 text-sm mb-2">即将支持</div>
            <div class="font-semibold text-blue-900">OpenAI</div>
          </div>
          <div
            class="bg-white bg-opacity-70 p-4 rounded-lg text-center border border-blue-300 flex flex-col items-center text-blue-900 shadow-md"
          >
            <div class="text-blue-700 text-sm mb-2">即将支持</div>
            <div class="font-semibold text-blue-900">阿里云</div>
          </div>
          <div
            class="bg-white bg-opacity-70 p-4 rounded-lg text-center border border-blue-300 flex flex-col items-center text-blue-900 shadow-md"
          >
            <div class="text-blue-700 text-sm mb-2">即将支持</div>
            <div class="font-semibold text-blue-900">腾讯云</div>
          </div>
          <div
            class="bg-white bg-opacity-70 p-4 rounded-lg text-center border border-blue-300 flex flex-col items-center text-blue-900 shadow-md"
          >
            <div class="text-blue-700 text-sm mb-2">即将支持</div>
            <div class="font-semibold text-blue-900">百度云</div>
          </div>
          <div
            class="bg-white bg-opacity-70 p-4 rounded-lg text-center border border-blue-300 flex flex-col items-center text-blue-900 shadow-md"
          >
            <div class="text-blue-700 text-sm mb-2">即将支持</div>
            <div class="font-semibold text-blue-900">Google</div>
          </div>
          <div
            class="bg-white bg-opacity-70 p-4 rounded-lg text-center border border-blue-300 flex flex-col items-center text-blue-900 shadow-md"
          >
            <div class="text-blue-700 text-sm mb-2">即将支持</div>
            <div class="font-semibold text-blue-900">AWS</div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div
        class="text-center text-sm text-blue-800 pt-6 border-t border-blue-400"
      >
        <p>
          Copyright © {{ new Date().getFullYear() }} VwordAi.com All rights
          reserved.
        </p>
        <div class="mt-2">
          <a
            href="https://vwordai.com"
            class="text-black hover:text-blue-900 mx-2"
            >官网</a
          >
          |
          <a
            href="https://github.com/dingdangdog/vwordai"
            class="text-black hover:text-blue-900 mx-2"
            >GitHub</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Fetch latest version from GitHub API
const latestVersion = ref("error"); // Default fallback version
const isLoading = ref(true);

try {
  const response = await fetch(
    "https://api.github.com/repos/dingdangdog/vwordai/releases/latest"
  );

  if (response.ok) {
    const data = await response.json();
    if (data.tag_name) {
      latestVersion.value = data.tag_name;
    }
  } else if (response.status === 404) {
    // If no releases found, try fetching tags instead
    const tagsResponse = await fetch(
      "https://api.github.com/repos/dingdangdog/vwordai/tags"
    );

    if (tagsResponse.ok) {
      const tags = await tagsResponse.json();
      if (tags.length > 0 && tags[0].name) {
        latestVersion.value = tags[0].name;
      }
    }
  }
} catch (error) {
  console.error("Error fetching latest version:", error);
} finally {
  isLoading.value = false;
}
</script>

<style scoped>
#website-container {
  width: 100%;
}

.links-tag {
  position: relative;
  top: 1rem;
  left: 1rem;
  width: 12rem;
}
</style>
