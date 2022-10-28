import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Common/CourseSummaryCard/CourseSummaryCard';

const Home = () => {
    const allCourses = useLoaderData();
    return (
        <div className='d-flex flex-wrap'>
            {
                allCourses.map(course => <CourseSummaryCard
                    key={course._id}
                    course={course}
                ></CourseSummaryCard>)
            }
        </div>
    );
};

export default Home;