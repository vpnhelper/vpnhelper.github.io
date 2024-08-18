export const config = {
  sidebar: [
    {
      text: 'Android',
      items: [
        {
          text: 'v2rayNG',
          link: '/docs/v2rayNG',
        },
      ],
    },
    {
      text: 'IOS',
      items: [
        { text: 'Streisand', link: '/docs/streisand' },
      ],
    },
    {
      text: 'Windows',
      items: [
        { text: 'v2rayN', link: '/docs/v2rayN' },
      ],
    },
    {
      text: 'MacOS',
      items: [
        { text: 'Streisand', link: '/docs/streisand' },
      ],
    },
    {
      text: 'IPV6',
      items: [
        { text: 'SAMSUNG', link: '/docs/ipv6-samsung' },
        { text: 'IOS', link: '/docs/ipv6-apple' },
      ],
    },
  ],
  nav: [
    { text: 'خانه', link: '/' },
  ],
  footer: {
    message: '© 2024',
    copyright: 'CC Lab',
  },
  outlineTitle: 'محتوا صفحه',
  returnToTopLabel: 'برگشت به بالا',
  sidebarMenuLabel: 'منو',

  // اضافه کردن بخش head برای تگ‌های متا
  head: [
    ['meta', { name: 'google-site-verification', content: 'zxz8fi9dghEjd5ZKygTaPH58ue1SUUWD24y1EI35DHo' }]
  ]
}

export default config
