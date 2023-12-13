import React, {useContext} from 'react'

import { GlobalContext } from '../Context/GlobalContext'

const TransactionList = () => {
  return (
    <div>
      <h3>History</h3>
      <ul className='list'>
        <li className='minus'>
            Cash <span>-$500</span><button className='delete-btn'></button>
        </li> 
      </ul>
    </div>
  )
}

export default TransactionList
