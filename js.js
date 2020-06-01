const add_event = document.getElementsByClassName('kalc_sl_wrap');
for (let i = 0; i < add_event.length; i++){
    const event = add_event[i].getElementsByClassName('kalc_sl_title');
    for (let i = 0; i < event.length; i++) {
        event[i].addEventListener('click', function() {
            let child_title = this.parentElement.getElementsByClassName('kalc_sl_title');
            let active_sl = this.classList.contains("kalc_active");
            for (const value of child_title) { value.classList.remove("kalc_active") };             
            if (active_sl !== true){ this.classList.toggle("kalc_active") };
        });        
    }
} 










