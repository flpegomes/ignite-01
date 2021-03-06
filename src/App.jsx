import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css'
import styles from './App.module.css'

function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarURL: "https://github.com/flpegomes.png",
        name: "Felipe Gomes",
        role: "Frontend Developer"
      },
      content: [
        { type: "paragraph", content: "Fala galeraa ๐" },
        { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐"},
        { type: "link", content: "jane.design/doctorcare"},
      ],
      publishedAt: new Date("2022-05-03 20:00:00")
    },
    {
      id: 2,
      author: {
        avatarURL: "https://github.com/matheusbrito07.png",
        name: "Matheus Tonhรฃo",
        role: "Frontend Developer"
      },
      content: [
        { type: "paragraph", content: "Fala galeraa ๐" },
        { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐"},
        { type: "link", content: "jane.design/doctorcare"},
      ],
      publishedAt: new Date("2022-05-10 20:00:00")
    }
  ] 

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>   
          {posts.map(post => (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>

    </div>
  )
}

export default App

