// Professional Experience Data
const professionalExperience = [
  {
    title: "Full Stack Developer",
    company: "Cognizant, Remote",
    duration: "Sep 2024 — Present",
    responsibilities: [
      "Took over a large-scale project and sailed through it successfully along the team by leveraging available documentation.",
      "Successfully implemented customer change requests across multiple websites utilizing Drupal 10.",
      "Styled components to align with client design specifications.",
    ],
  },
  {
    title: "Back End Developer",
    company: "Gremlin eCommerce, Remote",
    duration: "May 2020 — Sep 2024",
    responsibilities: [
      "Integration of 3rd party APIs (Shopify API, various 3rd party APIs).",
      "Development of a FIFO product management system.",
      "Database migration from an old structure to our database structure for one of our new clients.",
      "Writing MySQL queries for generating large reports and MySQL triggers.",
      "Implementation of various functionality for product management, warehouse management, invoicing, orders, shipment, and other ecommerce-specific entities and processes.",
      "Using Bash scripting for repetitive tasks, such as creating a new local shop.",
      "Engaging in code review meetings.",
      "Keeping the knowledge base up to date, sharing my knowledge.",
      "Writing code while following clean code standards, principles (DRY, KISS, SOLID), and suitable design patterns where necessary.",
      "Refactoring older code.",
      "Templating with Smarty and jQuery functionality (such as AJAX requests).",
      "Working using Agile methodology, in sprints, and participating in daily meetings.",
      "Some exposure to writing PHP unit tests and attended training sessions on this topic.",
      "Some exposure to Laravel and Swagger (for API endpoints).",
      "Some exposure to ElasticSearch Queries.",
      "Some exposure to queuing through Rabbit MQ and Amazon S3 file upload through API.",
    ],
  },
];

// Render Professional Experience
const experienceContainer = document.getElementById('experience-container');
professionalExperience.forEach((job) => {
  const experienceCard = `
    <div class="experience-card">
      <h3>${job.title}</h3>
      <p>${job.company} | ${job.duration}</p>
      <ul>
        ${job.responsibilities.map((resp) => `<li>${resp}</li>`).join('')}
      </ul>
    </div>
  `;
  experienceContainer.innerHTML += experienceCard;
});

// Initialize Swiper for the timeline
const swiper = new Swiper('.swiper-container', {
  spaceBetween: 50,
  slidesPerView: 1,
  on: {
    slideChange: () => {
      const progress = (swiper.activeIndex + 1) / swiper.slides.length * 100;
      document.querySelector('.progress-bar').style.width = `${progress}%`;
    },
  },
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  themeToggle.innerHTML = body.classList.contains('dark')
    ? '<i class="fas fa-sun"></i> Light Mode'
    : '<i class="fas fa-moon"></i> Dark Mode';
});

// FAQ Toggle
function toggleFAQ(index) {
  const faqAnswer = document.getElementById(`faq-${index}`);
  const chevron = faqAnswer.previousElementSibling.querySelector('i');
  faqAnswer.classList.toggle('open');
  chevron.classList.toggle('fa-chevron-down');
  chevron.classList.toggle('fa-chevron-up');
}
