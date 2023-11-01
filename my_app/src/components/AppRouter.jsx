import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import { routes } from "../routes/router";
import Login from "../pages/Login";
import { AuthContext } from "../context";

const AppRouter = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  return (
    <Routes>
    {isAuth ? (
      <>
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<PostIdPage />} />
        <Route exact path="/" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </>
    ) : (
      <>
        <Route path="*" element={<Login />} />
        
      </>
    )}
  </Routes>
  );
};

export default AppRouter;
