import Swup from "https://unpkg.com/swup@4?module";
import ScriptsPlugin from "https://unpkg.com/@swup/scripts-plugin@2?module";
import HeadPlugin from "https://unpkg.com/@swup/head-plugin@2?module";

const swup = new Swup({
    plugins: [new ScriptsPlugin(), new HeadPlugin()],
});