const CourseCard = ({ course }: any) => {
  return (
    <div>
      <h3>{course.title}</h3>
      <img src={course.image} />
    </div>
  );
};

export default CourseCard;
