// Code your solution in this file!

function distanceFromHqInBlocks(num) {
    if (num <= 42) {
        return 42-num;
    } 
    else {
        return num-42;
    }
}

function distanceFromHqInFeet(num) {
    const feet = distanceFromHqInBlocks(num);
    return feet*264;
}

function distanceTravelledInFeet(num1, num2) {
    if (num1 >= num2) {
        const num3 = ((num1-num2)*264);
        return num3;
    }
    else {
        const num3 = ((num2-num1)*264);
        return num3;
    }
}

function calculatesFarePrice(num1, num2) {
    const num3 = distanceTravelledInFeet(num1, num2)
    if (num3 <= 400) {
        return 0
    }
    else if (num3 <= 2000) {
        const fare = ((num3-400)*.02);
        return fare;
    }
    else if (num3 <= 2500) {
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}
