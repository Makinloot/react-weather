import errorImg from '../images/404.png';
import SearchWeather from './SearchWeather';

const Error = (): JSX.Element => {
  return (
    <div className="Error">
      <div className="container">
        <div className="Error-wrapper">
          <div className="Error-img">
            <img src={errorImg} alt="Error 404, page not found" />
          </div>
          <h2 style={{textAlign: 'center'}}>Return to <a href="/" style={{textDecoration: 'underline'}}>MAIN PAGE</a></h2>
          <SearchWeather />
        </div>
      </div>
    </div>
  )
}

export default Error;
