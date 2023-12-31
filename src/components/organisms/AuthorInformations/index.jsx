import CardAuthor from '../../molecules/CardAuthor/index'
import Rating from '../../molecules/Rating/index'

export default function AuthorInformations({ housing }) {
    return (
        <div className="housing__informations-author">
            <CardAuthor
                title={housing.host.name}
                cover={housing.host.picture}
            />
            <Rating rating={housing.rating} />
        </div>
    )
}
