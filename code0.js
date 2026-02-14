gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.idToCallbackMap = new Map();
gdjs.MainCode.GDMain_9595BackgroundObjects1= [];
gdjs.MainCode.GDMain_9595BackgroundObjects2= [];
gdjs.MainCode.GDComputerObjects1= [];
gdjs.MainCode.GDComputerObjects2= [];
gdjs.MainCode.GDDesigner_9595SimulatorObjects1= [];
gdjs.MainCode.GDDesigner_9595SimulatorObjects2= [];
gdjs.MainCode.GDPlay_9595ButtonObjects1= [];
gdjs.MainCode.GDPlay_9595ButtonObjects2= [];
gdjs.MainCode.GDExit_9595ButtonObjects1= [];
gdjs.MainCode.GDExit_9595ButtonObjects2= [];


gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlay_95959595ButtonObjects1Objects = Hashtable.newFrom({"Play_Button": gdjs.MainCode.GDPlay_9595ButtonObjects1});
gdjs.MainCode.asyncCallback11676412 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Monitor", false);
}
gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.idToCallbackMap.set(11676412, gdjs.MainCode.asyncCallback11676412);
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainCode.asyncCallback11676412(runtimeScene, asyncObjectsList)), 11676412, asyncObjectsList);
}
}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDExit_95959595ButtonObjects1Objects = Hashtable.newFrom({"Exit_Button": gdjs.MainCode.GDExit_9595ButtonObjects1});
gdjs.MainCode.asyncCallback11677748 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.idToCallbackMap.set(11677748, gdjs.MainCode.asyncCallback11677748);
gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainCode.asyncCallback11677748(runtimeScene, asyncObjectsList)), 11677748, asyncObjectsList);
}
}

}


};gdjs.MainCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Designer_Simulator"), gdjs.MainCode.GDDesigner_9595SimulatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Exit_Button"), gdjs.MainCode.GDExit_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Play_Button"), gdjs.MainCode.GDPlay_9595ButtonObjects1);
{for(var i = 0, len = gdjs.MainCode.GDDesigner_9595SimulatorObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDDesigner_9595SimulatorObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MainCode.GDPlay_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlay_9595ButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MainCode.GDExit_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDExit_9595ButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Button"), gdjs.MainCode.GDPlay_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlay_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit_Button"), gdjs.MainCode.GDExit_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDExit_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDMain_9595BackgroundObjects1.length = 0;
gdjs.MainCode.GDMain_9595BackgroundObjects2.length = 0;
gdjs.MainCode.GDComputerObjects1.length = 0;
gdjs.MainCode.GDComputerObjects2.length = 0;
gdjs.MainCode.GDDesigner_9595SimulatorObjects1.length = 0;
gdjs.MainCode.GDDesigner_9595SimulatorObjects2.length = 0;
gdjs.MainCode.GDPlay_9595ButtonObjects1.length = 0;
gdjs.MainCode.GDPlay_9595ButtonObjects2.length = 0;
gdjs.MainCode.GDExit_9595ButtonObjects1.length = 0;
gdjs.MainCode.GDExit_9595ButtonObjects2.length = 0;

gdjs.MainCode.eventsList2(runtimeScene);
gdjs.MainCode.GDMain_9595BackgroundObjects1.length = 0;
gdjs.MainCode.GDMain_9595BackgroundObjects2.length = 0;
gdjs.MainCode.GDComputerObjects1.length = 0;
gdjs.MainCode.GDComputerObjects2.length = 0;
gdjs.MainCode.GDDesigner_9595SimulatorObjects1.length = 0;
gdjs.MainCode.GDDesigner_9595SimulatorObjects2.length = 0;
gdjs.MainCode.GDPlay_9595ButtonObjects1.length = 0;
gdjs.MainCode.GDPlay_9595ButtonObjects2.length = 0;
gdjs.MainCode.GDExit_9595ButtonObjects1.length = 0;
gdjs.MainCode.GDExit_9595ButtonObjects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
