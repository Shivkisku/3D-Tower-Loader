import Head from 'next/head';
import Loader from '../components/Loader';

export default function Home() {
  return (
    <div>
      <Head>
        <title>3D Tower Loader</title>
        <meta name="description" content="3D Tower Loader Animation using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Loader />
      </main>
    </div>
  );
}
