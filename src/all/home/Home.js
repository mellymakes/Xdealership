import React from 'react'
import Header from './components/Header'
import Quality from './components/Quality'
import WannaBuy from './components/WannaBuy'



const Home = ({}) =>{

   return(
        <div className="home">
        
        <Header />
        <Quality />
        <WannaBuy />

        </div>

   )
    }



export default Home