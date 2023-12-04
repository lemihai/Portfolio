document.addEventListener('scroll', function () {
    var scrollpos = window.scrollY;
    var currentPage = window.location.href.split('/').pop();

    console.log(scrollpos + ' [] ' + currentPage);

//--------------- UTD PAGE

if (currentPage === 'utd'){
    var utdabt = document.getElementById('utd-abt');
    var utdprocess = document.getElementById('utd-process');
    var utdpilot = document.getElementById('utd-pilot');

    if (scrollpos > 1000 && scrollpos < 2400) {
        utdabt.classList.add('here');
        utdabt.style.color = 'white';
    } else {
        utdabt.classList.remove('here');
        utdabt.style.color = 'black';
    }

    if (scrollpos > 2390 && scrollpos < 6300) {
        utdprocess.classList.add('here');
        utdprocess.style.color = 'white';
    } else {
        utdprocess.classList.remove('here');
        utdprocess.style.color = 'black';
    }

    if (scrollpos > 6290 && scrollpos < 8000) {
        utdpilot.classList.add('here');
        utdpilot.style.color = 'white';
    } else {
        utdpilot.classList.remove('here');
        utdpilot.style.color = 'black';
    }
}
    
//--------------- GRAD PAGE

if (currentPage === 'grad'){
    var gradabout = document.getElementById('grad-about');
    var gradrphase1 = document.getElementById('grad-rphase1');
    var gradrphase2 = document.getElementById('grad-rphase2');
    var gradresearchfindings = document.getElementById('grad-research findings');

    if (scrollpos > 600 && scrollpos < 1600) {
        gradabout.classList.add('here');
        gradabout.style.color = 'white';
    } else {
        gradabout.classList.remove('here');
        gradabout.style.color = 'black';
    }

    if (scrollpos > 1590 && scrollpos < 5800) {
        gradrphase1.classList.add('here');
        gradrphase1.style.color = 'white';
    } else {
        gradrphase1.classList.remove('here');
        gradrphase1.style.color = 'black';
    }

    if (scrollpos > 5790 && scrollpos < 13300) {
        gradrphase2.classList.add('here');
        gradrphase2.style.color = 'white';
    } else {
        gradrphase2.classList.remove('here');
        gradrphase2.style.color = 'black';
    }

    if (scrollpos > 13290 && scrollpos < 16670) {
        gradresearchfindings.classList.add('here');
        gradresearchfindings.style.color = 'white';
    } else {
        gradresearchfindings.classList.remove('here');
        gradresearchfindings.style.color = 'black';
    }

}
    
//--------------- PS2 PAGE

if (currentPage === 'ps2'){
    var ps2about = document.getElementById('ps2-about');
    var ps2spr1 = document.getElementById('ps2-spr1');
    var ps2spr2 = document.getElementById('ps2-spr2');
    var ps2spr3 = document.getElementById('ps2-spr3');
    var ps2fp = document.getElementById('ps2-fp');

    
    if (scrollpos > 780 && scrollpos < 1700) {
        ps2about.classList.add('here');
        ps2about.style.color = 'white';
    } else {
        ps2about.classList.remove('here');
        ps2about.style.color = 'black';
    }

    if (scrollpos > 1690 && scrollpos < 5100) {
        ps2spr1.classList.add('here');
        ps2spr1.style.color = 'white';
    } else {
        ps2spr1.classList.remove('here');
        ps2spr1.style.color = 'black';
    }

    if (scrollpos > 5090 && scrollpos < 8500) {
        ps2spr2.classList.add('here');
        ps2spr2.style.color = 'white';
    } else {
        ps2spr2.classList.remove('here');
        ps2spr2.style.color = 'black';
    }

    if (scrollpos > 8490 && scrollpos < 12300) {
        ps2spr3.classList.add('here');
        ps2spr3.style.color = 'white';
    } else {
        ps2spr3.classList.remove('here');
        ps2spr3.style.color = 'black';
    }

    if (scrollpos > 12290 && scrollpos < 14200) {
        ps2fp.classList.add('here');
        ps2fp.style.color = 'white';
    } else {
        ps2fp.classList.remove('here');
        ps2fp.style.color = 'black';
    }

}

//--------------- ps1 PAGE
//--------------- p3 PAGE

if (currentPage === 'p3'){
    var p3about = document.getElementById('p3-about');
    var p3research = document.getElementById('p3-research');
    var p3define = document.getElementById('p3-define');
    var p3ideating = document.getElementById('p3-ideating');
    var p3prototype = document.getElementById('p3-prototype');
    var p3fp = document.getElementById('p3-fp');

    if (scrollpos > 700 && scrollpos < 2000) {
        p3about.classList.add('here');
        p3about.style.color = 'white';
    } else {
        p3about.classList.remove('here');
        p3about.style.color = 'black';
    }

    if (scrollpos > 1990 && scrollpos < 4400) {
        p3research.classList.add('here');
        p3research.style.color = 'white';
    } else {
        p3research.classList.remove('here');
        p3research.style.color = 'black';
    }

    if (scrollpos > 4390 && scrollpos < 6800) {
        p3define.classList.add('here');
        p3define.style.color = 'white';
    } else {
        p3define.classList.remove('here');
        p3define.style.color = 'black';
    }

    if (scrollpos > 6790 && scrollpos < 8800) {
        p3ideating.classList.add('here');
        p3ideating.style.color = 'white';
    } else {
        p3ideating.classList.remove('here');
        p3ideating.style.color = 'black';
    }

    if (scrollpos > 8790 && scrollpos < 10800) {
        p3prototype.classList.add('here');
        p3prototype.style.color = 'white';
    } else {
        p3prototype.classList.remove('here');
        p3prototype.style.color = 'black';
    }

    if (scrollpos > 10790 && scrollpos < 13000) {
        p3fp.classList.add('here');
        p3fp.style.color = 'white';
    } else {
        p3fp.classList.remove('here');
        p3fp.style.color = 'black';
    }
}
    
//--------------- UTD PAGE ---------------

//--------------- PS2 PAGE ---------------

//--------------- P3 PAGE ---------------

//--------------- GRAD PAGE ---------------
    
});

//--------------- PS2 PAGE ---------------



function scrollhere(id) {

    var currentPage = window.location.href.split('/').pop();
    console.log("Button with id '" + id + "' was pressed.");

if (currentPage === 'ps2'){
    if (id === "ps2-about") {
        document.body.scrollTop = 800 ;
        document.documentElement.scrollTop = 800 ;
    } 

    if (id === "ps2-spr1") {
        document.body.scrollTop = 2000 ;
        document.documentElement.scrollTop = 2000 ;
    } 

    if (id === "ps2-spr2") {
        document.body.scrollTop = 5400 ;
        document.documentElement.scrollTop = 5400 ;
    } 

    if (id === "ps2-spr3") {
        document.body.scrollTop = 8800 ;
        document.documentElement.scrollTop = 8800 ;
    } 

    if (id === "ps2-fp") {
        document.body.scrollTop = 12600 ;
        document.documentElement.scrollTop = 12600 ;
    } 
}

//--------------- GRAD PAGE ---------------

if (currentPage === 'grad'){
    if (id === "grad-about") {
        document.body.scrollTop = 800 ;
        document.documentElement.scrollTop = 800 ;
    } 

    if (id === "grad-rphase1") {
        document.body.scrollTop = 1980 ;
        document.documentElement.scrollTop = 1980 ;
    } 

    if (id === "grad-rphase2") {
        document.body.scrollTop = 6300 ;
        document.documentElement.scrollTop = 6300 ;
    } 

    if (id === "grad-research findings") {
        document.body.scrollTop = 13790 ;
        document.documentElement.scrollTop = 13790 ;
    } 
}

//--------------- P3 PAGE ---------------

if (currentPage === 'p3'){
    if (id === "p3-about") {
        document.body.scrollTop = 1000 ;
        document.documentElement.scrollTop = 1000 ;
    } 

    if (id === "p3-research") {
        document.body.scrollTop = 2400  ;
        document.documentElement.scrollTop = 2400  ;
    } 

    if (id === "p3-define") {
        document.body.scrollTop = 4708  ;
        document.documentElement.scrollTop = 4708  ;
    } 

    if (id === "p3-ideating") {
        document.body.scrollTop = 7120  ;
        document.documentElement.scrollTop = 7120  ;
    } 

    if (id === "p3-prototype") {
        document.body.scrollTop = 9246  ;
        document.documentElement.scrollTop = 9246  ;
    } 

    if (id === "p3-fp") {
        document.body.scrollTop = 11146  ;
        document.documentElement.scrollTop = 11146  ;
    } 
}

//--------------- UTD PAGE ---------------

if(currentPage === 'utd'){
    if (id === "utd-abt") {
        document.body.scrollTop = 1700  ;
        document.documentElement.scrollTop = 1700  ;
    } 

    if (id === "utd-process") {
        document.body.scrollTop = 2800  ;
        document.documentElement.scrollTop = 2800  ;
    } 

    if (id === "utd-pilot") {
        document.body.scrollTop = 6300  ;
        document.documentElement.scrollTop = 6300  ;
    } 
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