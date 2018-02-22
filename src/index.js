/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
 
  let trianglesCounter = 0;
  let spichoneesCount = preferences.length;
  let triangleEdges = [];
 
  for (let spichoneeIndex = 1; spichoneeIndex <= spichoneesCount; spichoneeIndex++) {
     if (triangleEdges.indexOf(spichoneeIndex) >= 0) {
     continue;
    }
    let triangle = [];
    let currentSpichonee = spichoneeIndex;
    for (let edgeCnt = 0; edgeCnt < 3; edgeCnt++) {
      if (triangle.indexOf(currentSpichonee) >= 0) {
        currentSpichonee = -1;
        break;
      }
      triangle.push(currentSpichonee);
      currentSpichonee = preferences[currentSpichonee-1];
    }
      if (currentSpichonee === spichoneeIndex) {
        trianglesCounter++;
        triangleEdges = triangleEdges.concat(triangle);
      }
    }
   return trianglesCounter;
};
