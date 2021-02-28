import styles from '../styles/components/LoginUp.module.css';


export function LoginUp() {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>

        <div className={styles.card}>
          <div>
            <h1>Faça seu login na plataforma</h1>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.logo}>
            <img src="/logo-full.svg" alt=""/>
          </div>
            <h2>Bem-Vindo</h2>

          <div className={styles.icones}>
            <img src="Github.png" alt="icone github"/>

            <p>Faça login com seu Github</p>
          </div>

          <div>
            <form action="" className={styles.form}>
              <input type="text"/>
              <button><img src="/Arrow.png" alt=""/></button>
              
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}