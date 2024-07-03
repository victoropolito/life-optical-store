import Image from 'next/image'

export default function About() {
  return (
    <div>
      <h2>Quem somos nós?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div>
        <div>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}></Image>
          <div>
            <h3>Nossas Filiais</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div>
          <div>
            <h3>Atendimento flexível</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}></Image>
        </div>
      </div>
    </div>
  )
}