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
document.addEventListener('DOMContentLoaded', function () {
    const courseGrid = document.querySelector('.course-grid');

    // Example course data (replace with API call)
    const courses = [
        {
            id: 1,
            title: 'Introduction to Machine Learning',
            category: 'Data Science',
            rating: 4.5,
            image: 'images/course1.jpg',
        },
        {
            id: 2,
            title: 'Web Development Bootcamp',
            category: 'Web Development',
            rating: 5.0,
            image: 'images/course2.jpg',
        },
        // Add more courses as needed
    ];

    // Render courses
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';

        courseCard.innerHTML = `
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}">
            </div>
            <div class="course-details">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-category">${course.category}</p>
                <div class="course-rating">
                    <span>${getStarRating(course.rating)}</span>
                    <span>(${course.rating})</span>
                </div>
            </div>
        `;

        courseGrid.appendChild(courseCard);
    });
});

// Helper function to generate star rating
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }

    if (halfStar) {
        stars += '☆';
    }

    return stars.padEnd(5, '☆');
}
