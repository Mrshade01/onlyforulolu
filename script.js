/* =====================================================
   BIRTHDAY SURPRISE WEBSITE
===================================================== */


/* ELEMENTS */

const screens =
    document.querySelectorAll(".screen");

const passwordScreen =
    document.getElementById("passwordScreen");

const welcomeScreen =
    document.getElementById("welcomeScreen");

const memoriesScreen =
    document.getElementById("memoriesScreen");

const cakeScreen =
    document.getElementById("cakeScreen");

const celebrationScreen =
    document.getElementById("celebrationScreen");

const giftScreen =
    document.getElementById("giftScreen");

const letterScreen =
    document.getElementById("letterScreen");

const finalScreen =
    document.getElementById("finalScreen");


const passwordInput =
    document.getElementById("passwordInput");

const unlockBtn =
    document.getElementById("unlockBtn");

const wrongPassword =
    document.getElementById("wrongPassword");

const memoriesBtn =
    document.getElementById("memoriesBtn");

const cakeBtn =
    document.getElementById("cakeBtn");

const blowBtn =
    document.getElementById("blowBtn");

const giftBtn =
    document.getElementById("giftBtn");

const giftBox =
    document.getElementById("giftBox");

const openLetterBtn =
    document.getElementById("openLetterBtn");

const replayBtn =
    document.getElementById("replayBtn");

const welcomeText =
    document.getElementById("welcomeText");

const candleInstruction =
    document.getElementById("candleInstruction");

const wishText =
    document.getElementById("wishText");

const giftHint =
    document.getElementById("giftHint");

const envelope =
    document.getElementById("envelope");


const memoryMusic =
    document.getElementById("memoryMusic");

const cakeMusic =
    document.getElementById("cakeMusic");


/* PASSWORD */

const SECRET_PASSWORD = "10725";


/* SCREEN CHANGE */

function showScreen(screen) {

    screens.forEach((item) => {
        item.classList.remove("active");
    });

    screen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* UNLOCK */

function unlockWebsite() {

    const enteredPassword =
        passwordInput.value.trim();

    if (enteredPassword === SECRET_PASSWORD) {

        wrongPassword.classList.remove("show");

        startMemoryMusic();

        showScreen(welcomeScreen);

        typeWelcomeText();

    } else {

        wrongPassword.classList.add("show");

        passwordInput.value = "";

        passwordInput.focus();

        passwordInput.animate(
            [
                {
                    transform:
                        "translateX(0)"
                },

                {
                    transform:
                        "translateX(-8px)"
                },

                {
                    transform:
                        "translateX(8px)"
                },

                {
                    transform:
                        "translateX(-5px)"
                },

                {
                    transform:
                        "translateX(0)"
                }
            ],
            {
                duration: 350
            }
        );

    }

}


unlockBtn.addEventListener(
    "click",
    unlockWebsite
);


passwordInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {
            unlockWebsite();
        }

    }
);


/* WELCOME TYPEWRITER */

function typeWelcomeText() {

    const text =
        "Today is all about you. So take a deep breath, smile, and enjoy this little surprise made just for you... ❤️";

    welcomeText.textContent = "";

    let index = 0;

    const interval =
        setInterval(() => {

            welcomeText.textContent +=
                text[index];

            index++;

            if (index >= text.length) {

                clearInterval(interval);

            }

        }, 35);

}


/* MUSIC */

function startMemoryMusic() {

    memoryMusic.volume = 0.45;

    const playPromise =
        memoryMusic.play();

    if (playPromise !== undefined) {

        playPromise.catch(() => {});

    }

}


function startCakeMusic() {

    memoryMusic.pause();

    memoryMusic.currentTime = 0;

    cakeMusic.currentTime = 0;

    cakeMusic.volume = 0.55;

    const playPromise =
        cakeMusic.play();

    if (playPromise !== undefined) {

        playPromise.catch(() => {});

    }

}


/* MEMORIES */
memoriesBtn.addEventListener(
    "click",
    async () => {

        showScreen(memoriesScreen);

        revealMemories();

        // Stop any previous music
        cakeMusic.pause();
        cakeMusic.currentTime = 0;

        // Start memories music
        memoryMusic.currentTime = 18;
        memoryMusic.volume = 0.5;

        try {
            await memoryMusic.play();
            console.log("Memories music playing!");
        } catch (error) {
            console.error("Memories music error:", error);
        }

    }
);


function revealMemories() {

    const cards =
        document.querySelectorAll(
            ".memory-card"
        );

    cards.forEach(
        (card, index) => {

            setTimeout(
                () => {

                    card.classList.add(
                        "visible"
                    );

                },
                index * 150
            );

        }
    );

}


cakeBtn.addEventListener(
    "click",
    async () => {

        showScreen(cakeScreen);

        // Stop memories music
        memoryMusic.pause();
        memoryMusic.currentTime = 0;

        // Start cake music
        cakeMusic.currentTime = 0;
        cakeMusic.volume = 0.6;

        try {
            await cakeMusic.play();
            console.log("Cake music playing!");
        } catch (error) {
            console.error("Cake music error:", error);
        }

    }
);
/* CANDLES */

let candlesBlown = false;


blowBtn.addEventListener(
    "click",
    () => {

        if (candlesBlown) return;

        candlesBlown = true;

        const flames =
            document.querySelectorAll(
                ".flame"
            );

        flames.forEach(
            (flame,index) => {

                setTimeout(
                    () => {

                        flame.classList.add(
                            "off"
                        );

                    },
                    index * 180
                );

            }
        );

        candleInstruction.textContent =
            "Make a wish... and let it come true. ✨";

        wishText.textContent =
            "Your wish is on its way... ❤️";

        blowBtn.textContent =
            "Celebrate! 🎉";

        setTimeout(
            () => {

                launchCelebration();

            },
            1500
        );

    }
);


/* CELEBRATION */

function launchCelebration() {

    showScreen(
        celebrationScreen
    );

    createBalloons();

    createConfetti();

    createFireworks();

}


function createBalloons() {

    const container =
        document.getElementById(
            "balloons"
        );

    container.innerHTML = "";

    for (
        let i = 0;
        i < 22;
        i++
    ) {

        const balloon =
            document.createElement(
                "div"
            );

        balloon.className =
            "balloon";

        const hue =
            Math.floor(
                Math.random() * 360
            );

        balloon.style.background =
            `hsl(${hue},75%,65%)`;

        balloon.style.left =
            `${Math.random() * 100}%`;

        balloon.style.animationDuration =
            `${4 + Math.random() * 5}s`;

        balloon.style.animationDelay =
            `${Math.random() * 2}s`;

        container.appendChild(
            balloon
        );

    }

}


function createConfetti() {

    const container =
        document.getElementById(
            "confetti"
        );

    container.innerHTML = "";

    for (
        let i = 0;
        i < 160;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );

        piece.className =
            "confetti-piece";

        const hue =
            Math.floor(
                Math.random() * 360
            );

        piece.style.background =
            `hsl(${hue},80%,65%)`;

        piece.style.left =
            `${Math.random() * 100}%`;

        piece.style.animationDuration =
            `${2 + Math.random() * 4}s`;

        piece.style.animationDelay =
            `${Math.random() * 2}s`;

        container.appendChild(
            piece
        );

    }

}


function createFireworks() {

    const container =
        document.getElementById(
            "fireworks"
        );

    container.innerHTML = "";

    for (
        let i = 0;
        i < 12;
        i++
    ) {

        setTimeout(
            () => {

                const firework =
                    document.createElement(
                        "div"
                    );

                firework.className =
                    "firework";

                firework.style.left =
                    `${15 + Math.random() * 70}%`;

                firework.style.top =
                    `${15 + Math.random() * 55}%`;

                const hue =
                    Math.floor(
                        Math.random() * 360
                    );

                firework.style.background =
                    `hsl(${hue},90%,70%)`;

                firework.style.boxShadow =
                    `0 0 20px 8px hsla(${hue},90%,70%,.5)`;

                container.appendChild(
                    firework
                );

                setTimeout(
                    () => {

                        firework.remove();

                    },
                    1400
                );

            },
            i * 450
        );

    }

}


/* GIFT */

giftBtn.addEventListener(
    "click",
    () => {

        showScreen(giftScreen);

    }
);


giftBox.addEventListener(
    "click",
    () => {

        if (
            giftBox.classList.contains(
                "open"
            )
        ) {
            return;
        }

        giftBox.classList.add(
            "open"
        );

        giftHint.textContent =
            "A letter was waiting inside... 💌";

        createSmallConfetti();

        setTimeout(
            () => {

                showScreen(
                    letterScreen
                );

            },
            1800
        );

    }
);


function createSmallConfetti() {

    for (
        let i = 0;
        i < 50;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );

        piece.className =
            "confetti-piece";

        piece.style.position =
            "fixed";

        piece.style.left =
            "50%";

        piece.style.top =
            "50%";

        piece.style.background =
            `hsl(${Math.random() * 360},80%,65%)`;

        piece.style.animationDuration =
            `${1 + Math.random()}s`;

        piece.style.zIndex = "100";

        document.body.appendChild(
            piece
        );

        setTimeout(
            () => {

                piece.remove();

            },
            2000
        );

    }

}


/* LETTER */

openLetterBtn.addEventListener(
    "click",
    () => {

        if (
            !envelope.classList.contains(
                "open"
            )
        ) {

            envelope.classList.add(
                "open"
            );

            openLetterBtn.textContent =
                "Continue ❤️";

        } else {

            showScreen(finalScreen);

            createFinalParticles();

        }

    }
);


/* REPLAY */

replayBtn.addEventListener(
    "click",
    () => {

        location.reload();

    }
);


/* PARTICLES */

function createParticles() {

    const container =
        document.getElementById(
            "particles"
        );

    for (
        let i = 0;
        i < 70;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );

        particle.className =
            "particle";

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.top =
            `${Math.random() * 100}%`;

        particle.style.animationDelay =
            `${Math.random() * 3}s`;

        particle.style.animationDuration =
            `${2 + Math.random() * 4}s`;

        container.appendChild(
            particle
        );

    }

}


function createFinalParticles() {

    const container =
        document.getElementById(
            "particles"
        );

    for (
        let i = 0;
        i < 30;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );

        particle.className =
            "particle";

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.top =
            `${Math.random() * 100}%`;

        particle.style.width = "5px";

        particle.style.height = "5px";

        particle.style.animationDuration =
            `${1 + Math.random() * 3}s`;

        container.appendChild(
            particle
        );

    }

}


/* INITIALIZE */

createParticles();