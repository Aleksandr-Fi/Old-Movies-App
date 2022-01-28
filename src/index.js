import ReactDOM from 'react-dom';
import './bootstrap.min.css'
import App from "./components/app";

// import { DatePicker } from 'antd';

// ReactDOM.render(<DatePicker />,
//   document.getElementById('root'));

ReactDOM.render(<App />,
  document.getElementById('root')
);

import MovieService from './movie-service';

const movie = new MovieService;

const one = movie.getResourse('')
console.log(one);