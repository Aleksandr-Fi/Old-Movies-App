console.log('hello');

const getResourse = async (url) => {
    const res = await fetch(url)
    const body = await res.json()
    return body
}

getResourse('https://swapi.dev/api/peple/1/') // true: 'https://swapi.dev/api/people/1/'
    .then((body) => {
        console.log(body);
    })
    .then(() => {
        console.log('sucsess');
    },
    () => {
        console.log('fail');
    }
    )