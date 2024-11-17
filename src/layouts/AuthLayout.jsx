import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      Auth Layout
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
