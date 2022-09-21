import './App.css';
// import Nav from './Components/Nav.jsx'
// import Counter from './Components/Counter.jsx'
// import Heading from './Components/Heading.jsx'
// import UList from './Components/UList.jsx'
// import Modal from './Components/Modal.jsx'
// import ToDoItem from './Components/ToDoItem.jsx'
// import GoodMorning from './Components/GoodMorning.jsx'
// import ContactCard from './Components/ContactCard.jsx'
// import Jokes from './Components/Jokes.jsx'
// import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
// import Footer from './Components/Footer.jsx'


function App() {
//   const [showModal, setShowModal] = useState(false)
  
//   function onToDoDelete() {
//     setShowModal(true)
//     console.log('Delete')
// }

// function cancelModal() {
//   setShowModal(false)
// }
// function confirmModal() {
//   setShowModal(false)
// }

////only runs on mount
// useEffect(() => {
//   console.log('onMount')
// }, [])

////will run any time showModal changes
// useEffect(() => {
//   console.log('onMount')
// }, [showModal])

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )

  // return (
  //   <div>
  //     <Nav />
  //     <Heading />
  //     <div>
  //       <input type="text" onChange={(event) => {
  //         console.log(event.target.value)
  //       }}/>
  //       <button onClick={() => setShowModal(true)}>Add To Do</button>
  //       <div className='container1'>
  //           <ToDoItem
  //               onToDoDelete={onToDoDelete} 
  //               title="To Do #1"
  //           />
  //           <ToDoItem 
  //               onToDoDelete={onToDoDelete}
  //               title="To Do #2"
  //           />
  //           <ToDoItem 
  //               onToDoDelete={onToDoDelete}
  //               title="To Do #3"
  //           />            
  //       </div>
  //     </div>
      
  //     {showModal ? <Modal cancelModal={cancelModal} confirmModal={confirmModal} title1="Are you sure?"/> : null}
  //     <GoodMorning />
  //     <ContactCard 
  //       name1="Puss in Boots" 
  //       imgurl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOAS_uk1riswyplhrFwH3OyM7ltRRTYQlzA&usqp=CAU" 
  //       phone="123-654-0987" 
  //       email="pinb@aol.com"
  //     />
  //     <ContactCard 
  //       name1="Toby" 
  //       imgurl ="https://vetstreet.brightspotcdn.com/dims4/default/95808af/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fe3%2Ff10e609e9011e0a2380050568d634f%2Ffile%2FBoxer-1-645mk062111.jpg" 
  //       phone="123-222-3333" 
  //       email="beefcake22@aol.com"
  //     />
  //     <Jokes 
  //       quest1="Why did the chicken cross the road?"
  //       ans1="To get to the other side"
  //     />
  //     <Jokes 
  //       quest1="A horse walks into a bar"
  //       ans1="It said ouch"
  //     />
  //     <Jokes 
  //       quest1="A horse walks into a bar"
  //       ans1="Thats what she said"
  //     />
  //     <Footer />
  //   </div>
  // );
}

export default App;
