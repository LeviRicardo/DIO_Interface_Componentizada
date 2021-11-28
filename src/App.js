import React from "react";
import Layout from "./components/layout/index"
import Profile from "./components/profile";
import Repos from "./components/repos";
import { ResetCSS } from "./global/reset.css";
import GithubProvider from "./providers/github.provider";

const App = () => {
  return (
    <main>
      <GithubProvider />
      <ResetCSS />
      <Layout>
        <Profile />
        <Repos />
      </Layout>
    </main>
  );
}

export default App;
