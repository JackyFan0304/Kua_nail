<!-- <template>
    <section class="gallery">
      <h2>Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-item" v-for="(photo, index) in photos" :key="index">
          <img :src="photo" alt="Gallery Image" />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Gallery',
    data() {
      return {
        photos: [],
      };
    },
    created() {
      this.fetchInstagramPhotos();
    },
    methods: {
      async fetchInstagramPhotos() {
        try {
          const userId = '8819672801389645'; // 替換為你的用戶 ID
          const accessToken = 'EAAGhXB1JZB50BO9SufoFL4KlrHtGdCEQDiDfLOjKEAWvMmmUalDEcbXML4IILv7yhG5INHRnsiVooypyNcKaOFYT9m8YAcXPVhbM79sVa66UFyl9zyJBWmXEIjV7OKKeM4TCpKsW8pdq9LTxlTL2bzv9ZAMm8NRtOYpZAgzwWdE9miFILNyadzC6M7D76vPByKGl35i2hcMyxajGhZBBOHM8Ux0KFgUqDef2QSef9qIqUlt9j0prtmPz5uZB7abZCihcZAXIyd5iq8ZD'; // 替換為你的訪問令牌
          
          const response = await axios.get(`https://graph.instagram.com/${userId}/media`, {
            params: {
              fields: 'id,media_type,media_url,caption', // 可以根據需要添加其他字段
              access_token: accessToken,
            },
          })
  
          // 獲取前六張圖片的 URL
          this.photos = response.data.data
            .filter(photo => photo.media_type === 'IMAGE')
            .slice(0, 6)
            .map(photo => photo.media_url);
        } catch (error) {
            if (error.response) {
                console.error('Error fetching Instagram photos:', error.response.data);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error setting up request:', error.message);
            }
        }
      },
    }
  };

  </script>
  
  <style scoped lang="scss">
  .gallery {
    padding: 2rem;
    z-index: 3;
  
    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
    }
  
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
  
      .gallery-item {
        overflow: hidden;
        border-radius: 8px;
  
        img {
          width: 100%;
          height: auto;
          display: block;
        }
      }
    }
  }
  </style> -->