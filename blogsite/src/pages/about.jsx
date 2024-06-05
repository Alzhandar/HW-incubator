import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
        <div className="text-lg text-gray-600 mb-4">
          <p>This page provides information about the blog and its creators.</p>
        </div>
      </div>
    </Layout>
  );
}
