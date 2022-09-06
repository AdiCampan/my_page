import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import InfoDate from './InfoDate';
import Body from './Body';
import Card from 'react-bootstrap/Card';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';



function App() {

    // const { isLoaded } = useLoadScript ({googleMapsApiKey: 'AIzaSyDNLvO-zSovTtvyslEJtvOUXVddqwgum4M'})

    //  if(!isLoaded) return<div>Loading...</div>
  return (
    <>
      <div className="App">
        <Header />
        {/* <NavBar /> */}
        <div className='body'>
          <InfoDate />
          <div className='text' > <Body /></div>
         
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Contact information </Card.Header>
            <Card.Body>
              <Card.Title>ADRIAN CAMAPN</Card.Title>
              <Card.Text>
                Date of Birth: 31/05/1974
                Nationality: Roumanian<br/>
                Tel: 0034 637951683 <br/>
                City: Onda <br/>
                ZipCode  12200 <br/>
                Castellon,
                Spain

              </Card.Text>
              {/* <Map /> */}
              <iframe className='iframe' src="https://maps.google.com/?ll=39.969731129782595, -0.25753234645673917&z=10&t=m&output=embed" frameBorder="0" ></iframe>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;


// function Map () {
//   return(
//     <GoogleMap
//       zoom={10}
//       center={{lat:44 ,lng:-80}}
//       mapContainerClassName='map-comntainer'
//     ></GoogleMap>
//   )
// }
