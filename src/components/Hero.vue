<template>
    <section class="hero-section">
      <div class="overlay"></div> <!-- 半透明遮罩 -->
      <h1>
        YI LUN LI
        <span>Manicurists & Artists</span> <!-- 副標 -->
      </h1>
      <img :src="backgroundImage" alt="KUA_PRO" class="bottom-image" /> <!-- 固定在底部的圖片 -->
    </section>
  </template>
  
  <script>
  import backgroundImage from '@/assets/images/KUA_PRO.jpg';
  
  export default {
    name: 'HeroSection',
    data() {
      return {
        backgroundImage,
      };
    },
  };
  </script>
  
  <style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap'); /* 引入繁黑體字體 */
  
  .hero-section {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white; /* 文字顏色設為白色 */
    font-family: 'Noto Sans TC', sans-serif; /* 使用繁黑體字體 */  
  
    h1 {
      position: relative;
      z-index: 3; /* 保證文字在最上層 */
      font-size: 3rem; /* 主標題大小 */
      font-weight: bold; /* 主標題加粗 */
      
      span {
        display: block;
        font-size: 1.5rem; /* 副標題大小 */
        margin-top: 0.5rem; /* 與主標題的間距 */
        font-weight: 300; /* 設置為細字體 */
      }
    }
    
    /* 底部的圖片 */
    .bottom-image {
        position: fixed;
        bottom: 0;
        left: 50%; /* 水平居中 */
        transform: translateX(-50%); /* 調整居中 */
        width: 100%;
        height: auto;
        min-height: 60vh; /* 最小高度設定為螢幕的 60% */
        max-width: 90%; /* 最大寬度設定為 90% */
        object-fit: cover; /* 保持圖片比例並覆蓋整個區塊 */          
        z-index: 1; /* 圖片位於最底層 */  
    }
  }
  
  /* 半透明遮罩 */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* 半透明遮罩 */
    z-index: 2; /* 遮罩位於圖片之上，文字之下 */
  }
  </style>
  