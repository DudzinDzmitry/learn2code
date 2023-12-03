import { useState } from 'react';
import { Courses } from './courses';
import CourseList from './CourseList';

const Learning = () => {
  const [query, setQuery] = useState('');

  const courses = Courses.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase().trim()),
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <CourseList courses={courses} />
    </div>
  );
};

export default Learning;
