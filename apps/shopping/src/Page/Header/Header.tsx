import { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className={`w-full h-auto flex flex-col bg-cover  bg-no-repeat bg-[url('bg-header.webp')]`}>
                <nav className='border-b p-4'>
                    <ul className='flex justify-start gap-5'>
                        <li className='navBtn'>Home</li>
                        <li className='navBtn'>About</li>
                        <li className='navBtn'>Store</li>
                    </ul>
                </nav>
                <h2 className='text-7xl p-2 font-semibold text-center flex justify-center items-center h-full'>Mohammad Javad</h2>
            </div>
        )
    }
}

export default Header