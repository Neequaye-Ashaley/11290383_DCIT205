async function showProfile(element){

    var staff_name = document.querySelector('.StaffPage>div:nth-child(2)>p');
    var profile_image = document.getElementsByClassName('profile_image')[0];
    var staff_profile_info = document.querySelector('.profile_page>div:nth-child(2)>p');

    
    profile_image.setAttribute("src",element.children[0].getAttribute("src"));
    staff_name.textContent = element.children[1].textContent;
    staff_profile_info.textContent = element.children[2].textContent;
}


var staff_name = document.querySelector('.StaffPage>div:nth-child(2)>p');
var profile_image = document.getElementsByClassName('profile_image')[0];
var staff_profile_info = document.querySelector('.profile_page>div:nth-child(2)>p');

element = document.getElementsByClassName("staff_list")[0].children[0];



profile_image.setAttribute("src",element.children[0].getAttribute("src"));
staff_name.textContent = element.children[1].textContent;
staff_profile_info.textContent = element.children[2].textContent;