import './App.css';
import Nav from './Components/Nav.jsx'
import UList from './Components/UList.jsx'
import GoodMorning from './Components/GoodMorning.jsx'
import ContactCard from './Components/ContactCard.jsx'
import Footer from './Components/Footer.jsx'


function App() {
  return (
    <div>
      <Nav />
      <GoodMorning />
      <UList />
      <ContactCard 
        name1="Puss in Boots" 
        imgurl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOAS_uk1riswyplhrFwH3OyM7ltRRTYQlzA&usqp=CAU" 
        phone="123-654-0987" 
        email="pinb@aol.com"
      />
      <ContactCard 
        name1="Toby" 
        imgurl ="https://vetstreet.brightspotcdn.com/dims4/default/95808af/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fe3%2Ff10e609e9011e0a2380050568d634f%2Ffile%2FBoxer-1-645mk062111.jpg" 
        phone="123-222-3333" 
        email="beefcake22@aol.com"
      />
      <Footer />
    </div>
  );
}

export default App;
