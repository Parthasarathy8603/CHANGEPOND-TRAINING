import React, { useState } from 'react';
import AdminConsole from './AdminConsole/AdmSideNavRoute'; // Import the AdminConsole component

const NavbarAdmin = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
    <header className="p-3" style={{ backgroundColor: '#003060', color: 'white' }}>
      <div className="container-fluid" style={{ backgroundColor: '#003060' }}>
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <h3>Welcome Admin..</h3>
          <div>
            <button type="button" className="btn btn-outline-light  me-2" >
              Admin Management Console
            </button>
            <button type="button" className="btn btn-warning">Logout</button>
          </div>
        </div>
        {isVisible && <AdminConsole />}
      </div>
    </header>
    </div>
  );
};

export default NavbarAdmin;
