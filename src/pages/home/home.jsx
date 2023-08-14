import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import Rigthbar from '../../components/rightbar/Rightbar';
import Leftbar from '../../components/leftbar/Leftbar';
import './home.css';

function home () {
    return(
        <>
            <Topbar />
            <div className="home-container">
                <Leftbar />
                <Feed />
                <Rigthbar />
            </div>
        </>
    )
}

export default home;