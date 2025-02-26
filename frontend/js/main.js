// Dynamic Course Loading
const courseList = document.getElementById('course-list');
const courses = [
    { title: "Python Programming", description: "Learn Python from scratch.", price: "50,000 UGX" },
    { title: "Web Development", description: "Build modern websites.", price: "70,000 UGX" },
    { title: "Data Science", description: "Master data analysis.", price: "90,000 UGX" },
];

courses.forEach(course => {
    const courseElement = document.createElement('div');
    courseElement.classList.add('card', 'hidden');
    courseElement.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <p><strong>${course.price}</strong></p>
    `;
    courseList.appendChild(courseElement);
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));



document.addEventListener('DOMContentLoaded', function () {
    const userDetails = document.querySelector('.user-details');
    const courseList = document.querySelector('.course-list');

    // Fetch user data (replace with API call)
    const userData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Student',
        joined: 'January 2023',
        avatar: 'images/user-avatar.jpg',
    };

    // Render user data
    userDetails.innerHTML = `
        <h2>${userData.name}</h2>
        <p>Email: ${userData.email}</p>
        <p>Role: ${userData.role}</p>
        <p>Joined: ${userData.joined}</p>
    `;

    // Fetch enrolled courses (replace with API call)
    const enrolledCourses = [
        {
            id: 1,
            title: 'Introduction to Machine Learning',
            category: 'Data Science',
            progress: 75,
        },
        {
            id: 2,
            title: 'Web Development Bootcamp',
            category: 'Web Development',
            progress: 50,
        },
    ];

    // Render enrolled courses
    enrolledCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';

        courseCard.innerHTML = `
            <h4>${course.title}</h4>
            <p>Category: ${course.category}</p>
            <p>Progress: ${course.progress}%</p>
        `;

        courseList.appendChild(courseCard);
    });
});
