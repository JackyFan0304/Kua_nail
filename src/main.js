const { createApp } = Vue;
createApp({
    data() {
        return {
            message: 'hello Vue!',
            test_message: 'test'
        }
    }
}).mount('#app'); // 將應用掛載到 #app 元素上