 // JavaScript code for displaying the popup
        const popupOverlay = document.querySelector(".popup-overlay");
        const closePopupBtn = document.querySelector(".close-popup");

        // Check if the popup has been closed in this session
        const popupClosedSession = sessionStorage.getItem("popupClosedSession");

        // Display the popup after a delay (5 seconds in this example)
        if (!popupClosedSession) {
            setTimeout(function() {
                popupOverlay.style.display = "flex";
            }, 5000);
        }

        // Close the popup and set the session storage item
        closePopupBtn.addEventListener("click", function() {
            popupOverlay.style.display = "none";
            sessionStorage.setItem("popupClosedSession", "true");
        });
