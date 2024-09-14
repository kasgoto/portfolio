import styles from "./ProjectsStyles.module.css"
import ProjectCard from "../../common/ProjectCard"
import whatsgreen from "../../assets/whatsgreen.png"
import elegant from "../../assets/3legant.png"
import createx from "../../assets/createx.png"
import fashionReact from "../../assets/fashion react.png"
import lofthouse from "../../assets/lofthouse.png"
import modimal from "../../assets/modimal.png"
import panto from "../../assets/panto.png"
import reactTodo from "../../assets/react todo.png"
import reactWeather from "../../assets/react weather.png"

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={reactWeather}
          link='https://github.com/kasgoto/weather'
          h3='Goto Weather'
          p='React & OpenWeather'
        />
        <ProjectCard
          src={createx}
          link='https://github.com/kasgoto/createx'
          h3='CreateX'
          p='Construction website'
        />
        <ProjectCard
          src={whatsgreen}
          link='https://github.com/kasgoto/whatsapp-green-api'
          h3='WhatsGreen'
          p='Whatsapp clone'
        />
        <ProjectCard
          src={modimal}
          link='https://github.com/kasgoto/Modimal'
          h3='Modimal'
          p='Shopping website'
        />
        <ProjectCard
          src={reactTodo}
          link='https://github.com/kasgoto/todo'
          h3='Todo App'
          p='React app'
        />
        <ProjectCard
          src={fashionReact}
          link='https://github.com/kasgoto/fashion'
          h3='Fashion React'
          p='Shopping website'
        />
        <ProjectCard
          src={panto}
          link='https://github.com/kasgoto/panto'
          h3='Panto'
          p='Interior website'
        />
        <ProjectCard
          src={elegant}
          link='https://github.com/kasgoto/elegant'
          h3='3legant'
          p='Shopping website'
        />
        <ProjectCard
          src={lofthouse}
          link='https://github.com/kasgoto/LoftHotel'
          h3='LoftHouse'
          p='Housing website'
        />
      </div>
    </section>
  )
}

export default Projects
