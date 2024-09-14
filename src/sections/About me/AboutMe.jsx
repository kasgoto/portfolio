import styles from "./AboutMe.module.css"

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <h1 className='sectionTitle'>About Me</h1>
      <p>
        My name is Vilius and I`m a React frontend developer from Russia,
        Petrozavodsk. <br/> <br/> <br/> I`ve been keen on programming since school and I`ve been
        developing websites and React apps for more than a year now. I have a
        large portfolio and experience in freelancing too. My goal is to learn
        and grow as a programmer and I`m looking for the right team to help me
        achieve that. <br/> <br/> <br/> My English is C1 and I`m fluent in Russian. I`m looking
        forward to working with you.
      </p>
    </div>
  )
}

export default AboutMe
