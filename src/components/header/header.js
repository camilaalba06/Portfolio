import Navbar from '../navbar/navbar';

function Header() {
    return (
        <div className='container-header'>
            <Navbar/>
            <h1>Hi, my name is Camila!</h1>
        </div>
  );
}

Navbar.defaultProps = {
}

export {Header};