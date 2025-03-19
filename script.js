
function showAbout() {
    const text = "Hi! I'm Dan 😅, a passionate web developer with experience in building responsive and modern websites. welcome to my Portfolio!";
    const aboutContainer = document.getElementById("about-container");
    const skillsContainer = document.getElementById("skills-container");
    const skillschoice = document.getElementById("skills-choice-container");
    document.getElementById("education-container").style.display ="none";
    skillsContainer.style.display = "none";
    skillschoice.style.display = "none";
    aboutContainer.style.display = "block";
    aboutContainer.innerHTML = "";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            aboutContainer.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
        }
    }
    typeWriter();
}

function showSkills() {
    document.getElementById("about-container").style.display = "none";
    document.getElementById("skills-choice-container").style.display = "flex";
    document.getElementById("education-container").style.display ="none";
}

function showProgrammingSkills() {
   
    document.getElementById("skills-container").style.display = "flex";
    document.querySelectorAll('.skill-icon').forEach((icon, index) => {
        setTimeout(() => {
            icon.style.display = "inline-block";
            icon.classList.add("show");
        }, index * 100);
    });
}
function showDescription(text) {
    const aboutContainer = document.getElementById("about-container");
    
    aboutContainer.style.display = "block";
    aboutContainer.innerHTML = "";

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
           aboutContainer.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 25);
        }
    }
    typeWriter();

}

    const text = "School: Irene B. Antonio College of Mindanao\nCourse: Bachelor of Science in Information Technology\nSchool Year: 2014-2018\nAwards Received: Programmer of the Year and Best in Capstone Presenters Awardee";
    let index = 0;
    function showEducation() {
        document.getElementById("about-container").style.display = "none";
    document.getElementById("skills-choice-container").style.display = "none";
    document.getElementById("skills-container").style.display = "none";
    document.getElementById("education-container").style.display ="flex";
        const notebook = document.getElementById("education-container");
        notebook.classList.add("show");
        setTimeout(startTyping, 500);
    }
    function startTyping() {
        index = 0;
        document.getElementById("text").textContent = "";
        typeWriter();
    }
    function typeWriter() {
        if (index < text.length) {
            document.getElementById("text").textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 25);
        }
    }
    function updateClock() {
        let now = new Date();
        let utc = now.getTime() + now.getTimezoneOffset() * 60000;
        let philTime = new Date(utc + 3600000 * 8); // Convert to UTC+8 (Philippines Time)

        let hours = philTime.getHours() % 12;
        let minutes = philTime.getMinutes();
        let seconds = philTime.getSeconds();
        
        let hourDeg = (hours * 30) + (minutes * 0.5);
        let minuteDeg = (minutes * 6) + (seconds * 0.1);
        let secondDeg = seconds * 6;
        
        document.getElementById('hour-hand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
        document.getElementById('minute-hand').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
        document.getElementById('second-hand').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;

       
    }
    
    function addNumbers() {
        const numbers = document.getElementById('numbers');
        for (let i = 1; i <= 12; i++) {
            let angle = (i * 30) * (Math.PI / 180);
            let x = 50 + 40 * Math.sin(angle);
            let y = 50 - 40 * Math.cos(angle);
            let numDiv = document.createElement('div');
            numDiv.innerText = i;
            numDiv.style.left = `${x}%`;
            numDiv.style.top = `${y}%`;
            numbers.appendChild(numDiv);
        }
    }
    
   
    