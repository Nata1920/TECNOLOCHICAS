var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('Natali Salinas ')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Programadora Frontend JR')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Estudiante</strong>')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Me gusta ser parte de las comunidades ')
    .pauseFor(1500)
    
    .start();