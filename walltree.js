function printBrickWall(height, width) {
    for (let i = 0; i < height; i++) {
      console.log("[]".repeat(width));
    }
  }
  
  // Sample Input
  let height = 4;
  let width = 5;
  
  printBrickWall(height, width);
  