import './styles/App.css';
import Arrow from './images/Arrow.jpg';
import Vector from './images/Vector.png';
import Cort from './images/Cort.png';
import JazzIsDead from './images/JazzIsDead.png';
import SuperTight from './images/SuperTight.png';
import Point from './images/Point.png';
import Video from './videos/videoplayback.mp4';

function App() {

  return (
    <>  
      <body>
        <header>
          <nav>
            <div className='leftContainer'>
              <a className='leftNav' href="">Logo</a> 
              <a className='leftNav' href="">Events</a>
              <a className='leftNav' href="">Propose Event</a>
            </div>
            <div className='rightContainer'>
              <a className='rightNav' href="">New York</a> <img className='arrowImg' src={Arrow} alt="Arrow"/> 
              <a className='rightNav' href="">24.06.2022</a> <img className='arrowImg' src={Arrow} alt="Arrow"/>  
              <a className='rightNav' href="">Rock Concert</a> <img className='arrowImg' src={Arrow} alt="Arrow"/> 
            </div>
          </nav>
        </header>

        <div className='bodyContainer'>
          <h1 className='firstText'>Now is the time to Pick a cool event and let&apos;s go party!</h1>

          <div className='eventContainer'>

              <h2 className='topEvents'>TOP 5 EVENTS</h2> 

            <div className='eventVectorContainer'>
              <img className='eventVectorLeftImage' src={Vector} alt="Vector"/>
              <img className='eventVectorRightImage' src={Vector} alt="Vector"/>
            </div>

          
          </div>
            <div className='eventRectangles'>

              <div className='rectangleOne'>
                <img className='rectImage' src={SuperTight} alt="SuperTight"/>

                <div className='headerTextRect'>
                  <img className='pointImage' src={Point} alt="Point"/>
                  <p className='textNextToPoint'>SUBSTANCE SKATEPARK BROOKLYN</p>
                </div>

                <div className='bodyTextRect'>
                  <p className='textUnderPoint'>NPCC SUMMER FEST 2022: SUPER TIGHT</p>
                </div>


                <div className='infoTextContainer'>
                  <p className='infoTextRect'>
                    Lörem ipsum tiselogi kälig mår. Mono konat och antekadören desm. Prena nås.
                    Ovuning ren tetralig mivis tidat samt resk. Dekare teledåde inteр antekadör!
                  </p>
                </div>

                <div className='aboutEventContainer'>
                     <a href="" className='aboutEventHyperlink'>
                      <div className='buttonText'>
                        More about event
                      </div>
                     </a>
                </div>

              </div>

              <div className='rectangleTwo'>
                <img className='rectImage' src={JazzIsDead} alt="JazzIsDead"/>

                <div className='headerTextRect'>
                  <img className='pointImage' src={Point} alt="Point"/>
                  <p className='textNextToPoint'>MUSIC HALL OF WILLIAMSBURG | BROOKLYN</p>
                </div>

                <div className='bodyTextRect'>
                  <p className='textUnderPoint'>JAZZ IS DEAD WITH EBO TAYLOR</p>
                </div>

                <div className='infoTextContainer'>
                  <p className='infoTextRect'>
                    Lörem ipsum tiselogi kälig mår. Mono konat och antekadören desm. Prena nås.
                    Ovuning ren tetralig mivis tidat samt resk. Dekare teledåde inteр antekadör!
                  </p>
                </div>

                <div className='aboutEventContainer'>
                     <a href="" className='aboutEventHyperlink'>
                      <div className='buttonText'>
                        More about event
                      </div>
                     </a>
                </div>        

              </div>

              <div className='rectangleThree'>
                <img className='rectImage' src={Cort} alt="Cort"/>

                <div className='headerTextRect'>
                  <img className='pointImage' src={Point} alt="Point"/>
                  <p className='textNextToPoint'>SUBSTANCE SKATEPARK BROOKLYN</p>
                </div>

                <div className='bodyTextRect'>
                  <p className='textUnderPoint'>JAZZ IS DEAD WITH EBO TAYLOR</p>
                </div>

                <div className='infoTextContainer'>
                  <p className='infoTextRect'>
                    Lörem ipsum tiselogi kälig mår. Mono konat och antekadören desm. Prena nås.
                    Ovuning ren tetralig mivis tidat samt resk. Dekare teledåde inteр antekadör!
                  </p>
                </div>

                <div className='aboutEventContainer'>
                     <a href="" className='aboutEventHyperlink'>
                      <div className='buttonText'>
                        More about event
                      </div>
                     </a>
                </div>

              </div>

          </div>
        </div>

        <div className='videoContainer'>
          <h2 className='videoText'>Videos</h2>
            <div className='videoBox'>
              <video className='videoPlay' controls="controls"src={Video}></video>
            </div>
        </div>
    
        <div className="lastLine">
          <svg>
            <line x1="0" y1="0" x2="100%" y2="0"></line>
          </svg>
        </div>

    


        <footer  className='footerContainer'>
            <div className='footerContainerOne'>
                <p>LO</p>
            </div>
            <div className='footerContainerTwo'>
                <a href="">Events</a>
                <a href="">Propose Event</a>
                <a href="">Contact</a>
            </div>
            <div className='footerContainerThree'>
                <a href="">Your city: new york <img className='footerContainerFirstImg' src={Arrow} alt="Arrow"/> </a>
                <a href="">date: 26.07.2022 <img className='footerContainerSecondImg' src={Arrow} alt="Arrow"/> </a>
                <a href="">type: rock concert <img className='footerContainerThirdImg' src={Arrow} alt="Arrow"/> </a>
            </div>
        </footer>
      </body>
    </>
  )
}

export default App
