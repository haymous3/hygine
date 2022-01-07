// Declearing the menu variables;


const openIcon = document.querySelector('.header-menu-open');
const closeIcon = document.querySelector('.header-menu-close');
const headerNavs = document.querySelector('.header-navs');


//evenlisteners invoked function




// load eventlisterners
loadEventListeners = () => {
    openIcon.addEventListener('click', menuOpen);
    closeIcon.addEventListener('click', menuClose);
}

loadEventListeners()

//Menu-open function

function menuOpen() {
    openIcon.classList.add('open-menu');
    closeIcon.classList.add('close-menu');
    openIcon.classList.remove('header-menu-open');
    closeIcon.classList.remove('header-menu-close');
    headerNavs.classList.add('close-menu')
}

function menuClose() {

    closeIcon.classList.add('header-menu-close');
    openIcon.classList.add('header-menu-open');
    openIcon.classList.remove('open-menu');
    closeIcon.classList.remove('close-menu');
    headerNavs.classList.remove('close-menu');

}

//  what-we-do

// declearing what-we-do variables

const repairContent = document.querySelector('.repair');
const maintainContent = document.querySelector('.maintain');
const improveContent = document.querySelector('.improve');
const planContent = document.querySelector('.plan');
const weDoSub = document.querySelectorAll('.we-do-sub-main');
const WeDotitle = document.querySelectorAll('.we-do-title');
const iconList = document.querySelectorAll('.we-do-icon');
const list = document.querySelectorAll('.list')


let allWeDo = [0, 1, 2, 3];

let color = true;






repairMe = () => {

    list.forEach((me) => {
        me.style.color = "white";
        list[allWeDo[0]].style.color = "red"
    })

    iconList.forEach((repair) => {
        repair.style.background = "none";

        iconList[allWeDo[0]].style.backgroundColor = "#00a02e"

    })

    WeDotitle.forEach((auto) => {

        auto.style.background = "none";
        WeDotitle[allWeDo[0]].style.background = "white"


    })


    weDoSub.forEach((show) => {
            show.style.display = "none";
            weDoSub[allWeDo[0]].style.display = "block"



        }

    )
}
maintainMe = () => {


    list.forEach((me) => {
        me.style.color = "white";
        list[allWeDo[1]].style.color = "red"
    })


    iconList.forEach((repair) => {
        repair.style.background = "none";
        iconList[allWeDo[1]].style.backgroundColor = "#00a02e"
    })

    WeDotitle.forEach((auto) => {

        auto.style.background = "none";
        WeDotitle[allWeDo[1]].style.background = "#fff "
        WeDotitle[allWeDo[1]].style.color = "#ff6600"

    })


    weDoSub.forEach((show) => {

            show.style.display = "none";

            weDoSub[allWeDo[1]].style.display = "block"

        }

    )


}

improveMe = () => {


    list.forEach((me) => {
        me.style.color = "white";
        list[allWeDo[2]].style.color = "red"
    })


    iconList.forEach((repair) => {
        repair.style.background = "none";
        iconList[allWeDo[2]].style.backgroundColor = "#00a02e"
    })

    WeDotitle.forEach((auto) => {

        auto.style.background = "none";
        WeDotitle[allWeDo[2]].style.background = "white"


    })

    weDoSub.forEach((show) => {

        show.style.display = "none";

        weDoSub[allWeDo[2]].style.display = "block"

    })
}

planMe = () => {

    list.forEach((me) => {
        me.style.color = "white";
        list[allWeDo[3]].style.color = "red"
    })


    iconList.forEach((repair) => {
        repair.style.background = "none";
        iconList[allWeDo[3]].style.backgroundColor = "#00a02e"
    })

    WeDotitle.forEach((auto) => {

        auto.style.background = "none";
        WeDotitle[allWeDo[3]].style.background = "white"


    })

    weDoSub.forEach((show) => {
        show.style.display = "none";

        weDoSub[allWeDo[3]].style.display = "block"

    })

}

// what - we - do event listeners
wedoEven = () => {
    repairContent.addEventListener('click', repairMe);
    maintainContent.addEventListener('click', maintainMe);
    improveContent.addEventListener('click', improveMe);
    planContent.addEventListener('click', planMe);

}

wedoEven();

// open display and close display start here;

const OPENME = document.querySelectorAll('.dee-display');
const CLICKAT = document.querySelectorAll('.dee-display-one')
const CLOSEME = document.querySelectorAll('.open-display');

console.log(OPENME)

let checkList = [0, 1];

clicking = () => {
    for (var i = 0; i < CLOSEME.length; i++) {


        // CLOSEME[checkList[0]].style.display = "block"
        CLOSEME[checkList[1]].style.display = "block"
        OPENME[checkList[1]].style.display = "none";
        CLICKAT[checkList[1]].style.display = "block";


    }
}

clickingClick = () => {
    for (var i = 0; i < CLOSEME.length; i++) {
        // CLOSEME[checkList[0]].style.display = "block"
        CLOSEME[checkList[0]].style.display = "block";
        OPENME[checkList[0]].style.display = "none";
        CLICKAT[checkList[0]].style.display = "block";
    }
}


clickingOne = () => {
    for (var i = 0; i < CLOSEME.length; i++) {
        // CLOSEME[checkList[0]].style.display = "block"
        CLOSEME[checkList[1]].style.display = "none"
        OPENME[checkList[1]].style.display = "block";
        CLICKAT[checkList[1]].style.display = "none";
    }
}

clickingClickOne = () => {
    for (var i = 0; i < CLOSEME.length; i++) {
        // CLOSEME[checkList[0]].style.display = "block"
        CLOSEME[checkList[0]].style.display = "none";
        OPENME[checkList[0]].style.display = "block";
        CLICKAT[checkList[0]].style.display = "none";
    }
}




for (var i = 0; i < OPENME.length; i++) {
    console.log(OPENME[i])
    OPENME[0].addEventListener('click', clickingClick)
    OPENME[1].addEventListener('click', clicking)

}

for (var i = 0; i < OPENME.length; i++) {
    console.log(CLICKAT[i])
    CLICKAT[0].addEventListener('click', clickingClickOne)
    CLICKAT[1].addEventListener('click', clickingOne)

}





// clickMe = () => {
//     for (var i = 0; i < openMe.length; i++) {
//         console.log(openMe[i]);
//     }
// };


// clickingClick = () => {
//     openMe.addEventListener('click', clickMe)
// }


// clickingClick();







//event listerners for clicking;

//event listerners for clicking;