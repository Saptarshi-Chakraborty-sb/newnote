console.log("New Script.js added");
getData();

let addBtn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clearBtn");
let ftitle = document.getElementById("title");
let fdesc = document.getElementById("desc");
let itemBox = document.getElementById('noteBox');
let GlobalArray;

addBtn.addEventListener("click", () => {
    console.log("Addbtn fired");
    itemBox.style.transition = "2s";
    let url = `http://localhost/note/create.php?title=${ftitle.value}&desc=${fdesc.value}`;
    fetch(url).then((res) => {
        console.log("First.then");
        return res.json();
    }).then((data) => {
        console.log("second.then");
        console.log(data);
        itemBox.innerText = "";
        getData();
    })

    clearForm();
});

clearBtn.addEventListener("click", clearForm);

function clearForm() {
    ftitle.value = "";
    fdesc.value = "";
}


function getData() {
    let url = `http://localhost/note/sonu.php?auth=ajdshuihdaskbjhiasd`;
    fetch(url).then((res) => {
        return res.text();
    }).then((data) => {
        // console.log(data);
        let arr = JSON.parse(data);
        let index = 0;
        GlobalArray = arr;
        arr.forEach(obj => {
            let html = `<div class="card my-2" style="width: 100%;">
            <div class="card-body">
              <h4 class="card-title">${obj['t']}</h4>
              <p class="card-text">${obj['d']}</p>
              <a onclick ="delNote(${index})"  id="${index++}" class="btn btn-danger">Delete</a>
            </div>
          </div>`;
            itemBox.innerHTML += html;
            // console.log("Title is '" + obj['t'] + "'");
            // console.log("Description is '" + obj['d'] + "'");
        });
    })
}


function delNote(index = 9) {
    console.log(index);
    let data = index;
    let url = `http://localhost/note/del.php?auth=ajdshuihdaskbjhiasd&data=${data}`;
    itemBox.innerText = "";
    fetch(url, { method: 'post' }).then((res) => {
        return res.text();
    }).then((data) => {
        console.log("New data = " + data);
        getData();
        // setTimeout(() => {

        //     getData();
        // }, 500);
    })
}


function copyvalue() {                  
	let cpy = document.getElementById('copyUrl');
	let str = cpy.value;
	console.log(str);
	const el = document.createElement('textarea');
	el.value = str;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
}