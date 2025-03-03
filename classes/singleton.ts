// Klasa Settings przyjmuje wzorzec projektowy Singleton czyli że jest tylko jedna jej instancja i nie może być kilka takich samych
class Settings {
    // właściwość klasy instance przyjmująca jako wartość klasę oraz będąca zabezpieczeniem w momencie kiedy zostanie wywołana instancja to zmienna instance przyjmie wartość klasy.
    private static instance: Settings;
    private settings: string[] = [];

    private constructor() {}

    // Metoda static umożliwiająca stworzenie instancji klasy oraz sprawdzająca czy istnieje, jeżeli tak to zwraca już istniejąca instancję
    static getInstance() {
        if(!Settings.instance) {
            Settings.instance = new Settings();
        }
        return Settings.instance;
    }

    set provideSettings(setting: string) {
        if(setting) {
            this.settings.push(setting);
        } else {
            console.log("Provided value is not type of string, or is not valid value!")
        }
    }

    get showSetting() {
        if (this.settings) {
            return this.settings;
        }
        return new Error("Setting are empty, please provide new value");
    }
}

const settings = Settings.getInstance();

settings.provideSettings = "Audio";
settings.provideSettings = "Graphic";

console.log(settings.showSetting);