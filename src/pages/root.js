import { Outlet } from "react-router-dom";
function RootLayout() {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Featured Listed Property</h1>
          <p>
            Real Estate can be bought, sold, leased or rented, or can be a
            valuable investment opportunity. The value of real estate can be...{" "}
          </p>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default RootLayout;
