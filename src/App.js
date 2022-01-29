import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import getApi from "/src/getApi.js";
import { FaProductHunt } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Creative Arts Home Page</h1>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1> About Page</h1>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1> Service Page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>User section Page</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/getUsers">
        <img class="img" src="https://reqres.in/img/faces/1-image.jpg" />
        {
          "                                                                                      ."
        }
        <img class="image" src="https://reqres.in/img/faces/2-image.jpg" />
        {
          ".                                                                                     "
        }
        <img class="image" src="https://reqres.in/img/faces/3-image.jpg" />
        {
          ".                                                                                      "
        }
        <img class="image" src="https://reqres.in/img/faces/4-image.jpg" />
        {
          "                                                                                      ."
        }
        <img class="image" src="https://reqres.in/img/faces/5-image.jpg" />
        {
          "                                                                                      ."
        }
        <img class="image" src="https://reqres.in/img/faces/6-image.jpg" />

        <getUsers />
      </Route>
    </Switch>
  );
};

export default App;
