import '../../assets/styles/navbar.scss';
import List from '../list/list';

function Navbar() {
let navbarList = ['About', 'Experience', 'Contact'];

    return (
    <div className="container-navbar">
        <p>Icon</p>
        <List listItem={navbarList} typeList={'ol'}/>
    </div>
  );
}

export default Navbar;