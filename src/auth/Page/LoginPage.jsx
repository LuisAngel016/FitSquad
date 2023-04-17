import { Link } from 'react-router-dom';
import imgFit from '../../assets/img/imgLogin.jpg';

export const LoginPage = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-32 flex justify-center bg-white ">
        <div className="mr-2">
          <img
          className='w-4/5 h-auto rounded-xl shadow-sm' 
          src={ imgFit } 
          alt="logo de fitSquad" 
          />
        </div>
          <hr />
        <section className='bg-terciary flex-col justify-center'>
          <h1 className="text-3xl text-secondary font-extrabold mb-14 font-FitSquad text-center">FitSquad</h1>
          
          <form action="">
            <input
            className='inputForm focus:outline-none focus:outline-cyan-300 focus:border-none '
              type="text" 
              name='Correo'
              placeholder='Correo electronico'
            /> <br />
            <input 
              className='inputForm focus:outline-none focus:outline-cyan-300 focus:border-none'
              type="password" 
              name='Contraseña'
              placeholder='Contraseña'
            />
          </form>

          <div className='flex mt-2 justify-between'>
            <input type="checkbox" className='py-2'/>
            <p className='py-2 ml-2 text-secondary text-xs font-FitSquad'>Recuerdame</p>
            <Link
             className='py-2 ml-8 text-quaternary text-xs font-FitSquad'
             to=""
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <button
            className='w-full mt-12 p-2 bg-primary text-xs text-center text-primary font-FitSquad rounded-lg'
            type='submit'
          >
            Iniciar sesión
          </button>
        </section>

      </section>
    </>
  )
}
