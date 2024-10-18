import { loadEnv, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
// import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";

export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  
    return defineConfig({
//   optimizeDeps: {
//     esbuildOptions: {
//         // Enable esbuild polyfill plugins
//         plugins: [
//             NodeGlobalsPolyfillPlugin({
//                 process: true,
//             }),
//             NodeModulesPolyfillPlugin(),
//         ],
//     },
//   },
  plugins: [react()],
  server: {
    open: true,
  },
});
};
