import React,{useState} from 'react'
import MyButton from './MyButton'

function Formulary({}) {
  
  const [newName,setNewname]= useState('DANILO');

  const [name,setName]=useState('oscar');

  const CambiarNombre=(e)=>{    
    
    setName(prevName=>(prevName === 'oscar' ? newName : 'oscar'))
    // console.log(setNewname);
      
  };

  return (
    <>
    <div className='form'>
      
        <h1>Mi formulario. </h1>

        <label>Nombre:</label>
        <input  className='border-[black] border-[1px] rounded bg-[white] px-[2px] w-[330px]'
        text='text'
        name='nombre'
        value={name}
        onChange={CambiarNombre}></input>

        <label>Apellido:</label>
        <input 
        type='text'
        name='apellido'
        className='border-[black] border-[1px] rounded w-[330px]'></input> 

        <label>Teléfono:</label>
        <input 
        type='number'
        name='apellido'
        className='border-[black] border-[1px] rounded w-[330px]'></input> 

        <label>Ciudad:</label>
        <input 
        type='text'
        name='apellido'
        className='border-[black] border-[1px] rounded w-[330px]'></input>

        <div className='flex gap-[10px]'>
        <p>Sexo:</p> 
        <label>Masculino</label>
        <input 
        type='radio'
        name='apellido'
        className='border-[black] border-[1px] rounded w-[20px]'></input>

        <label>Femenino</label>
        <input 
        type='radio'
        name='apellido'
        className='border-[black] border-[1px] rounded w-[20px]'></input>
        </div>
        <label>Deja tu comentario:</label>

        <textarea className='w-[400px] rounded border-[1px] border-[gray] ' 
        placeholder='Escribe algo aqui' ></textarea>


        <MyButton  onClick={CambiarNombre}> </MyButton>

    </div>

    <div className='border-[1px] border-[black] rounded bg-[#75ecdc] text-center'>
        <p>Hi, everybody! nice to meet you !</p>
        <p>I'm glad to be here with you. because I can knowlodge new person in the world.</p>
        <p>today I'm going to talk about my day.</p>
        <p>My day is very funny and interesting. I always wake up at ten to six am</p>
        <p>Sometime I have breakfast a cup of coffe with bread in the morning. I have breakfast at half past six am .   </p>
        <p>after that, I leave to work at sevent o'clock. I am busy all day. because I have a lot of things to Do. </p>
    </div>

      <div className='bg-[#d6f453] font-serif '>
        <h1 className='text-2xl font-semibold underline'>My working Day</h1>
        <p>My working day starts very early. From Monday to Friday I get up at half past three and i have a shower and a cup of coffee. </p>
        <p>I usally leave the house at ten past four because the car always  arrives a few minutes aerly. I get to the studio about at five o'clock and start work. </p>
        <p>My programmme Good Morning Britain starts at seven o'clock and finish at nine o'clock. </p>
        <p>Then I leave  the studio a quater past ten. After that, I go shopping and visit some friends. I get home at three o'clock.  </p>
        <p>A woman helps me with the housework and the ironing. I read a newspaper and do some work.  </p> <br />
        <p>Then my husband gets home at half past five in the evening and I cook dinner. We stay at home in the evening.  </p>
        <p>We don't go out because I go to be very aerly. We usually watch tv and then I go to bed at eight, I usually asleep by nine o'clock   </p>
        <p>I think my job is very interesting but I don't like getting up very early.   </p>
      </div>
    </>
  )
}

export default Formulary
