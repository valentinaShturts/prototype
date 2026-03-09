gdjs.MonitorCode = {};
gdjs.MonitorCode.localVariables = [];
gdjs.MonitorCode.idToCallbackMap = new Map();
gdjs.MonitorCode.GDScreen_9595MainObjects1= [];
gdjs.MonitorCode.GDScreen_9595MainObjects2= [];
gdjs.MonitorCode.GDMessage_9595ButtonObjects1= [];
gdjs.MonitorCode.GDMessage_9595ButtonObjects2= [];
gdjs.MonitorCode.GDPhotoshopObjects1= [];
gdjs.MonitorCode.GDPhotoshopObjects2= [];
gdjs.MonitorCode.GDExit_9595ButtonObjects1= [];
gdjs.MonitorCode.GDExit_9595ButtonObjects2= [];
gdjs.MonitorCode.GDBack_9595ButtonObjects1= [];
gdjs.MonitorCode.GDBack_9595ButtonObjects2= [];
gdjs.MonitorCode.GDShop_9595ButtonObjects1= [];
gdjs.MonitorCode.GDShop_9595ButtonObjects2= [];
gdjs.MonitorCode.GDClose_9595ButtonObjects1= [];
gdjs.MonitorCode.GDClose_9595ButtonObjects2= [];
gdjs.MonitorCode.GDTwoChoicesDialogBoxObjects1= [];
gdjs.MonitorCode.GDTwoChoicesDialogBoxObjects2= [];
gdjs.MonitorCode.GDm1Objects1= [];
gdjs.MonitorCode.GDm1Objects2= [];
gdjs.MonitorCode.GDm_9595bgObjects1= [];
gdjs.MonitorCode.GDm_9595bgObjects2= [];
gdjs.MonitorCode.GDm2Objects1= [];
gdjs.MonitorCode.GDm2Objects2= [];
gdjs.MonitorCode.GDNewTextInputObjects1= [];
gdjs.MonitorCode.GDNewTextInputObjects2= [];
gdjs.MonitorCode.GDAudio_9595ButtonObjects1= [];
gdjs.MonitorCode.GDAudio_9595ButtonObjects2= [];
gdjs.MonitorCode.GDNewSpriteObjects1= [];
gdjs.MonitorCode.GDNewSpriteObjects2= [];
gdjs.MonitorCode.GDcatObjects1= [];
gdjs.MonitorCode.GDcatObjects2= [];
gdjs.MonitorCode.GDcoffeeObjects1= [];
gdjs.MonitorCode.GDcoffeeObjects2= [];
gdjs.MonitorCode.GDmoneyObjects1= [];
gdjs.MonitorCode.GDmoneyObjects2= [];
gdjs.MonitorCode.GDenduranceObjects1= [];
gdjs.MonitorCode.GDenduranceObjects2= [];
gdjs.MonitorCode.GDendurance_9595txtObjects1= [];
gdjs.MonitorCode.GDendurance_9595txtObjects2= [];
gdjs.MonitorCode.GDmind_9595txtObjects1= [];
gdjs.MonitorCode.GDmind_9595txtObjects2= [];
gdjs.MonitorCode.GDmindObjects1= [];
gdjs.MonitorCode.GDmindObjects2= [];
gdjs.MonitorCode.GDbuy_9595coffeeObjects1= [];
gdjs.MonitorCode.GDbuy_9595coffeeObjects2= [];
gdjs.MonitorCode.GDbuy_9595therapyObjects1= [];
gdjs.MonitorCode.GDbuy_9595therapyObjects2= [];
gdjs.MonitorCode.GDbuy_9595gymObjects1= [];
gdjs.MonitorCode.GDbuy_9595gymObjects2= [];
gdjs.MonitorCode.GDbuy_9595bubbleteaObjects1= [];
gdjs.MonitorCode.GDbuy_9595bubbleteaObjects2= [];
gdjs.MonitorCode.GDcorrectObjects1= [];
gdjs.MonitorCode.GDcorrectObjects2= [];


gdjs.MonitorCode.mapOfGDgdjs_9546MonitorCode_9546GDExit_95959595ButtonObjects1Objects = Hashtable.newFrom({"Exit_Button": gdjs.MonitorCode.GDExit_9595ButtonObjects1});
gdjs.MonitorCode.asyncCallback14213684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MonitorCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
gdjs.MonitorCode.localVariables.length = 0;
}
gdjs.MonitorCode.idToCallbackMap.set(14213684, gdjs.MonitorCode.asyncCallback14213684);
gdjs.MonitorCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MonitorCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MonitorCode.asyncCallback14213684(runtimeScene, asyncObjectsList)), 14213684, asyncObjectsList);
}
}

}


};gdjs.MonitorCode.mapOfGDgdjs_9546MonitorCode_9546GDScreen_95959595MainObjects1Objects = Hashtable.newFrom({"Screen_Main": gdjs.MonitorCode.GDScreen_9595MainObjects1});
gdjs.MonitorCode.asyncCallback14216068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MonitorCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Screen", false);
}
gdjs.MonitorCode.localVariables.length = 0;
}
gdjs.MonitorCode.idToCallbackMap.set(14216068, gdjs.MonitorCode.asyncCallback14216068);
gdjs.MonitorCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MonitorCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MonitorCode.asyncCallback14216068(runtimeScene, asyncObjectsList)), 14216068, asyncObjectsList);
}
}

}


};gdjs.MonitorCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("endurance"), gdjs.MonitorCode.GDenduranceObjects1);
gdjs.copyArray(runtimeScene.getObjects("mind"), gdjs.MonitorCode.GDmindObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(50);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(50);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.MonitorCode.GDmindObjects1.length ;i < len;++i) {
    gdjs.MonitorCode.GDmindObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.MonitorCode.GDenduranceObjects1.length ;i < len;++i) {
    gdjs.MonitorCode.GDenduranceObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit_Button"), gdjs.MonitorCode.GDExit_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MonitorCode.mapOfGDgdjs_9546MonitorCode_9546GDExit_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MonitorCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Screen_Main"), gdjs.MonitorCode.GDScreen_9595MainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MonitorCode.mapOfGDgdjs_9546MonitorCode_9546GDScreen_95959595MainObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MonitorCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.MonitorCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MonitorCode.GDScreen_9595MainObjects1.length = 0;
gdjs.MonitorCode.GDScreen_9595MainObjects2.length = 0;
gdjs.MonitorCode.GDMessage_9595ButtonObjects1.length = 0;
gdjs.MonitorCode.GDMessage_9595ButtonObjects2.length = 0;
gdjs.MonitorCode.GDPhotoshopObjects1.length = 0;
gdjs.MonitorCode.GDPhotoshopObjects2.length = 0;
gdjs.MonitorCode.GDExit_9595ButtonObjects1.length = 0;
gdjs.MonitorCode.GDExit_9595ButtonObjects2.length = 0;
gdjs.MonitorCode.GDBack_9595ButtonObjects1.length = 0;
gdjs.MonitorCode.GDBack_9595ButtonObjects2.length = 0;
gdjs.MonitorCode.GDShop_9595ButtonObjects1.length = 0;
gdjs.MonitorCode.GDShop_9595ButtonObjects2.length = 0;
gdjs.MonitorCode.GDClose_9595ButtonObjects1.length = 0;
gdjs.MonitorCode.GDClose_9595ButtonObjects2.length = 0;
gdjs.MonitorCode.GDTwoChoicesDialogBoxObjects1.length = 0;
gdjs.MonitorCode.GDTwoChoicesDialogBoxObjects2.length = 0;
gdjs.MonitorCode.GDm1Objects1.length = 0;
gdjs.MonitorCode.GDm1Objects2.length = 0;
gdjs.MonitorCode.GDm_9595bgObjects1.length = 0;
gdjs.MonitorCode.GDm_9595bgObjects2.length = 0;
gdjs.MonitorCode.GDm2Objects1.length = 0;
gdjs.MonitorCode.GDm2Objects2.length = 0;
gdjs.MonitorCode.GDNewTextInputObjects1.length = 0;
gdjs.MonitorCode.GDNewTextInputObjects2.length = 0;
gdjs.MonitorCode.GDAudio_9595ButtonObjects1.length = 0;
gdjs.MonitorCode.GDAudio_9595ButtonObjects2.length = 0;
gdjs.MonitorCode.GDNewSpriteObjects1.length = 0;
gdjs.MonitorCode.GDNewSpriteObjects2.length = 0;
gdjs.MonitorCode.GDcatObjects1.length = 0;
gdjs.MonitorCode.GDcatObjects2.length = 0;
gdjs.MonitorCode.GDcoffeeObjects1.length = 0;
gdjs.MonitorCode.GDcoffeeObjects2.length = 0;
gdjs.MonitorCode.GDmoneyObjects1.length = 0;
gdjs.MonitorCode.GDmoneyObjects2.length = 0;
gdjs.MonitorCode.GDenduranceObjects1.length = 0;
gdjs.MonitorCode.GDenduranceObjects2.length = 0;
gdjs.MonitorCode.GDendurance_9595txtObjects1.length = 0;
gdjs.MonitorCode.GDendurance_9595txtObjects2.length = 0;
gdjs.MonitorCode.GDmind_9595txtObjects1.length = 0;
gdjs.MonitorCode.GDmind_9595txtObjects2.length = 0;
gdjs.MonitorCode.GDmindObjects1.length = 0;
gdjs.MonitorCode.GDmindObjects2.length = 0;
gdjs.MonitorCode.GDbuy_9595coffeeObjects1.length = 0;
gdjs.MonitorCode.GDbuy_9595coffeeObjects2.length = 0;
gdjs.MonitorCode.GDbuy_9595therapyObjects1.length = 0;
gdjs.MonitorCode.GDbuy_9595therapyObjects2.length = 0;
gdjs.MonitorCode.GDbuy_9595gymObjects1.length = 0;
gdjs.MonitorCode.GDbuy_9595gymObjects2.length = 0;
gdjs.MonitorCode.GDbuy_9595bubbleteaObjects1.length = 0;
gdjs.MonitorCode.GDbuy_9595bubbleteaObjects2.length = 0;
gdjs.MonitorCode.GDcorrectObjects1.length = 0;
gdjs.MonitorCode.GDcorrectObjects2.length = 0;

gdjs.MonitorCode.eventsList2(runtimeScene);
gdjs.MonitorCode.GDScreen_9595MainObjects1.length = 0;
gdjs.MonitorCode.GDScreen_9595MainObjects2.length = 0;
gdjs.MonitorCode.GDMessage_9595ButtonObjects1.length = 0;
gdjs.MonitorCode.GDMessage_9595ButtonObjects2.length = 0;
gdjs.MonitorCode.GDPhotoshopObjects1.length = 0;
gdjs.MonitorCode.GDPhotoshopObjects2.length = 0;
gdjs.MonitorCode.GDExit_9595ButtonObjects1.length = 0;
gdjs.MonitorCode.GDExit_9595ButtonObjects2.length = 0;
gdjs.MonitorCode.GDBack_9595ButtonObjects1.length = 0;
gdjs.MonitorCode.GDBack_9595ButtonObjects2.length = 0;
gdjs.MonitorCode.GDShop_9595ButtonObjects1.length = 0;
gdjs.MonitorCode.GDShop_9595ButtonObjects2.length = 0;
gdjs.MonitorCode.GDClose_9595ButtonObjects1.length = 0;
gdjs.MonitorCode.GDClose_9595ButtonObjects2.length = 0;
gdjs.MonitorCode.GDTwoChoicesDialogBoxObjects1.length = 0;
gdjs.MonitorCode.GDTwoChoicesDialogBoxObjects2.length = 0;
gdjs.MonitorCode.GDm1Objects1.length = 0;
gdjs.MonitorCode.GDm1Objects2.length = 0;
gdjs.MonitorCode.GDm_9595bgObjects1.length = 0;
gdjs.MonitorCode.GDm_9595bgObjects2.length = 0;
gdjs.MonitorCode.GDm2Objects1.length = 0;
gdjs.MonitorCode.GDm2Objects2.length = 0;
gdjs.MonitorCode.GDNewTextInputObjects1.length = 0;
gdjs.MonitorCode.GDNewTextInputObjects2.length = 0;
gdjs.MonitorCode.GDAudio_9595ButtonObjects1.length = 0;
gdjs.MonitorCode.GDAudio_9595ButtonObjects2.length = 0;
gdjs.MonitorCode.GDNewSpriteObjects1.length = 0;
gdjs.MonitorCode.GDNewSpriteObjects2.length = 0;
gdjs.MonitorCode.GDcatObjects1.length = 0;
gdjs.MonitorCode.GDcatObjects2.length = 0;
gdjs.MonitorCode.GDcoffeeObjects1.length = 0;
gdjs.MonitorCode.GDcoffeeObjects2.length = 0;
gdjs.MonitorCode.GDmoneyObjects1.length = 0;
gdjs.MonitorCode.GDmoneyObjects2.length = 0;
gdjs.MonitorCode.GDenduranceObjects1.length = 0;
gdjs.MonitorCode.GDenduranceObjects2.length = 0;
gdjs.MonitorCode.GDendurance_9595txtObjects1.length = 0;
gdjs.MonitorCode.GDendurance_9595txtObjects2.length = 0;
gdjs.MonitorCode.GDmind_9595txtObjects1.length = 0;
gdjs.MonitorCode.GDmind_9595txtObjects2.length = 0;
gdjs.MonitorCode.GDmindObjects1.length = 0;
gdjs.MonitorCode.GDmindObjects2.length = 0;
gdjs.MonitorCode.GDbuy_9595coffeeObjects1.length = 0;
gdjs.MonitorCode.GDbuy_9595coffeeObjects2.length = 0;
gdjs.MonitorCode.GDbuy_9595therapyObjects1.length = 0;
gdjs.MonitorCode.GDbuy_9595therapyObjects2.length = 0;
gdjs.MonitorCode.GDbuy_9595gymObjects1.length = 0;
gdjs.MonitorCode.GDbuy_9595gymObjects2.length = 0;
gdjs.MonitorCode.GDbuy_9595bubbleteaObjects1.length = 0;
gdjs.MonitorCode.GDbuy_9595bubbleteaObjects2.length = 0;
gdjs.MonitorCode.GDcorrectObjects1.length = 0;
gdjs.MonitorCode.GDcorrectObjects2.length = 0;


return;

}

gdjs['MonitorCode'] = gdjs.MonitorCode;
