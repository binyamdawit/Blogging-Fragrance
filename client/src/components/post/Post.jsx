import "./post.css"
import hackcologne from '../images/hackcologne.png'

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src={hackcologne} alt="" />
        <div className="postInfo">
            <div className="postFragrance">
                <span className="postFragrance">What To Get</span>
                <span className="postFragrance">Best Prices</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet, consectetur asdf.
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat 
        </p>
    </div>
  )
}
