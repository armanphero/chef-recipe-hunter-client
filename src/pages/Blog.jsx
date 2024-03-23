import React from 'react';

const Blog = () => {
    return (
        <div className='max-w-screen-lg mx-auto'>
            <div className='my-4'>
                <h1 className='text-3xl font-medium'><span className='text-red-500 font-semibold'>Question: </span>What is the differences between uncontrolled and controlled components?</h1>
                <p className='text-xl'><span className='text-blue-500 font-semibold'>Answer: </span>In a controlled component react, state handles all the form data, whereas, in an uncontrolled component, the HTML form element data is managed by only the DOM. If you are using a controlled component, you are in control of your form input values. The developer can decide what to insert or not and where to insert it.</p>
            </div>
            <div className='my-4'>
                <h1 className='text-3xl font-medium'><span className='text-red-500 font-semibold'>Question: </span>How to validate React props using PropTypes?</h1>
                <p className='text-xl'><span className='text-blue-500 font-semibold'>Answer: </span>We can validate props that can be one of multiple types. To do this, we call oneOfType with an array of types. The optionalUnion prop can be one of string, number or a Person class or constructor instance as specified by the content of the array we call oneOfType with.</p>
            </div>
            <div className='my-4'>
                <h1 className='text-3xl font-medium'><span className='text-red-500 font-semibold'>Question: </span>What is the difference between nodejs and express js?</h1>
                <p className='text-xl'><span className='text-blue-500 font-semibold'>Answer: </span>Node JS is a platform for building i/o applications that are server-side event-driven and made using JavaScript. Express JS is a framework based on Node JS which is used for building web applications using approaches and principles of Node JS event-driven architecture.</p>
            </div>
            <div className='my-4'>
                <h1 className='text-3xl font-medium'><span className='text-red-500 font-semibold'>Question: </span>What is a custom hook, and why will you create a custom hook?</h1>
                <p className='text-xl'><span className='text-blue-500 font-semibold'>Answer: </span>Typically, custom hooks encapsulate stateful logic, allowing its reuse across multiple components seamlessly. Custom hooks are not components; they are functions that contain reusable logic, making them versatile and easy to integrate.</p>
            </div>
        </div>
    );
};

export default Blog;