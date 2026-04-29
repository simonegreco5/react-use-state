// sezione import
import languages from '../assets/languages.js'

export default function AppMain(){

    return(
        <main>
            {
                languages.map((item) => (
                    
                    <div className="card" key={item.id}>
                        <button className="btn">
                            {item.title}
                        </button>
                        <div className="card-body">
                            {item.description}
                        </div>
                    </div>
                
                ))
            }
        </main>      
    )
}