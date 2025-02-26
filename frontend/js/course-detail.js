
document.addEventListener('DOMContentLoaded', function () {
    // Fetch course data (replace with API call)
    const courseData = {
        id: 1,
        title: 'Introduction to Machine Learning',
        category: 'Data Science',
        rating: 4.5,
        image: 'images/course1.jpg',
        description: 'This course provides a comprehensive introduction to machine learning, covering key concepts, algorithms, and applications. By the end of the course, you will have a solid understanding of how to build and deploy machine learning models.',
        instructor: {
            name: 'John Doe',
            avatar: 'images/instructor1.jpg',
            bio: 'John Doe is a seasoned data scientist with over 10 years of experience in machine learning and artificial intelligence. He has worked on numerous projects in the industry and is passionate about teaching.',
        },
        lessons: [
            'Lesson 1: Introduction to Machine Learning',
            'Lesson 2: Supervised Learning',
            'Lesson 3: Unsupervised Learning',
            'Lesson 4: Neural Networks',
            'Lesson 5: Model Deployment',
        ],
    };

    // Render course data
    document.querySelector('.course-image img').src = courseData.image;
    document.querySelector('.course-info h2').textContent = courseData.title;
    document.querySelector('.course-category').textContent = courseData.category;
    document.querySelector('.course-rating').textContent = `★★★★☆ (${courseData.rating})`;
    document.querySelector('.course-instructor a').textContent = courseData.instructor.name;
    document.querySelector('.course-description p').textContent = courseData.description;

    // Render lessons
    const lessonsList = document.querySelector('.course-lessons ul');
    courseData.lessons.forEach(lesson => {
        const li = document.createElement('li');
        li.textContent = lesson;
        lessonsList.appendChild(li);
    });

    // Render instructor info
    document.querySelector('.instructor-avatar img').src = courseData.instructor.avatar;
    document.querySelector('.instructor-details h4').textContent = courseData.instructor.name;
    document.querySelector('.instructor-details p').textContent = courseData.instructor.bio;

    // Enroll button functionality
    document.getElementById('enrollButton').addEventListener('click', function () {
        alert('You have successfully enrolled in this course!');
    });
});
