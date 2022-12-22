import React from "react";

const Blog = () => {
    return (
        <div>
            <h1 className="mb-5">Blog</h1>

            <h2>What is cors?</h2>
            <p>
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                mechanism that allows a server to indicate any origins (domain,
                scheme, or port) other than its own from which a browser should
                permit loading resources.
            </p>

            <h2>
                Why are you using firebase? What other options do you have to
                implement authentication?
            </h2>
            <p>
                Firebase Authentication provides backend services, easy-to-use
                SDKs, and ready-made UI libraries to authenticate users to your
                app. It supports authentication using passwords, phone numbers,
                popular federated identity providers like Google, Facebook and
                Twitter, and more.
            </p>
            <p>
                12 User Authentication Platforms [Auth0, Firebase Alternatives]:
                STYTCH, Ory, Supabase, Okta, PingIdentity, Keycloak, Frontegg,
                Authress.
            </p>

            <h2>How does the private route work?</h2>
            <p>
                The react private route component renders child components (
                children ) if the user is logged in. If not logged in the user
                is redirected to the /login page with the return url passed in
                the location state property.
            </p>

            <h2>What is Node? How does Node work?</h2>
            <p>
                It is a used as backend service where javascript works on the
                server-side of the application. This way javascript is used on
                both frontend and backend. Node. js runs on chrome v8 engine
                which converts javascript code into machine code, it is highly
                scalable, lightweight, fast, and data-intensive.
            </p>
        </div>
    );
};

export default Blog;
