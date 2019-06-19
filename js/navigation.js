
(function() {
    var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('.nav'),
    wrapper: document.querySelector('.wrapper'),
    doToggle: function(e) {
        e.preventDefault();
        this.navToggle.classList.toggle('expanded');
        this.nav.classList.toggle('expanded');
    },
    doRemove: function(e) {
        hamburger.navToggle.classList.remove('expanded');
        hamburger.nav.classList.remove('expanded');
    }
    };
    hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
    hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });
    hamburger.wrapper.addEventListener('click', function (e){
            hamburger.doRemove(e);      
    }); 
}());
