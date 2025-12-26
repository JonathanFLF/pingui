import { useChangeElements } from '../hooks/changeElements'

export function Main () {

    const { textP, image } = useChangeElements()

    return (
        <>
            <main className='max-w-3xl m-auto w-full h-screen text-center flex justify-center items-center'>

                <div className='flex justify-center items-center flex-col gap-2'>

                    <h1 className='font-sans font-bold text-gray-400 text-2xl'> 
                    Tu presencia hace mis días mejores, y eso para mí lo dice todo </h1>
                    <h1 className='font-sans font-bold text-gray-400 text-2xl'> 
                   ¡Te quiero! </h1>
                    <img src={image} className='w-72'/>

                    <p className='font-mono text-yellow-100'> {textP} </p>

                    <section className='flex gap-3'>

                        
                    </section>

                </div>

            </main>
        </>
    )
}