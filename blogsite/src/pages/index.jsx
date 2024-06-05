import Layout from '../components/Layout';
import Head from 'next/head';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Welcome to My Blog</title>
        <meta name="description" content="Explore the latest posts and updates on My Blog" />
      </Head>
      <div className="container mx-auto px-4 py-6 text-center">
        <h1 className="welcome-title">Welcome to My Blog</h1>
        <p className="blog-description">This is a blog</p>
        <img src="/images/image.png" alt="Sample Image" className="mx-auto my-4 w-1/2 h-auto" />
      </div>
    </Layout>
  );
}
