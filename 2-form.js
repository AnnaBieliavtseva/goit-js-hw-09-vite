import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t=document.querySelector(".feedback-form"),m="feedback-form-state",e={email:"",message:""};r();t.addEventListener("input",l);t.addEventListener("submit",o);function l(s){e.email=t.elements.email.value,e.message=t.elements.message.value,localStorage.setItem(m,JSON.stringify(e))}function o(s){if(s.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log("Submitted data:",e),t.reset(),localStorage.removeItem(m),e.email="",e.message=""}function r(){const s=localStorage.getItem(m);if(s)try{const a=JSON.parse(s);a.email&&a.message&&(t.elements.email.value=a.email,t.elements.message.value=a.message,e.email=a.email,e.message=a.message)}catch(a){console.error("Error parsing data from localStorage:",a)}}
//# sourceMappingURL=2-form.js.map