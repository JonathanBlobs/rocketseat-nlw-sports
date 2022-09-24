import { useState, useEffect } from 'react';
import './styles/main.css';
import logoImg from './assets/Logo.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import * as Dialog from '@radix-ui/react-dialog'
import { CreatAdModal } from './components/CreateAdModal';
import axios from "axios";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { CaretLeft, CaretRight } from 'phosphor-react';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: false,
      mode: "free",
      slides: { origin: "auto", perView: 6.5, spacing: 20 },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [
      // add plugins here
    ]
  )

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => {
        setGames(response.data)
        instanceRef.current?.update()
      })
  }, [])


  return (

    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-10 mb-20 px-12">

      <img src={logoImg} alt="" width={200} height={300} />

      <h1 className='text-6xl text-white font-black mt-6'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo </span>está aqui.</h1>

      <hr className="my-5" />
      <div className="w-full flex items-center gap-4">
        {loaded && instanceRef.current && (
          <button
            disabled={currentSlide === 0}
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()}
          >
            <CaretLeft className={`w-12 h-12 text-zinc-400 mr-4 ${currentSlide === 0 ? 'opacity-40' : 'opacity-100'}`} />
          </button>
        )}
        <div ref={sliderRef} className="keen-slider">
          {games.map(game => {
            return (
              <div key={game.id} className="keen-slider__slide">
                <GameBanner
                  bannerUrl={game.bannerUrl}
                  title={game.title}
                  adsCount={game._count.ads}
                />
              </div>
            )
          })}

        </div>

        {loaded && instanceRef.current && (
          <button
            disabled={currentSlide === instanceRef.current.slides.length - 6}
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()}
          >
            <CaretRight className={`w-12 h-12 text-zinc-400 ml-4 ${currentSlide === instanceRef.current.slides.length - 6 ? 'opacity-40' : 'opacity-100'}`} />
          </button>
        )}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreatAdModal />

      </Dialog.Root>


    </div >

  )

}
export default App
