<template>
    <div class="wrapper stack mt-2">
        <div class="stack mb-2 mr-2 mt-2">
            <Module :name="locale.TRIMDESIGN">
                <span class="subtitle-2 pb-4">{{ locale.TRIMDESIGN_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="trimdesign"
                        :increment="1"
                        @input="(e) => settrimdesign(e)"
                        @change="outputtrimdesign"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.ORNAMENTS">
                <span class="subtitle-2 pb-4">{{ locale.ORNAMENTS_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="ornaments"
                        :increment="1"
                        @input="(e) => setornaments(e)"
                        @change="outputornaments"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.DIALDESIGN">
                <span class="subtitle-2 pb-4">{{ locale.DIALDESIGN_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="dialdesign"
                        :increment="1"
                        @input="(e) => setdialdesign(e)"
                        @change="outputdialdesign"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.DOORINT">
                <span class="subtitle-2 pb-4">{{ locale.DOORINT_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="doorint"
                        :increment="1"
                        @input="(e) => setdoorint(e)"
                        @change="outputdoorint"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.SEATS">
                <span class="subtitle-2 pb-4">{{ locale.SEATS_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="seats"
                        :increment="1"
                        @input="(e) => setseats(e)"
                        @change="outputseats"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.STEERINGW">
                <span class="subtitle-2 pb-4">{{ locale.STEERINGW_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="steeringw"
                        :increment="1"
                        @input="(e) => setsteeringw(e)"
                        @change="outputsteeringw"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.SHIFTLEVER">
                <span class="subtitle-2 pb-4">{{ locale.SHIFTLEVER_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="shiftlever"
                        :increment="1"
                        @input="(e) => setshiftlever(e)"
                        @change="outputshiftlever"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.PLAQUES">
                <span class="subtitle-2 pb-4">{{ locale.PLAQUES_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="plaques"
                        :increment="1"
                        @input="(e) => setplaques(e)"
                        @change="outputplaques"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.ENGINEB">
                <span class="subtitle-2 pb-4">{{ locale.ENGINEB_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="engineb"
                        :increment="1"
                        @input="(e) => setengineb(e)"
                        @change="outputengineb"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.AIRFILTER">
                <span class="subtitle-2 pb-4">{{ locale.AIRFILTER_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="airfilter"
                        :increment="1"
                        @input="(e) => setairfilter(e)"
                        @change="outputairfilter"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.ARCHCOVER">
                <span class="subtitle-2 pb-4">{{ locale.ARCHCOVER_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="archcover"
                        :increment="1"
                        @input="(e) => setarchcover(e)"
                        @change="outputarchcover"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.TANK">
                <span class="subtitle-2 pb-4">{{ locale.TANK_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="tank"
                        :increment="1"
                        @input="(e) => settank(e)"
                        @change="outputtank"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.DOOR">
                <span class="subtitle-2 pb-4">{{ locale.DOOR_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="getModsCountType"
                        :increment="1"
                        @input="(e) => setdoor(e)"
                        @change="outputdoor"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.WROH">
                <span class="subtitle-2 pb-4">{{ locale.WROH_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="wroh"
                        :increment="1"
                        @input="(e) => setwroh(e)"
                        @change="outputwroh"
                        class="fill-full-width"
                    />
                </div>
            </Module>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';
import { iTunerSync } from '../../shared/interfaces';
import {
    VEHICLE_TUNE_INTERIEUR_IDS,
} from '../../shared/const';

const ComponentName = 'Interieur';
export default defineComponent({
    name: ComponentName,
    data() {
        return {
            update: 1,
            trimdesign: 0,
            ornaments: 0,
            dialdesign: 0,
            doorint: 0,
            seats: 0,
            steeringw: 0,
            shiftlever: 0,
            plaques: 0,
            engineb: 0,
            airfilter: 0,
            archcover: 0,
            tank: 0,
            door: 0,
            wroh: 0,
            getModsCountType: 0,
        };
    },
    props: {
        data: {
            type: Number,
        },
        locale: {
            type: Object,
            required: true,
        },
    },
    components: {
        Button: defineAsyncComponent(() => import('@components/Button.vue')),
        Icon: defineAsyncComponent(() => import('@components/Icon.vue')),
        RangeInput: defineAsyncComponent(() => import('@components/RangeInput.vue')),
        SimpleInput: defineAsyncComponent(() => import('@components/SimpleInput.vue')),
        ColorSlider: defineAsyncComponent(() => import('@components/ColorSlider.vue')),
        Module: defineAsyncComponent(() => import('@components/Module.vue')),
    },
    computed: {
        gettrimdesign(): Array<{ value: number }> {
            const trimdesign      : Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_INTERIEUR_IDS).forEach((index) => {
                trimdesign.push({ value: VEHICLE_TUNE_INTERIEUR_IDS[index] });
            });

            return      trimdesign;
        },
        getornaments(): Array<{ value: number }> {
            const ornaments       : Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_INTERIEUR_IDS).forEach((index) => {
                ornaments.push({ value: VEHICLE_TUNE_INTERIEUR_IDS[index] });
            });

            return       ornaments;
        },
        getdialdesig(): Array<{ value: number }> {
            const dialdesign      : Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_INTERIEUR_IDS).forEach((index) => {
                dialdesign.push({ value: VEHICLE_TUNE_INTERIEUR_IDS[index] });
            });

            return      dialdesign;
        },
        getdoorint  (): Array<{ value: number }> {
            const doorint         : Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_INTERIEUR_IDS).forEach((index) => {
                doorint.push({ value: VEHICLE_TUNE_INTERIEUR_IDS[index] });
            });

            return         doorint;
        },
        getseats    (): Array<{ value: number }> {
            const seats           : Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_INTERIEUR_IDS).forEach((index) => {
                seats.push({ value: VEHICLE_TUNE_INTERIEUR_IDS[index] });
            });

            return           seats;
        },
        getsteeringw(): Array<{ value: number }> {
            const steeringw       : Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_INTERIEUR_IDS).forEach((index) => {
                steeringw.push({ value: VEHICLE_TUNE_INTERIEUR_IDS[index] });
            });

            return       steeringw;
        },
        getshiftleve(): Array<{ value: number }> {
            const shiftlever      : Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_INTERIEUR_IDS).forEach((index) => {
                shiftlever.push({ value: VEHICLE_TUNE_INTERIEUR_IDS[index] });
            });

            return      shiftlever;
        },
        getplaques  (): Array<{ value: number }> {
            const plaques         : Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_INTERIEUR_IDS).forEach((index) => {
                plaques.push({ value: VEHICLE_TUNE_INTERIEUR_IDS[index] });
            });

            return         plaques;
        },
        getengineb  (): Array<{ value: number }> {
            const engineb         : Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_INTERIEUR_IDS).forEach((index) => {
                engineb.push({ value: VEHICLE_TUNE_INTERIEUR_IDS[index] });
            });

            return         engineb;
        },
        getairfilter(): Array<{ value: number }> {
            const airfilter       : Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_INTERIEUR_IDS).forEach((index) => {
                airfilter.push({ value: VEHICLE_TUNE_INTERIEUR_IDS[index] });
            });

            return       airfilter;
        },
        getarchcover(): Array<{ value: number }> {
            const archcover       : Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_INTERIEUR_IDS).forEach((index) => {
                archcover.push({ value: VEHICLE_TUNE_INTERIEUR_IDS[index] });
            });

            return       archcover;
        },
        gettank     (): Array<{ value: number }> {
            const tank            : Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_INTERIEUR_IDS).forEach((index) => {
                tank.push({ value: VEHICLE_TUNE_INTERIEUR_IDS[index] });
            });

            return            tank;
        },
        getdoor     (): Array<{ value: number }> {
            const door            : Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_INTERIEUR_IDS).forEach((index) => {
                door.push({ value: VEHICLE_TUNE_INTERIEUR_IDS[index] });
            });

            return            door;
        },
        getwroh     (): Array<{ value: number }> {
            const wroh            : Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_INTERIEUR_IDS).forEach((index) => {
                wroh.push({ value: VEHICLE_TUNE_INTERIEUR_IDS[index] });
            });

            return            wroh;
        },
        getModsCountType     (): Array<{ value: number }> {
            const getModsCountType            : Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_INTERIEUR_IDS).forEach((index) => {
                getModsCountType.push({ value: VEHICLE_TUNE_INTERIEUR_IDS[index] });
            });

            return            getModsCountType;
        },

    },
    methods: {
        settrimdesign(e: Event) {
            const result = e.target['value'];
            this.trimdesign = parseFloat(result);

            this.$emit('update-trimdesign', this.trimdesign);
        },
        setornaments(e: Event) {
            const result = e.target['value'];
            this.ornaments = parseFloat(result);

            this.$emit('update-ornaments', this.ornaments);
        },
        setdialdesign(e: Event) {
            const result = e.target['value'];
            this.dialdesign = parseFloat(result);

            this.$emit('update-dialdesign', this.dialdesign);
        },
        setdoorint(e: Event) {
            const result = e.target['value'];
            this.doorint = parseFloat(result);

            this.$emit('update-doorint', this.doorint);
        },
        setseats(e: Event) {
            const result = e.target['value'];
            this.seats = parseFloat(result);

            this.$emit('update-seats', this.seats);
        },
        setsteeringw(e: Event) {
            const result = e.target['value'];
            this.steeringw = parseFloat(result);

            this.$emit('update-steeringw', this.steeringw);
        },
        setshiftlever(e: Event) {
            const result = e.target['value'];
            this.shiftlever = parseFloat(result);

            this.$emit('update-shiftlever', this.shiftlever);
        },
        setplaques(e: Event) {
            const result = e.target['value'];
            this.plaques = parseFloat(result);

            this.$emit('update-plaques', this.plaques);
        },
        setengineb(e: Event) {
            const result = e.target['value'];
            this.engineb = parseFloat(result);

            this.$emit('update-engineb', this.engineb);
        },
        setairfilter(e: Event) {
            const result = e.target['value'];
            this.airfilter = parseFloat(result);

            this.$emit('update-airfilter', this.airfilter);
        },
        setarchcover(e: Event) {
            const result = e.target['value'];
            this.archcover = parseFloat(result);

            this.$emit('update-archcover', this.archcover);
        },
        settank(e: Event) {
            const result = e.target['value'];
            this.tank = parseFloat(result);

            this.$emit('update-tank', this.tank);
        },
        setdoor(e: Event) {
            const result = e.target['value'];
            this.door = parseFloat(result);

            this.$emit('update-door', this.door);
        },
        setwroh(e: Event) {
            const result = e.target['value'];
            this.wroh = parseFloat(result);

            this.$emit('update-wroh', this.wroh);
        },
        setModsCountType(e: Event) {
            const result = e.target['value'];
            this.getModsCountType = parseFloat(result);

            this.$emit('update-getModsCountType', this.getModsCountType);
        },

        outputtrimdesign(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-trimdesign', { value }, true);
        },
        outputornaments(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-ornaments', { value }, true);
        },
        outputdialdesign(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-dialdesign', { value }, true);
        },
        outputdoorint(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-doorint', { value }, true);
        },
        outputseats(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-seats', { value }, true);
        },
        outputsteeringw(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-steeringw', { value }, true);
        },
        outputshiftlever(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-shiftlever', { value }, true);
        },
        outputplaques(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-plaques', { value }, true);
        },
        outputengineb(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-engineb', { value }, true);
        },
        outputairfilter(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-airfilter', { value }, true);
        },
        outputarchcover(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-archcover', { value }, true);
        },
        outputtank(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-tank', { value }, true);
        },
        outputdoor(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-door', { value }, true);
        },
        outputwroh(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-wroh', { value }, true);
        },
        outputModsCountType(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-getModsCountType', { value }, true);
        },
    },
    watch: {
        data(syncData: iTunerSync) {
            this.trimdesign = syncData.trimdesign;
            this.ornaments = syncData.ornaments;
            this.dialdesign = syncData.dialdesign;
            this.doorint = syncData.doorint;
            this.seats = syncData.seats;
            this.steeringw = syncData.steeringw;
            this.shiftlever = syncData.shiftlever;
            this.plaques = syncData.plaques;
            this.engineb = syncData.engineb;
            this.airfilter = syncData.airfilter;
            this.archcover = syncData.archcover;
            this.tank = syncData.tank;
            this.door = syncData.door;
            this.wroh = syncData.wroh;
            this.getModsCountType = syncData.getModsCountType;

            this.$nextTick(() => {
                this.$emit('set-trimdesign', syncData.trimdesign, true);
                this.$emit('set-ornaments', syncData.ornaments, true);
                this.$emit('set-dialdesign', syncData.dialdesign, true);
                this.$emit('set-doorint', syncData.doorint, true);
                this.$emit('set-seats', syncData.seats, true);
                this.$emit('set-steeringw', syncData.steeringw, true);
                this.$emit('set-shiftlever', syncData.shiftlever, true);
                this.$emit('set-plaques', syncData.plaques, true);
                this.$emit('set-engineb', syncData.engineb, true);
                this.$emit('set-airfilter', syncData.airfilter, true);
                this.$emit('set-archcover', syncData.archcover, true);
                this.$emit('set-tank', syncData.tank, true);
                this.$emit('set-door', syncData.door, true);
                this.$emit('set-wroh', syncData.wroh, true);
                this.$emit('update-trimdesign', this.trimdesign);
                this.$emit('update-ornaments', this.ornaments);
                this.$emit('update-dialdesign', this.dialdesign);
                this.$emit('update-doorint', this.doorint);
                this.$emit('update-seats', this.seats);
                this.$emit('update-steeringw', this.steeringw);
                this.$emit('update-shiftlever', this.shiftlever);
                this.$emit('update-plaques', this.plaques);
                this.$emit('update-engineb', this.engineb);
                this.$emit('update-airfilter', this.airfilter);
                this.$emit('update-archcover', this.archcover);
                this.$emit('update-tank', this.tank);
                this.$emit('update-door', this.door);
                this.$emit('update-wroh', this.wroh);
                this.$emit('update-getModsCountType', this.getModsCountType);
            });
        },
    },
});
</script>

<style scoped>
.wrapper {
    overflow-y: scroll;
    min-height: calc(100vh - 125px);
    max-height: calc(100vh - 125px);
}

.trimdesign{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.ornaments{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.dialdesign{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.doorint{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.seats{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.steeringw{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.shiftlever{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.plaques{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.engineb{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.airfilter{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.archcover{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.tank{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.door{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.wroh{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}

input[type='color']::-webkit-color-swatch {
    padding: 4px;
    border: none;
    border-radius: 3px;
}

input[type='color']::-webkit-color-swatch-wrapper {
    padding: 4px;
    border: none;
    border-radius: 3px;
}

input[type='color'] {
    height: 35px;
    width: 100px;
    border-radius: 6px;
    overflow: hidden;
    background: none;
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
}

input[type='color']:hover {
    cursor: pointer;
}
</style>
