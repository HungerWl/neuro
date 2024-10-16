/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '375px',  // 小屏幕手机（如 iPhone SE, iPhone 8）
        'sm': '640px',  // 常见手机屏幕（如 iPhone X, iPhone 11, Galaxy S10）
        'md': '768px',  // 中型平板设备（如 iPad Mini, Galaxy Tab）
        'md-lg': '810px',  // 接近大型平板（如 iPad Pro 10.5", Surface Go）
        'lg': '1100px',  // 中小型笔记本电脑（如 MacBook Air, Dell XPS 13）
        'xl': '1280px',  // 标准笔记本和台式机显示器（如 MacBook Pro 13", 1080p 显示器）
        '2xl': '1536px', // 更大分辨率笔记本和显示器（如 2K 显示器, MacBook Pro 16"）
        '3xl': '1920px', // 全高清显示器和大屏设备（如 1080p 台式机显示器, 大尺寸电视）
        '4xl': '2560px', // 超宽屏显示器或 4K 分辨率（如 4K 显示器, 超宽屏台式机）
      },
    },
  },
  important: true, // 提升 Tailwind CSS 样式的优先级
  plugins: [],
};
