// With localstorage


const add = document.querySelector('.form');
const data = document.querySelector('.table');
const submit = document.getElementById('submit');
const details = JSON.parse(localStorage.getItem('details')) || [];
// let btn1=document.createElement('button');
// let btn2=document.createElement('button');
let currindex = null;

function display() {
    data.innerHTML = `
                <tr>
                    <th>Index</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            `

    details.forEach((detail, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${detail.name}</td>
                    <td>${detail.age}</td>
                    <td>${detail.email}</td>
                    <td>${detail.role}</td>
                `;
        data.appendChild(row);


        const col1 = document.createElement('td');
        const editbtn = document.createElement('button');
        editbtn.innerText = 'Edit';
        editbtn.className = 'edit';
        row.appendChild(col1);
        col1.appendChild(editbtn);

        editbtn.addEventListener('click', updateitem);

        function updateitem() {
            add.name.value = detail.name;
            add.age.value = detail.age;
            add.email.value = detail.email;
            add.role.value=detail.role;
            currindex = index;
          // add.removeChild(submit)

            if (add.contains(submit)) {
                add.removeChild(submit);
            }


            //row.querySelector('.edit').disabled = true;
            //row.querySelector('.delete').disabled = true;
            document.querySelectorAll('.edit').forEach((ele) => {
                ele.disabled = false;
            })
            document.querySelectorAll('.delete').forEach((ele) => {
                ele.disabled = false;
            })

            editbtn.disabled = true;
            deletebtn.disabled = true;


            // add.querySelectorAll('.update, .cancel').forEach((ele) => {
            //     ele.remove();
            // }) 

            add.querySelectorAll('.update').forEach((ele) =>{
                ele.remove();
            })
            add.querySelectorAll('.cancel').forEach((ele) =>{
                ele.remove();
            })

            // add.querySelectorAll('#submit').forEach((ele) =>{
            //     ele.append();
            // })
               



            const btn1 = document.createElement('button');
            btn1.innerText = 'Update';
            btn1.className = 'update';
            add.appendChild(btn1);
            // document.querySelector('.edit').disabled=true;
            // document.querySelector('.delete').disabled=true;
            btn1.addEventListener('submit', () => {
                // add.reset()
                // additem()
                // add.appendChild(submit);
                // add.removeChild(btn1);
                // add.removeChild(btn2);
            })

            // btn1.addEventListener('submit',additem)
            // add.(btn1);
            // add.removeChild(submit);



            // const update=document.querySelector('.update');
            // update.addEventListener('click',additem)
            // console.log('hello')




            const btn2 = document.createElement('button');
            btn2.innerText = 'Cancel';
            btn2.className='cancel'
            add.appendChild(btn2);
            btn2.addEventListener('click', () => {
                document.querySelectorAll('.edit').forEach((ele) => {
                    ele.disabled = false;
                })
                document.querySelectorAll('.delete').forEach((ele) => {
                    ele.disabled = false;
                })

                if (add.contains(btn1)) {
                    add.removeChild(btn1);
                }
                if (add.contains(btn2)) {
                    add.removeChild(btn2);
                }

                if (!add.contains(submit)) {
                    add.appendChild(submit);
                }

                //add.appendChild(submit);
                //add.removeChild(btn1);
                //add.removeChild(btn2);

                add.reset()
                // currindex = null;

            })
            }




        const col2 = document.createElement('td');
        const deletebtn = document.createElement('button');
        deletebtn.innerText = 'Delete';
        deletebtn.className = 'delete';
        row.appendChild(col2);
        col2.appendChild(deletebtn);

        deletebtn.addEventListener('click', deleteitem)

        function deleteitem() {
            details.splice(index, 1)
            localStorage.setItem('details', JSON.stringify(details));
            display();
            add.reset();
        }

    })
}



function additem(e) {
    e.preventDefault();
    const name = (this.querySelector('[name=name]')).value;
    const age = (this.querySelector('[name=age]')).value;
    const email = (this.querySelector('[name=email]')).value;
    const role=(this.querySelector('#role')).value;

    if (currindex !== null) {
        details[currindex] = { name, age, email,role };
        currindex = null;
    }
    else {
        details.push({ name, age, email,role });
    }

    add.appendChild(submit);
    // add.remove(btn1);

    add.querySelectorAll('.update').forEach((ele) => {
        ele.remove();
    })
    add.querySelectorAll('.cancel').forEach((ele) => {
        ele.remove();
    })



    localStorage.setItem('details', JSON.stringify(details));

    display();

    this.reset()
}

display();

add.addEventListener('submit', additem);

const logout=document.querySelector('.btn-logout');
logout.addEventListener('click',() =>{
    // const logindetails = JSON.parse(localStorage.getItem('logindetails'))
    localStorage.removeItem("logindetails")
    window.location.href='login.html';

    // if (localStorage.length === 0) {
    //     window.location.href = 'login.html'
    // }

    
})