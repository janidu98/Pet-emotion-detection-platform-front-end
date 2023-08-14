import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData';
import { useState } from 'react';

export default function Post({ post }) {

  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked);
  }

  return (
    <div className='post'>
      <div className="post-wrapper">
        <div className="post-top">
            <div className="post-top-left">
                <img src={Users.filter(u => u.id === post?.userId)[0].profilePicture} alt="profile-img" className="postProfileImg" />
                <span className="postUsername">{Users.filter(u => u.id === post?.userId)[0].username}</span>
                <span className="postDate">5 mins ago</span>
            </div>
            <div className="post-top-right">
                <MoreVertIcon />
            </div>
        </div>
        <div className="post-center">
            <span className="post-text">{ post?.desc}</span>
            <img src={post.photo} alt="post-img" className="postImg" />
        </div>
        <div className="post-bottom">
            <div className="post-bottom-left">
                <img src="assests/like.png" alt="" className='likeIcon' onClick={likeHandler}/>
                <img src="assests/heart.png" alt="" className='likeIcon' onClick={likeHandler}/>
                <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="post-bottom-right">
                <span className="post-comment-text">{post.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
