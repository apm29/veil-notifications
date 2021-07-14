import tailwind from 'rollup-plugin-tailwindcss';

export default {
  plugins: [
    tailwind({
      input: 'src/lib-components/index.css', // required
      // Tailor the emitted stylesheet to the bundle by removing any unused CSS
      // (highly recommended when packaging for distribution).
      purge: false,
    }),
  ],
};
