import path from 'path'
import { GET } from 'fetchier'

export default {
  getRoutes: async () => {
    const posts = await GET({ url: 'https://jsonplaceholder.typicode.com/posts' });

    return [
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          template: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
  plugins: [
    require.resolve('react-static-plugin-styled-components'),
    [ require.resolve('react-static-plugin-source-filesystem'), { location: path.resolve('./src/pages') } ],
    require.resolve('react-static-plugin-reach-router'),
    [ require.resolve('next-fucss'), { styleFile: '/src/style.css' } ]
  ],
  devServer: {
    port: '8080',
    host: '0.0.0.0',
    disableHostCheck: true,
    hot: false
  }
}
