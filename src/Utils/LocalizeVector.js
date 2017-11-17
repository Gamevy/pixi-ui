function localizeVector(localDisplayObject, globalVector) {
    const globalPosition = localDisplayObject.getGlobalPosition();
    const globalPoint = {
        x: globalVector.x + globalPosition.x,
        y: globalVector.y + globalPosition.y
    };
    return localDisplayObject.toLocal(globalPoint);
}

module.exports = localizeVector;
