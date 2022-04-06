import store from '../../index.js'

function submit() {
    console.log("submit click");
    var new_name = document.getElementById("name_field").value;
    store.player.setName(new_name);
    alert(store.player.getName())
}