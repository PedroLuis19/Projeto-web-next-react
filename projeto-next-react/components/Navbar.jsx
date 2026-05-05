import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link className='home-button' href='/'>
        <Image
          className='home-img-button'
          src='/calli-home-img.png'
          alt='Home'
          width={150}
          height={55}
        />
      </Link>
      <nav className='page-selection'>
        <ul>
          <Link className='page-link' href='/training'>Organizar Treinos</Link>
          <Link className='page-link' href='/evolution'>Evolução</Link>
          <Link className='page-link' href='/history'>Histórico</Link>
          <Link className='page-link' href='/training-explanation'>Explicação de treino</Link>
          <Link className='page-link' href='/login'>Login</Link>
        </ul>
      </nav>
    </div>
  )
}
