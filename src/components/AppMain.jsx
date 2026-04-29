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
            {
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
            }
        </main>      
    )
}