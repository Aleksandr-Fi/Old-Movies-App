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
            this.createCardFilm()
        ]
    }

    createCardFilm() {
        return {
            id: this.maxId,
            title: `title ${this.maxId}`,
            description: `description ${this.maxId++}`
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