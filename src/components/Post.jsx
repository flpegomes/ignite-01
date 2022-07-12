import { useEffect, useRef, useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment'
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {


    const [comments, setComments] = useState([
        'Post muito legal!'
    ])

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })
    const isNewCommentEmpty = newCommentText.length == 0
    
    function handleNewCommentChange() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newCommentText])
        setNewCommentText('');
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório.')
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarURL}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
 
            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph') {
                        return (
                            <p key={line.content} >{line.content}</p>
                        )
                    } else if(line.type === 'link') {
                        return (
                            <p key={line.content} ><a href="">{line.content}</a></p>
                        )
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong> deixe seu feedback</strong>
                <textarea 
                    onChange={handleNewCommentChange}
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => (
                    <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                ))}
            </div>
        </article>
    )
}