
export default class MovieService {

    _apiBase = 'https://api.themoviedb.org'
    _apikey = '?api_key=3dbe94ac65d25acc70a9f844a009c611'

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}${this._apikey}`)
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase + url + this._apikey}, received ${res.status}`)
        }
        return await res.json()
    }

    async getAllMovie() {
        const res = await this.getResourse('/3/movie/')
        return res.results
    }

    getMovie(id) {
        return this.getResourse(`/people/${id}/`)
    }
}