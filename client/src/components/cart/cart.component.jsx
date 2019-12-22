import React, {useEffect} from 'react'

// @REDUX
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// REDUX actions
import { getPosts, removeFromCart } from '../../redux/actions/postActions'

function Cart (props) {
    useEffect(() => {
        props.getPosts()
    }, [])
    const { cartPosts } = props.post
    return (
        <div>
            <h1>Shopping cart page</h1>
            {cartPosts.map(post => (
                <div key={post._id}>
                    <h4>{post.title}</h4>
                    <p>{post.description}</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

Cart.propTypes = {
    getPosts: PropTypes.func.isRequired,
    cartPosts: PropTypes.object
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch(getPosts())
    }
}

const mapStateToProps = state => {
    return {
        post: state.post
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)