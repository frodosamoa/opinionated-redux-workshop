import React, { PropTypes } from 'react'
import Post from 'components/Post'


/* crappy styles */
const postFeedStyle = {
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const postSpacerStyle = {
    marginTop: '0px',
    marginBottom: '24px'
}

/* component */
export default React.createClass({
    propTypes: {
        posts: PropTypes.array,
        onMount: PropTypes.func
    },

    componentDidMount() {
      this.props.onMount(this.props.creatorId)
      console.log(this.props)
    },

    renderPost(post) {
        return (
            <div key={post.id}
                 style={postSpacerStyle}>
                <Post post={post} />
            </div>
        )
    },

    render() {
        const { posts, isLoading } = this.props

        return isLoading ?
            'Loading!' :
            (<div style={postFeedStyle}>
                { posts && posts.map(this.renderPost) }
            </div>)
    }
})
