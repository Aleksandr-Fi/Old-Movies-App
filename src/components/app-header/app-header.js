import Filter from '../filter'
import SearchForm from '../search-form'
import './app-header.css'

const AppHeader = () => {
    return (
        <header className="app-header">
            <Filter />
            <SearchForm />
        </header>
    )
}

export default AppHeader