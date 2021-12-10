

const myPortfolio = {}

myPortfolio.projects = () => {
    const allProjects = document.querySelectorAll('.project')

    allProjects.forEach((project) => {
        
        project.addEventListener('click', ()=> {
            
            myPortfolio.loadMore(project)
        })
    })
}

myPortfolio.exit = () => {
    const exitButtons = document.querySelectorAll('.exit i')

    exitButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            let whichProject;

            if(button.classList.contains('1')) {
                whichProject = '1'
            }else if (button.classList.contains('2')){
                whichProject = '2'
            }else if (button.classList.contains('3')){
                whichProject = '3'
            }
            const content = document.querySelector(`.contentItem${whichProject}`)
            
            content.childNodes[1].classList.toggle('hideContent')
            content.classList.remove('animateIn')
            // content.classList.add('animateOut')
            setTimeout(() => {content.classList.add('animateOut')}, 1200)
            setTimeout(() => {content.style.left= `-10000000000px`}, 2000)

    })})
}
myPortfolio.headerPosition = () => {
    const header = document.querySelector('h1')
    const width = header.offsetWidth
    const windowWidth = window.innerWidth
    const h3 = document.querySelector('header h3')
    

    // header.addEventListener('')
    header.style.left = `${windowWidth/2 - width}px`
    h3.style.right = `${windowWidth/2 - h3.offsetWidth/2}px`
}

myPortfolio.allContent = document.querySelectorAll('.contentItem')
myPortfolio.loadMore = (clickedItem) => {
    
    //find position of the click


    // can maybe use offSetHeight to get height of the grid item
    
    // const heightOfGrid = `${clickedItem.clientHeight}px`
    let whichProject;

    if(clickedItem.classList.contains('1')) {
        whichProject = '1'
    }else if (clickedItem.classList.contains('2')){
        whichProject = '2'
    }else if (clickedItem.classList.contains('3')){
        whichProject = '3'
    }

    const content = document.querySelector(`.contentItem${whichProject}`)
    // content.style.height = heightOfGrid;
    
    content.style.left = `0px`
    content.style.top = `${clickedItem.offsetTop}px`
    content.classList.remove('animateOut')
    content.classList.add('animateIn')
    setTimeout(() => {content.childNodes[1].classList.toggle('hideContent')}, 1000)

    
    //trying animation in javascript

    // content.animate([{height: 0, width: 0}, {width: '100%' , height: clickedItem.offSetHeight}], {duration : 800})
}

myPortfolio.burger = () => {
    const burgerMenu = document.querySelector('.hide')
    burgerMenu.addEventListener('click', function() {
        
        const navBar = document.querySelector('nav')
        
        // if(navBar.style.display === 'none') {
        //     navBar.style.display = 'block'
        // }else if (navBar.style.display === 'block'){
        // navBar.style.display = 'none'}
        navBar.classList.toggle('displayBlock')
    })
}

myPortfolio.init = () => {
    myPortfolio.headerPosition()
    window.addEventListener("resize", function() {
        myPortfolio.headerPosition()
    })

    myPortfolio.projects()
    myPortfolio.exit()
    myPortfolio.burger()
}



myPortfolio.init()