import "./header.scss";
const header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          className="header__logo--img"
          src="https://images.unsplash.com/photo-1563694983011-6f4d90358083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
      <h1 className="header__title">header</h1>
    </header>
  );
};
export default header;
