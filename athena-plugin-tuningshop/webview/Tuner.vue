<template>
    <div class="tuning-shop-wrapper pl-2">
        <div class="stack">
            <div class="split split-full space-between mt-2">
                <Button class="mr-1 fill-full-width" :color="pageIndex === 0 ? 'orange' : 'blue'" @click="setPage(0)">
                    <!-- {{ locale.STANCE }} -->
                    <Icon :shadow="false" class="stat-icon fill-full-width" icon="icon-car_repair" :size="20" />
                </Button>
                <Button class="mr-1 fill-full-width" :color="pageIndex === 1 ? 'orange' : 'blue'" @click="setPage(1)">
                    <!-- {{ locale.OPTIC }} -->
                    <Icon :shadow="false" class="stat-icon fill-full-width" icon="icon-auto_fix_high" :size="20" />
                </Button>
                <Button class="mr-1 fill-full-width" :color="pageIndex === 2 ? 'orange' : 'blue'" @click="setPage(2)">
                    <!-- {{ locale.INTERIEUR }} -->
                    <Icon :shadow="false" class="stat-icon fill-full-width" icon="icon-dripping-star" :size="20" />
                </Button>
                <Button class="mr-1 fill-full-width" :color="pageIndex === 3 ? 'orange' : 'blue'" @click="setPage(3)">
                    <!-- {{ locale.PERFORMANCE }} -->
                    <Icon :shadow="false" class="stat-icon fill-full-width" icon="icon-gears" :size="20" />
                </Button>
                <Button class="mr-1 fill-full-width" :color="pageIndex === 4 ? 'orange' : 'blue'" @click="setPage(4)">
                    <!-- {{ locale.WHEELS }} -->
                    <Icon :shadow="false" class="stat-icon fill-full-width" icon="icon-cartwheel" :size="20" />
                </Button>
            </div>
            <div class="page-filler">
                <component
                    :is="pages[pageIndex]"
                    class="fade-in"
                    :key="pageIndex"
                    v-bind:locale="locale"
                    v-bind:data="data"
                    @set-wheelcamber="wheelcamber"
                    @set-wheelheight="wheelheight"
                    @set-wheelrimradius="wheelrimradius"
                    @set-wheeltrackwidth="wheeltrackwidth"
                    @set-wheeltyreradius="wheeltyreradius"
                    @set-wheeltyrewidth="wheeltyrewidth"
                    @set-spoiler="spoiler"
                    @set-fbumper="fbumper"
                    @set-rbumper="rbumper"
                    @set-sskirt="sskirt"
                    @set-exhaust="exhaust"
                    @set-frame="frame"
                    @set-grille="grille"
                    @set-hood="hood"
                    @set-lwing="lwing"
                    @set-rwing="rwing"
                    @set-roof="roof"
                    @set-engine="engine"
                    @set-brakes="brakes"
                    @set-trans="trans"
                    @set-horns="horns"
                    @set-suspension="suspension"
                    @set-armor="armor"
                    @set-turbo="turbo"
                    @set-xenon="xenon"
                    @set-fwheels="fwheels"
                    @set-bwheels="bwheels"
                    @set-plateh="plateh"
                    @set-platev="platev"
                    @set-trimdesign="trimdesign"
                    @set-ornaments="ornaments"
                    @set-dialdesign="dialdesign"
                    @set-doorint="doorint"
                    @set-seats="seats"
                    @set-steeringw="steeringw"
                    @set-shiftlever="shiftlever"
                    @set-plaques="plaques"
                    @set-hydraulics="hydraulics"
                    @set-engineb="engineb"
                    @set-airfilter="airfilter"
                    @set-strutbar="strutbar"
                    @set-archcover="archcover"
                    @set-antenna="antenna"
                    @set-exteriorp="exteriorp"
                    @set-tank="tank"
                    @set-door="door"
                    @set-wroh="wroh"
                    @set-stickers="stickers"
                    @set-plate="plate"
                    @set-windowtint="windowtint"
                    @set-wheeltype="wheeltype"
                    @set-wheelid="wheelid"
                    @set-getModsCountType="getModsCountType"
                    @update-wheelcamber="updateCamber"
                    @update-wheelheight="updateHeight"
                    @update-wheelrimradius="updateRimRadius"
                    @update-wheeltrackwidth="updateTrackWidth"
                    @update-wheeltyreradius="updateTyreRadius"
                    @update-wheeltyrewidth="updateTyreWidth"
                    @update-spoiler="updateSpoiler"
                    @update-fbumper="updateFbumper"
                    @update-rbumper="updateRbumper"
                    @update-sskirt="updateSskirt"
                    @update-exhaust="updateExhaust"
                    @update-frame="updateFrame"
                    @update-grille="updateGrille"
                    @update-hood="updateHood"
                    @update-lwing="updateLwing"
                    @update-rwing="updateRwing"
                    @update-roof="updateRoof"
                    @update-engine="updateEngine"
                    @update-brakes="updateBrakes"
                    @update-trans="updateTrans"
                    @update-horns="updateHorns"
                    @update-suspension="updateSuspension"
                    @update-armor="updateArmor"
                    @update-turbo="updateTurbo"
                    @update-xenon="updateXenon"
                    @update-fwheels="updateFwheels"
                    @update-bwheels="updateBwheels"
                    @update-plateh="updatePlateh"
                    @update-platev="updatePlatev"
                    @update-trimdesign="updateTrimdesign"
                    @update-ornaments="updateOrnaments"
                    @update-dialdesign="updateDialdesign"
                    @update-doorint="updateDoorint"
                    @update-seats="updateSeats"
                    @update-steeringw="updateSteeringw"
                    @update-shiftlever="updateShiftlever"
                    @update-plaques="updatePlaques"
                    @update-hydraulics="updateHydraulics"
                    @update-engineb="updateEngineb"
                    @update-airfilter="updateAirfilter"
                    @update-strutbar="updateStrutbar"
                    @update-archcover="updateArchcover"
                    @update-antenna="updateAntenna"
                    @update-exteriorp="updateExteriorp"
                    @update-tank="updateTank"
                    @update-door="updateDoor"
                    @update-wroh="updateWroh"
                    @update-stickers="updateStickers"
                    @update-plate="updatePlate"
                    @update-windowtint="updateWindowTint"
                    @update-wheeltype="updateWheelType"
                    @update-wheelid="updateWheelId"
                    @update-getModsCountType="updateModsCountType"
                ></component>
            </div>
            <div class="split">
                <Button color="red" class="mt-4 mr-2 fill-full-width" @click="exit">
                    <!-- {{ locale.EXIT }} -->
                    <Icon :shadow="false" class="stat-icon2 mr-2 fill-full-width" icon="icon-exit" :size="25" />
                </Button>
                <Button color="yellow" class="mt-4 mr-2 fill-full-width" @click="nextCam">
                    <!-- {{ locale.CAMERA }} -->
                    <Icon :shadow="false" class="stat-icon2 mr-2 fill-full-width" icon="icon-camera" :size="25" />
                </Button>
                <Button color="green" class="mt-4 mr-2 fill-full-width" @click="purchase">
                    <!-- {{ locale.BUY }} -->
                    <Icon :shadow="false" class="stat-icon2 mr-2 fill-full-width" icon="icon-pay-money" :size="25" />
                </Button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';
import { iTunerSync } from '../shared/interfaces';
import { TUNER_LOCALE } from '../shared/locales';

const ComponentName = 'Tuner';
export default defineComponent({
    name: ComponentName,
    components: {
        // Global Components
        Button: defineAsyncComponent(() => import('@components/Button.vue')),
        Frame: defineAsyncComponent(() => import('@components/Frame.vue')),
        Icon: defineAsyncComponent(() => import('@components/Icon.vue')),
        Input: defineAsyncComponent(() => import('@components/Input.vue')),
        Modal: defineAsyncComponent(() => import('@components/Modal.vue')),
        Module: defineAsyncComponent(() => import('@components/Module.vue')),
        RangeInput: defineAsyncComponent(() => import('@components/RangeInput.vue')),
        Toolbar: defineAsyncComponent(() => import('@components/Toolbar.vue')),
        // Local Components
        Interieur: defineAsyncComponent(() => import('./components/Interieur.vue')),
        Optics: defineAsyncComponent(() => import('./components/Optics.vue')),
        Performance: defineAsyncComponent(() => import('./components/Performance.vue')),
        Stance: defineAsyncComponent(() => import('./components/Stance.vue')),
        Wheels: defineAsyncComponent(() => import('./components/Wheels.vue')),
    },
    data() {
        return {
            spoiler: 0,
            fbumper: 0,
            rbumper: 0,
            sskirt: 0,
            exhaust: 0,
            frame: 0,
            grille: 0,
            hood: 0,
            lwing: 0,
            rwing: 0,
            roof: 0,
            engine: 0,
            brakes: 0,
            trans: 0,
            horns: 0,
            suspension: 0,
            armor: 0,
            turbo: 0,
            xenon: 0,
            fwheels: 0,
            bwheels: 0,
            plateh: 0,
            platev: 0,
            trimdesign: 0,
            ornaments: 0,
            dialdesign: 0,
            doorint: 0,
            seats: 0,
            steeringw: 0,
            shiftlever: 0,
            plaques: 0,
            hydraulics: 0,
            engineb: 0,
            airfilter: 0,
            strutbar: 0,
            archcover: 0,
            antenna: 0,
            exteriorp: 0,
            tank: 0,
            door: 0,
            wroh: 0,
            stickers: 0,
            plate: 0,
            windowtint: 0,
            wheelcamber: 0,
            wheelheight: 0,
            wheelrimradius: 0,
            wheeltrackwidth: 0,
            wheeltyreradius: 0,
            wheeltyrewidth: 0,
            wheeltype: 0,
            wheelid: 0,
            getModsCountType: 0,
            pageIndex: 1,
            pages: ['Stance', 'Optics', 'Interieur', 'Performance', 'Wheels'],
            locale: TUNER_LOCALE,
            data: {
                spoiler: 0,
                fbumper: 0,
                rbumper: 0,
                sskirt: 0,
                exhaust: 0,
                frame: 0,
                grille: 0,
                hood: 0,
                lwing: 0,
                rwing: 0,
                roof: 0,
                engine: 0,
                brakes: 0,
                trans: 0,
                horns: 0,
                suspension: 0,
                armor: 0,
                turbo: 0,
                xenon: 0,
                fwheels: 0,
                bwheels: 0,
                plateh: 0,
                platev: 0,
                trimdesign: 0,
                ornaments: 0,
                dialdesign: 0,
                doorint: 0,
                seats: 0,
                steeringw: 0,
                shiftlever: 0,
                plaques: 0,
                hydraulics: 0,
                engineb: 0,
                airfilter: 0,
                strutbar: 0,
                archcover: 0,
                antenna: 0,
                exteriorp: 0,
                tank: 0,
                door: 0,
                wroh: 0,
                stickers: 0,
                plate: 0,
                windowtint: 0,
                wheelcamber: 0,
                wheelheight: 0,
                wheelrimradius: 0,
                wheeltrackwidth: 0,
                wheeltyreradius: 0,
                wheeltyrewidth: 0,
                wheeltype: 0,
                wheelid: 0,
                getModsCountType: 0,
            },
        };
    },
    mounted() {
        if ('alt' in window) {
            alt.on(`${ComponentName}:Ready`, this.syncData);
            alt.emit(`${ComponentName}:Ready`);     }
    },
    unmounted() {
        if ('alt' in window) {
            alt.off(`${ComponentName}:Ready`, this.syncData);
        }
    },
    methods: {
        syncData(syncData: iTunerSync) {
            this.data = syncData;
        },

        setPage(index: number) {
            this.pageIndex = index;
        },

        updateSpoiler(spoiler:number) {
            this.spoiler = spoiler;

            this.update();
        },

        updateFbumper(fbumper:number) {
            this.fbumper = fbumper;

            this.update();
        },

        updateRbumper(rbumper:number) {
            this.rbumper = rbumper;

            this.update();
        },

        updateSskirt(sskirt:number) {
            this.sskirt = sskirt;

            this.update();
        },

        updateExhaust(exhaust:number) {
            this.exhaust = exhaust;

            this.update();
        },

        updateFrame(frame:number) {
            this.frame = frame;

            this.update();
        },

        updateGrille(grille:number) {
            this.grille = grille;

            this.update();
        },

        updateHood(hood:number) {
            this.hood = hood;

            this.update();
        },

        updateLwing(lwing:number) {
            this.lwing = lwing;

            this.update();
        },

        updateRwing(rwing:number) {
            this.rwing = rwing;

            this.update();
        },

        updateRoof(roof:number) {
            this.roof = roof;

            this.update();
        },

        updateEngine(engine:number) {
            this.engine = engine;

            this.update();
        },

        updateBrakes(brakes:number) {
            this.brakes = brakes;

            this.update();
        },

        updateTrans(trans:number) {
            this.trans = trans;

            this.update();
        },

        updateHorns(horns:number) {
            this.horns = horns;

            this.update();
        },

        updateSuspension(suspension:number) {
            this.suspension = suspension;

            this.update();
        },

        updateArmor(armor:number) {
            this.armor = armor;

            this.update();
        },

        updateTurbo(turbo:number) {
            this.turbo = turbo;

            this.update();
        },

        updateXenon(xenon:number) {
            this.xenon = xenon;

            this.update();
        },

        updateFwheels(fwheels:number) {
            this.fwheels = fwheels;

            this.update();
        },

        updateBwheels(bwheels:number) {
            this.bwheels = bwheels;

            this.update();
        },

        updatePlateh(plateh:number) {
            this.plateh = plateh;

            this.update();
        },

        updatePlatev(platev:number) {
            this.platev = platev;

            this.update();
        },

        updateTrimdesign(trimdesign:number) {
            this.trimdesign = trimdesign;

            this.update();
        },

        updateOrnaments(ornaments:number) {
            this.ornaments = ornaments;

            this.update();
        },

        updateDialdesign(dialdesign:number) {
            this.dialdesign = dialdesign;

            this.update();
        },

        updateDoorint(doorint:number) {
            this.doorint = doorint;

            this.update();
        },

        updateSeats(seats:number) {
            this.seats = seats;

            this.update();
        },

        updateSteeringw(steeringw:number) {
            this.steeringw = steeringw;

            this.update();
        },

        updateShiftlever(shiftlever:number) {
            this.shiftlever = shiftlever;

            this.update();
        },

        updatePlaques(plaques:number) {
            this.plaques = plaques;

            this.update();
        },

        updateHydraulics(hydraulics:number) {
            this.hydraulics = hydraulics;

            this.update();
        },

        updateEngineb(engineb:number) {
            this.engineb = engineb;

            this.update();
        },

        updateAirfilter(airfilter:number) {
            this.airfilter = airfilter;

            this.update();
        },

        updateStrutbar(strutbar:number) {
            this.strutbar = strutbar;

            this.update();
        },

        updateArchcover(archcover:number) {
            this.archcover = archcover;

            this.update();
        },

        updateAntenna(antenna:number) {
            this.antenna = antenna;

            this.update();
        },

        updateExteriorp(exteriorp:number) {
            this.exteriorp = exteriorp;

            this.update();
        },

        updateTank(tank:number) {
            this.tank = tank;

            this.update();
        },

        updateDoor(door:number) {
            this.door = door;

            this.update();
        },

        updateWroh(wroh:number) {
            this.wroh = wroh;

            this.update();
        },

        updateStickers(stickers:number) {
            this.stickers = stickers;

            this.update();
        },

        updatePlate(plate:number) {
            this.plate = plate;

            this.update();
        },

        updateWindowTint(windowtint:number) {
            this.windowtint = windowtint;

            this.update();
        },

        updateCamber(wheelcamber: number) {
            this.wheelcamber = wheelcamber;

            this.update();
        },

        updateHeight(wheelheight: number) {
            this.wheelheight = wheelheight;

            this.update();
        },

        updateRimRadius(wheelrimradius: number) {
            this.wheelrimradius = wheelrimradius;

            this.update();
        },

        updateTrackWidth(wheeltrackwidth: number) {
            this.wheeltrackwidth = wheeltrackwidth;

            this.update();
        },

        updateTyreRadius(wheeltyreradius: number) {
            this.wheeltyreradius = wheeltyreradius;

            this.update();
        },

        updateTyreWidth(wheeltyrewidth: number) {
            this.wheeltyrewidth = wheeltyrewidth;

            this.update();
        },

        updateWheelType(wheeltype: number) {
            this.wheeltype = wheeltype;

            this.update();
        },

        updateWheelId(wheelid: number) {
            this.wheelid = wheelid;

            this.update();
        },
        updateModsCountType(getModsCountType: number) {
            this.getModsCountType = getModsCountType;

            this.update();
        },

        update() {
            if ('alt' in window) {
                alt.emit(
                    `${ComponentName}:Update`,
                    this.spoiler,
                    this.fbumper,
                    this.rbumper,
                    this.sskirt,
                    this.exhaust,
                    this.frame,
                    this.grille,
                    this.hood,
                    this.lwing,
                    this.rwing,
                    this.roof,
                    this.engine,
                    this.brakes,
                    this.trans,
                    this.horns,
                    this.suspension,
                    this.armor,
                    this.turbo,
                    this.xenon,
                    this.fwheels,
                    this.bwheels,
                    this.plateh,
                    this.platev,
                    this.trimdesign,
                    this.ornaments,
                    this.dialdesign,
                    this.doorint,
                    this.seats,
                    this.steeringw,
                    this.shiftlever,
                    this.plaques,
                    this.hydraulics,
                    this.engineb,
                    this.airfilter,
                    this.strutbar,
                    this.archcover,
                    this.antenna,
                    this.exteriorp,
                    this.tank,
                    this.door,
                    this.wroh,
                    this.stickers,
                    this.plate,
                    this.windowtint,
                    this.wheelcamber,
                    this.wheelheight,
                    this.wheelrimradius,
                    this.wheeltrackwidth,
                    this.wheeltyreradius,
                    this.wheeltyrewidth,
                    this.wheeltype,
                    this.wheelid,
                    this.getModsCountType,
                );
            }
        },
        nextCam() {
            if ('alt' in window) {
                
                alt.emit(`${ComponentName}:NextCam`);
            }
        },
        purchase() {
            if ('alt' in window) {
                alt.emit(
                    `${ComponentName}:Purchase`,
                    this.spoiler,
                    this.fbumper,
                    this.rbumper,
                    this.sskirt,
                    this.exhaust,
                    this.frame,
                    this.grille,
                    this.hood,
                    this.lwing,
                    this.rwing,
                    this.roof,
                    this.engine,
                    this.brakes,
                    this.trans,
                    this.horns,
                    this.suspension,
                    this.armor,
                    this.turbo,
                    this.xenon,
                    this.fwheels,
                    this.bwheels,
                    this.plateh,
                    this.platev,
                    this.trimdesign,
                    this.ornaments,
                    this.dialdesign,
                    this.doorint,
                    this.seats,
                    this.steeringw,
                    this.shiftlever,
                    this.plaques,
                    this.hydraulics,
                    this.engineb,
                    this.airfilter,
                    this.strutbar,
                    this.archcover,
                    this.antenna,
                    this.exteriorp,
                    this.tank,
                    this.door,
                    this.wroh,
                    this.stickers,
                    this.plate,
                    this.windowtint,
                    this.wheelcamber,
                    this.wheelheight,
                    this.wheelrimradius,
                    this.wheeltrackwidth,
                    this.wheeltyreradius,
                    this.wheeltyrewidth,
                    this.wheeltype,
                    this.wheelid,
                    this.getModsCountType,
                    `${ComponentName}:Close`
                );
            }
        },
        exit() {
            if ('alt' in window) {
                alt.emit(`${ComponentName}:Close`);
            }
        },
    },
});
</script>

<style scoped>
.tuning-shop-wrapper {
    position: fixed;
    left: 0vh !important;
    top: 0vh;
    background: rgba(12, 12, 12, 1) !important;
    min-height: 100vh;
    max-height: 100vh;
    min-width: 260px;
    max-width: 260px;
    overflow: hidden;
}

.page-filler {
    overflow: hidden;
    min-height: calc(100vh - 114px);
    max-height: calc(100vh - 114px);
}

.stat-icon {
    display: flex;
    color: rgb(185, 219, 228);
    align-items: center;
    justify-content: center;
    min-width: 25px;
    max-width: 25px;
    min-height: 25px;
    max-height: 25px;
    position: absolute;
    z-index: 99;
    left: 7.5px;
    top: -2px;
    /* mix-blend-mode: lighten;
    color: #e7e7e8;
    text-shadow: 0px 0px 6px #010101; */
}
</style>
