// Code your solution in this file!
const Street = 42;
function distanceFromHqInBlocks(num){
    return Math.abs( num - Street);
}

function distanceFromHqInFeet(num){
    return (Math.abs(num - Street)*264);

}
function distanceTravelledInFeet(distance1,distance2){
    return (Math.abs(distance1 - distance2)*264);
}
function calculatesFarePrice(start,destination){
    const distance = (Math.abs(destination - start)*264);
    let price =0;
    if(distance <= 400){
        return 0;
    }
    else if(distance>400 && distance<2000){
        return 0.02 * (distance-400);
    }
    else if(distance >=2000 && distance < 2500){
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}