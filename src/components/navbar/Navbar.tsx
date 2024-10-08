import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>Admin Dashboard</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="nav icon" className="icon" />
        <img src="app.svg" alt="nav icon" className="icon" />
        <img src="expand.svg" alt="nav icon" className="icon" />
        <div className="notfication">
          <img src="notifications.svg" alt="nav icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="nav icon"
          />
          <span>Tokhy</span>
        </div>
        <img src="settings.svg" alt="nav icon" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
