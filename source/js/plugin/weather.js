window.onload = function() {
    const cw = GLOBAL_CONFIG.weather
    if (cw && cw.enable) {
        let id = '';
        switch (cw.plugin) {
            case 'weather':
                id = 'weather-v2-plugin-simple';
                break;
            case 'qweather':
                id = 'he-plugin-simple';
                break;
        }
        btf.isJqueryLoad(() => {
            const w = $(`#${id}`)[0]
            w.style.position = "relative";
            w.style.left = "0px";
        });
    }
};