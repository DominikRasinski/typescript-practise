var Settings = /** @class */ (function () {
    function Settings() {
        this.settings = [];
    }
    Settings.getInstance = function () {
        if (!Settings.instance) {
            Settings.instance = new Settings();
        }
        return Settings.instance;
    };
    Object.defineProperty(Settings.prototype, "provideSettings", {
        set: function (setting) {
            if (setting) {
                this.settings.push(setting);
            }
            else {
                console.log("Provided value is not type of string, or is not valid value!");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Settings.prototype, "showSetting", {
        get: function () {
            if (this.settings) {
                return this.settings;
            }
            return new Error("Setting are empty, please provide new value");
        },
        enumerable: false,
        configurable: true
    });
    return Settings;
}());
var settings = Settings.getInstance();
settings.provideSettings = "Audio";
settings.provideSettings = "Graphic";
console.log(settings.showSetting);
