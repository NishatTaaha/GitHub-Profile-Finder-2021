// Init Github
const github = new Github;
const ui= new UI;
const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', (e) => {

    const searchText = e.target.value;
    if(searchText !== ''){
        github.getUser(searchText).then(data => {
            if(data.profile.message === 'Not Found'){
                ui.showAlert('User Not Found!', 'alert alert-danger');
            }else{
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    }else{
        // Clear Profile
        ui.clearProfile();
    }
});