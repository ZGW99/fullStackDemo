import React, { useEffect } from "react";
import { useRoutes, useNavigate } from "react-router-dom";
import routers from "../../router/router";

function AuthRouter() {
  const GetRoutes = () => useRoutes(routers);
  const goNavigates = useNavigate();
  const userLoginLisense = localStorage.getItem('userName');
  
  useEffect(() => {
    if (!userLoginLisense) {
      goNavigates('/login');
    }
  }, []);

  return (
    <div>
      <GetRoutes />
    </div>
  )

}
export default AuthRouter;