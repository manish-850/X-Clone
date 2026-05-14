import HomeLeft from '../Components/HomeLeft'
import HomeRight from '../Components/HomeRight'
import HomeCenter from '../Components/HomeCenter'
import "../Styles/feed.scss"

const Home = () => {
  return (
    <main className='feed-container'>
    <HomeLeft />
    <HomeCenter />
    <HomeRight />
    </main>
  )
}

export default Home