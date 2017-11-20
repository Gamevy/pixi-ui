var skipUpdate = true;

var globalPoint = new PIXI.Point();

function localizeVector(localDisplayObject, globalVector, localVector) {
    localDisplayObject.getGlobalPosition(globalPoint);
    globalPoint.x += globalVector.x;
    globalPoint.y += globalVector.y;

    return localDisplayObject.toLocal(globalPoint, undefined, localVector, skipUpdate);
}

module.exports = localizeVector;
