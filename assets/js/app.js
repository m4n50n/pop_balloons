let colors = ["grey", "purple", "yellow", "#5f9ea0", "green", "#ff7f50", "brown", "pink", "red", "#5f9ea0", "purple", "yellow",
"grey", "green", "pink", "red", "#deb887", "#ff7f50", "brown", "purple"];

let game_wrapper = document.querySelector("#game-wrapper");
let remaining_balloons_container = document.querySelector("#remaining-balls");

const render_balloons = () => {
    let html = "";
    colors.forEach((color, index) => {   
        let popped_class = (color === null) ? "popped" : "";        
        html  += `<div class='balloon ${popped_class}' style='background-color: ${color}; color: ${color};' onclick='pop_balloon("${index}")'></div>`;
    });

    game_wrapper.innerHTML = html;

    let count_balloons = colors.filter(value => value != null).length;
    remaining_balloons_container.innerHTML = count_balloons;

    if (count_balloons === 0) {
        game_wrapper.innerHTML = "<h1>YOU WIN! 🔥</h1> <button type='button' class='btn btn-primary btn-sm' onclick='location.reload();'>PLAY AGAIN!</button>";
    } 
}

const pop_balloon = (index) => {
    colors[index] = null;
    render_balloons();
}

render_balloons();
