import React from 'react'


function MyButton({onClick}) {

  return (
    <div>

        <button onClick={onClick} className='border-[2px] border-[black] rounded  bg-[#57ef3c]'> Cambiar</button>

    </div>
  )
}

export default MyButton
