import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Head from 'next/head';

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <Head>
        <title>{slug ? slug.replace(/-/g, ' ') : 'Loading...'} - My Blog</title>
        <meta name="description" content={`Read more about ${slug ? slug.replace(/-/g, ' ') : 'Loading...'}`} />
      </Head>
      <div className="container mx-auto px-4 py-6">
        {slug ? (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{slug.replace(/-/g, ' ')}</h1>
            <p className="text-lg text-gray-600">This is the blog post content for "{slug.replace(/-/g, ' ')}".</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
}
