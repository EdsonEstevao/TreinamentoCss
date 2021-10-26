const arrows = document.querySelectorAll('.submenu')
const links = document.querySelectorAll('a')
const c = (el) => document.querySelector(el)
links.forEach((link)=>{   
    
    link.addEventListener('click',(alink)=>{
        alink.preventDefault()        
        console.log(alink.target.innerText)
    })


})

arrows.forEach((el,i )=> {    
    el.addEventListener('click', (e)=> {
        e.preventDefault()
        e.currentTarget.nextElementSibling.classList.toggle('show')          
        if(e.currentTarget.nextElementSibling.classList.contains('show')){                             
                document.querySelectorAll('.submenu span')[i].textContent = `expand_less`

        }else{
            document.querySelectorAll('.submenu span')[i].textContent = `expand_more`
        }
    })
})

document.querySelector('.menushow').addEventListener('click', ()=> {    
    menuShow()    
    c('.menuLateral').style.marginLeft = '0'
    
})
document.querySelector('.menuhide').addEventListener('click', ()=> {
    hideMenu()
    c('.menuLateral').style.marginLeft = '-250px'
})



c('section').addEventListener('click', (e)=> {    
    clickContent()
})

function hideMenu(){
    c('.menuLateral').classList.toggle('show')
    c('.menushow').style.display = 'flex'
    c('section').style.marginLeft = '0'   
}
function menuShow(){
    c('.menuLateral').classList.toggle('show')   
    c('.menushow').style.display = 'none'
    c('section').style.marginLeft = '250px'
}
function clickContent(){
    c('.menuLateral').style.marginLeft = '-250px'
    c('.menuLateral').classList.remove('show')
    c('.menushow').style.display = 'flex'
    c('.content').style.marginLeft = '0'
    
}