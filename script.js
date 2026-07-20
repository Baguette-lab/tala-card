/* ==================================================
   PERSONAL DETAILS
================================================== */

const CONFIG = {
  partnerName: "My Love",
  yourName: "Your Love",
  anniversaryDate: "Our Anniversary"
};


/* ==================================================
   GOOGLE APPS SCRIPT
================================================== */

const EMAIL_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxPNYIO9_Gt2hZ-9RqKynQETwRYv8jrYgKbQ7_i4Hsu8wyDJd-4rIa9uh59zXTqwmTN/exec";

const EMAIL_FORM_KEY =
  "anniversary-date-card-v1";

/* ==================================================
   DATE OPTIONS
================================================== */

const dateCategories = [
  {
    key: "food",

    label: "Food",

    title: "What should we eat?",

    subtitle:
      "Choose the food that sounds best for our anniversary date.",

    options: [
      {
        name: "Italian Dinner",

        description:
          "Pasta, pizza, dessert, and a cozy table for two.",

        image:
          "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85"
      },

      {
        name: "Japanese Date",

        description:
          "Sushi, ramen, rice bowls, and a Japanese feast.",

        image:
          "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=85"
      },

      {
        name: "Korean Food Trip",

        description:
          "Samgyupsal, Korean dishes, and plenty of side dishes.",

        image:
          "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=85"
      },

      {
        name: "Steak Dinner",

        description:
          "A juicy steak, tasty sides, and a proper dinner date.",

        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85"
      }
    ]
  },

  {
    key: "place",

    label: "Place",

    title: "Where should we go?",

    subtitle:
      "Choose the place or activity you would enjoy the most.",

    options: [
      {
        name: "Mall, Shopping, and Movie",

        description:
          "Walk around the mall, shop together, eat, and watch a movie.",

        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85"
      },

      {
        name: "Sunset Picnic",

        description:
          "A picnic blanket, snacks, music, and a beautiful sunset.",

        image:
          "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=85"
      },

      {
        name: "Museum and City Walk",

        description:
          "Art, pictures, wandering around, and discovering places.",

        image:
          "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=900&q=85"
      },

      {
        name: "Cozy Home Date",

        description:
          "Food, movies, blankets, privacy, and no rushing.",

        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85"
      }
    ]
  },

  {
    key: "outfit",

    label: "Outfit",

    title: "What do you feel like wearing?",

    subtitle:
      "Choose the outfit style you would feel happiest and most confident in.",

    options: [
      {
        name: "Baggy and Comfy",

        description:
          "Oversized clothes, loose fits, and maximum comfort.",

        image:
          "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85"
      },

      {
        name: "Fitted and Cute",

        description:
          "A fitted outfit that feels flattering, cute, and confident.",

        image:
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85"
      },

      {
        name: "Formal and Elegant",

        description:
          "A polished and elegant outfit for a more special date.",

        image:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85"
      },

      {
        name: "Casual Streetwear",

        description:
          "A relaxed but stylish outfit with a cool streetwear look.",

        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85"
      }
    ]
  },

  {
    key: "time",

    label: "Time",

    title: "When should our date happen?",

    subtitle:
      "Choose the part of the day that feels most special.",

    options: [
      {
        name: "Breakfast Date",

        description:
          "A peaceful morning, warm drinks, and a full day ahead.",

        image:
          "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=900&q=85"
      },

      {
        name: "Afternoon Adventure",

        description:
          "Food, activities, pictures, and time to explore.",

        image:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85"
      },

      {
        name: "Sunset Date",

        description:
          "Golden-hour pictures and watching the sky change together.",

        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"
      },

      {
        name: "Evening Date",

        description:
          "City lights, dinner, dessert, and a slow walk afterward.",

        image:
          "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85"
      }
    ]
  },

  {
    key: "extra",

    label: "Extra",

    title: "Choose one little extra.",

    subtitle:
      "Pick the finishing touch for our anniversary date.",

    options: [
      {
        name: "Flowers",

        description:
          "A bouquet chosen especially for you.",

        image:
          "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85"
      },

      {
        name: "Photo Booth",

        description:
          "A strip of cute, chaotic, and very us pictures.",

        image:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85"
      },

      {
        name: "Handwritten Letter",

        description:
          "Another letter for you to keep after our date.",

        image:
          "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=85"
      },

      {
        name: "Surprise Me",

        description:
          "You trust me to prepare one secret anniversary surprise.",

        image:
          "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=900&q=85"
      }
    ]
  }
];

/* ==================================================
   ELEMENTS
================================================== */

const screens =
  document.querySelectorAll(".screen");

const letterScreen =
  document.getElementById("letterScreen");

const kioskScreen =
  document.getElementById("kioskScreen");

const finalScreen =
  document.getElementById("finalScreen");

const openEnvelopeBtn =
  document.getElementById("openEnvelopeBtn");

const previewLetter =
  document.getElementById("previewLetter");

const letterTransitionLayer =
  document.getElementById("letterTransitionLayer");

const yesBtn =
  document.getElementById("yesBtn");

const noBtn =
  document.getElementById("noBtn");

const questionArea =
  document.getElementById("questionArea");

const tinyNote =
  document.getElementById("tinyNote");

const virusOverlay =
  document.getElementById("virusOverlay");

const virusProgressBar =
  document.getElementById("virusProgressBar");

const virusStatus =
  document.getElementById("virusStatus");

const stepLabel =
  document.getElementById("stepLabel");

const categoryLabel =
  document.getElementById("categoryLabel");

const kioskProgress =
  document.getElementById("kioskProgress");

const stepNumber =
  document.getElementById("stepNumber");

const categoryTitle =
  document.getElementById("categoryTitle");

const categorySubtitle =
  document.getElementById("categorySubtitle");

const optionGrid =
  document.getElementById("optionGrid");

const backBtn =
  document.getElementById("backBtn");

const nextBtn =
  document.getElementById("nextBtn");

const summaryGrid =
  document.getElementById("summaryGrid");

const shareBtn =
  document.getElementById("shareBtn");

const restartBtn =
  document.getElementById("restartBtn");

const replayEndingBtn =
  document.getElementById("replayEndingBtn");

const musicToggleBtn =
  document.getElementById("musicToggleBtn");

const copyStatus =
  document.getElementById("copyStatus");

const emailStatus =
  document.getElementById("emailStatus");

const finalTicket =
  document.getElementById("finalTicket");

const cinematicOverlay =
  document.getElementById("cinematicOverlay");

const cinematicKicker =
  document.getElementById("cinematicKicker");

const cinematicLines =
  document.querySelectorAll(
    "[data-cinematic-line]"
  );

const cinematicSealStage =
  document.getElementById("cinematicSealStage");

const cinematicFinalCaption =
  document.getElementById("cinematicFinalCaption");

const endingMusic =
  document.getElementById("endingMusic");

const heartConfetti =
  document.getElementById("heartConfetti");

/* ==================================================
   STATE
================================================== */

let currentStep = 0;

let noEscapeCount = 0;

let virusTriggered = false;

let noButtonMoving = false;

let envelopeTransitionRunning = false;

let resultsSent = false;

let currentSubmissionId = "";

let cinematicRunning = false;

let endingHasPlayed = false;

let musicStarted = false;

let musicWasPrepared = false;

const selections = {};

/* ==================================================
   HELPERS
================================================== */

function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

/* ==================================================
   PERSONAL DETAILS
================================================== */

function applyPersonalDetails() {
  document
    .querySelectorAll("[data-partner-name]")
    .forEach((element) => {
      element.textContent =
        CONFIG.partnerName;
    });

  document
    .querySelectorAll("[data-your-name]")
    .forEach((element) => {
      element.textContent =
        CONFIG.yourName;
    });

  document
    .querySelectorAll("[data-anniversary-date]")
    .forEach((element) => {
      element.textContent =
        CONFIG.anniversaryDate;
    });

  document.title =
    `${CONFIG.partnerName} — Our Anniversary Date`;
}

applyPersonalDetails();

/* ==================================================
   SCREEN NAVIGATION
================================================== */

function showScreen(targetScreen) {
  screens.forEach((screen) => {
    screen.classList.remove("active");
  });

  targetScreen.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* ==================================================
   ENVELOPE
================================================== */

openEnvelopeBtn.addEventListener(
  "click",
  () => {
    if (envelopeTransitionRunning) {
      return;
    }

    envelopeTransitionRunning = true;

    openEnvelopeBtn.classList.add(
      "opening"
    );

    setTimeout(() => {
      animateLetterPopOut();
    }, 470);
  }
);

function animateLetterPopOut() {
  const previewRectangle =
    previewLetter.getBoundingClientRect();

  const floatingLetter =
    document.createElement("div");

  floatingLetter.className =
    "transition-letter-sheet";

  floatingLetter.innerHTML = `
    <div class="transition-letter-inner">
      <p class="transition-letter-script">
        My favorite person,
      </p>

      <p class="transition-letter-question">
        Will you go on an anniversary date with me?
      </p>

      <span class="transition-letter-heart">
        ♥
      </span>
    </div>
  `;

  floatingLetter.style.left =
    `${previewRectangle.left}px`;

  floatingLetter.style.top =
    `${previewRectangle.top}px`;

  floatingLetter.style.width =
    `${previewRectangle.width}px`;

  floatingLetter.style.height =
    `${previewRectangle.height}px`;

  letterTransitionLayer.appendChild(
    floatingLetter
  );

  previewLetter.style.opacity = "0";

  const target =
    getFullLetterTargetRectangle();

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      floatingLetter.classList.add(
        "expanding"
      );

      floatingLetter.style.left =
        `${target.left}px`;

      floatingLetter.style.top =
        `${target.top}px`;

      floatingLetter.style.width =
        `${target.width}px`;

      floatingLetter.style.height =
        `${target.height}px`;

      floatingLetter.style.transform =
        "rotate(0deg)";
    });
  });

  setTimeout(() => {
    letterScreen.classList.add(
      "letter-reveal"
    );

    showScreen(letterScreen);

    floatingLetter.style.opacity =
      "0";
  }, 850);

  setTimeout(() => {
    floatingLetter.remove();

    previewLetter.style.opacity = "";

    envelopeTransitionRunning = false;

    letterScreen.classList.remove(
      "letter-reveal"
    );
  }, 1150);
}

function getFullLetterTargetRectangle() {
  const isMobile =
    window.innerWidth <= 720;

  const sidePadding =
    isMobile ? 16 : 25;

  const verticalPadding =
    isMobile ? 18 : 30;

  const targetWidth =
    Math.min(
      780,
      window.innerWidth -
        sidePadding * 2
    );

  const availableHeight =
    window.innerHeight -
      verticalPadding * 2;

  const targetHeight =
    Math.min(
      650,
      Math.max(
        480,
        availableHeight
      )
    );

  return {
    left:
      (
        window.innerWidth -
          targetWidth
      ) / 2,

    top:
      Math.max(
        verticalPadding,
        (
          window.innerHeight -
            targetHeight
        ) / 2
      ),

    width:
      targetWidth,

    height:
      targetHeight
  };
}

/* ==================================================
   RUNAWAY NO BUTTON
================================================== */

function moveNoButton() {
  if (
    virusTriggered ||
    noBtn.hidden ||
    noButtonMoving
  ) {
    return;
  }

  noButtonMoving = true;

  noEscapeCount += 1;

  noBtn.classList.add("runaway");

  const areaRectangle =
    questionArea.getBoundingClientRect();

  const buttonRectangle =
    noBtn.getBoundingClientRect();

  const padding = 8;

  const maximumLeft =
    Math.max(
      padding,
      areaRectangle.width -
        buttonRectangle.width -
        padding
    );

  const maximumTop =
    Math.max(
      padding,
      areaRectangle.height -
        buttonRectangle.height -
        padding
    );

  let newLeft =
    Math.random() * maximumLeft;

  let newTop =
    Math.random() * maximumTop;

  const yesRectangle =
    yesBtn.getBoundingClientRect();

  const yesLeft =
    yesRectangle.left -
      areaRectangle.left;

  const yesTop =
    yesRectangle.top -
      areaRectangle.top;

  const overlapsYes =
    newLeft <
      yesLeft +
        yesRectangle.width +
        25 &&

    newLeft +
      buttonRectangle.width >
      yesLeft -
        25 &&

    newTop <
      yesTop +
        yesRectangle.height +
        25 &&

    newTop +
      buttonRectangle.height >
      yesTop -
        25;

  if (overlapsYes) {
    newTop =
      newTop <
      areaRectangle.height / 2
        ? maximumTop
        : padding;
  }

  noBtn.style.right = "auto";

  noBtn.style.transform = "none";

  noBtn.style.left =
    `${newLeft}px`;

  noBtn.style.top =
    `${newTop}px`;

  const messages = [
    "Nope. That button is avoiding commitment.",
    "Almost! The No button escaped again.",
    "This invitation only accepts romantic answers.",
    "The No button has entered witness protection.",
    "That button really does not want to be pressed.",
    "Still trying? I admire the determination.",
    "The No button said: not today.",
    "It appears that Yes is much easier.",
    "You were close. Very close.",
    "No remains unavailable for emotional reasons."
  ];

  tinyNote.textContent =
    messages[
      (noEscapeCount - 1) %
        messages.length
    ];

  setTimeout(() => {
    noButtonMoving = false;
  }, 145);
}

/* Desktop */

questionArea.addEventListener(
  "pointermove",
  (event) => {
    if (
      event.pointerType !== "mouse" &&
      event.pointerType !== "pen"
    ) {
      return;
    }

    if (
      virusTriggered ||
      noBtn.hidden
    ) {
      return;
    }

    const rectangle =
      noBtn.getBoundingClientRect();

    const escapeDistance = 82;

    const nearestX =
      Math.max(
        rectangle.left,
        Math.min(
          event.clientX,
          rectangle.right
        )
      );

    const nearestY =
      Math.max(
        rectangle.top,
        Math.min(
          event.clientY,
          rectangle.bottom
        )
      );

    const distance =
      Math.hypot(
        event.clientX - nearestX,
        event.clientY - nearestY
      );

    if (distance < escapeDistance) {
      moveNoButton();
    }
  }
);

noBtn.addEventListener(
  "pointerenter",
  (event) => {
    if (
      event.pointerType === "mouse" ||
      event.pointerType === "pen"
    ) {
      moveNoButton();
    }
  }
);

/* Mobile */

questionArea.addEventListener(
  "touchstart",
  (event) => {
    if (
      virusTriggered ||
      noBtn.hidden
    ) {
      return;
    }

    const touch =
      event.touches[0];

    if (!touch) {
      return;
    }

    const rectangle =
      noBtn.getBoundingClientRect();

    const distance = 48;

    const directlyInside =
      touch.clientX >= rectangle.left &&
      touch.clientX <= rectangle.right &&
      touch.clientY >= rectangle.top &&
      touch.clientY <= rectangle.bottom;

    const nearby =
      touch.clientX >=
        rectangle.left - distance &&

      touch.clientX <=
        rectangle.right + distance &&

      touch.clientY >=
        rectangle.top - distance &&

      touch.clientY <=
        rectangle.bottom + distance;

    if (
      nearby &&
      !directlyInside
    ) {
      moveNoButton();
    }
  },
  {
    passive: true
  }
);

noBtn.addEventListener(
  "click",
  (event) => {
    event.preventDefault();

    triggerLoveVirus();
  }
);

/* ==================================================
   LOVE VIRUS
================================================== */

function triggerLoveVirus() {
  if (virusTriggered) {
    return;
  }

  virusTriggered = true;

  virusOverlay.classList.add(
    "active"
  );

  document.body.style.overflow =
    "hidden";

  requestAnimationFrame(() => {
    virusProgressBar.style.width =
      "100%";
  });

  setTimeout(() => {
    virusStatus.textContent =
      "Removing incompatible answer...";
  }, 900);

  setTimeout(() => {
    virusStatus.textContent =
      "Restoring the correct romantic option...";
  }, 1750);

  setTimeout(() => {
    virusOverlay.classList.remove(
      "active"
    );

    document.body.style.overflow = "";

    noBtn.hidden = true;

    yesBtn.classList.add(
      "only-choice"
    );

    tinyNote.textContent =
      "System repaired. Only one valid answer remains. ♥";

    virusProgressBar.style.width =
      "0";
  }, 2900);
}

/* ==================================================
   YES
================================================== */

yesBtn.addEventListener(
  "click",
  () => {
    createHeartConfetti(36);

    setTimeout(() => {
      currentStep = 0;

      renderCurrentStep();

      showScreen(kioskScreen);
    }, 600);
  }
);

/* ==================================================
   KIOSK
================================================== */

function renderCurrentStep() {
  const category =
    dateCategories[currentStep];

  const selectedOption =
    selections[category.key];

  stepLabel.textContent =
    `Step ${currentStep + 1} of ${dateCategories.length}`;

  categoryLabel.textContent =
    category.label;

  kioskProgress.style.width =
    `${
      (
        (
          currentStep + 1
        ) /
        dateCategories.length
      ) * 100
    }%`;

  stepNumber.textContent =
    String(
      currentStep + 1
    ).padStart(
      2,
      "0"
    );

  categoryTitle.textContent =
    category.title;

  categorySubtitle.textContent =
    category.subtitle;

  optionGrid.innerHTML = "";

  category.options.forEach(
    (option) => {
      const button =
        document.createElement(
          "button"
        );

      button.type = "button";

      button.className =
        "option-card";

      if (
        selectedOption &&
        selectedOption.name ===
          option.name
      ) {
        button.classList.add(
          "selected"
        );
      }

      button.innerHTML = `
        <div class="option-image-wrapper">
          <img
            class="option-image"
            src="${option.image}"
            alt="${option.name}"
            loading="lazy"
          >

          <span class="option-check">
            ✓
          </span>
        </div>

        <div class="option-copy">
          <h3>${option.name}</h3>
          <p>${option.description}</p>
        </div>
      `;

      button.addEventListener(
        "click",
        () => {
          selections[category.key] =
            option;

          optionGrid
            .querySelectorAll(
              ".option-card"
            )
            .forEach((card) => {
              card.classList.remove(
                "selected"
              );
            });

          button.classList.add(
            "selected"
          );

          nextBtn.disabled = false;
        }
      );

      optionGrid.appendChild(button);
    }
  );

  backBtn.style.visibility =
    currentStep === 0
      ? "hidden"
      : "visible";

  const isLast =
    currentStep ===
      dateCategories.length - 1;

  nextBtn.textContent =
    isLast
      ? "Create our date ticket"
      : "Next choice";

  nextBtn.disabled =
    !selectedOption;
}

backBtn.addEventListener(
  "click",
  () => {
    if (currentStep <= 0) {
      return;
    }

    currentStep -= 1;

    renderCurrentStep();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
);

/* ==================================================
   MUSIC
================================================== */

function prepareEndingMusic() {
  if (musicWasPrepared) {
    return;
  }

  musicWasPrepared = true;

  endingMusic.volume = 0;

  const playPromise =
    endingMusic.play();

  if (
    playPromise &&
    typeof playPromise.catch ===
      "function"
  ) {
    playPromise
      .then(() => {
        musicStarted = true;

        musicToggleBtn.textContent =
          "Pause music";
      })
      .catch(() => {
        musicStarted = false;

        musicToggleBtn.textContent =
          "Play music";
      });
  }
}

function fadeMusicIn() {
  if (endingMusic.paused) {
    endingMusic
      .play()
      .then(() => {
        musicStarted = true;

        musicToggleBtn.textContent =
          "Pause music";

        increaseMusicVolume();
      })
      .catch(() => {
        musicStarted = false;
      });

    return;
  }

  increaseMusicVolume();
}

function increaseMusicVolume() {
  let volume =
    endingMusic.volume;

  const interval =
    setInterval(() => {
      volume =
        Math.min(
          0.55,
          volume + 0.05
        );

      endingMusic.volume =
        volume;

      if (volume >= 0.55) {
        clearInterval(interval);
      }
    }, 90);
}

musicToggleBtn.addEventListener(
  "click",
  () => {
    if (endingMusic.paused) {
      endingMusic.volume = 0.45;

      endingMusic
        .play()
        .then(() => {
          musicStarted = true;

          musicToggleBtn.textContent =
            "Pause music";
        })
        .catch(() => {
          musicToggleBtn.textContent =
            "Music unavailable";
        });

      return;
    }

    endingMusic.pause();

    musicStarted = false;

    musicToggleBtn.textContent =
      "Play music";
  }
);

/* ==================================================
   EMAIL
================================================== */

function createSubmissionId() {
  if (
    window.crypto &&
    typeof window.crypto.randomUUID ===
      "function"
  ) {
    return window.crypto.randomUUID();
  }

  return (
    "date-" +
    Date.now() +
    "-" +
    Math.random()
      .toString(36)
      .slice(2)
  );
}

function emailEndpointIsConfigured() {
  return (
    EMAIL_ENDPOINT.startsWith(
      "https://script.google.com/macros/s/"
    ) &&
    EMAIL_ENDPOINT.endsWith("/exec")
  );
}

async function sendResultsToEmail() {
  if (resultsSent) {
    return true;
  }

  if (!emailEndpointIsConfigured()) {
    emailStatus.textContent =
      "Email sending is not configured yet.";

    emailStatus.className =
      "email-status error";

    return false;
  }

  if (!currentSubmissionId) {
    currentSubmissionId =
      createSubmissionId();
  }

  emailStatus.textContent =
    "Sending your choices to me...";

  emailStatus.className =
    "email-status sending";

  const formData =
    new URLSearchParams({
      formKey:
        EMAIL_FORM_KEY,

      submissionId:
        currentSubmissionId,

      partnerName:
        CONFIG.partnerName,

      invitedBy:
        CONFIG.yourName,

      anniversaryDate:
        CONFIG.anniversaryDate,

      food:
        selections.food
          ? selections.food.name
          : "Not selected",

      place:
        selections.place
          ? selections.place.name
          : "Not selected",

      outfit:
        selections.outfit
          ? selections.outfit.name
          : "Not selected",

      time:
        selections.time
          ? selections.time.name
          : "Not selected",

      extra:
        selections.extra
          ? selections.extra.name
          : "Not selected"
    });

  try {
    await fetch(
      EMAIL_ENDPOINT,
      {
        method: "POST",

        mode: "no-cors",

        body: formData,

        keepalive: true
      }
    );

    resultsSent = true;

    emailStatus.textContent =
      "Your choices were sent to me. ♥";

    emailStatus.className =
      "email-status success";

    return true;
  } catch (error) {
    resultsSent = false;

    emailStatus.textContent =
      "Your choices could not be sent. Please send me a screenshot.";

    emailStatus.className =
      "email-status error";

    console.error(
      "Submission error:",
      error
    );

    return false;
  }
}

/* ==================================================
   NEXT BUTTON
================================================== */

nextBtn.addEventListener(
  "click",
  async () => {
    const category =
      dateCategories[currentStep];

    if (
      !selections[category.key]
    ) {
      return;
    }

    const isLast =
      currentStep ===
        dateCategories.length - 1;

    if (!isLast) {
      currentStep += 1;

      renderCurrentStep();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      return;
    }

    nextBtn.disabled = true;

    prepareEndingMusic();

    renderFinalTicket();

    showScreen(finalScreen);

    createHeartConfetti(42);

    const submitted =
      await sendResultsToEmail();

    if (submitted) {
      await wait(1300);

      startCinematicEnding();
    }
  }
);

/* ==================================================
   FINAL TICKET
================================================== */

function renderFinalTicket() {
  summaryGrid.innerHTML = "";

  dateCategories.forEach(
    (category) => {
      const selected =
        selections[category.key];

      if (!selected) {
        return;
      }

      const item =
        document.createElement(
          "article"
        );

      item.className =
        "summary-item";

      item.innerHTML = `
        <img
          src="${selected.image}"
          alt="${selected.name}"
        >

        <div class="summary-item-copy">
          <span>${category.label}</span>
          <strong>${selected.name}</strong>
        </div>
      `;

      summaryGrid.appendChild(item);
    }
  );
}

/* ==================================================
   CINEMATIC ENDING
================================================== */

function resetCinematicEnding() {
  cinematicOverlay.classList.remove(
    "ending"
  );

  cinematicKicker.classList.remove(
    "visible"
  );

  cinematicLines.forEach((line) => {
    line.classList.remove(
      "visible",
      "dimmed"
    );
  });

  cinematicSealStage.classList.remove(
    "visible"
  );

  cinematicFinalCaption.classList.remove(
    "visible"
  );
}

async function startCinematicEnding() {
  if (cinematicRunning) {
    return;
  }

  cinematicRunning = true;

  resetCinematicEnding();

  finalScreen.classList.remove(
    "final-return"
  );

  finalTicket.classList.remove(
    "sealed"
  );

  cinematicOverlay.classList.add(
    "active"
  );

  cinematicOverlay.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";

  fadeMusicIn();

  await wait(850);

  cinematicKicker.classList.add(
    "visible"
  );

  await wait(900);

  for (
    let index = 0;
    index < cinematicLines.length;
    index += 1
  ) {
    if (index > 0) {
      cinematicLines[
        index - 1
      ].classList.add(
        "dimmed"
      );
    }

    cinematicLines[
      index
    ].classList.add(
      "visible"
    );

    const isFinalLine =
      index ===
      cinematicLines.length - 1;

    await wait(
      isFinalLine
        ? 1900
        : 1250
    );
  }

  cinematicLines.forEach((line) => {
    line.classList.add(
      "dimmed"
    );
  });

  cinematicLines[
    cinematicLines.length - 1
  ].classList.remove(
    "dimmed"
  );

  await wait(700);

  cinematicSealStage.classList.add(
    "visible"
  );

  await wait(1200);

  cinematicFinalCaption.classList.add(
    "visible"
  );

  await wait(1900);

  cinematicOverlay.classList.add(
    "ending"
  );

  finalTicket.classList.add(
    "sealed"
  );

  finalScreen.classList.add(
    "final-return"
  );

  createHeartConfetti(55);

  await wait(950);

  cinematicOverlay.classList.remove(
    "active",
    "ending"
  );

  cinematicOverlay.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow = "";

  replayEndingBtn.classList.remove(
    "hidden"
  );

  cinematicRunning = false;

  endingHasPlayed = true;
}

replayEndingBtn.addEventListener(
  "click",
  () => {
    startCinematicEnding();
  }
);

/* ==================================================
   SHARE
================================================== */

function createShareMessage() {
  const lines = [
    "Our Anniversary Date ♥",
    ""
  ];

  dateCategories.forEach(
    (category) => {
      const choice =
        selections[category.key];

      lines.push(
        `${category.label}: ${
          choice
            ? choice.name
            : "Not selected"
        }`
      );
    }
  );

  lines.push("");

  lines.push(
    `Invited by: ${CONFIG.yourName}`
  );

  lines.push(
    `Chosen by: ${CONFIG.partnerName}`
  );

  return lines.join("\n");
}

shareBtn.addEventListener(
  "click",
  async () => {
    const message =
      createShareMessage();

    try {
      if (navigator.share) {
        await navigator.share({
          title:
            "Our Anniversary Date",

          text:
            message
        });

        copyStatus.textContent =
          "Date choices shared successfully. ♥";

        return;
      }

      await navigator.clipboard.writeText(
        message
      );

      copyStatus.textContent =
        "Date choices copied. Paste them into your chat. ♥";
    } catch (error) {
      if (
        error.name === "AbortError"
      ) {
        return;
      }

      const textarea =
        document.createElement(
          "textarea"
        );

      textarea.value = message;

      document.body.appendChild(
        textarea
      );

      textarea.select();

      document.execCommand(
        "copy"
      );

      textarea.remove();

      copyStatus.textContent =
        "Date choices copied. Paste them into your chat. ♥";
    }
  }
);

/* ==================================================
   RESTART
================================================== */

restartBtn.addEventListener(
  "click",
  () => {
    currentStep = 0;

    Object.keys(
      selections
    ).forEach((key) => {
      delete selections[key];
    });

    resultsSent = false;

    currentSubmissionId = "";

    endingHasPlayed = false;

    replayEndingBtn.classList.add(
      "hidden"
    );

    finalTicket.classList.remove(
      "sealed"
    );

    finalScreen.classList.remove(
      "final-return"
    );

    emailStatus.textContent = "";

    emailStatus.className =
      "email-status";

    copyStatus.textContent = "";

    endingMusic.pause();

    endingMusic.currentTime = 0;

    endingMusic.volume = 0;

    musicStarted = false;

    musicWasPrepared = false;

    musicToggleBtn.textContent =
      "Play music";

    renderCurrentStep();

    showScreen(kioskScreen);
  }
);

/* ==================================================
   CONFETTI
================================================== */

function createHeartConfetti(
  amount = 30
) {
  heartConfetti.innerHTML = "";

  for (
    let index = 0;
    index < amount;
    index += 1
  ) {
    const heart =
      document.createElement(
        "span"
      );

    heart.className =
      "confetti-heart";

    heart.textContent =
      Math.random() > 0.35
        ? "♥"
        : "♡";

    const size =
      12 +
      Math.random() * 25;

    const duration =
      2.5 +
      Math.random() * 2.5;

    const delay =
      Math.random() * 0.7;

    heart.style.left =
      `${Math.random() * 100}%`;

    heart.style.fontSize =
      `${size}px`;

    heart.style.opacity =
      String(
        0.45 +
        Math.random() * 0.55
      );

    heart.style.animationDuration =
      `${duration}s`;

    heart.style.animationDelay =
      `${delay}s`;

    heartConfetti.appendChild(
      heart
    );
  }

  setTimeout(() => {
    heartConfetti.innerHTML = "";
  }, 5800);
}

/* Prepare first kiosk step */

renderCurrentStep();