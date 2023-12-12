// cursos.js
let courseIndex = 0;
const coursesContainer = document.querySelector(".course-container");

function showCourse(n) {
  courseIndex = (courseIndex + n + coursesContainer.children.length) % coursesContainer.children.length;
  updateCoursePosition();
}

function updateCoursePosition() {
  coursesContainer.style.transform = `translateX(${-courseIndex * 300}px)`;
}
