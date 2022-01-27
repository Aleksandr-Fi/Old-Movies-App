import propTypes from 'prop-types'
import './card.css'

const Card = ({val}) => {

    Card.propTypes = {
        val: propTypes.string.isRequired
    }
    
    return <div className='card'>{val}</div>
}
export default Card