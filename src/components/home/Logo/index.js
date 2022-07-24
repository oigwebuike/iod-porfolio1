import './index.scss'
import myLogo from '../../../assets/images/sphere-grid-svgrepo-com.svg'
import SVGt from './SVGt'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'


const Logo = () => {

  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {

    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
      duration: 1,
      opacity: 1,
    })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 30,
    })

    gsap
      .fromTo(solidLogoRef.current, {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )

  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo" src={myLogo} alt="logo" ref={solidLogoRef}/>

      
 
      <SVGt a={outlineLogoRef} className="svg-container"/>
     

    </div>
  )
}

export default Logo 