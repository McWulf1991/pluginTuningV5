import * as alt from 'alt-client';
import * as AthenaClient from '@AthenaClient/api';
import * as native from 'natives';
import ViewModel from '@AthenaClient/models/viewModel';
import { Tuner_View_Events } from '../shared/events';
import { iTunerSync } from '../shared/interfaces';
import { CinematicCam } from './utility/cinematic';
import { isAnyMenuOpen } from '@AthenaClient/webview';
import { SYSTEM_EVENTS } from '@AthenaShared/enums/system';


let syncData: iTunerSync;

// You should change this to match your Vue Template's ComponentName.
const PAGE_NAME = 'Tuner';

class InternalFunctions implements ViewModel {
    static async open(_syncData: iTunerSync) {
        // Check if any other menu is open before opening this.
        alt.log('test')
        if (isAnyMenuOpen()) {
            return;
        }

        if(alt.Player.local.vehicle.engineOn !== false) {
            return;
        }

        // Data to sync in the interface
        syncData = _syncData;

        // Must always be called first if you want to hide HUD.
        await AthenaClient.webview.setOverlaysVisible(false);

        // This is where we bind our received events from the WebView to
        // the functions in our WebView.
        const view = await AthenaClient.webview.get();
        view.on(`${PAGE_NAME}:Ready`, InternalFunctions.ready);
        view.on(`${PAGE_NAME}:Close`, InternalFunctions.close);
        view.on(`${PAGE_NAME}:Update`, InternalFunctions.update);
        view.on(`${PAGE_NAME}:Purchase`, InternalFunctions.purchase);
        view.on(`${PAGE_NAME}:NextCam`, () => {
            CinematicCam.next(false);
        });

        // This is where we open the page and show the cursor.
        AthenaClient.webview.openPages([PAGE_NAME]);
        AthenaClient.webview.focus();
        AthenaClient.webview.showCursor(true);

        // Turn off game controls, hide the hud.
        alt.toggleGameControls(false);

        // Let the rest of the script know this menu is open.
        alt.Player.local.isMenuOpen = true;

        const points = InternalFunctions.generateCameraPoints();

        // Clear Cinematic Camera
        CinematicCam.destroy();

        // Add Camera Ponts to Cinematic Cam List
        for (let i = 0; i < points.length; i++) {
            CinematicCam.addNode({
                pos: points[i],
                fov: 90,
                easeTime: 250,
                positionToTrack: alt.Player.local.vehicle.pos,
            });
        }

        CinematicCam.next(false);
    }

    static async close() {
        alt.toggleGameControls(true);
        AthenaClient.webview.setOverlaysVisible(true);

        // Turn off bound events.
        // If we do not turn them off we get duplicate event behavior.
        // Also will cause a memory leak if you do not turn them off.
        const view = await AthenaClient.webview.get();
        view.off(`${PAGE_NAME}:Ready`, InternalFunctions.ready);
        view.off(`${PAGE_NAME}:Close`, InternalFunctions.close);
        view.off(`${PAGE_NAME}:Update`, InternalFunctions.update);
        view.off(`${PAGE_NAME}:Purchase`, InternalFunctions.purchase);

        // Close the page.
        AthenaClient.webview.closePages([PAGE_NAME]);

        // Turn on game controls, show the hud.
        AthenaClient.webview.unfocus();
        AthenaClient.webview.showCursor(false);

        // Let the rest of the script know this menu is closed.
        alt.Player.local.isMenuOpen = false;

        alt.emitServer(Tuner_View_Events.CLOSE);

        CinematicCam.destroy();
    }

    /**
     * You should call this from the WebView.
     * What this will let you do is define local data in the client.
     *
     * Then when the WebView is ready to receieve that data we can send it.
     * The flow is:
     *
     * Send From WebView -> Get the Data Here -> Send to the WebView
     *
     * @static
     * @memberof TemplateView
     */
    static async ready() {
        const view = await AthenaClient.webview.get();
        view.emit(`${PAGE_NAME}:Ready`, syncData);
    }

    static async purchase(
        spoiler: number ,
        fbumper: number ,
        rbumper: number ,
        sskirt: number ,
        exhaust: number ,
        frame: number ,
        grille: number ,
        hood: number ,
        lwing: number ,
        rwing: number ,
        roof: number ,
        engine: number ,
        brakes: number ,
        trans: number ,
        horns: number ,
        suspension: number ,
        armor: number ,
        turbo: number ,
        xenon: number ,
        plateh: number ,
        platev: number ,
        trimdesign: number ,
        ornaments: number ,
        dialdesign: number ,
        doorint: number ,
        seats: number ,
        steeringw: number ,
        shiftlever: number ,
        plaques: number ,
        hydraulics: number ,
        engineb: number ,
        airfilter: number ,
        strutbar: number ,
        archcover: number ,
        antenna: number ,
        exteriorp: number ,
        tank: number ,
        door: number ,
        wroh: number  ,
        stickers: number ,
        plate: number ,
        windowtint: number ,
        wheelcamber: number,
        wheelheight: number,
        wheelrimradius: number,
        wheeltrackwidth: number,
        wheeltyreradius: number,
        wheeltyrewidth: number,
        wheeltype: number,
        wheelid: number,
    ) {
        InternalFunctions.update(spoiler, fbumper, rbumper, sskirt, exhaust, frame, grille, hood, lwing, rwing, roof, engine, brakes, trans, horns, suspension, armor, turbo, xenon, plateh, platev, trimdesign, ornaments, dialdesign, doorint, seats, steeringw, shiftlever, plaques, hydraulics, engineb, airfilter, strutbar, archcover, antenna, exteriorp, tank, door, wroh, stickers, plate, windowtint, wheelcamber, wheelheight, wheelrimradius, wheeltrackwidth, wheeltyreradius, wheeltyrewidth, wheeltype, wheelid);
        alt.emitServer(Tuner_View_Events.PURCHASE, spoiler, fbumper, rbumper, sskirt, exhaust, frame, grille, hood, lwing, rwing, roof, engine, brakes, trans, horns, suspension, armor, turbo, xenon, plateh, platev, trimdesign, ornaments, dialdesign, doorint, seats, steeringw, shiftlever, plaques, hydraulics, engineb, airfilter, strutbar, archcover, antenna, exteriorp, tank, door, wroh, stickers, plate, windowtint, wheelcamber, wheelheight, wheelrimradius, wheeltrackwidth, wheeltyreradius, wheeltyrewidth, wheeltype, wheelid);
        InternalFunctions.close();
    }

    static async update(
        spoiler: number ,
        fbumper: number ,
        rbumper: number ,
        sskirt: number ,
        exhaust: number ,
        frame: number ,
        grille: number ,
        hood: number ,
        lwing: number ,
        rwing: number ,
        roof: number ,
        engine: number ,
        brakes: number ,
        trans: number ,
        horns: number ,
        suspension: number ,
        armor: number ,
        turbo: number ,
        xenon: number ,
        plateh: number ,
        platev: number ,
        trimdesign: number ,
        ornaments: number ,
        dialdesign: number ,
        doorint: number ,
        seats: number ,
        steeringw: number ,
        shiftlever: number ,
        plaques: number ,
        hydraulics: number ,
        engineb: number ,
        airfilter: number ,
        strutbar: number ,
        archcover: number ,
        antenna: number ,
        exteriorp: number ,
        tank: number ,
        door: number ,
        wroh: number  ,
        stickers: number ,
        plate: number ,
        windowtint: number ,
        wheelcamber: number,
        wheelheight: number,
        wheelrimradius: number,
        wheeltrackwidth: number,
        wheeltyreradius: number,
        wheeltyrewidth: number,
        wheeltype: number,
        wheelid: number,
    ) {
        if (!alt.Player.local.vehicle) {
            return;
        }

        if (wheelcamber) {
            
            alt.on("streamSyncedMetaChange", (entity, key, value, oldValue) => {
                // Checking conditions if we should apply the modifications
                if (key !== "wheelMod") return;
                if (!(entity instanceof alt.Vehicle)) return;
                modWheels(entity, value);
            });
            
            function modWheels(vehicle, data) {
                vehicle = alt.Player.local.vehicle;
                data = wheelcamber;
                for (let i = 0; i <= vehicle.wheelsCount; i++) {
                    vehicle.setWheelCamber(i, data);
                }
            }
        }

        if (wheelheight) {
            
            alt.on("streamSyncedMetaChange", (entity, key, value, oldValue) => {
                // Checking conditions if we should apply the modifications
                if (key !== "wheelMod") return;
                if (!(entity instanceof alt.Vehicle)) return;
                modWheels(entity, value);
            });
            
            function modWheels(vehicle, data) {
                vehicle = alt.Player.local.vehicle;
                data =wheelheight
                for (let i = 0; i <= vehicle.wheelsCount; i++) {
                    vehicle.setWheelHeight(i, data);
                }
            }
        }

        if (wheelrimradius) {
            
            alt.on("streamSyncedMetaChange", (entity, key, value, oldValue) => {
                // Checking conditions if we should apply the modifications
                if (key !== "wheelMod") return;
                if (!(entity instanceof alt.Vehicle)) return;
                modWheels(entity, value);
            });
            
            function modWheels(vehicle, data) {
                vehicle = alt.Player.local.vehicle;
                data = wheelrimradius
                for (let i = 0; i <= vehicle.wheelsCount; i++) {
                    vehicle.setWheelRimRadius(i, data);
                }
            }
        }

        if (wheeltrackwidth) {
            
            alt.on("streamSyncedMetaChange", (entity, key, value, oldValue) => {
                // Checking conditions if we should apply the modifications
                if (key !== "wheelMod") return;
                if (!(entity instanceof alt.Vehicle)) return;
                modWheels(entity, value);
            });
            
            function modWheels(vehicle, data) {
                vehicle = alt.Player.local.vehicle;
                data = wheeltrackwidth
                for (let i = 0; i <= vehicle.wheelsCount; i++) {
                    vehicle.setWheelCamber(i, data);
                }
            }
        }

        if (wheeltyreradius) {
            
            alt.on("streamSyncedMetaChange", (entity, key, value, oldValue) => {
                // Checking conditions if we should apply the modifications
                if (key !== "wheelMod") return;
                if (!(entity instanceof alt.Vehicle)) return;
                modWheels(entity, value);
            });
            
            function modWheels(vehicle, data) {
                vehicle = alt.Player.local.vehicle;
                data = wheeltyreradius
                for (let i = 0; i <= vehicle.wheelsCount; i++) {
                    vehicle.setWheelTyreRadius(i, data);
                }
            }
        }

        if (wheeltyrewidth) {
            
            alt.on("streamSyncedMetaChange", (entity, key, value, oldValue) => {
                // Checking conditions if we should apply the modifications
                if (key !== "wheelMod") return;
                if (!(entity instanceof alt.Vehicle)) return;
                modWheels(entity, value);
            });
            
            function modWheels(vehicle, data) {
                vehicle = alt.Player.local.vehicle;
                data = wheeltyrewidth;
                // Going to use a loop as we need to apply the setters to all wheels
                // This can be changed to e.g. only modify the front or back wheels
                for (let i = 0; i <= vehicle.wheelsCount; i++) {
                    vehicle.setWheelTyreWidth(i, data);
                }
            }
        }

        alt.emitServer(Tuner_View_Events.PREVIEW_TUNING, spoiler, fbumper, rbumper, sskirt, exhaust, frame, grille, hood, lwing, rwing, roof, engine, brakes, trans, horns, suspension, armor, turbo, xenon, plateh, platev, trimdesign, ornaments, dialdesign, doorint, seats, steeringw, shiftlever, plaques, hydraulics, engineb, airfilter, strutbar, archcover, antenna, exteriorp, tank, door, wroh, stickers, plate, windowtint, wheelcamber, wheelheight, wheelrimradius, wheeltrackwidth, wheeltyreradius, wheeltyrewidth, wheeltype, wheelid);
    }

    static generateCameraPoints(): Array<alt.IVector3> {
        const cameraPoints = [];
        const zPos = alt.Player.local.pos.z;

        const [_, min, max] = native.getModelDimensions(alt.Player.local.vehicle.model);
        const offsetCalculations = [];
        const additional = 0.5;

        // Top Left
        offsetCalculations.push({
            x: min.x - additional,
            y: max.y + additional,
            z: zPos,
        });

        // Top Middle
        offsetCalculations.push({
            x: 0,
            y: max.y + additional,
            z: zPos,
        });

        // Top Right
        offsetCalculations.push({
            x: max.x + additional,
            y: max.y + additional,
            z: zPos,
        });

        // Middle Right
        offsetCalculations.push({
            x: max.x + additional,
            y: 0,
            z: zPos,
        });

        // Back Right
        offsetCalculations.push({
            x: max.x + additional,
            y: min.y - additional,
            z: zPos,
        });

        // Middle Center
        offsetCalculations.push({
            x: 0,
            y: min.y - additional,
            z: zPos,
        });

        // Bottom Left
        offsetCalculations.push({
            x: min.x - additional,
            y: min.y - additional,
            z: zPos,
        });

        // Middle Left
        offsetCalculations.push({
            x: min.x - additional,
            y: 0,
            z: zPos,
        });

        for (let i = 0; i < offsetCalculations.length; i++) {
            const calc = native.getOffsetFromEntityInWorldCoords(
                alt.Player.local.vehicle.scriptID,
                offsetCalculations[i].x,
                offsetCalculations[i].y,
                1,
            );

            cameraPoints.push(calc);
        }

        return cameraPoints;
    }
}

alt.onServer(Tuner_View_Events.OPEN, InternalFunctions.open);