// daniel.diaz.benito@gmail.com 6-X-2018
// MIT LICENSE

Vue.component("player-roll", {
    props: ["player"],
    template: "<div>\
            <h3>{{player.name}}</h3>\
            <div>Success!</div>\
            <div>+3</div>\
            <div>{{player.str}}\
        </div>"
});