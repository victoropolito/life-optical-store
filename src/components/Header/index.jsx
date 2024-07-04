import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src="/logo.png" alt="Vida logo"/>
        <nav>
          <a href="/">PRODUTOS</a>
          <a href="/">SOBRE</a>
          <a href="/">CONTATO</a>
        </nav>
      </div>
    </header>
  )
}