import { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import Tilt from "react-parallax-tilt"
import gsap from 'gsap'
import Button from './Button'

function Story() {
  const frameRef = useRef(null)

  const handleMouseLeave = () => {
    const element = frameRef.current


        gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: 'power1.inOut'
    })
  }

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current

    if (!element) return

    const rect = element.getBoundingClientRect()
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10

    gsap.to(element, {
      duration: 0.3,
      rotateX: rotateY,
      transformPerspective: 500,
      ease: 'power1.inOut'
    })

  }

  return (
    <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
      <div className='flex size-full flex-col items-center py-10 pb-24'>
        <p className='font-general text-sm uppercase md:text-[10px]'>the multiversal world</p>
        <div className='relative size-full'>
          <AnimatedTitle
            title="The story of a hidden realm"
            sectionId="#story"
            containerClass="mt-5 flex-center pointer-events-none mix-blend-diffrence relative z-10"
          />
          <div className='story-img-container'>
            <div className="story-img-mask">
              <div className="story-img-content">
                <Tilt
                  glareMa xOpacity={0.5}
                  glareBorderRadius="12px"
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  transitionSpeed={2000}
                  className=" rounded-lg overflow-hidden"
                >
                  <img
                    ref={frameRef}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseLeave}
                    onMouseUp={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    src="/img/entrance.webp" alt=""
                    className='object-contain rounded-xl' />
                </Tilt>
              </div>
            </div>
          </div>
        </div>

        <div className='-mt-32  flex w-full justify-center md:-mt-48 md:me-40 md:justify-end'>
          <div className='flex h-full w-fit flex-col items-center md:items-start'>
            <p className='mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start'> where realms coverage, lies zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities</p>
            <Button id={"realm-button"} title={'discover prologue'} containerClass={'mt-5'} ></Button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Story