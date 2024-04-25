import React from "react";

function ClassNote() {
   const [contact, setContact] = React.useState({
      firstName: "Shabs",
      lastName: "Doe",
      phone: "+1 (719) 555-1212",
      email: "itsmyrealname@example.com",
      isFavorite: false
   })

   // console.log(contact);

   let starIcon = contact.isFavorite ? `https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-star-vector-icon-png-image_696411.jpg` : `https://www.pngitem.com/pimgs/m/124-1240811_transparent-star-icon-png-empty-star-icon-png.png`
    
   function toggleFavorite() {
      // console.log("Toggle Favorite")
      setContact(preState => {
         return {
            ...preState,
            isFavorite: !preState.isFavorite
         }
      })
   }
    
   return (
      <main>
         <article className="card">
            <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?semt=ais_hybrid" className="card--image" alt='user-img'/>
            <div className="card--info">
               <img 
                  src={starIcon} 
                  alt='star-icon'
                  className="card--favorite"
                  onClick={toggleFavorite}
               />
               <h2 className="card--name">
                  {contact.firstName} {contact.lastName}
               </h2>
               <p className="card--contact">{contact.phone}</p>
               <p className="card--contact">{contact.email}</p>
            </div>
                
         </article>
      </main>
   )
}


function App() {
   const [squares, setSquares] = React.useState(boxes)
   
   function toggle(id) {
       setSquares(prevSquares => {
           const newSquares = []
           for(let i = 0; i < prevSquares.length; i++) {
               const currentSquare = prevSquares[i]
               if(currentSquare.id === id) {
                   const updatedSquare = {
                       ...currentSquare,
                       on: !currentSquare.on
                   }
                   newSquares.push(updatedSquare)
               } else {
                   newSquares.push(currentSquare)
               }
           }
           return newSquares
       })
   }
   
   const squareElements = squares.map(square => (
       <Box 
           key={square.id} 
           id={square.id}
           on={square.on} 
           toggle={toggle}
       />
   ))
   
   return (
       <main>
           {squareElements}
       </main>
   )
}



function Box(props) {
   const styles = {
      backgroundColor: props.on ? "#222222" : "transparent"
   }
   
   return (
      <div 
      style={styles} 
      className="box"
      onClick={()=>props.toggle(props.id)}
      >
       </div>
   )
}

// OR THIS WAY UNDER


export default function App2() {
   const [squares, setSquares] = React.useState(boxes)
   
   function toggle(id) {
       setSquares(prevSquares => {
           return prevSquares.map(square => {
            return square.id === id ? {...square, on: !square.on} : square
           })
       })
   }
   
   const squareElements = squares.map(square => (
       <Box 
           key={square.id}
           on={square.on} 
           toggle={() => toggle(square.id)}
       />
   ))
   
   return (
       <main>
           {squareElements}
       </main>
   )
}


function Box(props) {
   const styles = {
      backgroundColor: props.on ? "#222222" : "transparent"
   }
   
   return (
      <div 
      style={styles} 
      className="box"
      onClick={props.toggle}
      >
       </div>
   )
}
