const sr = ScrollReveal({
    distance :'40px',
    duration:2050,
    delay:200,
    reset:true

});
sr.reveal('.hero-text',{origin:'top'});
sr.reveal('.about-img,.service-item,.about-text',{origin:'bottom'});
sr.reveal('.about-text h2,.text-center,.right-contact h2,.row',{origin:'top'});
sr.reveal('.left-contact',{origin:'left'});
sr.reveal('.right-contact',{origin:'right'});
sr.reveal('.end-section',{origin:'top'});
