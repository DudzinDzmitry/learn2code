import Coursecard from './Coursecard';

const CourseList = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        return <Coursecard course={course} key={course.id} />;
      })}
    </div>
  );
};

export default CourseList;
