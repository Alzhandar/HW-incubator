import Link from 'next/link';
import Layout from '../components/Layout';
import Head from 'next/head';

const posts = [
  { id: 1, title: 'Бірінші жазба', slug: 'first-post', description: 'Сипаттамасы' },
  { id: 2, title: 'Екінші жазба', slug: 'second-post', description: 'Сипаттамасы' },
  { id: 3, title: 'Үшінші жазба', slug: 'third-post', description: 'Сипаттамасы' },
  { id: 4, title: 'Төртінші жазба', slug: 'fourth-post', description: 'Сипаттамасы' },
  { id: 5, title: 'Бесінші жазба', slug: 'fifth-post', description: 'Сипаттамасы' },
  { id: 6, title: 'Алтыншы жазба', slug: 'sixth-post', description: 'Сипаттамасы' },
  { id: 7, title: 'Жетінші жазба', slug: 'seventh-post', description: 'Сипаттамасы' },
  { id: 8, title: 'Сегізінші жазба', slug: 'eighth-post', description: 'Сипаттамасы' },
  { id: 9, title: 'Тоғызыншы жазба', slug: 'ninth-post', description: 'Сипаттамасы' },
  { id: 10, title: 'Оныншы жазба', slug: 'tenth-post', description: 'Сипаттамасы' },
  { id: 11, title: 'Он бірінші жазба', slug: 'eleventh-post', description: 'Сипаттамасы' },
  { id: 12, title: 'Он екінші жазба', slug: 'twelfth-post', description: 'Сипаттамасы' },
  { id: 13, title: 'Он үшінші жазба', slug: 'thirteenth-post', description: 'Сипаттамасы' },
  { id: 14, title: 'Он төртінші жазба', slug: 'fourteenth-post', description: 'Сипаттамасы' },
  { id: 15, title: 'Он бесінші жазба', slug: 'fifteenth-post', description: 'Сипаттамасы' },
  { id: 16, title: 'Он алтыншы жазба', slug: 'sixteenth-post', description: 'Сипаттамасы' },
  { id: 17, title: 'Он жетінші жазба', slug: 'seventeenth-post', description: 'Сипаттамасы' },
  { id: 18, title: 'Он сегізінші жазба', slug: 'eighteenth-post', description: 'Сипаттамасы' },
  { id: 19, title: 'Он тоғызыншы жазба', slug: 'nineteenth-post', description: 'Сипаттамасы' },
  { id: 20, title: 'Жиырмашы жазба', slug: 'twentieth-post', description: 'Сипаттамасы' }
];


export default function Blog() {
    return (
      <Layout>
        <Head>
          <title>Блог-Blog</title>
          <meta name="description" content="Read the blog entries on My Blog" />
        </Head>
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Blog</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {posts.map(post => (
              <Link key={post.id} href={`/blog/${post.slug}`} legacyBehavior>
                <a className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 transition-colors duration-300">
                  <h2 className="text-xl font-semibold mb-2 text-black">{post.title}</h2>
                  <p className="text-gray-500">{post.description}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    );
  }