import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-4xl font-semibold" style={{ color: '#000', fontFamily: 'Inter', fontWeight: '600' }}>My Blog</h1>
        <nav>
          <Link href="/" className="menu-link">Home</Link>
          <Link href="/about" className="menu-link">About</Link>
          <Link href="/blog" className="menu-link">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
