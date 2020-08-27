(
    function(){
        const name = document.getElementById('name');
        const age = document.getElementById('age');
        const problem = document.getElementById('problem');
        const ul = document.querySelector('.showDetails');
        const submitBtn = document.getElementById('submitBtn');

        submitBtn.addEventListener('click',()=>{
            //save to local storage
            saveData(name.value, age.value, problem.value);
            //action after save data
            name.value = '';
            age.value = "";
            problem.value = "";
            //stop reloading
            // event.preventDefault();
        })

        //show data from local storage
        document.addEventListener('DOMContentLoaded',()=>{
            let profiles;
            if (localStorage.getItem('profiles')){
                profiles = JSON.parse(localStorage.getItem('profiles'));
            }else{
                profiles= [];
            }
            profiles.forEach(profile=>{
                const li = document.createElement('li');
                const displayName = document.createElement('p');
                const displayAge = document.createElement('p');
                const displayProblem = document.createElement('p');

                displayName.innerText = 'Name: '+ profile.name;
                displayAge.innerText = 'Age: '+ profile.age;
                displayProblem.innerText = 'Problem: '+ profile.problem;

                const clearBtn = document.createElement('button');
                clearBtn.innerText = 'Delete';
                clearBtn.addEventListener('click',()=>{
                    console.log(profile)
                    localStorage.clear(profile);
                    location.reload();
                })

                li.append(displayName, displayAge, displayProblem, clearBtn);
                ul.appendChild(li);

                const h1 = document.getElementById('details');
                h1.style.display = 'block';
            })
        })

        //save data to local storage
        function saveData(name, age, problem){
            let profiles;
            if (localStorage.getItem('profiles')){
                profiles = JSON.parse(localStorage.getItem('profiles'));
            }else{
                profiles= [];
            }
            if(!name || !age || !problem ){
                alert('please input valid thing');
            }else{
                profiles.push({name, age, problem});
            }
            localStorage.setItem('profiles', JSON.stringify(profiles))
        }
    }()
)