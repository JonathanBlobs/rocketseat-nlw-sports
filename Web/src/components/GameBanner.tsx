interface GameBannerProps{
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <div className="relative rounded-lg overflow-hidden " >
      <img src={props.bannerUrl} alt="" width={300} height={400} />
        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block h-4 text-sm truncate overflow-hidden">{props.title}</strong>
          <span className="text-zinc-300 text-sm block mt-1 overflow-hidden truncate">{props.adsCount} anúncio(s)</span>
        </div>
    </div>
  ) 
}