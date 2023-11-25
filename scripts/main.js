async function loadHeader(){
    var header = await fetch("../components/header.html");
    var header_data = await header.text()
    document.getElementById('header').innerHTML = header_data;
}
async function loadFooter(){
    var footer = await fetch("../components/footer.html");
    var footer_data = await footer.text()
    document.getElementsByTagName('footer')[0].innerHTML = footer_data;
}
loadHeader();
loadFooter();