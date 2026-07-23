import React, { Component } from 'react'
interface HomeStates {
    countris: {
        iran: string[]
        usa: string[]
        germany: string[]
        england: string[]
    }
    firsname: string
    lastname: string
    phone: string
    email: string
    maincountry: 'iran' | 'england' | 'usa' | 'germany'
    ticketBasket: {
        id: number
        name:string
        to: string
    }[]
}
class Home extends Component<{}, HomeStates> {
    constructor(props: {}) {
        super(props)
        this.state = {
            countris: {
                iran: ['tehran', 'mashhad', 'esfehan', 'tabriz'],
                england: ['london', 'berlin', 'liverpol', 'manchester'],
                germany: ['dortmond', 'monikh', 'vian', 'leverkosen'],
                usa: ['los', 'california', 'miamay', 'siatel'],
            },
            firsname: '',
            lastname: '',
            phone: '',
            maincountry: 'iran',
            ticketBasket: [],
            email: ''
        }
    }
    selectContry(e: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({ maincountry: e.target.value as 'iran' | 'usa' | 'germany' | 'england' })
    }
    BuyTicket() {
        if(this.state.firsname.trim() && this.state.phone.trim() && this.state.lastname.trim() && this.state.email.trim()) {
            let newTicket = {id:this.state.ticketBasket.length + 1 ,to:this.state.maincountry,name:this.state.firsname}
            this.setState({ticketBasket:[...this.state.ticketBasket,newTicket]})
        }
    }
    render() {
        return (
            <div className="w-full flex justify-center items-center min-h-screen bg-red-500">
                <div className="w-1/2 p-4 gap-5 aspect-video rounded-lg grid grid-cols-2 grid-rows-4 bg-white/70">
                    <div className='font-semibold' >
                        <label htmlFor="furename">Furename</label>
                        <input onChange={(e)=> this.setState({firsname:e.target.value})} value={this.state.firsname} className='inputs' id="furename" type="text" />
                    </div>
                    <div className='font-semibold'>
                        <label htmlFor="surename">Surename</label>
                        <input onChange={(e)=> this.setState({lastname:e.target.value})} value={this.state.lastname} className='inputs' id="surename" type="text" />
                    </div>
                    <div className='font-semibold'>
                        <label htmlFor="phonenumber">Phone Number</label>
                        <input onChange={(e)=> this.setState({phone:e.target.value})} value={this.state.phone} className='inputs' id="phonenumber" type="text" />
                    </div>
                    <div className='font-semibold'>
                        <label htmlFor="email">Email</label>
                        <input onChange={(e)=> this.setState({email:e.target.value})} value={this.state.email} className='inputs' id="email" type="text" />
                    </div>
                    <div className='font-semibold'>
                        <select onChange={(e) => this.selectContry(e)} >
                            {Object.keys(this.state.countris).map((contry, index) => (
                                <option key={index} value={contry}>{contry}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <select>
                            {this.state.countris[this.state.maincountry].map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                    <button onClick={this.BuyTicket.bind(this)} className='bg-yellow-200 cursor-pointer col-span-2 font-semibold text-lg rounded-sm'>Buy</button>
                </div>
            </div>
        )
    }
}

export default Home