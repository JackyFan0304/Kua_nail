<template>
    <section class="about-me">
      <div class="about-image">
        <img :src="aboutImage" alt="About Me" />
      </div>
      <div class="about-content">
        <h2>About Me</h2>
        <p v-if="!isMobile">
          🌟 <strong>Nail Artist: Bringing Dreams to Your Fingertips!</strong> 🌟
          <br />
          Hello! I’m a passionate nail artist dedicated to transforming your nails into stunning works of art. With every brush stroke, I aim to create unique designs that reflect your personality and style. Nail art is my form of self-expression, and I believe your nails can be a canvas for your dreams.
        </p>
        <p v-if="!isMobile">
          Whether you’re looking for elegance, bold colors, or intricate patterns, I’m here to make your nail fantasies come true. Let’s embark on this colorful journey together and make your fingertips the talk of the town! Book your appointment today, and let’s create something beautiful together! 💅✨
        </p>
        <p v-else>
          🌟 <strong>Nail Artist: Your Fingertips' Dream!</strong> 🌟
          <br />
          Passionate about transforming nails into art. Let’s create something beautiful together! 💅✨
        </p>
      </div>
    </section>
  </template>
  
  <script>
  import aboutImage from '@/assets/images/about_me.jpg'; // 替換為你的圖片路徑
  
  export default {
    name: 'AboutMe',
    data() {
      return {
        aboutImage,
        isMobile: false,
      };
    },
    mounted() {
      this.checkViewport();
      window.addEventListener('resize', this.checkViewport);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.checkViewport);
    },
    methods: {
      checkViewport() {
        this.isMobile = window.innerWidth <= 768; // 根據需要調整斷點
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .about-me {
    position: relative;
    height: 100vh; /* 設置高度為 100vh */
    display: flex; /* 使用 Flexbox 排版 */
    align-items: center; /* 垂直居中對齊 */
    overflow: hidden; /* 隱藏超出內容 */
    font-family: 'Noto Sans TC', sans-serif; /* 使用繁黑體字體 */  
    z-index: 2;
    background-color: rgba(255, 255, 224, 0.8); /* 淺黃色背景，帶透明度 */
    backdrop-filter: blur(10px); /* 添加毛玻璃效果 */
    
    .about-image {
      flex: 1; /* 左側圖片佔據一部分 */
      min-height: 30vh; /* 設置最小高度 */      
      
      img {
        width: 100%; /* 圖片寬度100% */
        height: auto; /* 自動調整高度 */
        min-height: 30vh; /* 設置最小高度以保持比例 */
        object-fit: cover; /* 保持圖片比例並覆蓋整個區塊 */
        border-radius: 8px; /* 圖片圓角 */
      }
    }
  
    .about-content {
      flex: 1; /* 右側內容佔據一部分 */
      padding-left: 2rem; /* 左側內邊距 */
  
      h2 {
        font-size: 4rem; /* 標題大小 */
        margin-bottom: 1rem; /* 標題與內文間距 */
      }
  
      p {
        font-size: 2rem; /* 初始內文大小 */
        line-height: 1.5; /* 行高 */
  
        @media (max-width: 768px) { 
          font-size: 1.5rem; /* 小於768px時減少字體大小 */
        }
        
        @media (max-width: 480px) { 
          font-size: 1.2rem; /* 更小屏幕時進一步減少字體大小 */
        }
      }
    }
  }
  </style>