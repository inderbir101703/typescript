type point2d={a:number,b:number,c:number};
type point3d={a:number,b:number,c:number};

let space:point3d={a:1,b:2,c:3}

function takes2d(va:point2d){   }
takes2d(space)// it will owrk without any compliation error ==> duck typing well reverse will gives error
