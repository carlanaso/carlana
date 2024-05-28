document.addEventListener("DOMContentLoaded", function() {
    var select = function(s) {
        return document.querySelector(s);
    };
    
    var animationWindow = select('#animationWindow');
    var animData = {
        wrapper: animationWindow,
        animType: 'svg',
        loop: true,
        prerender: true,
        autoplay: true,
        path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/play_fill_loader.json',
        rendererSettings: {}
    };
    
    var anim = bodymovin.loadAnimation(animData);
    
    anim.addEventListener('complete', function() {
        // Redirect to home page after animation completes
        window.location.href = "./index.html";
    });
    
    anim.setSpeed(1);
});