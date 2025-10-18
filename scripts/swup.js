import Swup from "https://unpkg.com/swup@4?module";
import ScriptsPlugin from "https://unpkg.com/@swup/scripts-plugin@2?module";
import HeadPlugin from '@swup/head-plugin';

const swup = new Swup({
    plugins: [new ScriptsPlugin(), new HeadPlugin()],
});