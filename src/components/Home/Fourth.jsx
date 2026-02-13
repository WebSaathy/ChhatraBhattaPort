import { Link } from 'react-router-dom'

import  '../style/Fourth.scss'
function Fourth() {
  return (
    <>
    <div className='Fourthcontainer'>
        <div className="text">
            <h2>हाम्रा सबै दस्ताबेजहरू !</h2>
            <div className="button">
                <button><Link>पढ्नुहोस्</Link></button>
                <button><Link>डाउनलोड गर्नुहोस्</Link></button>
            </div>

        </div>
        <div className="image">
          <img src="Book.png" alt="" />
            
        </div>
    </div>
    </>
  )
}

export default Fourth