alert("You will have the option between 2 elements, based on your selection you will face different challenges and obstacles, Choose wisely and have fun :)")

let fire_or_water_or_earth_air = prompt("Choose which element you want (1) for fire, (2) for water.")

if(fire_or_water_or_earth_air == 1){
    let aliance_or_battle_village = prompt("Congratulation you have chosen the element fire, you now have a quest. There are bandits from another village attacking your village do you (1) try to battle and fend them off with your new found powers or (2) try to negotiate and find a peaceful way to resolve the situation.") 
    if(aliance_or_battle_village == 1){
        alert("You do not have control of your new found powers and you end up burning both villages, GAME OVER.");

    } else {
        let aliance_or_battle_village = alert("You sucessfully negotiate with them and end up getting scrolls to help master your bending.")
    }
    
}
if(fire_or_water_or_earth_air == 2){
    let wall_or_negotiate = prompt("Congratulations you have chosen the element water, you now have a quest. There are pirates raiding your village, do you (1) fend them off with your new found abilities or (2) try to negotiate with them")
    if(wall_or_negotiate ==1 ){
        alert("Great Job you have successfully fended the pirates off, the village thanks you by giving you scrolls to further your bending.")
    } else {
        let wall_or_negotiate = alert ("Negotiating did not work and the pirates raid the village and trap you in the cage, GAME OVER")
    }
}
alert("Thank You for playing, I hope you had fun!")
