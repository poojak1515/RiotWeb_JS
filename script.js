const imageWrappers = document.getElementById("imageWrappers");
const Search = document.getElementById("Search");
const icons = document.getElementById("ser");
const searchInput = document.querySelector("input")
const searchCross = document.getElementById("cross");
const hiddenListO= document.getElementById('LISTITEMO');
const hiddenListT= document.getElementById('LISTITEMT');
const midlecontent = document.querySelector(".midlecontent");
const leftContent = document.querySelector(".leftContent");
const displayList = document.querySelector(".LISTITEMSE");

const Data = [
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0c67438c8b3a418b5ca28f9f234506745493ae42-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"01/06/2024",
        descrip:"Episode 8 Act I Wallpapers"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/083baed63d306ee9ba41df4971ac0f6bb0222032-1920x1080.jpg?auto=format&fit=fill&q=80&w=664",
        date:"01/06/2024",
        descrip:"Iso Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/6628e175321b3fb53c863e58d1c033f7bfe5390e-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"China Launch Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e1ba56c2480992f0e85b03258b12647e03222869-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Deadlock Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/68337c36ec0b8ce4b863e1beaee06fb36189a184-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"01/06/2024",
        descrip:"Gekko Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e6aeb092202e824b1eac23b4ae912065322dde78-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"01/06/2024",
        descrip:"Harbor Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7d072ebce40b0177e030d3f4fa0b581e526002c4-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"01/06/2024",
        descrip:"Sage Lunar New Year Trip Wallpapers"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2f9c08f0f5b47f688edc8becde8fdd7e7e91bcb2-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Viper Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f1c09a14c8a17963a60965cb14ecacd486ac7592-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Sova Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/88fc401f22e3cab538323aae2de7cf02c042ab53-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Skye Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0b8610b6e13a77412c7049d14ca64e69e246ea4f-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Sage Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/23e7bfb92f61c8e6161134882f8e247ce1a2d285-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Reyna Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/b739d663bb8ffb1909287971106e8cd9ecffd0df-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Raze Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/746dfa3fe15bf045d5ffa51a04b3e8d547ef6a7c-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Jett and Phoenix Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ec505716dd7be40cba54102114610fe59e5baa02-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Phoenix Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/85ca1e9e6ade927fb19200d322f824955e24e40c-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Killjoy Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/8f0be019dd4ec9e6d7d864d9becaa471b9678129-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Omen Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/b952882ceff3dfcd9fb4841513fdbe3dd82bf4a0-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Jett Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ae202594f667e75fe5946bfb8b801a4e8aa24d50-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Ascent Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e0a9a1bc76550dbde95547bb011ae1276c435add-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Icebox Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3e06499b4787728f8fec418fd0ca22a9c8dbf978-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Killjoy Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/5c6e7262f07e7ffcdb6c1cf24633f26b994c1ead-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Omen Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/78b4562e7b8fce0b86b0313583bc3ac6a41744cc-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Jett Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/5626ded793b3090e65589b0ce8db0ef9defceab6-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Ascent Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1bffc253e09a73547fed5e38109e2c1c0b37868f-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Icebox Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/faf024a581cdb0d76371ead8ae49c7e260792874-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Killjoy Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/8e49092a333d3ca499447576f6e6e5d4cbcdc348-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Omen Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ae37c8edf074308d5a60b1c460a43e4f4121fdfb-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Jett Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/621b9ac75210c552a3a4f7f07fc827c6c1d13319-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Ascent Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e439a6fd383f51aae6c71bf4045e83338aad14c6-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Icebox Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c03d9a0a309efab3779d74bfdb082b363cef99e8-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Killjoy Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/96b905cc03872fa34a81772a5ee589c0713f230f-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Omen Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0680b39fad5a4f8b16ec12488341ea9323d9e4c4-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Jett Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/974586ade8a38fb9200277d0d37f4ba80bd27824-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Ascent Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e3105e4c699c324dc56128010369e772663f9a3f-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Icebox Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/5a3d2c87e708cb986d8f99805f5b2732ca493e6f-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Killjoy Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/924e998972ac03720046e0718b786d4ff7a27c92-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Omen Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/6628e175321b3fb53c863e58d1c033f7bfe5390e-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Jett Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c43931ec117ffa7e4d093d31324d945f01614f8e-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Ascent Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/54d784be3db8503ec574ff45e912ea098cc10352-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Icebox Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/df5ca88fd6c2ca710bd51a8f8abfe2d9346be7eb-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Jett Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/5b1c39c5397cfc61dfe67e0c55b45ca31b1f5a9d-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Ascent Wallpaper"
    },
    {
        img:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/b27b9e8997cecb9414ff2d49179688243a4dd541-854x484.png?auto=format&fit=fill&q=80&w=664",
        date:"04/06/2024",
        descrip:"Icebox Wallpaper"
    }
]

let events = true;

const SearchToggle = () => {
    
    if(events==true){
        console.log("bhumi");
        Search.style.width="16rem";
        // Search.style.border="2px solid white";
        Search.style.padding="0 rem 0.3rem"
        Search.style.display="flex";
        Search.style.justifyContent="space-evenly";
        searchInput.style.display="block";
        searchCross.style.display="block";
        midlecontent.style.width="55%";
        leftContent.style.width="30%";
        hiddenListO.style.display="none";
        hiddenListT.style.display="none";
        displayList.style.display="flex";
        events = false;
    }
    else{
        events = true;
        Search.style.width="48px";
        Search.style.height="60%";
        // Search.style.border="2px solid red";
        Search.style.display="flex";
        Search.style.justifyContent="center";
        Search.style.alignItems="center";
        Search.style.padding="0.4rem"
        searchInput.style.display="none";
        searchCross.style.display="none";
        midlecontent.style.width="65%";
        leftContent.style.width="20%";
        hiddenListO.style.display="flex";
        hiddenListT.style.display="flex";
        displayList.style.display="none";
        console.log("pooja");
        
    }
}

const imageDisplay = ()=> {
    Data.map((items)=>{
        let card = document.createElement("div")
        // let img = document.createElement("img")
        // let img_date = document.createElement("p")
        // let img_descrip = document.createElement("p")

        // img_date.textContent = items.date
        // img_descrip.textContent = items.descrip

        card.setAttribute("class", "card")
        // img.setAttribute("src", items.img)

        // console.log(items);
        
        // card.append(img,img_date,img_descrip)
            card.innerHTML= `<div class="IMAG"><img src=${items.img} ></div>
            <p>${items.date}</p>
            <p class="name">${items.descrip}</P>`


        imageWrappers.append(card)

    })
        
}

imageDisplay()

icons.addEventListener("click",SearchToggle);
searchCross.addEventListener("click",SearchToggle);