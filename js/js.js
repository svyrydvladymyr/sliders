// let fun = (el) => {    
//     const add_event = el.nextElementSibling.getElementsByClassName('kalcifer_slider'), active = 'active', title = 'title';
//     for (let i = 0; i < add_event.length; i++){
//         const event = add_event[i].getElementsByClassName(title);
//         for (let i = 0; i < event.length; i++) {
//             event[i].addEventListener('click', function() {
//                 const active_sl = this.classList.contains(active);
//                 for (const value of this.parentElement.getElementsByClassName(title)) { value.classList.remove(active) };             
//                 !active_sl ? this.classList.toggle(active) : null;
//             });        
//         }
//     }
// } 


const add_event = document.getElementsByClassName('kalcifer_slider'), active = 'active', title = 'title';
for (let i = 0; i < add_event.length; i++){
    const event = add_event[i].getElementsByClassName(title);
    for (let i = 0; i < event.length; i++) {

        event[i].addEventListener('click', function() {
            const add_event = this.nextElementSibling.getElementsByClassName('kalcifer_slider');
            for (let i = 0; i < add_event.length; i++){
                const event = add_event[i].getElementsByClassName(title);
                for (let i = 0; i < event.length; i++) {
                    event[i].addEventListener('click', function() {
                        const active_sl = this.classList.contains(active);
                        for (const value of this.parentElement.getElementsByClassName(title)) { value.classList.remove(active) };             
                        !active_sl ? this.classList.toggle(active) : null;
                    });        
                }
            }
        });  
        
        event[i].addEventListener('click', function() {
            const active_sl = this.classList.contains(active);
            for (const value of this.parentElement.getElementsByClassName(title)) { value.classList.remove(active) };             
            !active_sl ? this.classList.toggle(active) : null;
        });      
        
  
    }
} 












