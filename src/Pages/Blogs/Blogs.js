import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-primary text-center mt-5 mb-3'>Questions And Answers</h1>
            <h5>Question 1: Difference between Node.JS and Javascript </h5>
            <ul>
                <li>Javascript is a programming language that is used for writing scripts on the website. And NodeJS is a Javascript runtime environment.</li>
                <li>Javascript can only be run in the browsers. We can run Javascript outside the browser with the help of NodeJS.</li>
                <li>Javascript is basically used on the client-side. Node.JS is mostly used on the server-side.</li>
                <li>Javascript is capable enough to add HTML and develope DOM. Nodejs does not have capability to add HTML tags.</li>
            </ul>
            <h5>Question 2: When should you use nodejs and when should you use mongodb</h5>
            <ul>
                <li>MonogDB is a database system which gives a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias. If our application needs the ability to persistently store data in a way that we can efficiently query or update it later, then we would typically use some form of database. There are dozens of popular databases. MongoDB is one such database.</li>
                <li>NodeJS's responsibilty is especially to execute our application. Any project needs a programming environment and a runtime library that offers  basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language</li>
            </ul>
            <h5>What is the purpose of jwt and how does it work?</h5>
            <ul>
                <li>JWT - JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. One of the most used authentication standards in web applications is the JSON Web Token standard. It is mostly used for authentication, authorization, and information exchange. JWT can be used as an access token to prevent unwanted access to a protected resource. They're often used as Bearer tokens, which the API will decode and validate before sending a response.</li>
            </ul>
        </div >
    );
};

export default Blogs;