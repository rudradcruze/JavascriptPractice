const sections = document.querySelectorAll('section');
for(const section of sections) {
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = "15px";
    section.style.padding = "10px 20px";
    section.style.backgroundColor = "lightblue";
}

const hardwareContainer = document.getElementById('hardware');
hardwareContainer.style.backgroundColor = "lightcoral";
hardwareContainer.classList.add('textCenterAlign');