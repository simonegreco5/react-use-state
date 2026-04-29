// sezione import
import { useState } from 'react'
import languages from '../assets/languages.js'

export default function AppMain(){

    const [isActive, setIsActive] = useState(false)

    
    function show(){
        setIsActive((prevState) => !prevState)
    }

    

    return(
        <main>
            {
                languages.map((item) => (
                    
                    <div className="card" key={item.id}>
                        <button className="btn" onClick={show} >
                            {item.title}
                        </button>
                        {
                            isActive && (<div className="card-body">
                            {item.description}
                            </div>)
                        }
                    </div>
                
                ))
            }
        </main>      
    )
}