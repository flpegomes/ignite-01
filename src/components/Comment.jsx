import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
    

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/flpegomes.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Felipe Gomes</strong>
                            <time title="11 de maio as 8h13" dateTime='2022-05-11 08:13:00'>Cerca de 1h atras</time>
                        </div>

                        <button title="Deletar comentario">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabens</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}