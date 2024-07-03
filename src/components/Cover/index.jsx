import Image from 'next/image';

export default function Cover() {
  return (
    <div>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}></Image>
      <section>
        <div>
          <p>Preços baixos em</p>
          <h2>Óculos de grau e de sol</h2>
          <p>Você só encontra aqui</p>
        </div>
      </section>
    </div>
  )
}