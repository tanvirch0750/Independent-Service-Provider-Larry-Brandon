import React from "react";
import PageHeadImg from "../../components/PageHeadingImg/PageHeadImg";
import "./Blogs.css";

const Blogs = () => {
  return (
    <>
      <PageHeadImg text="My Blogs" />
      <section className="blogs">
        <div className="container">
          <article className="article">
            <h2>
              What is the difference between Authentication and Authorization?
            </h2>
            <p>
              Authentication confirms the identity of the user. Email, Passwords
              and other information provided by the user are used for
              authentication. Authentication is the process of selected the
              exact identity.
            </p>
            <p>
              What resources a user has access to is determined by
              authorization. After the authentication, authorization process
              come. Authorization implemented and maintained by the by the
              organization.
            </p>
          </article>
          <article className="article">
            <h2>
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h2>
            <p>
              I use firebase for Authentication. Firebase authentication
              provides backend services. It provides authentication with various
              platform like google, facebook, github, twitter etc. I can also
              host website in firebase. Firebase also habe good database system.
            </p>
            <p>
              There are others site for implement authentication. Like Auth0,
              Okta, Parse, Supabase, Kuzzle etc.
            </p>
          </article>
          <article className="article">
            <h2>
              What other services does firebase provide other than
              authentication
            </h2>
            <p>
              Firebase helps to solve common web/app development problems.
              Firebase provides authentication functionality. Firebase provide
              hosting functionality. Firebase provide database functionality.
              Firebase provide google anlytics functionality. Firebase helps to
              intregate chat functionality. Firebase provide realtime database.
              Firebase provides right ads experience to the user. Firebase also
              provides good security.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Blogs;
