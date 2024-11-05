//personal-info js-code

if ( localStorage.getItem("login2") === 'passed11' ) {
    console.log('pass');
    window.location.href = ("../login.html");
} else {
    function button1() {
        const perName = document.getElementById('name').value;
        const pernumber = document.getElementById('number').value;
        const perpass = document.getElementById('password').value;
        if ( perName === '', pernumber === '', perpass === '' ) {
            console.log('empty');
            if (perName === '') {
                document.getElementById('name').style.border = '#ff0000 solid 0.5px' 
            } else {
                document.getElementById('name').style.border = '#013659 solid 0.5px'
            }
            if (pernumber === '') {
                document.getElementById('number').style.border = '#ff0000 solid 0.5px' 
            } else {
                document.getElementById('number').style.border = '#013659 solid 0.5px'
            }
            if (perpass === '') {
                document.getElementById('password').style.border = '#ff0000 solid 0.5px' 
            } else {
                document.getElementById('password').style.border = '#013659 solid 0.5px'
            }
        } else {
            document.getElementById('personal-info').style.display = 'none';
            document.getElementById('personal-plan').style.display = 'block';
            document.getElementById('step10').style.backgroundColor = '#00000000';
            document.getElementById('step01').style.color = '#ffffff';
            document.getElementById('step30').style.backgroundColor = '#00000000';
            document.getElementById('step03').style.color = '#ffffff';
            document.getElementById('step40').style.backgroundColor = '#00000000';
            document.getElementById('step04').style.color = '#ffffff';
            document.getElementById('step20').style.backgroundColor = '#ffffff';
            document.getElementById('step02').style.color = '#000000';
            const timen = Date();
            console.log(timen);
            localStorage.clear();
            localStorage.setItem("nameper",perName);   
            localStorage.setItem("numberper",pernumber);
            localStorage.setItem("passper",perpass);
            localStorage.setItem("time",timen);
            localStorage.setItem("login2",'passed11');
            console.log('not-pass-fan');
        }
    };
    console.log('not-pass');
}
//personal-info js-code

//personal-plan js-code
if ( localStorage.getItem("plan") === null ) {
    const saveplan = 'Arcade';
    document.getElementById('plan001').style.border = '#013659 solid 1px';
    document.getElementById('plan001').style.boxShadow = '#013659 2px 2px 10px';
    //
    document.getElementById('plan002').style.border = '#01365985 solid 1px';
    document.getElementById('plan002').style.boxShadow = '#013659 0px 0px 0px';
    document.getElementById('plan003').style.border = '#01365985 solid 1px';
    document.getElementById('plan003').style.boxShadow = '#013659 0px 0px 0px';
    localStorage.setItem("plan",saveplan);
    document.getElementById('getplan').innerHTML = localStorage.getItem("plan");
}
if ( localStorage.getItem("plan") === 'Arcade' ) {
    const saveplan = 'Arcade';
    document.getElementById('plan001').style.border = '#013659 solid 1px';
    document.getElementById('plan001').style.boxShadow = '#013659 2px 2px 10px';
    //
    document.getElementById('plan002').style.border = '#01365985 solid 1px';
    document.getElementById('plan002').style.boxShadow = '#013659 0px 0px 0px';
    document.getElementById('plan003').style.border = '#01365985 solid 1px';
    document.getElementById('plan003').style.boxShadow = '#013659 0px 0px 0px';
    localStorage.setItem("plan",saveplan);
    document.getElementById('getplan').innerHTML = localStorage.getItem("plan");
}
if ( localStorage.getItem("plan") === 'Advanced' ) {
    const saveplan = 'Advanced';
    document.getElementById('plan002').style.border = '#013659 solid 1px';
    document.getElementById('plan002').style.boxShadow = '#013659 2px 2px 10px';
    //
    document.getElementById('plan001').style.border = '#01365985 solid 1px';
    document.getElementById('plan001').style.boxShadow = '#013659 0px 0px 0px';
    document.getElementById('plan003').style.border = '#01365985 solid 1px';
    document.getElementById('plan003').style.boxShadow = '#013659 0px 0px 0px';
    localStorage.setItem("plan",saveplan)
    document.getElementById('getplan').innerHTML = localStorage.getItem("plan");
}
if ( localStorage.getItem("plan") === 'Pro' ) {
    const saveplan = 'Pro';
    document.getElementById('plan003').style.border = '#013659 solid 1px';
    document.getElementById('plan003').style.boxShadow = '#013659 2px 2px 10px';
    //
    document.getElementById('plan002').style.border = '#01365985 solid 1px';
    document.getElementById('plan002').style.boxShadow = '#013659 0px 0px 0px';
    document.getElementById('plan001').style.border = '#01365985 solid 1px';
    document.getElementById('plan001').style.boxShadow = '#013659 0px 0px 0px';
    localStorage.setItem("plan",saveplan)
    document.getElementById('getplan').innerHTML = localStorage.getItem("plan");
}

function plan0001() {
    const saveplan = 'Arcade';
    document.getElementById('plan001').style.border = '#013659 solid 1px';
    document.getElementById('plan001').style.boxShadow = '#013659 2px 2px 10px';
    //
    document.getElementById('plan002').style.border = '#01365985 solid 1px';
    document.getElementById('plan002').style.boxShadow = '#013659 0px 0px 0px';
    document.getElementById('plan003').style.border = '#01365985 solid 1px';
    document.getElementById('plan003').style.boxShadow = '#013659 0px 0px 0px';
    localStorage.setItem("plan",saveplan)
    document.getElementById('getplan').innerHTML = localStorage.getItem("plan");
}
function plan0002() {
    const saveplan = 'Advanced';
    document.getElementById('plan002').style.border = '#013659 solid 1px';
    document.getElementById('plan002').style.boxShadow = '#013659 2px 2px 10px';
    //
    document.getElementById('plan001').style.border = '#01365985 solid 1px';
    document.getElementById('plan001').style.boxShadow = '#013659 0px 0px 0px';
    document.getElementById('plan003').style.border = '#01365985 solid 1px';
    document.getElementById('plan003').style.boxShadow = '#013659 0px 0px 0px';
    localStorage.setItem("plan",saveplan)
    document.getElementById('getplan').innerHTML = localStorage.getItem("plan");
}
function plan0003() {
    const saveplan = 'Pro';
    document.getElementById('plan003').style.border = '#013659 solid 1px';
    document.getElementById('plan003').style.boxShadow = '#013659 2px 2px 10px';
    //
    document.getElementById('plan002').style.border = '#01365985 solid 1px';
    document.getElementById('plan002').style.boxShadow = '#013659 0px 0px 0px';
    document.getElementById('plan001').style.border = '#01365985 solid 1px';
    document.getElementById('plan001').style.boxShadow = '#013659 0px 0px 0px';
    localStorage.setItem("plan",saveplan)
    document.getElementById('getplan').innerHTML = localStorage.getItem("plan");
}

function button2() {
    document.getElementById('personal-plan').style.display = 'none';
    document.getElementById('personal-ons').style.display = 'block';
    document.getElementById('step10').style.backgroundColor = '#00000000';
    document.getElementById('step01').style.color = '#ffffff';
    document.getElementById('step20').style.backgroundColor = '#00000000';
    document.getElementById('step02').style.color = '#ffffff';
    document.getElementById('step40').style.backgroundColor = '#00000000';
    document.getElementById('step04').style.color = '#ffffff';
    document.getElementById('step30').style.backgroundColor = '#ffffff';
    document.getElementById('step03').style.color = '#000000';
}
//personal-plan js-code
