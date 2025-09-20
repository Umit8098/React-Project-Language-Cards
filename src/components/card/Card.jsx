import {languages} from '../../helpers/data';
import Item from '../item/Item'
import './Card.css'

const Card = () => {
    return (
        <div className="cards-area-container">
            
            <div className="bars">
                <span class="bars-text">maşallah</span>
            </div>
            
            <h1 className="language-title">Languages</h1>
            
            <div className="cards-container">
                {
                    languages.map((item, index) => {
                        // return (<h4>{item.name}</h4>)
                        return <Item card={item} key={index}/>
                    })
                }
            </div>

        </div>
    )
}

export default Card;