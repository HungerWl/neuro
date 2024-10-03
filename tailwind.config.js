/** @type {import('tailwindcss').Config} */
export default {
  // 设置需要应用 Tailwind CSS 的文件
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // 设置主题
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  // 设置插件
  plugins: [],
};
