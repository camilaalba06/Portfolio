import '../../assets/styles/icon.scss';

function Icon({listIcon}) {
    let createLogos = listIcon.map( icon => <i className = {icon}></i>);

    return (
    <div className="container-list">
        <span data-icon = {listIcon}>{createLogos}</span>
    </div>
  );
}

Icon.defaultProps = {
    listIcon: ["fa-duotone fa-cat-space"]
}

export default Icon;