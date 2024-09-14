import styles from "./ContactStyles.module.css"

function Contact() {
  return (
    <section id='contact' className={styles.container}>
      <h1 className='sectionTitle'>Contact</h1>
      <p>
        Telegram - <a href='https://t.me/kasgoto'>@kasgoto</a>
        <br /> <br /> <br />
        Email -{" "}
        <a href='mailto:meiliunasvilius@gmail.com'>meiliunasvilius@gmail.com</a>
        <br /> <br /> <br />
        Or phone - <a href='tel:+79962417428'>8 996 241-74-28</a>
      </p>
    </section>
  )
}

export default Contact
