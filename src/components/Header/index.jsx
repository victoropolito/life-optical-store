import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}></Image>
      <section>
        <Link href="/">Produtos</Link>
        <Link href="/">Sobre</Link>
        <Link href="/">Contato</Link>
      </section>
    </header>
  )
}