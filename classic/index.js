store = {
    player: {
        name: "",
        getName() {
            return localStorage.getItem('player_name');
        },
        setName(new_player_name) {
            localStorage.setItem('player_name', new_player_name)
        }
    },
}