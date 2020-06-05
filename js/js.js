const title = 'title', active = 'active', event = document.getElementsByClassName(title);
for (let i = 0; i < event.length; i++) {
    event[i].addEventListener('click', function() {
        const active_sl = this.classList.contains(active);
        for (const value of this.parentElement.getElementsByClassName(title)) { value.classList.remove(active) };             
        !active_sl ? this.classList.toggle(active) : null;
    });    
}






