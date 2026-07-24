import Todolist from "./TodoList/Todolist"

function Home() {
  return (
    <div className="w-full flex flex-col justify-start gap-5 items-center min-h-screen bg-gradient-to-tr from-slate-500 to-slate-900">
      <header >
        <h2 className=" text uppercase text-6xl text-slate-300 py-5 ">mohammad todos</h2>
      </header>
      <Todolist />
    </div>
  )
}

export default Home