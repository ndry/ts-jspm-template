
(async () => {
    const {imports} = initConfig;

    function appendScript(desc) {
        return document.head.appendChild(
            Object.assign(
                document.createElement("script"),
                desc));
    }

    const urlParams = new URLSearchParams(window.location.search);
    window.env = window.env || {};
    if (urlParams.has("local")) { env.local = true; }

    const jspm = JSON.parse( await (await fetch("../jspm.json")).text());

    function getJspmRoot(module) {
        return env.local
            ? ("../jspm_packages/" + jspm.resolve[module].replace(":", "/") + "/")
            : ("https://dev.jspm.io/" + jspm.resolve[module] + "/");
    }

    function getUnpkgRoot(module) {
        return env.local
            ? ("../jspm_packages/" + jspm.resolve[module].replace(":", "/") + "/")
            : ("https://unpkg.com/" + jspm.resolve[module].replace("npm:", "") + "/");
    }

    for (const module of Object.keys(imports)) {
        imports[module] = getJspmRoot(module) + imports[module];
    }
    appendScript({
        type: "importmap-shim",
        textContent: JSON.stringify({ imports: imports }),
    });

    appendScript({
        src: getUnpkgRoot("es-module-shims") + "./dist/es-module-shims.min.js"
    });
})();