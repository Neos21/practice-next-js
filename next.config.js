/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // コレを書くことで `$ next build` により静的なファイルを生成できるようになる (`$ next export` コマンドは Deprecated)
  distDir: 'docs',  // デフォルトでは `out/` ディレクトリに出力されるのを変更できる https://nextjs.org/docs/pages/api-reference/next-config-js/distDir
  basePath: '/practice-next-js',  // GitHub Pages にデプロイして動作させるためベースパスを下げる https://nextjs.org/docs/pages/api-reference/next-config-js/basePath
  trailingSlash: true  // `index.html` を生成させ 404 を回避する
};

module.exports = nextConfig;
