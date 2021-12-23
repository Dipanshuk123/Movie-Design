const cardCheckBoxs = document.querySelectorAll('input[type="checkbox"]');
const body = document.querySelector('body');
const movieTitle = document.querySelector(".movieTitle")
const description = document.querySelector(".description")
console.log(cardCheckBoxs);

const movieData = [
    {
        name:"Jumanji: Welcome to the Jungle",
        description:'Four teenagers in detention discover an old video game console with a game they’ve never heard of. When they decide to play, they are immediately sucked into the jungle world of Jumanji in the bodies of their avatars (Dwayne Johnson, Jack Black, Kevin Hart, and Karen Gillan).'
    },
    {
        name:"Godzilla: King of the Monsters",
        description:'The crypto-zoological agency Monarch faces off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah.'
    },
    {
        name:"Baby Driver",
        description:'Doc forces Baby, a former getaway driver, to partake in a heist, threatening to hurt his girlfriend if he refuses. But the plan goes awry when their arms dealers turn out to be undercover officers.'
    },
    {
        name:"The Tomorrow War",
        description:'The world is stunned when a group of time travellers arrive from the year 2051 to deliver an urgent message: thirty years in the future, mankind is losing a global war against a deadly alien species.'
    },
    {
        name:"300: Rise of an Empire",
        description:'Xerxes sets out to control the major states of Greece with the help of his vast Persian army. Themistocles, the admiral of Athens, is forced to form an alliance with Sparta in order to save Athens.'
    },
    {
        name:"Deadpool",
        description:'Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, to cure him of cancer and give him healing powers. However, the experiment leaves Wade disfigured and he decides to exact revenge.'
    }
]

function changeDetail(i){
    body.style.backgroundImage = `url(${cardCheckBoxs[i].previousElementSibling.previousElementSibling.firstElementChild.getAttribute('src')})`;        
    movieTitle.textContent = movieData[i].name;
    description.textContent = movieData[i].description;
}

function waitForMe(time) {
    return new Promise(resolve => {
        setInterval(()=> resolve(''),time)
    })
}

async function cardScroll() {
    for (let i=0;i<cardCheckBoxs.length;i++){
        cardCheckBoxs[i].checked = true;
        cardCheckBoxs[i].parentElement.classList.add('cardActive')
        console.log(cardCheckBoxs[i].parentElement)
        changeDetail(i);
        // body.style.backgroundImage = `url(${cardCheckBoxs[i].previousElementSibling.previousElementSibling.firstElementChild.getAttribute('src')})`;        
        await waitForMe(5000)
        cardCheckBoxs[i].checked = false
        cardCheckBoxs[i].parentElement.classList.remove('cardActive')
        if(i===cardCheckBoxs.length -1){
            i=-1
        }
    }   
}
cardScroll()