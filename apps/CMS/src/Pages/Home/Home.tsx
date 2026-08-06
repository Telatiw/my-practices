import Charts from "./Charts/Charts"
import Features from "./Features/Features"
import Widgets from "./Widgets/Widgets"

const Home = () => {
  return (
    <div className='flex flex-1 gap-y-5  px-4 flex-col'>
      <Features />
      <Charts title="2026" grid={true} />
      <Widgets />
    </div>
  )
}

export default Home
