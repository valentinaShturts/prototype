gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.idToCallbackMap = new Map();
gdjs.MainCode.GDExitObjects1_1final = [];

gdjs.MainCode.GDPlayObjects1_1final = [];

gdjs.MainCode.GDSoundObjects1_1final = [];

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
gdjs.MainCode.GDPlayObjects1= [];
gdjs.MainCode.GDPlayObjects2= [];
gdjs.MainCode.GDExitObjects1= [];
gdjs.MainCode.GDExitObjects2= [];
gdjs.MainCode.GDSoundObjects1= [];
gdjs.MainCode.GDSoundObjects2= [];
gdjs.MainCode.GDpc_9595frameObjects1= [];
gdjs.MainCode.GDpc_9595frameObjects2= [];
gdjs.MainCode.GDClose_9595ButtonObjects1= [];
gdjs.MainCode.GDClose_9595ButtonObjects2= [];
gdjs.MainCode.GDlevel_9595barObjects1= [];
gdjs.MainCode.GDlevel_9595barObjects2= [];
gdjs.MainCode.GDenergy_9595iconObjects1= [];
gdjs.MainCode.GDenergy_9595iconObjects2= [];
gdjs.MainCode.GDhealth_9595iconObjects1= [];
gdjs.MainCode.GDhealth_9595iconObjects2= [];
gdjs.MainCode.GDglass_9595effectObjects1= [];
gdjs.MainCode.GDglass_9595effectObjects2= [];
gdjs.MainCode.GDenergy_9595fillerObjects1= [];
gdjs.MainCode.GDenergy_9595fillerObjects2= [];
gdjs.MainCode.GDhealth_9595fillerObjects1= [];
gdjs.MainCode.GDhealth_9595fillerObjects2= [];
gdjs.MainCode.GDbar_9595bgObjects1= [];
gdjs.MainCode.GDbar_9595bgObjects2= [];
gdjs.MainCode.GDtime_9595iconObjects1= [];
gdjs.MainCode.GDtime_9595iconObjects2= [];
gdjs.MainCode.GDtime_9595fillerObjects1= [];
gdjs.MainCode.GDtime_9595fillerObjects2= [];
gdjs.MainCode.GDtimebar_9595bgObjects1= [];
gdjs.MainCode.GDtimebar_9595bgObjects2= [];
gdjs.MainCode.GDlevelCompeted_9595bgObjects1= [];
gdjs.MainCode.GDlevelCompeted_9595bgObjects2= [];
gdjs.MainCode.GDlevelCompleted_9595txtObjects1= [];
gdjs.MainCode.GDlevelCompleted_9595txtObjects2= [];
gdjs.MainCode.GDstarsObjects1= [];
gdjs.MainCode.GDstarsObjects2= [];
gdjs.MainCode.GDlevelCompleted_9595ButtonObjects1= [];
gdjs.MainCode.GDlevelCompleted_9595ButtonObjects2= [];
gdjs.MainCode.GDcoinObjects1= [];
gdjs.MainCode.GDcoinObjects2= [];
gdjs.MainCode.GDrewardObjects1= [];
gdjs.MainCode.GDrewardObjects2= [];
gdjs.MainCode.GDoverlayObjects1= [];
gdjs.MainCode.GDoverlayObjects2= [];
gdjs.MainCode.GDlost_9595bgObjects1= [];
gdjs.MainCode.GDlost_9595bgObjects2= [];
gdjs.MainCode.GDlost_9595titleObjects1= [];
gdjs.MainCode.GDlost_9595titleObjects2= [];
gdjs.MainCode.GDlost_9595smileObjects1= [];
gdjs.MainCode.GDlost_9595smileObjects2= [];
gdjs.MainCode.GDlost_9595btObjects1= [];
gdjs.MainCode.GDlost_9595btObjects2= [];
gdjs.MainCode.GDcoin2Objects1= [];
gdjs.MainCode.GDcoin2Objects2= [];
gdjs.MainCode.GDhealthBarObjects1= [];
gdjs.MainCode.GDhealthBarObjects2= [];
gdjs.MainCode.GDenergyBarObjects1= [];
gdjs.MainCode.GDenergyBarObjects2= [];


gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MainCode.GDPlayObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSoundObjects1Objects = Hashtable.newFrom({"Sound": gdjs.MainCode.GDSoundObjects1});
gdjs.MainCode.asyncCallback21651956 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(12).setBoolean(false);
}
gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.idToCallbackMap.set(21651956, gdjs.MainCode.asyncCallback21651956);
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.MainCode.asyncCallback21651956(runtimeScene, asyncObjectsList)), 21651956, asyncObjectsList);
}
}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSoundObjects1Objects = Hashtable.newFrom({"Sound": gdjs.MainCode.GDSoundObjects1});
gdjs.MainCode.asyncCallback21653156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(12).setBoolean(true);
}
gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.idToCallbackMap.set(21653156, gdjs.MainCode.asyncCallback21653156);
gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.MainCode.asyncCallback21653156(runtimeScene, asyncObjectsList)), 21653156, asyncObjectsList);
}
}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.MainCode.GDExitObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDExitObjects2Objects = Hashtable.newFrom({"Exit": gdjs.MainCode.GDExitObjects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayObjects2Objects = Hashtable.newFrom({"Play": gdjs.MainCode.GDPlayObjects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSoundObjects2Objects = Hashtable.newFrom({"Sound": gdjs.MainCode.GDSoundObjects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.MainCode.GDExitObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MainCode.GDPlayObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSoundObjects1Objects = Hashtable.newFrom({"Sound": gdjs.MainCode.GDSoundObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.MainCode.GDExitObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.MainCode.GDExitObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MainCode.GDPlayObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MainCode.GDPlayObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSoundObjects1Objects = Hashtable.newFrom({"Sound": gdjs.MainCode.GDSoundObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSoundObjects1Objects = Hashtable.newFrom({"Sound": gdjs.MainCode.GDSoundObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSoundObjects1Objects = Hashtable.newFrom({"Sound": gdjs.MainCode.GDSoundObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSoundObjects1Objects = Hashtable.newFrom({"Sound": gdjs.MainCode.GDSoundObjects1});
gdjs.MainCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(11).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isMusicOnChannelStopped(runtimeScene, 1);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() + 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(11).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() >= 4);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(11).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(11).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isMusicOnChannelStopped(runtimeScene, 1);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Double-Rainbow-chosic.com_.mp3", 1, false, 20, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(11).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(11).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isMusicOnChannelStopped(runtimeScene, 1);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Late-at-Night(chosic.com).mp3", 1, false, 20, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(11).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(11).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isMusicOnChannelStopped(runtimeScene, 1);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 2);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Hibiscus-chosic.com_.mp3", 1, false, 20, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(11).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(11).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isMusicOnChannelStopped(runtimeScene, 1);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() == 3);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Lights(chosic.com).mp3", 1, false, 20, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(11).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(12).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 5);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(12).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 20);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}
{gdjs.evtTools.storage.clearJSONFile("GameData");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MainCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "666herohero-click-button-131479.mp3", 4, false, 30, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Monitor", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MainCode.GDSoundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(12).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSoundObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "666herohero-click-button-131479.mp3", 4, false, 30, 1);
}

{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MainCode.GDSoundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(12).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSoundObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "666herohero-click-button-131479.mp3", 4, false, 30, 1);
}

{ //Subevents
gdjs.MainCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.MainCode.GDExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDExitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "666herohero-click-button-131479.mp3", 4, false, 30, 1);
}
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{

gdjs.MainCode.GDExitObjects1.length = 0;

gdjs.MainCode.GDPlayObjects1.length = 0;

gdjs.MainCode.GDSoundObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.MainCode.GDExitObjects1_1final.length = 0;
gdjs.MainCode.GDPlayObjects1_1final.length = 0;
gdjs.MainCode.GDSoundObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.MainCode.GDExitObjects2);
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDExitObjects2Objects, runtimeScene, true, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MainCode.GDExitObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MainCode.GDExitObjects1_1final.indexOf(gdjs.MainCode.GDExitObjects2[j]) === -1 )
            gdjs.MainCode.GDExitObjects1_1final.push(gdjs.MainCode.GDExitObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MainCode.GDPlayObjects2);
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayObjects2Objects, runtimeScene, true, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MainCode.GDPlayObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MainCode.GDPlayObjects1_1final.indexOf(gdjs.MainCode.GDPlayObjects2[j]) === -1 )
            gdjs.MainCode.GDPlayObjects1_1final.push(gdjs.MainCode.GDPlayObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MainCode.GDSoundObjects2);
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSoundObjects2Objects, runtimeScene, true, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MainCode.GDSoundObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MainCode.GDSoundObjects1_1final.indexOf(gdjs.MainCode.GDSoundObjects2[j]) === -1 )
            gdjs.MainCode.GDSoundObjects1_1final.push(gdjs.MainCode.GDSoundObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MainCode.GDExitObjects1_1final, gdjs.MainCode.GDExitObjects1);
gdjs.copyArray(gdjs.MainCode.GDPlayObjects1_1final, gdjs.MainCode.GDPlayObjects1);
gdjs.copyArray(gdjs.MainCode.GDSoundObjects1_1final, gdjs.MainCode.GDSoundObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.MainCode.GDExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MainCode.GDPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MainCode.GDSoundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDExitObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSoundObjects1Objects, runtimeScene, true, true);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "auto", null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.MainCode.GDExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDExitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDExitObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDExitObjects1[i].getBehavior("Animation").setAnimationName("hover");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.MainCode.GDExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDExitObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDExitObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDExitObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MainCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MainCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayObjects1[i].getBehavior("Animation").setAnimationName("hover");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MainCode.GDSoundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(12).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSoundObjects1Objects, runtimeScene, true, true);
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDSoundObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSoundObjects1[i].getBehavior("Animation").setAnimationName("sound_idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MainCode.GDSoundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(12).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSoundObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDSoundObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSoundObjects1[i].getBehavior("Animation").setAnimationName("sound_hover");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MainCode.GDSoundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(12).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSoundObjects1Objects, runtimeScene, true, true);
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDSoundObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSoundObjects1[i].getBehavior("Animation").setAnimationName("nosound_idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.MainCode.GDSoundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(12).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSoundObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDSoundObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSoundObjects1[i].getBehavior("Animation").setAnimationName("nosound_hover");
}
}
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
gdjs.MainCode.GDPlayObjects1.length = 0;
gdjs.MainCode.GDPlayObjects2.length = 0;
gdjs.MainCode.GDExitObjects1.length = 0;
gdjs.MainCode.GDExitObjects2.length = 0;
gdjs.MainCode.GDSoundObjects1.length = 0;
gdjs.MainCode.GDSoundObjects2.length = 0;
gdjs.MainCode.GDpc_9595frameObjects1.length = 0;
gdjs.MainCode.GDpc_9595frameObjects2.length = 0;
gdjs.MainCode.GDClose_9595ButtonObjects1.length = 0;
gdjs.MainCode.GDClose_9595ButtonObjects2.length = 0;
gdjs.MainCode.GDlevel_9595barObjects1.length = 0;
gdjs.MainCode.GDlevel_9595barObjects2.length = 0;
gdjs.MainCode.GDenergy_9595iconObjects1.length = 0;
gdjs.MainCode.GDenergy_9595iconObjects2.length = 0;
gdjs.MainCode.GDhealth_9595iconObjects1.length = 0;
gdjs.MainCode.GDhealth_9595iconObjects2.length = 0;
gdjs.MainCode.GDglass_9595effectObjects1.length = 0;
gdjs.MainCode.GDglass_9595effectObjects2.length = 0;
gdjs.MainCode.GDenergy_9595fillerObjects1.length = 0;
gdjs.MainCode.GDenergy_9595fillerObjects2.length = 0;
gdjs.MainCode.GDhealth_9595fillerObjects1.length = 0;
gdjs.MainCode.GDhealth_9595fillerObjects2.length = 0;
gdjs.MainCode.GDbar_9595bgObjects1.length = 0;
gdjs.MainCode.GDbar_9595bgObjects2.length = 0;
gdjs.MainCode.GDtime_9595iconObjects1.length = 0;
gdjs.MainCode.GDtime_9595iconObjects2.length = 0;
gdjs.MainCode.GDtime_9595fillerObjects1.length = 0;
gdjs.MainCode.GDtime_9595fillerObjects2.length = 0;
gdjs.MainCode.GDtimebar_9595bgObjects1.length = 0;
gdjs.MainCode.GDtimebar_9595bgObjects2.length = 0;
gdjs.MainCode.GDlevelCompeted_9595bgObjects1.length = 0;
gdjs.MainCode.GDlevelCompeted_9595bgObjects2.length = 0;
gdjs.MainCode.GDlevelCompleted_9595txtObjects1.length = 0;
gdjs.MainCode.GDlevelCompleted_9595txtObjects2.length = 0;
gdjs.MainCode.GDstarsObjects1.length = 0;
gdjs.MainCode.GDstarsObjects2.length = 0;
gdjs.MainCode.GDlevelCompleted_9595ButtonObjects1.length = 0;
gdjs.MainCode.GDlevelCompleted_9595ButtonObjects2.length = 0;
gdjs.MainCode.GDcoinObjects1.length = 0;
gdjs.MainCode.GDcoinObjects2.length = 0;
gdjs.MainCode.GDrewardObjects1.length = 0;
gdjs.MainCode.GDrewardObjects2.length = 0;
gdjs.MainCode.GDoverlayObjects1.length = 0;
gdjs.MainCode.GDoverlayObjects2.length = 0;
gdjs.MainCode.GDlost_9595bgObjects1.length = 0;
gdjs.MainCode.GDlost_9595bgObjects2.length = 0;
gdjs.MainCode.GDlost_9595titleObjects1.length = 0;
gdjs.MainCode.GDlost_9595titleObjects2.length = 0;
gdjs.MainCode.GDlost_9595smileObjects1.length = 0;
gdjs.MainCode.GDlost_9595smileObjects2.length = 0;
gdjs.MainCode.GDlost_9595btObjects1.length = 0;
gdjs.MainCode.GDlost_9595btObjects2.length = 0;
gdjs.MainCode.GDcoin2Objects1.length = 0;
gdjs.MainCode.GDcoin2Objects2.length = 0;
gdjs.MainCode.GDhealthBarObjects1.length = 0;
gdjs.MainCode.GDhealthBarObjects2.length = 0;
gdjs.MainCode.GDenergyBarObjects1.length = 0;
gdjs.MainCode.GDenergyBarObjects2.length = 0;

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
gdjs.MainCode.GDPlayObjects1.length = 0;
gdjs.MainCode.GDPlayObjects2.length = 0;
gdjs.MainCode.GDExitObjects1.length = 0;
gdjs.MainCode.GDExitObjects2.length = 0;
gdjs.MainCode.GDSoundObjects1.length = 0;
gdjs.MainCode.GDSoundObjects2.length = 0;
gdjs.MainCode.GDpc_9595frameObjects1.length = 0;
gdjs.MainCode.GDpc_9595frameObjects2.length = 0;
gdjs.MainCode.GDClose_9595ButtonObjects1.length = 0;
gdjs.MainCode.GDClose_9595ButtonObjects2.length = 0;
gdjs.MainCode.GDlevel_9595barObjects1.length = 0;
gdjs.MainCode.GDlevel_9595barObjects2.length = 0;
gdjs.MainCode.GDenergy_9595iconObjects1.length = 0;
gdjs.MainCode.GDenergy_9595iconObjects2.length = 0;
gdjs.MainCode.GDhealth_9595iconObjects1.length = 0;
gdjs.MainCode.GDhealth_9595iconObjects2.length = 0;
gdjs.MainCode.GDglass_9595effectObjects1.length = 0;
gdjs.MainCode.GDglass_9595effectObjects2.length = 0;
gdjs.MainCode.GDenergy_9595fillerObjects1.length = 0;
gdjs.MainCode.GDenergy_9595fillerObjects2.length = 0;
gdjs.MainCode.GDhealth_9595fillerObjects1.length = 0;
gdjs.MainCode.GDhealth_9595fillerObjects2.length = 0;
gdjs.MainCode.GDbar_9595bgObjects1.length = 0;
gdjs.MainCode.GDbar_9595bgObjects2.length = 0;
gdjs.MainCode.GDtime_9595iconObjects1.length = 0;
gdjs.MainCode.GDtime_9595iconObjects2.length = 0;
gdjs.MainCode.GDtime_9595fillerObjects1.length = 0;
gdjs.MainCode.GDtime_9595fillerObjects2.length = 0;
gdjs.MainCode.GDtimebar_9595bgObjects1.length = 0;
gdjs.MainCode.GDtimebar_9595bgObjects2.length = 0;
gdjs.MainCode.GDlevelCompeted_9595bgObjects1.length = 0;
gdjs.MainCode.GDlevelCompeted_9595bgObjects2.length = 0;
gdjs.MainCode.GDlevelCompleted_9595txtObjects1.length = 0;
gdjs.MainCode.GDlevelCompleted_9595txtObjects2.length = 0;
gdjs.MainCode.GDstarsObjects1.length = 0;
gdjs.MainCode.GDstarsObjects2.length = 0;
gdjs.MainCode.GDlevelCompleted_9595ButtonObjects1.length = 0;
gdjs.MainCode.GDlevelCompleted_9595ButtonObjects2.length = 0;
gdjs.MainCode.GDcoinObjects1.length = 0;
gdjs.MainCode.GDcoinObjects2.length = 0;
gdjs.MainCode.GDrewardObjects1.length = 0;
gdjs.MainCode.GDrewardObjects2.length = 0;
gdjs.MainCode.GDoverlayObjects1.length = 0;
gdjs.MainCode.GDoverlayObjects2.length = 0;
gdjs.MainCode.GDlost_9595bgObjects1.length = 0;
gdjs.MainCode.GDlost_9595bgObjects2.length = 0;
gdjs.MainCode.GDlost_9595titleObjects1.length = 0;
gdjs.MainCode.GDlost_9595titleObjects2.length = 0;
gdjs.MainCode.GDlost_9595smileObjects1.length = 0;
gdjs.MainCode.GDlost_9595smileObjects2.length = 0;
gdjs.MainCode.GDlost_9595btObjects1.length = 0;
gdjs.MainCode.GDlost_9595btObjects2.length = 0;
gdjs.MainCode.GDcoin2Objects1.length = 0;
gdjs.MainCode.GDcoin2Objects2.length = 0;
gdjs.MainCode.GDhealthBarObjects1.length = 0;
gdjs.MainCode.GDhealthBarObjects2.length = 0;
gdjs.MainCode.GDenergyBarObjects1.length = 0;
gdjs.MainCode.GDenergyBarObjects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
