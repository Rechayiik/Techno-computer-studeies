document.addEventListener('DOMContentLoader', function(){
    fetch('../backend/php/courses/list_courses.php')
    .then(response => response.json())
    .then(data => {
        const courseList = document.getElementById('course-list');
        data.forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.className = 'course-item';
            courseItem.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <a href="course-details.html?id=${course.id}">View Details</a>
            `;
            courseList.appendChild(courseItem);
        });
    })
    .catch(error = console.error('Error: ', error));
})