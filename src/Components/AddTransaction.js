import React from 'react'

const AddTransaction = () => {
  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
        <div className='form-control'>
            <label htmlFor="text" />
                <input type='text' placeholder='Enter text...' />
        </div>
        <div className='form-control'>
            <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                <input type='number' placeholder='Enter amount...' />
        </div>
      </form>
    </div>
  )
}

export default AddTransaction
