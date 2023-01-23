import Link from 'next/link';
import Layout from '@components/Layout';
import Button from '@components/Button';

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p className="">This is the about page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>

    <Button>Click ME</Button>
  </Layout>
);

export default AboutPage;
