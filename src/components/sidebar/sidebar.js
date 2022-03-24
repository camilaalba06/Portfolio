import '../../assets/styles/sidebar.scss';
import List from '../list/list';

function Sidebar({}) {

    return (
    <div className="container-list">
        <List/>
    </div>
  );
}

Sidebar.defaultProps = {
}

export default Sidebar;