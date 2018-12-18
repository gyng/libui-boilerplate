import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const DEBUG = !!process.env.DEBUG;

export default {
  input: "lib/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
    sourcemap: true
  },
  external: ["react", "react-dom"],
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true
    }),
    postcss({
      extract: true,
      modules: true,
      namedExports: true,
      use: [] // Don't use sass/scss loaders
    }),
    ...(!DEBUG ? [terser()] : [])
  ]
};
