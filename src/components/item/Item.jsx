import './Item.css'
import {useState} from 'react'

const Item = ({card}) => {
    const{name, img, options} = card;

    const[showLogo, setShowLogo] = useState(true)

    return (
        <div 
          className='card' 
          onClick={() => setShowLogo(!showLogo)}>

            {showLogo ? (
                <div>
                    <img src={img} alt="resim" className="card-logo"/>

                    <h3 className='card-title'>{name}</h3>
                </div>
                ) : (
                <ul className='list'>
                    {options.map((element, index) => {
                        return <li key={index}>{element}</li>
                    })}
                </ul>)
            }

        </div>
    )
}

export default Item;