import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { defineConfig } from 'vite'

// export default {
//   plugins: [
//     vue(),
//     Components({
//       resolvers: [VantResolver()],
//     }),
//   ],
// };


export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  base: './'
})

