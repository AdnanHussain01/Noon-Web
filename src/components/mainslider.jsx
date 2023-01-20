import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <div className='mainslider'>
      <div><Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://f.nooncdn.com/mpcms/EN0001/assets/83b71291-65f5-4fcc-8db8-a72d91b32426.jpg"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://f.nooncdn.com/mpcms/EN0001/assets/b5227341-e747-46b2-ae43-bebbe9dc576d.png"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://f.nooncdn.com/mpcms/EN0001/assets/d1f344a8-b1d7-43d9-95e7-114069806252.png"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://f.nooncdn.com/mpcms/EN0001/assets/fe0595be-0e5c-4681-a68d-1daaae0719f9.png"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://f.nooncdn.com/mpcms/EN0001/assets/e0bf5428-90c7-4ca9-a3c4-54b97e099bc6.png"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://f.nooncdn.com/mpcms/EN0001/assets/aae00a91-b4a9-46f4-840a-40b5b36ed2dd.png"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://f.nooncdn.com/mpcms/EN0001/assets/47d5d396-239a-4ab8-b5e3-ae6765d93a49.png"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></div>

    <div className="slider">
        <a href=""  ><img src="https://f.nooncdn.com/mpcms/EN0001/assets/c6f2bd47-5eca-4908-b3a5-d377e231622a.png" /></a>
         <a href=""><img src="https://f.nooncdn.com/mpcms/EN0001/assets/4b795127-3b55-499d-831b-a361e0eae5b0.png" /></a>
    </div>
    </div>
    
  );
}

export default UncontrolledExample;