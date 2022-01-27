import { Component } from 'react'
import AppHeader from '../app-header'
import CardList from '../card-list'
import Footer from '../footer'
// import MovieService from '../movie-service'
import './app.css'

export default class App extends Component {

    state = {
        cardData: [
            {
                id: 1,
                val: 'one'
            },
            {
                id: 2,
                val: 'two'
            }
        ]
    }
    

    render() {
        const { cardData } = this.state

        return (
            <div>
                <AppHeader />
                <CardList cards={cardData} />
                <Footer />
            </div>
        )
    }
}