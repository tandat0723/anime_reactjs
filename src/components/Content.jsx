import bg from '../assets/bg.png'

const Content = () => {
    return (
        <div className='p-5'>
            <img
                src={bg}
                alt='bg'
                className='mx-auto h-30 sm:h-40 md:h-50 lg:h-80'
            />
        </div>
    )
}

export default Content