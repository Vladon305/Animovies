import styles from './Home.module.scss'
import Button from '../../components/button/Button'
import Image from "../../assets/main_background.jpg";
import Layout from '../layout/Layout'
import Promo from '../../assets/promo_png.png'


import type { RootState } from '../../store/index'
import { useSelector, useDispatch } from 'react-redux'

type Props = { buttons: string[] }

function Home() {

  const stuff = useSelector((state: RootState) => state.movie.buttons)

  console.log(Image);


  return (
    <>
      <div className={styles.main} style={{ background: `url("${Image}")` }}>
        <Layout>
          <div className={styles.promo}>
            <img src={Promo} alt="" />
            {/* <img className={styles.promo_bold} src={Promo} alt="" /> */}
          </div>
        </Layout>
      </div>
    </>
  )
}

export default Home
