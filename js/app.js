    document.addEventListener("mousemove", parallex);
        function parallex(e){
            document.querySelectorAll('.object').forEach(function(move){
                var moving_value = move.getAttribute('data-value');
                var x = (e.clientX * moving_value) / 250;
                var y = (e.clientY * moving_value) / 250;


                move.style.transform = "translateX(" + x + "px)translateY(" + y + "px)";
            });
        }

        window.addEventListener('scroll', function(){
            var mainnave = this.document.querySelector('.main_bar');
            mainnave.classList.toggle('stickys', this.window.scrollY > 0);
        });

window.addEventListener('scroll', function(){
    var mainnave = this.document.querySelector('.main_bar');
    mainnave.classList.toggle('sticky', this.window.scrollY > 100);
});

window.addEventListener('scroll', function(){
    var logo = this.document.querySelector('.white_logo');
    var logo_black = this.document.querySelector('.black_logo');
    var icon = this.document.querySelector('.fa-instagram');
    var nave = this.document.querySelector('.nave_');
    var navex = this.document.querySelector('.nave_1');
    var navey = this.document.querySelector('.nave_2');
    
    if(this.window.pageYOffset > 100){
        logo.classList.add('block');
        logo_black.classList.add('none');
        icon.classList.add('white');
        nave.classList.add('whites');
        navex.classList.add('whites');
        navey.classList.add('whites');
        after.classList.add('whites');
    }else{
        logo.classList.remove('block');
        logo_black.classList.remove('none');
        icon.classList.remove('white');
        nave.classList.remove('whites');
        navex.classList.remove('whites');
        navey.classList.remove('whites');
        after.classList.remove('whites');
    }

});
window.addEventListener('scroll', function(){
    var shadow = this.document.querySelector('.shadow___');
    if(this.window.pageYOffset > 100){
        shadow.classList.add('dis_none');
    }else{
        shadow.classList.remove('dis_none');
    }
});


var barClick = document.querySelector('.bar__');

var navebarOne = document.querySelector('.nave_');
var navebartow= document.querySelector('.nave_1');
var navebarthree= document.querySelector('.nave_2');
var tag= document.querySelector('header');
barClick.addEventListener('click', function(){
    navebartow.classList.add('d_none');
    navebarthree.classList.add('dis45');
    navebarOne.classList.add('di45');
    popup_menu.classList.add('visible');
    tag.classList.add('index')
})

var close = document.querySelector('.close___');
var popup_menu = document.querySelector('.popup_menu__');
close.addEventListener('click', function(){
    popup_menu.classList.remove('visible');
    navebartow.classList.remove('d_none');
    navebarthree.classList.remove('dis45');
    navebarOne.classList.remove('di45');
    tag.classList.remove('index')


})

