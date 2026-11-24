const loadData = async () => {
    try {
        const res = await fetch("./public.json")
        const data = await res.json()
        displayServiceStrip(data.hero.services)
        displayQuickCard(data.quickCards)
        displayAbout(data.about)
        displayFeaturesCard(data.featuredProjects.items)
        displayCapabilities(data.capabilities.items)

        if (!res.ok) {
            throw new Error("File not loaded", res.status)
        }
        return data
    } catch (error) {
        console.error("There is something wrong", error);
        return null;
    }
}

const displayServiceStrip = (datas) => {

    const serviceContainer = document.querySelector("#service-strip")
    serviceContainer.innerHTML = ""
    const ul = document.createElement("ul")
    ul.classList = "flex justify-between text-white text-xl py-10"
    datas.forEach(data => {
        const li = document.createElement("li")

        li.innerHTML = `
         <i class="fa-solid text-[#705944] fa-gem"></i>
         ${data.label}
        `

        ul.append(li)
    });
    serviceContainer.append(ul)
}

const displayQuickCard = (datas) => {
    const cardContainer = document.querySelector("#card-container")
    // cardContainer.innerHTML = ""
    datas.forEach(data => {

        const div = document.createElement("div")
        div.classList = ""
        div.innerHTML = `
      
         <a href="#" class="group   relative block aspect-[3/4] overflow-hidden rounded-md shadow-lg">
            <img  src="${data.image}"
                class="absolute inset-0 h-11/12 rounded-sm m-auto  w-10/12  object-cover transition-transform duration-700 group-hover:scale-110" />

            <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

            <div class="absolute bottom-0 left-0 p-6 text-white">
                <p class="text-sm font-medium uppercase tracking-[3px] text-[#c4a484]">
                    ${data.label}
                </p>
                <h3 class="mt-2 font-['Cormorant_Garamond'] text-3xl leading-tight">
                    ${data.title}
                </h3>
            </div>
        </a>
     
        `

        cardContainer.append(div)
    })

}

   function seeMore  () {
    console.log("clickedddd")
}


const displayFeaturesCard = (datas) => {
   
   
    const featuresCardHolder = document.querySelector("#features-card-holder")
    featuresCardHolder.innerHTML = ""
    datas.forEach(data => {
        let  isExpanded = false 
        const div = document.createElement("div")
        const isLong = data.description.length > 80
    
        div.innerHTML = `
        <div class="group overflow-hidden rounded-sm border border-black/5 bg-white shadow-md">

                    <!-- ছবি অংশ -->
                    <div class="relative h-72 overflow-hidden">
                        <img src="${data.image}" alt="Nakeeb Heights"
                            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <span
                            class="absolute right-4 top-5 bg-[#141a22] px-4 py-2 font-['Jost'] text-sm font-medium uppercase tracking-widest text-[#c4a484]">
                            ${data.badge}
                        </span>
                    </div>

                    <!-- লেখা অংশ -->
                    <div class="p-7">
                        <p class="font-['Jost'] text-sm font-semibold uppercase tracking-[3px] text-[#705944]">
                           ${data.category}
                        </p>

                        <h3 class="mt-3 font-['Cormorant_Garamond'] text-3xl font-medium leading-tight text-[#141a22]">
                            ${data.title}
                        </h3>

                        <p class="toggle-btn mt-3 font-['Jost'] text-base font-light leading-relaxed text-gray-500">
                          <span id="desc-text"> ${isLong ? data.description.slice(0 , 80) + "..."   : data.description}</span>
                        ${isLong ? `<button class="toggle-btn ml-1 font-medium text-[#705944]">See more</button>` : ""}
                        </p>

                        <div
                            class="mt-6 flex items-center justify-between border-t border-gray-200 pt-5 font-['Jost'] text-sm uppercase tracking-wider">
                            <span class="text-[#705944]">
                                <i class="fa-solid fa-location-dot mr-2"></i>Chandgaon R/A
                            </span>
                            <span class="text-gray-600">${data.stories}</span>
                        </div>
                    </div>

                </div>
        `
        if(isLong){
             const btn = div.querySelector(".toggle-btn")
    const text = div.querySelector("#desc-text")
    // btn.addEventListener("click", () => {
    //     isExpanded = !isExpanded
    //     text.textContent = isExpanded ? data.description : data.description.slice(0, 80) + "..."
    //     btn.textContent = isExpanded ? "See less" : "See more"
    // })

        }
        featuresCardHolder.append(div)
    })

}





const displayAbout = (data) => {
    const aboutSection = document.querySelector("#about-section")
    console.log(data)
    aboutSection.classList = "grid grid-cols-2 items-center gap-8 py-20  max-w-7xl jost-font mx-auto"
    aboutSection.innerHTML = `
    <div
    class="shadow-sm relative block  object-cover overflow-hidden rounded-tl-[100px] rounded-br-[100px] rounded-tr-md rounded-bl-md border-1 rounded-">
    <img src="assets/building-of-about.jpg" class="h-[70vh] block w-full" alt="">
    <div
    class="pointer-events-none absolute inset-0 bg-linear-to-r from-sky-400/40 via-transparent to-transparent ">
    </div>
    <div
    class="pointer-events-none absolute inset-0 bg-linear-to-t from-sky-700/40 via-transparent to-transparent">
    </div>
    </div>
    </div>
    <div class="grid gap-6 text-lg font-light">
    <h2 class="text-[#866f59] font-semibold text-xl tracking-widest">${data.label}</h2>
    <h1 class="text-6xl font-bold leading-[1.2] cormorant-garamond-font mb-2">${data.heading}</h1>
    <p> Nahar Builders is a trusted construction company based in Chattogram, Bangladesh, committed to
    delivering high-quality residential and commercial projects.</p>
    <p> With a strong emphasis on modern design, structural integrity, and long-term durability, we create
    spaces that seamlessly combine functionality with aesthetic appeal.</p>
    <p> Our team of experienced engineers and skilled professionals works closely with clients to understand
                    their vision and bring it to life with precision and care.</p>
                    <a
                    class="btn text-lg w-fit font-semibold px-12 py-6 rounded-none    border-[#705944] text-[#705944] hover:bg-[#705944] tracking-widest hover:text-white">Discover
                    Our Story</a>
            </div>
            `
        }


        const displayCapabilities = (datas) => {
            console.log(datas)
            const cardHolder = document.querySelector(".card-holder")
           
            datas.forEach(data =>{
                 const div = document.createElement("div")
                    div.innerHTML = ''
                div.innerHTML = `
                 <div
                class="group border border-black/5 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">

                <p class="font-['Jost'] text-sm font-semibold uppercase tracking-[3px] text-[#705944]">
                   ${data.number}
                </p>

                <h3 class="mt-4 font-['Cormorant_Garamond'] text-3xl font-medium leading-tight text-[#141a22]">
                    ${data.title}
                </h3>

                <p class="mt-4 font-['Jost'] text-base font-light leading-relaxed text-slate-500">
                    ${data.description}
                </p>

                <a href="/services"
                    class="mt-8 block border border-[#705944] py-4 text-center font-['Jost'] text-sm font-medium uppercase tracking-widest text-[#705944] transition-colors duration-300 hover:bg-[#705944] hover:text-white">
                   ${data.label}
                </a>

            </div>
                `
                cardHolder.append(div)

            })
        }


        loadData()