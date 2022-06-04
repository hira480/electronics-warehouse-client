import React from 'react';

const Blog = () => {
    return (
        <div className='bg-light'>
            <h2 className='text-primary text-center pt-4 '>Blog</h2>
            <div className='container mt-5  p-4'>
                <div className='mb-4'>
                    <h3>1. What is the Difference between JavaScript and NodeJs?</h3>
                    <p>JavaScript is a programming language that used to write script on the website. JavaScript can run in any browser screen. Its use for frontend development. On the other hand NodeJs is a JavaScript runtime environment. We can run JavaScript outside the browser with the help of NodeJs. NodeJs is specially used for backend development. </p>
                </div>
                <div className='mb-4'>
                    <h3>2. What is the Differences between sql and nosql databases?</h3>
                    <p>SQL is stands for structured query language. It is a relational database. SQL database is structured by table bases. Also sql database have fixed or static predefined schema. On the other hand NoSql database is non-relational or distributed database system. There have dynamic schema. It is horizontally scalable where SQL database is vertically scalable.</p>
                </div>
                <div className='mb-4'>
                    <h3>3. When should you use nodejs and when should you use mongodb?</h3>
                    <p>Mongo DB is designed to work with large Scale data. It can stored a huge amount of data in JSON formet. Also it can work on multiple server. It is a document oriented database. And NodeJs by default follow Asynchronous Programming pattern. It does not wait for completing any task. And in the meantime nodejs start another work.  </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;