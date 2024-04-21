let tabCounter = 0;

window.onload = function() {
    loadTabs();
};

function loadTabs() {
    const savedTabs = JSON.parse(localStorage.getItem('tabs'));
    if (savedTabs) {
        tabCounter = savedTabs.length;
        savedTabs.forEach(tab => {
            addTextArea(tab.name, tab.content);
        });
    } else {
        addTextArea(); 
    }
}

function saveTabs() {
    const tabs = [];
    const textAreasDiv = document.getElementById('textAreas');
    const tabsList = textAreasDiv.querySelectorAll('.tab');
    
    tabsList.forEach(tab => {
        const tabTitle = tab.querySelector('.tab-title').textContent;
        const textareaContent = tab.querySelector('textarea').value;
        tabs.push({ name: tabTitle, content: textareaContent });
    });

    localStorage.setItem('tabs', JSON.stringify(tabs));
}

function addTextArea(name = `Tab ${++tabCounter}`, content = '') {
    const textAreasDiv = document.getElementById('textAreas');
    const tab = document.createElement('div');
    tab.className = 'tab';
    
    const tabHeader = document.createElement('div');
    tabHeader.className = 'tab-header';

    const tabTitle = document.createElement('h3');
    tabTitle.className = 'tab-title';
    tabTitle.textContent = name;
    tabHeader.appendChild(tabTitle);

    const editIcon = document.createElement('span');
    editIcon.className = 'edit-icon';
    editIcon.innerHTML = '<i class="fas fa-edit"></i>';
    editIcon.onclick = function() {
        editTabName(tab);
    };
    tabHeader.appendChild(editIcon);

    const removeBtn = document.createElement('span');
    removeBtn.className = 'remove-btn';
    removeBtn.innerHTML = '&#10006;';
    removeBtn.onclick = function() {
        removeTab(tab);
    };
    tabHeader.appendChild(removeBtn);

    tab.appendChild(tabHeader);

    const tabContent = document.createElement('div');
    tabContent.className = 'tab-content';

    const textarea = document.createElement('textarea');
    textarea.value = content;
    textarea.addEventListener('input', saveTabs); 
    tabContent.appendChild(textarea);

    tab.appendChild(tabContent);

   
    tab.addEventListener('click', function() {
        setActiveTab(tab);
    });

    textAreasDiv.appendChild(tab);

    saveTabs(); 
}

function setActiveTab(tab) {
    const activeTextArea = document.getElementById('activeTextArea');
    activeTextArea.innerHTML = ''; 
    const clonedTab = tab.cloneNode(true); 
    const activeTextarea = clonedTab.querySelector('textarea');
    activeTextarea.style.width = "675px";
    activeTextarea.style.marginLeft = "15px"; 
    activeTextarea.style.height = "505px"; 
    clonedTab.style.width = "735px";
    clonedTab.style.height = "565px";
    clonedTab.style.marginTop = "15px"; 
    activeTextarea.readOnly = true; 
    clonedTab.querySelector('.edit-icon').remove(); 
    clonedTab.querySelector('.remove-btn').remove(); 
    activeTextArea.appendChild(clonedTab); 
}

function removeTab(tab) {
    const textAreasDiv = document.getElementById('textAreas');
    textAreasDiv.removeChild(tab);
    saveTabs(); 
}

function editTabName(tab) {
    const newName = prompt('Enter a new name for the tab:', tab.querySelector('.tab-title').textContent);
    if (newName !== null && newName !== '') {
        const tabTitle = tab.querySelector('.tab-title');
        tabTitle.textContent = newName;
        saveTabs(); 
    }
}
function addTextArea(name = `Tab ${++tabCounter}`, content = '') {
const textAreasDiv = document.getElementById('textAreas');
const tab = document.createElement('div');
tab.className = 'tab';
tab.id="tabtab";
const tabHeader = document.createElement('div');
tabHeader.className = 'tab-header';
tabHeader.id = 'tab-header';
const divi=document.createElement('div');
tabHeader.appendChild(divi);
divi.id="divi";
const tabTitle = document.createElement('h3');
tabTitle.className = 'tab-title';
tabTitle.textContent = name;
tabHeader.appendChild(tabTitle);

const editIcon = document.createElement('span');
editIcon.className = 'edit-icon';
editIcon.innerHTML = '<i class="fas fa-edit"></i>';
editIcon.id="editid"
editIcon.onclick = function() {
editTabName(tab);
};
tabHeader.appendChild(editIcon);

const removeBtn = document.createElement('span');
removeBtn.className = 'remove-btn';
removeBtn.innerHTML = '&#10006;';
removeBtn.id="remid";
removeBtn.onclick = function() {
removeTab(tab);
};
tabHeader.appendChild(removeBtn);

tab.appendChild(tabHeader);

const tabContent = document.createElement('div');
tabContent.className = 'tab-content';

const textarea = document.createElement('textarea');
textarea.value = content;
textarea.addEventListener('input', saveTabs); 
tabContent.appendChild(textarea);

tab.appendChild(tabContent);

tab.addEventListener('click', function() {
setActiveTab(tab);
});

textAreasDiv.appendChild(tab);

saveTabs(); 
}
