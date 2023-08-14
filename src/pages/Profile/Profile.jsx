import './profile.css';

import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import Rigthbar from '../../components/rightbar/Rightbar';
import Leftbar from '../../components/leftbar/Leftbar';

export default function Profile() {
  return (
    <>
        <Topbar />
        <div className="profile">
            <Leftbar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="assests/post/3.jpeg" alt="" className="profileCoverImg" />
                        <img src="assests/person/7.jpeg" alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <p className='profileInfoName'>Janidu Chathushan</p>
                        <span className='profileInfoDesc'>Hello, Have a nice day!</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed />
                    <Rigthbar profile/>
                </div>
            </div>
        </div>
    </>
  )
}
