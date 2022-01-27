import MovieService from './components/movie-service'

console.log('hello');

const movie = new MovieService()

// swapi.getAllPeople().then((people) => {
//     people.forEach(p => {
//         console.log(p.name);
//     });
// })

movie.getPerson(3).then((person) => {
    console.log(person.name);
})