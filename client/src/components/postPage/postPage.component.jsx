import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPosts } from '../../redux/posts/postActions'

function PostPage (props) {
    useEffect(() => {
        props.getPosts()
    }, [])
    const { posts } = props.post
    return (
        <div>
            <h1>Post Page</h1>
            {posts.map(post => (
                <div key={post._id}>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <span>{post.date}</span>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

PostPage.propTypes = {
    post: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(getPosts())
})

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)