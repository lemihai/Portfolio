document.addEventListener('scroll', function () {
    var abt = document.getElementById('abt');
    var spr1 = document.getElementById('spr1');
    var spr2 = document.getElementById('spr2');
    var spr3 = document.getElementById('spr3');
    var fp = document.getElementById('fp');
    
//--------------- UTD PAGE

    var abtutd = document.getElementById('utd-abt');
    var insputd = document.getElementById('utd-insp');
    var prcsutd = document.getElementById('utd-process');
    var pltutd = document.getElementById('utd-pilot');
    var scrollpos = window.scrollY;
    
//--------------- Grad PAGE



//--------------- ps1 PAGE



//--------------- p3 PAGE



//--------------- UTD PAGE
    console.log(scrollpos);

    if (scrollpos > 1700 && scrollpos < 3400) {
        abt.classList.add('here');
        abt.style.color = 'white';
    } else {
        abt.classList.remove('here');
        abt.style.color = 'black';
    }

    if (scrollpos > 3400 && scrollpos < 7400) {
        spr1.classList.add('here');
        spr1.style.color = 'white';
    } else {
        spr1.classList.remove('here');
        spr1.style.color = 'black';
    }

    if (scrollpos > 7400 && scrollpos < 11000) {
        spr2.classList.add('here');
        spr2.style.color = 'white';
    } else {
        spr2.classList.remove('here');
        spr2.style.color = 'black';
    }

    if (scrollpos > 11000 && scrollpos < 15400) {
        spr3.classList.add('here');
        spr3.style.color = 'white';
    } else {
        spr3.classList.remove('here');
        spr3.style.color = 'black';
    }

    if (scrollpos > 15400 && scrollpos < 17300) {
        fp.classList.add('here');
        fp.style.color = 'white';
    } else {
        fp.classList.remove('here');
        fp.style.color = 'black';
    }
});

function scrollhere(id) {
    console.log("Button with id '" + id + "' was pressed.");
    
    if (id === "abt") {
        document.body.scrollTop = 1710;
        document.documentElement.scrollTop = 1710;
    } 

    if (id === "spr1") {
        document.body.scrollTop = 3410;
        document.documentElement.scrollTop = 3410;
    } 

    if (id === "spr2") {
        document.body.scrollTop = 7410;
        document.documentElement.scrollTop = 7410;
    } 

    if (id === "spr3") {
        document.body.scrollTop = 11100;
        document.documentElement.scrollTop = 11100;
    } 

    if (id === "fp") {
        document.body.scrollTop = 15410;
        document.documentElement.scrollTop = 15410;
    } 
}

function toggle(){
    console.log("SIIII");
    var a = document.getElementById('tgl');
    var b = document.getElementById('tgl-btn');
    var c = document.getElementById('tgl-src');
    a.classList.toggle('active');
    b.classList.toggle('active-btn');
    c.src = "/images/icons/left.png";
    
    if (a.classList.contains('active')) {
        c.src = "/images/icons/left.png";
    } else{
        c.src = "/images/icons/right.png";
    }
}