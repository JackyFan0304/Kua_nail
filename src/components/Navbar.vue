<template>
  <nav class="navbar">
    <div class="social_media_icon">
      <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
        <img :src="fbIcon" alt="Facebook" />
      </a>
      <a href="https://twitter.com/" target="_blank" aria-label="X (Twitter)">
        <img :src="xIcon" alt="X (Twitter)" />
      </a>
      <a href="https://www.instagram.com/kua_nail/" target="_blank" aria-label="Instagram">
        <img :src="igIcon" alt="Instagram" />
      </a>
      <a href="https://tw.linebiz.com/login/" target="_blank" aria-label="LINE">
        <img :src="lineIcon" alt="LINE" />
      </a>
      <a href="https://www.youtube.com/" target="_blank" aria-label="YouTube">
        <img :src="ytIcon" alt="YouTube" />
      </a>
    </div>
    <div class="navigation">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#hero">Hero</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>  
  
<script>
  import fbIcon from '../assets/icon/fb.webp'; // 導入 Facebook 圖標
  import xIcon from '../assets/icon/x.webp'; // 導入 X 圖標
  import igIcon from '../assets/icon/ig.webp'; // 導入 Instagram 圖標
  import lineIcon from '../assets/icon/LINE.svg'; // 導入 LINE 圖標
  import ytIcon from '../assets/icon/yt.webp'; // 導入 Youtube 圖標

  export default {
    name: 'Navbar',
    data() {
      return {
        igIcon, // 存儲 Instagram 圖標
        lineIcon, // 存儲 LINE 圖標
        fbIcon, // 存儲 Facebook 圖標
        xIcon, // 存儲 X 圖標
        ytIcon, // 存儲 YouTube 圖標
      };
    },
  };
</script>
  
<style scoped lang="scss">
.navbar {
  display: flex; /* 使用 Flexbox 排版 */
  justify-content: center; /* 靠中對齊 */
  align-items: center; /* 垂直居中 */
  position: fixed; /* 固定在頁面最上方 */
  top: 0; /* 距離頂部為 0 */
  left: 0; /* 距離左邊為 0 */
  width: 100%; /* 寬度為100% */
  padding: 10px; /* 調整內邊距 */
  background-color: #fff; /* 背景顏色 */
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1); /* 添加陰影效果 */
  z-index: 1000; /* 確保在最上層顯示 */
  flex-wrap: wrap; /* 當空間不足時自動換行 */
  
  .social_media_icon {
    display: flex; /* 使用 Flexbox 排版圖標 */
    
    a {      
      margin-right: clamp(10px, 5vw + 1rem, 20px); // 根據畫面寬度調整間距，並設定最小值和最大值
      img {
        width: 24px; /* 調整圖標大小 */
      }
    }
  }

    .navigation {
    display: flex; // 使用 Flexbox 排版
    justify-content: center; // 水平置中
    align-items: center; // 垂直居中（可選）

    ul {
      list-style-type: none; // 去掉列表項的圓點
      padding: 0; // 去掉內邊距
      display: flex; // 使用 Flexbox 排版以保持橫向排列

      li {        
        margin-right: clamp(10px, 5vw + 1rem, 20px); // 根據畫面寬度調整間距，並設定最小值和最大值

        a {
          text-decoration: none; // 去掉下劃線
          color: #333; // 字體顏色
          letter-spacing: 1px; // 增加字母間距
          font-family: 'Noto Sans TC', 'Microsoft JhengHei', sans-serif; // 設置字體
        }
      }
    }
  }
}
</style>