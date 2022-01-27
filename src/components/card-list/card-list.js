import Card from '../card'
import propTypes from 'prop-types'
import './card-list.css'

const CardList = ({cards}) => {

    CardList.propTypes = {
        cards: propTypes.array.isRequired
    }

    const elements = cards.map(card => {
        return <Card key={card.id} {...card} />
    })

    return (
        <section className='card-list'>
            {elements}
        </section>
    )
}
export default CardList