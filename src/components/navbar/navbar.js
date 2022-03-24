import '../../assets/styles/navbar.scss';
import List from '../list/list';

function Navbar({}) {
let navbarList = ['About', 'Experience', 'Contact'];

    return (
    <div className="container-list">
        <List listItem={navbarList} typeList={'ol'}/>
    </div>
  );
}

Navbar.defaultProps = {
}

export default Navbar;
