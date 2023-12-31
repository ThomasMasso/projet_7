import CardImage from '../../atoms/CardImage/index'
import CardTitle from '../../atoms/CardTitle/index'

export default function CardAuthor({ title, cover }) {
    return (
        <>
            <div className="author-card">
                <CardImage cover={cover} title={title} />
                <CardTitle>{title}</CardTitle>
            </div>
        </>
    )
}
