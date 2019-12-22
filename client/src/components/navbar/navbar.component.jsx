import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// BurgerMenu Components
import BurgerButton from './burgerMenu/burgerButton.component'
import OverSide from './burgerMenu/overMenu.component'
import BackSide from './burgerMenu/backMenu.component'

// @REDUX actions
import { getPosts } from '../../redux/actions/postActions'

class Navbar extends React.Component{
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false
        }
    }
    toggle() {
        this.setState((prevState => {
            return {isOpen: !prevState.isOpen}
        }))
    }


    render() {
        let backSide
        if (this.state.isOpen) {
            backSide = <BackSide hide={this.toggle}/>
        };
        return(
            <div className='Navbar'>
                <div className='Navbar-sub'>
                    <BurgerButton click={this.toggle} />
                    <OverSide show={this.state.isOpen} click={this.toggle} />
                    {backSide}
                    <div className='logo'><Link className='StyledLink' to='/'>Logo</Link></div>
                    <div className='Spacer' />
                    <Link className='Cart' to="/cart">
                        <div className='box'>
                            <div className='counter'>{this.props.counter}</div>
                        </div>
                        <div className='cartLogo'></div>
                    </Link>
                    <ul className='list'>
                        <Link className='StyledLink' to="/signUp"><li>Sign up</li></Link>
                        <Link className='StyledLink' to="/signIn"><li>Sign in</li></Link>
                        <Link className='StyledLink' to="/list"><li>Shopping list</li></Link>
                        <Link className='StyledLink' to="/posts"><li>Posts</li></Link>
                    </ul>
                </div>
            </div>
        )
    }
}

Navbar.propTypes = {
    counter: PropTypes.number.isRequired
}

const mapStateToProps = state => {
    return {
        counter: state.post.counter
    }
}

export default connect(mapStateToProps)(Navbar)