import './topbar.css';
import SearchIcon from '@mui/icons-material/Search';

function Topbar () {

    return(
        <div className='topbarContainer'>
            <div className="topbar-left">
                <span className='logo'>Pet Lovers</span>
            </div>
            <div className="topbar-center">
                <div className="search-bar">
                    <SearchIcon className='searchIcon'/>
                    <input type="text" placeholder='Search for friends' className='searchInput'/>
                </div>
            </div>
            <div className="topbar-right">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <img src="/assests/person/1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    )

}

export default Topbar;