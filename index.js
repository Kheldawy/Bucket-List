const ownerElement = document.querySelector('.owner');
ownerElement.innerText = "Kheldawy"; 

const firstItem = document.createElement('p');
firstItem.innerText = "Travel to Las Vegas"; 
const listSection = document.querySelector('.list');
listSection.appendChild(firstItem); 


const secondItem = document.createElement('p');
secondItem.innerText = "Visit the moon"; 
listSection.insertAdjacentElement('afterend', secondItem); 

console.log(listSection.innerHTML);


const newItemHTML = "<p>Write a book</p>";

listSection.innerHTML = newItemHTML; 


listSection.insertAdjacentHTML('afterbegin', newItemHTML);


const additionalItems = ["Visit Japan", "Start a business", "Learn a new language"];
additionalItems.forEach(item => {
    const newItem = document.createElement('p');
    newItem.innerText = item;
    listSection.appendChild(newItem);
});


console.log(`Total items in bucket list: ${listSection.children.length}`);


const firstChild = listSection.firstChild; 
const newFirstItem = document.createElement('p');
newFirstItem.innerText = "Visit NY";
listSection.replaceChild(newFirstItem, firstChild); 


const middleIndex = Math.floor(listSection.children.length / 2);
const middleChild = listSection.children[middleIndex]; 
const newMiddleItem = document.createElement('p');
newMiddleItem.innerText = "Travel around the world";
listSection.replaceChild(newMiddleItem, middleChild); 


const lastElement = listSection.lastChild; 
listSection.removeChild(lastElement); 