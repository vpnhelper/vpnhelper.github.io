---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: v2ray guide

hero:
  name: v2ray guide
  text: اتصال به اینترنت آزاد
  tagline: آموزش کامل و جامع عبور از ساسنسورشیپ با v2ray برای تمام دستگاه‌ها.
  image:
    src: /images/logo-dark.png
    alt: v2ray guide
  actions:
    - theme: brand
      text: چگونه وصل بشم؟
      link: './docs/'
    - theme: alt
      text: به چه سروی وصل بشم؟
      link: './docs/qa'
    - theme: alt
      text: وضعیت سرور‌ها
      link: 'https://021912.xyz/status/nb'

features:
// docs/.vitepress/config.ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [
    ['meta', { name: 'google-site-verification', content: 'zxz8fi9dghEjd5ZKygTaPH58ue1SUUWD24y1EI35DHo' }]
  ],
  // سایر تنظیمات VitePress
})


---

