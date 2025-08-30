import { TiLocationArrow } from "react-icons/ti"


const BentoCard = ({ src, title, description, isComingSoon }) => {
    return (

        <div className="relative size-full">
            <video
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center" />

            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font"> {title}</h1>
                    <p className="mt-1 max-w-64 text-xs md:text-base">{description}</p>
                </div>
            </div>

        </div>
    )
}

const Feature = () => {
    return (
        <section className='bg-black pb-52'>
            <div className='container mx-auto px-3 md:px-10'>
                <div className='px-5 py-32'>
                    <p className='font-circular text-xl text-blue-50'>Into the Metagame Layer</p>
                    <p className='text-blue-50 text-lg max-w-md font-circular opacity-60 mt-4'>
                        Zentry brings gamers together with unique challenges, rewards, and a vibrant community. Track your progress, unlock achievements, and experience gaming like never before.
                    </p>
                </div>

                <div className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                    <BentoCard
                        src={'videos/feature-1.mp4'}
                        title={<>radi<b>a</b>nt </>}
                        description={'The game-of-games portal where every moment of play turns into rewards and high-value gaming data'}
                        isComingSoon />

                </div>

                <div className="grid h-[145vh] grid-cols-2 grid-rows-3 gap-6">
                    <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                        <BentoCard
                            src={'videos/feature-2.mp4'}
                            title={<>zig<b>m</b>a</>}
                            description={'An anime and gaming inspired NFT collection - the IP primed for expansion'}
                        />
                    </div>

                    <div className="bento-tilt_1 row-span-1 ms-16 md:col-span-1 md:ms-0">
                        <BentoCard
                            src={'videos/feature-3.mp4'}
                            title={<>n<b>e</b>xus</>}
                            description={'A gamified social hub, adding a new dimension of play to social interaction for Web3 communities'} />
                    </div>

                    <div className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                        <BentoCard
                            src={'videos/feature-4.mp4'}
                            title={<>az<b>u</b>l</>}
                            description={'A cross-wolrd AI agent - elevating your gameplay to be more fun and productive'} />
                    </div>

                    <div className="bento-tilt_2">
                        <div className="flex size-full flex-col justify-between background-violet-300 p-5">
                            <h1 className="font-zentry uppercase md:text-5xl text-3xl max-w-64 text-gray-200/90 special-font">M<b>o</b>re <br /> Co<b>m</b>ing <br /> Soon</h1>

                            <TiLocationArrow className="m-5 md:scale-[5] scale-[4] text-gray-200/90 self-end"/>
                        </div>
                    </div>

                    <div className="bento-tilt_2">
                        <video 
                        src="videos/feature-5.mp4"
                        loop
                        muted
                        autoPlay
                        className="size-full object-cover object-center"/>
                    </div>



                </div>

            </div>
        </section>
    )
}

export default Feature