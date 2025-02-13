(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

// stars falling
document.addEventListener("DOMContentLoaded", () => {
    const starContainer = document.querySelector(".stars");

    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");

        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = Math.random() * 3 + 2 + "s";
        star.style.animationDelay = Math.random() * 5 + "s";

        starContainer.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 5000);
    }

    setInterval(createStar, 300);
});

// music 
document.addEventListener("DOMContentLoaded", () => {
    // Get the audio element
    const audio = document.getElementById('background-music');

    // Play the audio when the user hovers over the body
    document.body.addEventListener('mouseover', function() {
        if (audio.paused) {
            audio.play();  // Play the audio when the mouse enters the page
        }
    });

})

// Adjust the volume based on slider input
function adjustVolume() {
    // Get the audio element
    let audioElement = document.getElementById('background-music');
    const volumeSlider = document.getElementById('volumeSlider');
    // Update the audio volume based on the slider value
    audioElement.volume = volumeSlider.value;
}


let isAnimating = false;  // Flag to track if the animation is running
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("animated-text");
    const text = textElement.textContent; // Get initial text
    textElement.textContent = ""; // Clear original text
    let index = 0;

    // Delay the start of the animation by 1 second
    setTimeout(() => {
        // Start initial animation if not already animating
        if (!isAnimating) {
            isAnimating = true; // Set flag to indicate animation is in progress
            function typeLetter() {
                if (index < text.length) {
                    textElement.textContent += text[index]; // Add the next letter
                    index++;
                    setTimeout(typeLetter, 100); // Adjust speed (100ms per letter)
                } else {
                    isAnimating = false; // Reset flag when animation is done
                }
            }

            typeLetter(); // Start typing the initial text after 1 second
        }
    }, 1000); // Delay before starting initial animation
});

function resetAndAnimateText(newText) {
    const textElement = document.getElementById('animated-text');
    
    if (isAnimating) return; // Prevent starting the animation if it's already running
    idx++;

    isAnimating = true; // Set flag to indicate that animation is in progress
    textElement.textContent = ''; // Clear current text
    let index = 0;

    // Function to animate text letter by letter
    function typeLetter() {
        if (index < newText.length) {
            textElement.textContent += newText[index];
            index++;
            setTimeout(typeLetter, 100); // Adjust speed (100ms per letter)
        } else {
            isAnimating = false; // Reset flag when animation is done
        }
    }

    // Start typing the new text
    typeLetter();
}

idx = 0;
idxMAX = 3;

const textArray = [
    "hmm just wanted to make something small as a token of appreciation.. and for vday, of course!",
    "well this is just the beginning.. i'll be making it a lot better but this is a sneak peek :D",
    "i hope you're having a good day love <3"
];

function handleButtonClick(){
    if (idx < idxMAX) {
        resetAndAnimateText(textArray[idx]);
    }
}

