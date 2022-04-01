window.addEventListener('hashchange', initRoute)
    
function initRoute() {
    location.hash.length !== 0
        ? findAndShowPhoneDetails(location.hash.slice(1), phones)
        : renderingMainDisplay();
}

initRoute()
