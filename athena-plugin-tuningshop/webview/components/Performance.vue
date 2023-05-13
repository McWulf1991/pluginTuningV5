<template>
    <div class="wrapper stack mt-2">
        <div class="stack mb-2 mr-2 mt-2">
            <Module :name="locale.ENGINE">
                <span class="subtitle-2 pb-4">{{ locale.ENGINE_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="4"
                        :indexValue="engine"
                        :increment="1"
                        @input="(e) => setEngine(e)"
                        @change="outputEngine"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.BRAKES">
                <span class="subtitle-2 pb-4">{{ locale.BRAKES_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="3"
                        :indexValue="brakes"
                        :increment="1"
                        @input="(e) => setBrakes(e)"
                        @change="outputBrakes"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.TRANS">
                <span class="subtitle-2 pb-4">{{ locale.TRANS_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="3"
                        :indexValue="trans"
                        :increment="1"
                        @input="(e) => setTrans(e)"
                        @change="outputTrans"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.SUSPENSION">
                <span class="subtitle-2 pb-4">{{ locale.SUSPENSION_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="4"
                        :indexValue="suspension"
                        :increment="1"
                        @input="(e) => setSuspension(e)"
                        @change="outputSuspension"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.ARMOR">
                <span class="subtitle-2 pb-4">{{ locale.ARMOR_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="5"
                        :indexValue="armor"
                        :increment="1"
                        @input="(e) => setArmor(e)"
                        @change="outputArmor"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.TURBO">
                <span class="subtitle-2 pb-4">{{ locale.TURBO_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="1"
                        :indexValue="turbo"
                        :increment="1"
                        @input="(e) => setTurbo(e)"
                        @change="outputTurbo"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.XENON">
                <span class="subtitle-2 pb-4">{{ locale.XENON_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="1"
                        :indexValue="xenon"
                        :increment="1"
                        @input="(e) => setXenon(e)"
                        @change="outputXenon"
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
    VEHICLE_TUNE_ENGINE,
    VEHICLE_TUNE_BRAKES,
    VEHICLE_TUNE_TRANS,
    VEHICLE_TUNE_SUSPENSION,
    VEHICLE_TUNE_ARMOR,
    VEHICLE_TUNE_TURBO,
    VEHICLE_TUNE_XENON,
} from '../../shared/const';

const ComponentName = 'Performance';
export default defineComponent({
    name: ComponentName,
    data() {
        return {
            update: 1,
            engine: 0,
            brakes: 0,
            trans: 0,
            suspension: 0,
            armor: 0,
            turbo: 0,
            xenon: 0,
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
        getEngine(): Array<{ value: number }> {
            const engine: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_ENGINE).forEach((index) => {
                engine.push({ value: VEHICLE_TUNE_ENGINE[index] });
            });

            return engine;
        },
        getBrakes(): Array<{ value: number }> {
            const brakes: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_BRAKES).forEach((index) => {
                brakes.push({ value: VEHICLE_TUNE_BRAKES[index] });
            });

            return brakes;
        },
        getTrans(): Array<{ value: number }> {
            const trans: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_TRANS).forEach((index) => {
                trans.push({ value: VEHICLE_TUNE_TRANS[index] });
            });

            return trans;
        },
        getSuspension(): Array<{ value: number }> {
            const suspension: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_SUSPENSION).forEach((index) => {
                suspension.push({ value: VEHICLE_TUNE_SUSPENSION[index] });
            });

            return suspension;
        },
        getArmor(): Array<{ value: number }> {
            const armor: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_ARMOR).forEach((index) => {
                armor.push({ value: VEHICLE_TUNE_ARMOR[index] });
            });

            return armor;
        },
        getTurbo(): Array<{ value: number }> {
            const turbo: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_TURBO).forEach((index) => {
                turbo.push({ value: VEHICLE_TUNE_TURBO[index] });
            });

            return turbo;
        },
        getXenon(): Array<{ value: number }> {
            const xenon: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_XENON).forEach((index) => {
                xenon.push({ value: VEHICLE_TUNE_XENON[index] });
            });

            return xenon;
        },
    },
    methods: {
        setEngine(e: Event) {
            const result = e.target['value'];
            this.engine = parseInt(result);

            this.$emit('update-engine', this.engine);
        },
        setBrakes(e: Event) {
            const result = e.target['value'];
            this.brakes = parseInt(result);

            this.$emit('update-brakes', this.brakes);
        },
        setTrans(e: Event) {
            const result = e.target['value'];
            this.trans = parseInt(result);

            this.$emit('update-trans', this.trans);
        },
        setSuspension(e: Event) {
            const result = e.target['value'];
            this.suspension = parseInt(result);

            this.$emit('update-suspension', this.suspension);
        },
        setArmor(e: Event) {
            const result = e.target['value'];
            this.armour = parseInt(result);

            this.$emit('update-armor', this.armor);
        },
        setTurbo(e: Event) {
            const result = e.target['value'];
            this.turbo = parseInt(result);

            this.$emit('update-turbo', this.turbo);
        },
        setXenon(e: Event) {
            const result = e.target['value'];
            this.xenon = parseInt(result);

            this.$emit('update-xenon', this.xenon);
        },
        outputEngine(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-engine', { value }, true);
        },
        outputBrakes(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-brakes', { value }, true);
        },
        outputTrans(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-trans', { value }, true);
        },
        outputSuspension(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-suspension', { value }, true);
        },
        outputArmor(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-armor', { value }, true);
        },
        outputTurbo(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-turbo', { value }, true);
        },
        outputXenon(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-xenon', { value }, true);
        },
    },
    watch: {
        data(syncData: iTunerSync) {
            this.engine = syncData.engine;
            this.brakes = syncData.brakes;
            this.trans = syncData.trans;
            this.suspension = syncData.suspension;
            this.armor = syncData.armor;
            this.turbo = syncData.turbo;
            this.xenon = syncData.xenon;

            this.$nextTick(() => {
                this.$emit('update-engine', this.engine);
                this.$emit('update-brakes', this.brakes);
                this.$emit('update-trans', this.trans);
                this.$emit('update-suspension', this.suspension);
                this.$emit('update-armor', this.armor);
                this.$emit('update-turbo', this.turbo);
                this.$emit('update-xenon', this.xenon);
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

.engine {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}

.brakes {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}

.trans {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}

.suspension {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}

.armor {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}

.turbo {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}

.xenon {
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
