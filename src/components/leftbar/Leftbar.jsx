import './leftbar.css'
import FeedIcon from '@mui/icons-material/Feed';
import GroupsIcon from '@mui/icons-material/Groups';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

import { Users } from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';

export default function Leftbar() {
  return (
    <div className='leftbar'>
      <div className="leftbar-wrapper">
        <ul className="leftbar-list">
            <li className="leftbar-listItem">
                <FeedIcon className="leftbar-icon"/>
                <span className="leftbar-listItem-text">Feed</span>
            </li>
            <li className="leftbar-listItem">
                <GroupsIcon className="leftbar-icon"/>
                <span className="leftbar-listItem-text">Groups</span>
            </li>
            <li className="leftbar-listItem">
                <PlayCircleOutlineIcon className="leftbar-icon"/>
                <span className="leftbar-listItem-text">Videos</span>
            </li>
            <li className="leftbar-listItem">
                <BookmarkIcon className="leftbar-icon"/>
                <span className="leftbar-listItem-text">Bookmarks</span>
            </li>
            <li className="leftbar-listItem">
                <HelpOutlineIcon className="leftbar-icon"/>
                <span className="leftbar-listItem-text">Questions</span>
            </li>
            <li className="leftbar-listItem">
                <WorkOutlineIcon className="leftbar-icon"/>
                <span className="leftbar-listItem-text">Jobs</span>
            </li>
            <li className="leftbar-listItem">
                <EventIcon className="leftbar-icon"/>
                <span className="leftbar-listItem-text">Events</span>
            </li>
            <li className="leftbar-listItem">
                <SchoolIcon className="leftbar-icon"/>
                <span className="leftbar-listItem-text">Courses</span>
            </li>
        </ul>

        <button className='leftbar-btn'>Show more</button>
        <hr className='leftbar-hr'/>

        <ul className="leftbarFriendList">
            {Users.map(u => (
                <CloseFriend key={u.id} user={u}/>
            ))}
        </ul>
      </div>
    </div>
  )
}
