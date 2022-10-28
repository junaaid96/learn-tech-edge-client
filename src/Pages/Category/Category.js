import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Common/CourseSummaryCard/CourseSummaryCard';

const Category = () => {
    const courseCategory = useLoaderData();
    return (
        <div className='d-flex flex-wrap'>
            {
                courseCategory.map(course =><CourseSummaryCard
                    key={course._id}
                    course={course}
                ></CourseSummaryCard>)
            }
        </div>
    );
};

export default Category;