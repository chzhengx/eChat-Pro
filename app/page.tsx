import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Login } from "./components/login";
import { Home } from "./components/home";

import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();

export default async function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // 检查用户是否已经登录的逻辑
    // 例如，检查本地存储或发起API请求
  }, []);

  return (
    <>
      {isLoggedIn ? <Home /> : <Login onSuccess={() => setLoggedIn(true)} />}
      {serverConfig?.isVercel && (
        <>
          <Analytics />
        </>
      )}
    </>
  );
}
