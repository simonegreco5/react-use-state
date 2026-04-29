// sezione import
import { useState } from 'react'
import languages from '../assets/languages.js'

export default function AppMain(){

    const [isActive, setIsActive] = useState(false)


    // function show(id){

    //     // if (isActive === id){
    //     //     return setIsActive(false)
    //     // }
    //     setIsActive(id)
    // }

    

    return(
        <main>

            {/* INIZIO - ESERCIZIO BASE */}

            {/* {
                languages.map((item) => (
                    
                    <div className="card" key={item.id}>
                        <button className={`${isActive === item.id ? 'btn-warning' : 'btn'}`} onClick={() => setIsActive(item.id)} >
                            {item.title}
                        </button>
                        {
                            isActive === item.id && (<div className="card-body">
                            {item.description}
                            </div>)
                        }
                    </div>
                
                ))
            } */}

            {/* FINE - ESERCIZIO BASE */}

            {/* - - - X X X X X X X X X X X X X - - - */}

            {/* INIZIO - ESERCIZIO BONUS */}

            {/* lista dei bottoni in d-flex */}
            <div className="contenitore">

                {
                languages.map((item) => (
                
                <button className={`${isActive === item.id ? 'btn-warning' : 'btn'}`} onClick={() => setIsActive(item.id) } key={item.id}>
                    {item.title}
                </button>

                ))  
                }

            </div>
            
            {/* card singola con descrizione del singolo linguaggio */}

            {/* lasciamo card fuori il ciclo map, perché vogliamo una singola card esternamente,
                cosi cicliamo le singole descrizioni all'interno di essa */}
            {
            <div className="card">
                        {
                            languages.map((item) => (
                                isActive === item.id && (
                                    <div className="card-body">
                                        {item.description}
                                    </div>
                                )  
                            ))
                        }
            </div>
            }

            {/* FINE - ESERCIZIO BONUS */}

        </main>      
    )
}