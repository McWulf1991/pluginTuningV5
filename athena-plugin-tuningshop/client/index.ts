import * as alt from 'alt-client';
import * as AthenaClient from '@AthenaClient/api';
import * as native from 'natives';
import ViewModel from '@AthenaClient/models/viewModel';
import { Tuner_View_Events } from '../shared/events';
import { iTunerSync } from '../shared/interfaces';
import { CinematicCam } from './utility/cinematic';
import { isAnyMenuOpen } from '@AthenaClient/webview';
import { KEY_BINDS_TUNER } from '../shared/const';


let syncData: iTunerSync;

// You should change this to match your Vue Template's ComponentName.
const PAGE_NAME = 'Tuner';

class InternalFunctions implements ViewModel {
    static async init() {
        AthenaClient.systems.hotkeys.add({
            key: KEY_BINDS_TUNER.INTERACT,
            description: 'Tune your vehicle',
            modifier: 'shift',
            identifier: 'open-tuner-for-vehicle',
            keyDown: InternalFunctions.open,
            
        })
    }
    static async open(_syncData: iTunerSync) {
        // Check if any other menu is open before opening this.
        if (isAnyMenuOpen()) {
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
        getModsCountType: number ,
    ) {
        InternalFunctions.update(spoiler, fbumper, rbumper, sskirt, exhaust, frame, grille, hood, lwing, rwing, roof, engine, brakes, trans, horns, suspension, armor, turbo, xenon, plateh, platev, trimdesign, ornaments, dialdesign, doorint, seats, steeringw, shiftlever, plaques, hydraulics, engineb, airfilter, strutbar, archcover, antenna, exteriorp, tank, door, wroh, stickers, plate, windowtint, wheelcamber, wheelheight, wheelrimradius, wheeltrackwidth, wheeltyreradius, wheeltyrewidth, wheeltype, wheelid, getModsCountType);
        alt.emitServer(Tuner_View_Events.PURCHASE, spoiler, fbumper, rbumper, sskirt, exhaust, frame, grille, hood, lwing, rwing, roof, engine, brakes, trans, horns, suspension, armor, turbo, xenon, plateh, platev, trimdesign, ornaments, dialdesign, doorint, seats, steeringw, shiftlever, plaques, hydraulics, engineb, airfilter, strutbar, archcover, antenna, exteriorp, tank, door, wroh, stickers, plate, windowtint, wheelcamber, wheelheight, wheelrimradius, wheeltrackwidth, wheeltyreradius, wheeltyrewidth, wheeltype, wheelid, getModsCountType);
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
        wroh: number ,
        stickers: number ,
        plate: number ,
        windowtint: number ,
        wheelcamber: number ,
        wheelheight: number ,
        wheelrimradius: number ,
        wheeltrackwidth: number ,
        wheeltyreradius: number ,
        wheeltyrewidth: number ,
        wheeltype: number ,
        wheelid: number ,
        getModsCountType: number ,
    ) {
        if (!alt.Player.local.vehicle) {
            return;
        }

        if (wheelcamber) {
            alt.on("streamSyncedMetaChange", (entity, key, value, oldValue) => {
                // Checking conditions if we should apply the modifications
                if (key !== "wheelModCamber") return;
                if (!(entity instanceof alt.Vehicle)) return;
                modWheels(entity, value);
            });
            
            function modWheels(vehicle, data) {
                vehicle = alt.Player.local.vehicle;
                data = wheelcamber;
                for (let i = 0; i <= vehicle.wheelsCount; i++) {
                    vehicle.setWheelCamber(i, data);
                }

                vehicle.setWheelCamber(0, wheelcamber);
                vehicle.setWheelCamber(1, wheelcamber);
                vehicle.setWheelCamber(2, wheelcamber);
                vehicle.setWheelCamber(3, wheelcamber);
            }
        }

        if (wheelheight) {
            alt.on("streamSyncedMetaChange", (entity, key, value, oldValue) => {
                // Checking conditions if we should apply the modifications
                if (key !== "wheelModHeight") return;
                if (!(entity instanceof alt.Vehicle)) return;
                modWheels(entity, value);
            });
            
            function modWheels(vehicle, data) {
                vehicle = alt.Player.local.vehicle;
                data = wheelheight;
                for (let i = 0; i <= vehicle.wheelsCount; i++) {
                    vehicle.setWheelHeight(i, data);
                }

                vehicle.setWheelHeight(0, wheelheight);
                vehicle.setWheelHeight(1, wheelheight);
                vehicle.setWheelHeight(2, wheelheight);
                vehicle.setWheelHeight(3, wheelheight);
            }
        }

        if (wheelrimradius) {
            alt.on("streamSyncedMetaChange", (entity, key, value, oldValue) => {
                // Checking conditions if we should apply the modifications
                if (key !== "wheelModRimRadius") return;
                if (!(entity instanceof alt.Vehicle)) return;
                modWheels(entity, value);
            });
            
            function modWheels(vehicle, data) {
                vehicle = alt.Player.local.vehicle;
                data = wheelrimradius;
                for (let i = 0; i <= vehicle.wheelsCount; i++) {
                    vehicle.setWheelRimRadius(i, data);
                }

                vehicle.setWheelRimRadius(0, wheelrimradius);
                vehicle.setWheelRimRadius(1, wheelrimradius);
                vehicle.setWheelRimRadius(2, wheelrimradius);
                vehicle.setWheelRimRadius(3, wheelrimradius);
            }
        }

        if (wheeltrackwidth) {
            alt.on("streamSyncedMetaChange", (entity, key, value, oldValue) => {
                // Checking conditions if we should apply the modifications
                if (key !== "wheelModTrackWidth") return;
                if (!(entity instanceof alt.Vehicle)) return;
                modWheels(entity, value);
            });
            
            function modWheels(vehicle, data) {
                vehicle = alt.Player.local.vehicle;
                data = wheeltrackwidth;
                for (let i = 0; i <= vehicle.wheelsCount; i++) {
                    vehicle.setWheelTrackWidth(i, data);
                }

                vehicle.setWheelTrackWidth(0, wheeltrackwidth);
                vehicle.setWheelTrackWidth(1, wheeltrackwidth);
                vehicle.setWheelTrackWidth(2, wheeltrackwidth);
                vehicle.setWheelTrackWidth(3, wheeltrackwidth);
            }
        }

        if (wheeltyreradius) {
            alt.on("streamSyncedMetaChange", (entity, key, value, oldValue) => {
                // Checking conditions if we should apply the modifications
                if (key !== "wheelModTyreRadius") return;
                if (!(entity instanceof alt.Vehicle)) return;
                modWheels(entity, value);
            });
            
            function modWheels(vehicle, data) {
                vehicle = alt.Player.local.vehicle;
                data = wheeltyreradius;
                for (let i = 0; i <= vehicle.wheelsCount; i++) {
                    vehicle.setWheelTyreRadius(i, data);
                }

                vehicle.setWheelTyreRadius(0, wheeltyreradius);
                vehicle.setWheelTyreRadius(1, wheeltyreradius);
                vehicle.setWheelTyreRadius(2, wheeltyreradius);
                vehicle.setWheelTyreRadius(3, wheeltyreradius);
            }
        }

        if (wheeltyrewidth) {
            alt.on("streamSyncedMetaChange", (entity, key, value, oldValue) => {
                // Checking conditions if we should apply the modifications
                if (key !== "wheelModTyreWidth") return;
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

                vehicle.setWheelTyreWidth(0, wheeltyrewidth);
                vehicle.setWheelTyreWidth(1, wheeltyrewidth);
                vehicle.setWheelTyreWidth(2, wheeltyrewidth);
                vehicle.setWheelTyreWidth(3, wheeltyrewidth);
            }
        }

        alt.emitServer(Tuner_View_Events.PREVIEW_TUNING, spoiler, fbumper, rbumper, sskirt, exhaust, frame, grille, hood, lwing, rwing, roof, engine, brakes, trans, horns, suspension, armor, turbo, xenon, plateh, platev, trimdesign, ornaments, dialdesign, doorint, seats, steeringw, shiftlever, plaques, hydraulics, engineb, airfilter, strutbar, archcover, antenna, exteriorp, tank, door, wroh, stickers, plate, windowtint, wheelcamber, wheelheight, wheelrimradius, wheeltrackwidth, wheeltyreradius, wheeltyrewidth, wheeltype, wheelid, getModsCountType);
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

alt.onServer(Tuner_View_Events.OPEN, InternalFunctions.init);