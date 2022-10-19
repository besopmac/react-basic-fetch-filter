import './styles.css'

export const PostCard = ({ title, body, cover, id }) => {
    return (
        <div className="post">
            <img src={cover} alt={title} />
            <div className="post-content">
                <h4>{id}. {title}</h4>
                <p>{body}</p>
            </div>
        </div>
    )
}