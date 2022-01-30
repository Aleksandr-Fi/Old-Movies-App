import { Component } from 'react'
import AppHeader from '../app-header'
import CardList from '../card-list'
import Footer from '../footer'
import './app.css'

export default class App extends Component {
    maxId = 1

    state = {
        cardData: [
            this.createCardFilm(),
            this.createCardFilm(),
            this.createCardFilm(),
            this.createCardFilm(),
            this.createCardFilm(),
            this.createCardFilm(),
        ],
    }

    createCardFilm() {
        return {
            id: this.maxId,
            title: `The way back ${this.maxId++}`,
            premier: `March 5, 2020`,
            genre: ['Action', 'Drama'],
            description: `A former basketball all-star, who has lost his wife and family foundation in a struggle with 
                addiction attempts to regain his soul  and salvation by becoming the coach 
                of a disparate ethnically mixed high ...`,
        }
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
