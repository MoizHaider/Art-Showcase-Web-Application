import React from 'react'
import PostBtns from './PostBtns'
import CommentSection from "./CommentSection"

function TrendingPosts(props) {
  //render list of data revieved from page.js
  return (
    <div>
      <main>
        {props.title}
        <div>
          {props.description}
        </div>
        d
      </main>
      <PostBtns>
          <CommentSection/>
      </PostBtns>
      <main>
        
      </main>
    </div>
  )
}

export default TrendingPosts