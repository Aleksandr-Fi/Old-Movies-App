import propTypes from 'prop-types'
import './card-list.css'
import { Card } from 'antd';

const { Meta } = Card;

const CardList = ({cards}) => {

    CardList.propTypes = {
        cards: propTypes.array.isRequired
    }

    const elements = cards.map(card => {
        return (
            <Card
            key={card.id}
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        )
    })

    return (
        <section className='card-list'>
            {elements}
        </section>
    )
}
export default CardList