import Flag from '../../assets/home--desktop-@1x.png'
import overlapGroup1 from '../../assets/image-27@1x.png'

import jakeWeirickQ_Rbvffxr_GUnsplash1 from '../../assets/jake-weirick-q-rbvffxr-g-unsplash-1@1x.png'
import arrows from '../../assets/arrows@1x.png'
import alwaysNewestMoviesAnime1 from '../../assets/always-newest-movies-anime@2x.png'
import alwaysNewestMoviesAnime2 from '../../assets/always-newest-movies-anime-1@2x.png'
import alwaysNewestMoviesAnime3 from '../../assets/always-newest-movies-anime-2@2x.png'

import './Home.scss'
import Button from '../../components/button/Button'

import type { RootState } from '../../store/index'
import { useSelector, useDispatch } from 'react-redux'

type Props = { buttons: string[] }

function Home() {

  const stuff = useSelector((state: RootState) => state.movie.buttons)
  
  console.log(stuff);
  
  
  return (
    <div className="container-center-horizontal">
      <div className="home-desktop screen" style={{ backgroundImage: `url(${Flag})` }}>
        <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
          <div className="navbar_buttons">

            {stuff.map(item => {
              return (<Button>{item}</Button>)
            })}
          </div>
          <div className="overlap-group2">
            <img
              className="jake-weirick-q_rbvffxr_g-unsplash-1"
              src={jakeWeirickQ_Rbvffxr_GUnsplash1}
              alt="jake-weirick-Q_RBVFFXR_g-unsplash 1"
            />
            <img className="arrows" src={arrows} alt="Arrows" />
            <div className="groovy-rectangle">
              <div className="always-newest-movies-anime-container">
                <img
                  className="always-newest-movies-anime"
                  src={alwaysNewestMoviesAnime1}
                  alt="Always newest movies anime"
                />
                <img
                  className="always-newest-movies-anime"
                  src={alwaysNewestMoviesAnime2}
                  alt="Always newest movies anime"
                />
                <img
                  className="always-newest-movies-anime"
                  src={alwaysNewestMoviesAnime3}
                  alt="Always newest movies anime"
                />
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="c-2022-no-bull-cinema">(c) 2022 NoBull Cinema</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
