import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://learn-tech-edge-server.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div className='p-4'>
            <h4 className='mb-5'>Categories: {categories.length}</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link className='text-decoration-none text-dark' to={`/course-category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;