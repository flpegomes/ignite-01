import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css'
import styles from './App.module.css'

function App() {

  return (
    <div>

      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Felipe Gomes"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore autem dicta voluptates beatae maiores asperiores similique consequuntur architecto aliquid quidem, dolorem at iusto nemo iste, ut culpa laboriosam voluptas. Aspernatur."
          />
        </main>
      </div>

    </div>
  )
}

export default App

