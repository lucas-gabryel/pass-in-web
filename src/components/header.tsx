import nlwunite from '../assets/nlw-unit-icon.svg'

export function Header() {
    return (
        <div className='flex items-center gap-5 py-2'>
            <img src={nlwunite} alt="ícone do nlw unite" />
            <nav className='flex items-center gap-5'>
                <a href="" className='font-medium text-sm text-zinc-300'>Eventos</a>
                <a href="" className='font-medium text-sm'>Participantes</a>
            </nav>
        </div>
    )
}