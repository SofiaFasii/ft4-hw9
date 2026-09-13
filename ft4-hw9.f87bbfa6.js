let e;let t=document.querySelector(".inputName"),n=document.querySelector(".inputSurname"),l=document.querySelector(".inputPhone"),a=document.querySelector(".inputGmail"),u=document.querySelector(".btnSave"),r=document.querySelector(".phoneList"),i=(e=localStorage.getItem("phone-storage"))?JSON.parse(e):[],o=null;function m(){localStorage.setItem("phone-storage",JSON.stringify(i))}function c(){r.innerHTML="",i.forEach(e=>{let u=document.createElement("li");u.innerHTML=`
            <p>${e.name}</p>
            <p>${e.surname}</p>
            <p>+380 ${e.phone}</p>
            <p>${e.gmail}</p>
            <div>
                <button class="changeBtn">Edit</button>
                <button class="removeBtn">Remove </button>
            </div>
        `,u.querySelector(".changeBtn").addEventListener("click",()=>{o=e.id,t.value=e.name,n.value=e.surname,l.value=e.phone,a.value=e.gmail}),u.querySelector(".removeBtn").addEventListener("click",()=>{i=i.filter(t=>t.id!==e.id),m(),c()}),r.appendChild(u)})}u.addEventListener("click",()=>{let e=t.value.trim(),u=n.value.trim(),r=l.value.trim(),d=a.value.trim();if(""===e||""===u||""===r||""===d)return;let p={id:Date.now(),name:e,surname:u,phone:r,gmail:d};null===o?(i.unshift(p),m(),c()):(i=i.map(t=>t.id===o?{id:t.id,name:e,surname:u,phone:r,gmail:d}:t),m(),c(),o=null),t.value="",n.value="",l.value="",a.value=""}),c();
//# sourceMappingURL=ft4-hw9.f87bbfa6.js.map
