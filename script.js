
let panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () =>{
        removePanelClass();
        panel.classList.add('active');
        // console.log('panel clicked');
    })
})

let removePanelClass = () =>{
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}