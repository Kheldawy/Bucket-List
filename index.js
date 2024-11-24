const newItem1=document.createElement("p");
newItem1.innerText="Sky Diving in Dubai";
const bucketList =document.querySelector(".list")
bucketList.appendChild(newItem1);

const newItem2=document.createElement("p");
newItem2.innerText="Traviling out side the earth";
bucketList.insertAdjacentElement("afterbegin",newItem2);

console.log(bucketList.innerHTML);

const newItemHTML="<p>Climbing to the top of Everest</p>";
// bucketList.innerHTML=newItemHTML;

bucketList.insertAdjacentHTML("beforeend",newItemHTML);

const items=["Travel the world","Write a book", "Having my own business"]
items.forEach(item => {
    const newItem=document.createElement("p");
    newItem.innerText=item;
    bucketList.appendChild(newItem);
});

console.log(`Total items in bucket list: ${bucketList.children.length}`);

const ownerElement=document.querySelector(".owner");
ownerElement.innerText = "Kheldawy";

const firstChild=bucketList.firstChild;
const newFirstItem=document.createElement("p")
newFirstItem.innerText="Visit Hawaii";
bucketList.replaceChild(newFirstItem, firstChild);

const newMiddleItem=document.createElement("p");
newMiddleItem.innerText="Have one billion $"
bucketList.replaceChild(newMiddleItem, bucketList.children[3]);


bucketList.removeChild(bucketList.children[6]);