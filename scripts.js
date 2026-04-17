// Initialize AOS
if (typeof AOS !== 'undefined') {
    AOS.init({
        once: true,
        offset: 100,
    });
}


         ////////////////////////////////////////////////////////////////////////////
         // Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modeSwitch = document.getElementById('modeSwitch');
    const body = document.body;
    
    // Check for saved mode preference or default to light mode
    const savedMode = localStorage.getItem('portfolioMode') || 'light';
    if (savedMode === 'space') {
        modeSwitch.checked = true;
        body.classList.add('space-mode');
    }
    
    modeSwitch.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('space-mode');
            localStorage.setItem('portfolioMode', 'space');
            
            // Add entrance animation
            body.style.transition = 'all 0.8s ease';
            setTimeout(() => {
                body.style.transition = '';
            }, 800);
        } else {
            body.classList.remove('space-mode');
            localStorage.setItem('portfolioMode', 'light');
            
            // Add exit animation  
            body.style.transition = 'all 0.8s ease';
            setTimeout(() => {
                body.style.transition = '';
            }, 800);
        }
    });
});
/////////////////////////////////////////////////////////////////////////////////



        // Typewriter effect
        const texts = ['A Developer', 'A Problem Solver', 'A Dreamer'];
        let currentIndex = 0;
        const changingText = document.getElementById('changing-text');

        function changeText() {
            changingText.style.opacity = '0';
            setTimeout(() => {
                changingText.textContent = texts[currentIndex];
                changingText.style.opacity = '1';
                currentIndex = (currentIndex + 1) % texts.length;
            }, 500);
        }

        setInterval(changeText, 2000);
        changeText(); // Initial call

        // Navigation functions
        function hamburg() {
            const dropdown = document.querySelector('.dropdown');
            dropdown.style.transform = 'translateY(0px)';
        }

        function cancel() {
            const dropdown = document.querySelector('.dropdown');
            dropdown.style.transform = 'translateY(-500px)';
        }

        // Activities Section JavaScript
        document.addEventListener('DOMContentLoaded', function () {
            const activities = [
                {
                    title: "ICPC 2024",
                    description: "Competed in the ICPC Asia Dhaka Regional Contest 2024, securing rank 140 in a high-stakes competitive programming environment.🔥",
                    image: "assets/extraactivities/Icpc24.jpeg"
                },
                {
                    title: "ICPC 2025",
                    description: "Team RPSU_Ternery Troopers again competed in ICPC Asia Dhaka Regional Contest 2025",
                    image: "assets/extraactivities/Icpc25.jpeg"
                },
                {
                    title: "IUPC 2025",
                    description: "Ranked 79th at the Bitfest KUET IUPC 2025.",
                    image: "assets/extraactivities/Kuet25.jpeg"
                },
                {
                    title: "IUPC 2025",
                    description: "Achieved 118th place in the UIU IUPC Contest 2025 among competing teams.",
                    image: "assets/extraactivities/Uiu25.jpeg"
                },
                {
                    title: "IDPC 2024",
                    description: "Runners-Up, RPSU Intra-Department Programming Contest (IDPC) 2025 (Senior Level)",
                    image: "assets/extraactivities/Idpc24.jpeg"
                },

                {
                    title: "IDPC 2025",
                    description: "Champion, RPSU Intra-Department Programming Contest (IDPC) 2025 (Senior Level)",
                    image: "assets/extraactivities/Idpc25.jpeg"
                },

                {
                    title: "Programming Camp 2025",
                    description: "Excited to be a part of this programming camp in BUBT where many ICPC world finalist give their valuable lectures including guidance, approaches and many more!!!",
                    image: "assets/extraactivities/CampBubt25.jpeg"
                },

                {
                    title: "Fun Fact",
                    description: "Just differ in the angle 😃",
                    image: "assets/extraactivities/FunFact.jpeg"
                }
            ];

            const activityImg = document.getElementById('activity-img');
            const activityTitle = document.getElementById('activity-title');
            const activityDescription = document.getElementById('activity-description');
            const currentActivitySpan = document.getElementById('current-activity');
            const totalActivitiesSpan = document.getElementById('total-activities');

            let currentActivityIndex = 0;

            function updateActivityDisplay() {
                const activity = activities[currentActivityIndex];
                activityImg.src = activity.image;
                activityTitle.textContent = activity.title;
                activityDescription.textContent = activity.description;
                currentActivitySpan.textContent = currentActivityIndex + 1;
                totalActivitiesSpan.textContent = activities.length;
            }

            window.nextActivity = function() {
                currentActivityIndex = (currentActivityIndex + 1) % activities.length;
                updateActivityDisplay();
            };

            window.previousActivity = function() {
                currentActivityIndex = (currentActivityIndex - 1 + activities.length) % activities.length;
                updateActivityDisplay();
            };

            updateActivityDisplay(); // Show first activity

            // Auto-rotate activities every 5 seconds
            setInterval(() => {
                window.nextActivity();
            }, 5000);
        });