const ang1 = 45, ang2 = 30, ang3 = 105;
const isPositive = ang1 > 0 && ang2 > 0 && ang3 > 0;
const isTriangle = ang1 + ang2 + ang3 == 180;

if (isTriangle && isPositive){
    console.log(true);
}else{
    console.log(false);
}