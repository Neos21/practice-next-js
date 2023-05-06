import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.css';

export default function Index() {
  return (
    <main className={styles.main}>
      <h1>Index</h1>
      <p>
        Powered By
        <Image src="/practice-next-js/vercel.svg" alt="Vercel Logo"  width={100} height={24} priority={true}  className={styles.img} />
        &amp;
        <Image src="/practice-next-js/next.svg"   alt="Next.js Logo" width={180} height={37} priority={false} className={styles.img} />
      </p>
      <p>
        <Link href="/about">Go To About Page</Link>
      </p>
    </main>
  );
}
