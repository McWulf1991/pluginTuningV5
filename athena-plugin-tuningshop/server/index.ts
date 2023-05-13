import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';
import { TunerView } from './src/view';

const PLUGIN_NAME = 'Tuner Plugin';

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, () => {
    TunerView.init();
    alt.log(`~dg~CORE ==> ${PLUGIN_NAME} was Loaded`);
});
