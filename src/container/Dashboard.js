import React, { Component } from 'react'
import WithRouter from '../navigate/WithRouter'
import dev from "../image/jpg/login.jpeg"
import { Color } from '../Colors'
import NavHeader from '../component/NavHeader'
import { db } from '../dexie/DB'
import { Constant } from '../Constant'



class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            card: [
                { id: 1, name: 'SID', isHover: false },
                { id: 2, name: 'EKYC', isHover: false },
                { id: 3, name: 'project 3', isHover: false },
            ],
            project: [
                { id: 1, name: 'card', isHover: false },
                { id: 2, name: 'card', isHover: false },
                { id: 3, name: 'card', isHover: false },
                { id: 4, name: 'card', isHover: false },
            ],
            dot: [
                { id: 1, isHighlight: false },
                { id: 2, isHighlight: false },
                { id: 3, isHighlight: false }
            ],
            experience: [
                { id: 1, year: '2019 - 2023', place: 'Tirunelveli', role: 'web developer', isHighlight: false },
                { id: 2, year: '2019 - 2023', place: 'Tirunelveli', role: 'web developer', isHighlight: false },
                { id: 3, year: '2019 - 2023', place: 'Tirunelveli', role: 'web developer', isHighlight: false },
                { id: 4, year: '2019 - 2023', place: 'Tirunelveli', role: 'web developer', isHighlight: false },
            ],
            isMenuOpen: true,
            menuList: [
                { id: 1, list: 'list 1', isHighlight: false },
                { id: 2, list: 'list 2', isHighlight: false },
                { id: 3, list: 'list 3', isHighlight: false },
                { id: 4, list: 'list 4 ', isHighlight: false },
                { id: 5, list: 'list 5 ', isHighlight: false },
                { id: 6, list: 'list 6 ', isHighlight: false },
                { id: 7, list: 'list 7 ', isHighlight: false },

            ],
            skills: [
                { id: 1, icon: dev, tech: 'HTML' },
                { id: 2, icon: dev, tech: 'CSS' },
                { id: 3, icon: dev, tech: 'JS' },
                { id: 4, icon: dev, tech: 'MS SQL' },
                { id: 5, icon: dev, tech: 'C' },
                { id: 6, icon: dev, tech: 'C# Web API' },
                { id: 7, icon: dev, tech: 'React JS' },
                { id: 7, icon: dev, tech: 'React native' },

            ],

        }
    }
    onHoverCard = (item) => {

        this.setState({
            card: this.state.card.map((i) => {
                return { ...i, isHover: item?.id == i?.id }
            })
        })
        this.setState({
            dot: this.state.dot.map((i) => {
                return { ...i, isHighlight: item?.id == i?.id }
            })
        })

    }

    onLeaveCard = (item) => {

        this.setState({
            card: this.state.card.map((i) => {
                return { ...i, isHover: false }
            })
        })
        this.setState({
            dot: this.state.dot.map((i) => {
                return { ...i, isHighlight: false }
            })
        })
    }

    openMenu = () => {
        this.setState({
            isMenuOpen: true
        })
    }
    closeMenu = () => {
        this.setState({
            isMenuOpen: false
        })
    }

    menuHover = (item) => {

        this.setState({
            menuList: this.state.menuList.map(i => {

                return { ...i, isHighlight: i.id == item.id }

            })
        })
    }
    menuLeave = (item) => {
        this.setState({
            menuList: this.state.menuList.map(i => {

                return { ...i, isHighlight: false }

            })
        })
    }

    redirectToJournal = () => {
        this.props.navigate('/journal');
    }

    render() {
        return (
            <div>

                <NavHeader />

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '0px 0px 0px 0px', margin: '100px 0px 0px' }}>
                    <div style={{ width: '100%', margin: '0px 120px' }}>
                        <div style={{ fontWeight: 'bold', color: Color.whiteFont, fontSize: '20px' }}>I am Jessy</div>
                        <div style={{ fontWeight: 'bold', color: Color.whiteFont, fontSize: '34px' }}>Web developer +</div>
                        <div style={{ fontWeight: 'bold', color: Color.whiteFont, fontSize: '34px' }}>UI/UX designer</div>
                        <p style={{ color: 'grey', fontWeight: '400', fontSize: '16px', }}>{Constant.profile}</p>
                        <button style={{ border: 'none', borderRadius: '7px', background: Color.theme, padding: '12px 20px', color: Color.whiteFont }}>Previous project</button>

                    </div>
                    <div style={{ margin: '0px 0px 0px 0px', width: '100%' }}>
                        <img src={dev} width={520} />
                    </div>
                </div>


                <div style={{ height: '12px' }}></div>

                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: Color.theme, padding: '34px 12px' }} >
                    {this.state.card.map(item =>
                        <div
                            onMouseOver={() => this.onHoverCard(item)}
                            onMouseLeave={() => this.onLeaveCard(item)}
                            style={{ background: Color.whiteFont, height: item?.isHover ? '340px' : '320px', width: item?.isHover ? '340px' : '300px', borderRadius: '16px', padding: '12px ' }}>
                            <div style={{ background: '#FFF', height: '60%', width: '90%', margin: '5%', borderRadius: '7px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={dev} width={'90%'} />
                            </div>
                            <div style={{ color: Color.theme, fontWeight: 'bold' }}>{item?.name}</div>

                            <div style={{ color: Color.theme }}>
                                Explain about your project here
                            </div>
                        </div>
                    )

                    }
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {this.state.dot.map(i =>
                        <div style={{ backgroundColor: i.isHighlight ? Color.theme : 'grey', height: '12px', width: '12px', borderRadius: '25px', margin: '12px 5px', }} />
                    )}
                </div>


                <div style={{ display: 'flex', justifyContent: 'space-around' }}>



                    <div style={{ padding: '3%' }}>
                        <h2 style={{color:Color.whiteFont}}>My experience</h2>

                        <div>
                            {this.state.experience.map(i =>
                                <div style={{ height: '79px', width: '430px', backgroundColor: Color.theme, margin: '34px', padding: '3%', borderRadius: '7px' }}>
                                    <div style={{ color: Color.whiteFont }}>{i.year}</div>
                                    <div style={{ color: Color.whiteFont }} className='heading'>{i.role}</div>
                                    <div style={{ color: Color.whiteFont }}>{i.place}</div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div style={{ padding: '3%' }}>
                        <h2 style={{color:Color.whiteFont}}>My education</h2>

                        <div>
                            {this.state.experience.map(i =>
                                <div style={{ height: '79px', width: '430px', backgroundColor: Color.theme, margin: '34px', padding: '3%', borderRadius: '7px' }}>
                                    <div style={{ color: Color.whiteFont }}>{i.year}</div>
                                    <div style={{ color: Color.whiteFont }} className='heading'>{i.role}</div>
                                    <div style={{ color: Color.whiteFont }}>{i.place}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div style={{ width: '90%', backgroundColor: Color.theme, margin: '0% 5% 1%', padding: '1%', borderRadius: '12px' }}>
                    <div className='center heading' style={{ color: Color.whiteFont }}>
                        My skills
                    </div>
                    <div className='center' style={{ color: Color.whiteFont }}>
                        This is something about me blah blah
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {this.state.skills.map(i =>


                            <div style={{ height: '160px', width: '10%', backgroundColor: '#FFF', borderRadius: '12px', margin: '12px' }}>
                                <div style={{ padding: '20px 0px' }} className='center'>
                                    <img src={i.icon} width={70} height={70} />
                                </div>
                                <div className='center' style={{ padding: '12px 0px' }}>
                                    {i.tech}
                                </div>
                            </div>


                        )}
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>

                    <div style={{ backgroundColor: Color.theme, width: '30%', margin: '2%', borderRadius: '12px', padding: '12px 0px' }} className='center'>
                        <div>
                            <div className='center heading' style={{ color: Color.whiteFont }}>
                                Let's work together!
                            </div>
                            <div className='center' style={{ color: Color.whiteFont }}>
                                If you wanna work with me...contact me here
                            </div>
                            <div className='center' style={{ flexWrap: 'wrap' }}>
                                <input maxLength={7} style={{ border: 'none', outline: 'none', borderRadius: '4px', backgroundColor: '#3e394b', padding: '12px 25px', margin: '12px 20px', width: '250px', height: '25px',color:Color.whiteFont }} placeholder='Name' />
                                <input maxLength={7} style={{ border: 'none', outline: 'none', borderRadius: '4px', backgroundColor: '#3e394b', padding: '12px 25px', margin: '12px 20px', width: '250px', height: '25px',color:Color.whiteFont }} placeholder='Name' />
                                <input maxLength={7} style={{ border: 'none', outline: 'none', borderRadius: '4px', backgroundColor: '#3e394b', padding: '12px 25px', margin: '12px 20px', width: '250px', height: '25px',color:Color.whiteFont }} placeholder='Name' />
                                <input maxLength={7} style={{ border: 'none', outline: 'none', borderRadius: '4px', backgroundColor: '#3e394b', padding: '12px 25px', margin: '12px 20px', width: '250px', height: '25px',color:Color.whiteFont }} placeholder='Name' />
                                <button onClick={this.onEdit} style={{ border: 'none', borderRadius: '7px', background: Color.whiteFont, height: '43px', width: '160px', color: Color.theme, margin: '12px' }}>Send message</button>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{color:Color.whiteFont}}>Name</div>
                        <div className='heading' style={{color:Color.whiteFont}}>Jessy Angel</div>
                        <div style={{ height: '25px', color: Color.whiteFont }} />

                        <div style={{color:Color.whiteFont}}>Contact</div>
                        <div className='heading' style={{color:Color.whiteFont}}> 0462 - 001 0002</div>
                        <div style={{ height: '25px', color: Color.whiteFont }} />

                        <div style={{color:Color.whiteFont}}> Mail</div>
                        <div className='heading' style={{ color: Color.whiteFont }}>jessyangeljaw@gmail.com</div>
                    </div>
                </div>
            </div>
        )
    }


}

export default WithRouter(Dashboard)
