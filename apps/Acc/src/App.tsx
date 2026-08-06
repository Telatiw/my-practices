import { Profiler, useState, type ProfilerOnRenderCallback, } from 'react'
import data from './Data/Data'
import Questions from './Components/Questions'
const App = () => {
  const [info, setInfo] = useState(data)
  const check:ProfilerOnRenderCallback = (id,phase,actualDuration,baseDuration,startTime,commitTime) => {
    console.log(id,phase,startTime,actualDuration,baseDuration,commitTime)
  }
  return (
    <div className="w-full min-h-screen flex justify-center bg-indigo-500 items-center">
      <div className=" p-4 w-2/3 flex gap-4 h-auto rounded-lg bg-purple-500">
        <h2 className='w-1/3 text-4xl text-pink-500 font-medium'>question and Answer About <span className='italic text-pink-600'>Mellisa</span></h2>
        <Profiler id='quiz' onRender={check}>
          <div className='w-2/3 flex flex-col justify-between '>
            {info.map(quiz => (
              <Questions key={quiz.id} {...quiz} />
            ))}
          </div>
        </Profiler>
      </div>
    </div>
  )
}

export default App