const loadData = async () =>{
    try {
        const res = await fetch("./public.json")
        const data = await res.json()
displayServiceStrip(data.hero.services)

        if(!res.ok){
            throw new Error("File not loaded" , res.status)
        }
        return data
    } catch (error) {
         console.error("There is something wrong", error);
    return null;
    }
}

const displayServiceStrip = (datas) =>{
    console.log(datas)
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

loadData()
displayServiceStrip()