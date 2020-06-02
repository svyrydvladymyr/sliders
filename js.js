const add_event = document.getElementsByClassName('kalc_sl_wrap'), active = 'kalc_active', title = 'kalc_sl_title';
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










