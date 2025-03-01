# Repozytorium do ćwiczenia wiedzy na temat TypeScript

> TypeScript sprawdza typy zmiennych już na poziomie kompilacji, fundamentalnie na tym poziomie się różni od JavaScript, który aby sprawdzić błędy w kodzie musi najpierw przejść kompilację i uruchomienie. A TS zwróci od razu błąd na samym początku kompilacji kodu.

## Spis treści

- [Repozytorium do ćwiczenia wiedzy na temat TypeScript](#repozytorium-do-ćwiczenia-wiedzy-na-temat-typescript)
  - [Spis treści](#spis-treści)
  - [Uruchamianie przykładów](#uruchamianie-przykładów)
  - [Konfigurowanie TS dla większych aplikacji](#konfigurowanie-ts-dla-większych-aplikacji)
  - [Typowanie w TypeScript](#typowanie-w-typescript)
    - [Typy prymitywne](#typy-prymitywne)
    - [Typy zaawansowane](#typy-zaawansowane)
      - [Obiekty](#obiekty)
      - [Tablice](#tablice)
        - [Tuples](#tuples)
      - [Enum - specjalny typ danych, który pozwala na definiowanie zbioru nazwanych danych](#enum---specjalny-typ-danych-który-pozwala-na-definiowanie-zbioru-nazwanych-danych)
      - [Literal](#literal)
    - [Funkcje](#funkcje)
    - [Typy odmienne](#typy-odmienne)
      - [Any](#any)
      - [Unknown](#unknown)
      - [Never](#never)
  - [Klasy i obiekty](#klasy-i-obiekty)
      - [Działanie klasy](#działanie-klasy)
      - [Modyfikatory](#modyfikatory)
      - [Dziedziczenie](#dziedziczenie)
      - [Getters \& Setters](#getters--setters)
      - [Modyfikator `static`](#modyfikator-static)

## Uruchamianie przykładów

Jeżeli chcemy mieć pewność, że przykłady zadziałają w poprawny sposób, zalecane jest uruchamianie ich przez komendę:

```bash
tsc przyklad.ts
node pyrzklad.js
```

Jeżeli użyjemy komendy:

```bash
npx tsx przyklad.ts
```

To zostanie pomięte sprawdzanie typów i mogą się pojawić nie oczekiwane rezultaty.

## Konfigurowanie TS dla większych aplikacji

Aby móc skopilować aplikację, która zawiera więcej plików TS niż jeden, to zamiast używać dla każdego pliku komendy:

```bash
tsc nazwa_pliku.ts
```

Możemy wykorzystać do storzenia całego projektu komendę:

```bash
tsc --init
```

Wykorzystanie tej komendy wygeneruje nam plik `tsconfig.json` co daje nam mase opcji jak kompilator, kod, czy wykrywanie plików ma działać.

## Typowanie w TypeScript

### Typy prymitywne

Typowanie jest podstawową funkcją TypeScript'u, jak i również wielu innych języków statycznie typowanych jak na przykład sławny C++.

Chociaż mówiąc od TypeScript możemy mówić o bardziej płynnym typowaniu zmiennych, ponieważ TS ma wbudowaną funkcję `dziedziczenia typów` zmiennych. Gdy zmienna zostanie zinicjalizowana z daną wartością, to TS automatycznie odziedziczy typ tej wartości i przypisze do zmiennej.

Aby nadać typo zmiennej należy za jej deklaracją zapisać `: <nazwa typu>` oczywiście bez wykorzystania znaków ostrych nawiasów.

Przykłady prymitywnych typów:

```ts
const firstNumber: number; // <-- oczekujemy, że zmienna firstNumber będzie typu number czyli INT, Float itp.

const firstString: string; // <-- oczekujemy, że zmienna firstString będzie typu string czyli łańcuchem znaków

const trueFalse: boolean; // <-- oczekujemy, że zmienna trueFalse będzie typu boolean czyli true/false
```

Wykorzystywanie przypisania typów za pomocą `: <typ zmiennej>` jest wskazane do wykorzystywania tylko w momencie kiedy chcemy zdeklarować pustą zmienną, która jeszcze nie posiada przypisanej wartości.

### Typy zaawansowane

#### Obiekty

Obiekty również korzystają z mechanizmów typowania oraz `inheritance type`.

Przykład zapisania obiektu, który przyjmuje typ na podstawie definicji własności obiektu oraz wartości do nich przypisanych. Można to określić nie jawnym o typowaniem obiektu.

```ts
const person = {
   name: 'Dominik',
   age: 25,
};
```

Przykład zapisania obiektu za pomocą jawnego o typowania

```ts
const person2: {
   // definiowanie typu danych jaki oczekujemy, że nowa instancja obiektu dostanie
   name: string;
   age: number;
} = {
   // moment kiedy definiujemy obiekt i jego własności
   name: 'Dominik',
   age: 25,
};
```

#### Tablice

Tablice tak samo jak obiekty wykorzystują te same mechanizmy typowania co prymitywne typy. Chociaż przedstawiają trochę inny zapis w momencie kiedy chcemy mieć pewność, że dana tablica jest danego typu.

Przykład tablica ma mieć tylko typ zmiennych `string`:

```ts
const newArr: string[] = ['jeden', 'dwa', 'trzy']; // <-- zapis string[] zapewnia że tablica newArr ma w sobie jedynie elementy typu string
```

##### Tuples

Specjalny typ tablicy jaki jest dostarczany razem z TypeScript. Jest to specjalna tablica o nie zmiennej długości danych, czyli posiada tylko duet danych.

```ts
const newTuple: [number, string]; // <-- zapis [number, string] mówi kompilatorowi, że oczekujemy tylko tablicy z dwiema wartościami o typach number oraz string

newTuple[(34, 'DOM')]; // poprawny zapis
newTuple[('DOM', 34)]; // niepoprawny zapis zwróci błąd
```

<span style="color:red"><b>UWAGA</b></span> Typ `Tuple` nie jest jednak odporny na mutację za pomocą na przykład metody **push** co spowoduje niestety na poszerzenie naszej tablicy.

#### Enum - specjalny typ danych, który pozwala na definiowanie zbioru nazwanych danych

Załóżmy, że tworzymy obiekt użytkownika, który ma zdefiniowane role jakie pozawlają mu na dostęp do odpowiednich funkcji systemu

```ts

const user {
    name: string,
    login: string,
    role: string,
} = {
    name: "Dominik",
    login: "dom",
    role: "ADMIN", // zamiast takiego nie ustandaryzowanego zapisu możemy wykorzystać typ enum
}


enum Role {ADMIN, USER, AUTHOR};

const user2 {
    name: "Andrzej",
    login: "and",
    role: Role.USER,
}

```

Typ `enum` reprezentuje specjalny zestaw typów danych, który jest określany za pomocą słów czytelnych dla człowieka jak na przykład `"ADMIN, USER, AUTHOR"` każde słowo określa inną wartość, domyślne jeżeli nie określimy inaczek to wartość tych słów jest tumaczona na INT od liczby 0 ... n.

#### Literal

Jest to określenie typu danych który przyjmuje konkretną wartość, ta wartość musi być stała i nie zmienna przez cały okres działania aplikacji.

Przykład:

```ts
const IMPORTANT_VAR = 5; //literał okreslający zmienną IMPORTANT_VAR, że posiada tylko i wyłącznie liczbę 5 jako wartość i nie jest ona podawana, żadnej modyfikacji
```

### Funkcje

Funkcje w TS również przyjmują typy, ale typ w funkcji oznacza jaką wartość ma zamiar zwrócić o ile w ogóle funkcja ma zamiar zwracać jakąkolwiek wartość.

```ts
function stringValue(value: string): string {
   return value;
} // funkcja o typie string ponieważ zwraca wartość typu string itd.

function executeCallback(callback: () => void): void {
   callback();
} // funkcja o typie void, ponieważ funckja executeCallback nie zwraca przekazanej do niej funkcji, a tylko ją wykonuje
// chociaż funckja callback jest również zamknięta na możliwość zwrócenia wartości bo jest typu void
```

Ciekawymi typami są typy:

-  any
-  unknown
-  void
-  never

Typ `any` jest specjalnym typem ponieważ jego użycie wyłącza nam dobrodziejstwa TS, wartości czy nawet funkcje o takim typie nie są sprawdzane przez kompilator pod względem błędów typowania, dlatego nie zaleca się ich nadużywać.

Typ `unknown` z zasady działania przypomina typ `any` pomimo podobieństwa to typ `unknown` nie daje nam wolnej ręki przy mieszaniu typów, jeżeli będziemy chcieli przypisać bez walidacji typ `unknown` do zmiennej zdeklarowanej jako dany typ na przykład `number` to TS na poziomie kompilacji powiadomi nas o błędzie. Bo nie będzie mieć pewności co kryje się pod typem `unknown`

Typ `void` jest to specjalny typ stosowany w funkcjach określający funkcje, które nie zwracają żadnej wartości.

Typ `never` jest typem, który podobnie jak typ `void` niczego nie zwraca ale typ `never` nie zwraca niczego ostatecznie, prowadząc do zatrzymania wykonywania dotychczasowych operacji, zazwyczaj ten typ jest wykorzystywany do tworzenia funckji zwracających krytyczne błędy i mające za zadanie zatrzymanie aplikacji gdy taki błąd nastanie.

### Typy odmienne

#### Any

Typ `any` jest typem, który przyjmuje wszystkie wartości jako poprawne.
TS nie przyczepi się kiedy będziemy żąnglować przypisanymi wartościami do zmiennej o typie `any` ponieważ do jej działania wszystkie typy są dopuszczone.

> Typ `any` jest bardzo elastyczny, ale ze względu na to, że TS nie sprawdza jakie typy danych znajdują się pod zmienną o type `any` **NIE POWINIŚMY TEGO TYPU NADUŻYWAĆ** ponieważ tracimy panowanie nad aplikacją oraz nie możemy korzystać funkcji które dostarcza nam TS takich jak sprawdzanie błędów typowania.

```ts
let anyVar: any = 'Dominik';
anyVar = 20;

const stringArr = ['Dominik', 'Tomek', 'Mateusz'];

anyVar = stringArr;

const person = {
   name: 'Dominik',
   age: 25,
};

anyVar = person;
```

Wszystkie powyższe operacjie są dozwolone dla typu `any` ponieważ TS nie sprawdzi, czy takie operacje są dozwolone albo logiczne.

#### Unknown

Typ `unknown` jest to specjalny typ, który mówi programiście jak i kompilatorowi, że nie mamy pojęcia jakie dane mogą zostać przekazane pod zmienną o takim typie.

Zmienna o typie `unknown` pozwala nam na przypisanie do siebie wartości dowolnego typu: tablice, obiekty, liczby, znaki itd... Można rzec, że `unknown` jest podobny do typu `any`. Jednak typ `unknown` nadal sprawdza typy danych jakie są mu przekazywane i zwróci błąd podczas kompilacji w momencie kiedy nie dodamy walidacji aby mieć pewność jakie zmienne się pod taką zmienną kryją. A typ `any` zwróci błąd w momencie odpalenia aplikacji czyli `runtime`.

```ts
let userInput: unknown;

userInput = 10;
userInput = 'Dominik';

let value: string;

value = useInput; // <-- w tym momencie TS zwróci błąd, ponieważ określając zmienną "unknown" to nie mamy pewności jakie dane zostną zwrócone, a w zmiennej value oczekujemy strikte danych typu "string"
```

#### Never

Typ `never` jest dosyć specyficznym typem ponieważ określa pustkę podobnie jak typ `void` ale typ `void` może zwrócić coś i pozwala na konynuowanie programu.

Typ `never` jest praktycznie niczym i określa zazwyczaj funkcje, które nic nie zwracają oraz zatrzymują działanie kodu

```ts
function criticalError(message: string, code: number): never {
   throw { message: message, errorCode: code };
} // customowa funkcja pozwalająca na zwrócenie błedu jaki sami zdefiniujemy, throw zatrzyma działanie skryptu błąd nie został przekazany dalej do systemu. Dlatego, że funkcja nie zwraca niczego i pozwala na dalsze działanie programu to jej typ jest never

// kolejnym przykładem never jest nieskończona pętla

while (true) {
   // ...
}

// ponieważ jeżeli na niej nie wymusimy return to nigdy nic nie zwroci
```

## Klasy i obiekty

> Obiekty są nie rozerwalnymi elementami klas, ponieważ na podstawie klasy powstają nowe instancje obiektów na podstawie wzoru jaki dostaraczają klasy.

#### Działanie klasy

Klasy są specjalnymi instancjami pozwalającymi na szybsze i sprawsniejsze tworzenie takich samych obiektów, posiadających identyczną strukturę oraz identyczne zastosowanie, ale mogą przechowywać różne wartości. Oczywiście w ramach udostępnionych własności poprzez klasę.

> Klasę można nazwać schematem dzięki, któremu buduje się obiekty

Klasy posiadają wewanątrz siebie specjalną metodę `constructor` która jest uruchamiana podczas tworzenia nowej instacji klasy, czyli nowego obiektu na podstawie klasy.

```ts
class SimpleClass {
   name: string; // własność klasy name, która będzie występować w każdym obiekcie jaki powstanie na podstawie klasy SimpleClass

   constructor(name: string) {
      // konstuktor, specjalna metoda klasy gwarantująca, że wartości jakie zostaną w zdeklarowane powstaną podczas tworzenia obiektu.
      this.name = name;
   }
}

const element = new SimpleClass('Układanki'); // przypisanie powstałej instacji klasy (obiektu) do zmiennej element oraz nadanie jej właściwości name wartość "Układanki"

element.name; // dostanie się właściwości name obiektu element
```

#### Modyfikatory

`public` - modyfikator `public` jest modyfikatorem, który możemy nadać na każdą zmienną, metodę która jest zdeklarowana wewnątrz klasy ustawia jako dostępną dla każdego po notacji `klasa.metoda`.

`private` - modyfikatator `private` jest modyfikatorem, który nie pozwala na swobodny dostęp do włąsności klasy, tylko włąsności wenwątrz klasy mają dostęp do zmiennych, metod oznaczonych tym modyfikatorem.

Przy tworzeniu właściwości wraz z modyfikatorem `private` jest wymagane zdefiniowanie jej wartości jako pustej. Aby nie było wymagane przypisanie wartości do włąściwości w konstruktorze klasy dzięki czemu będziemy mieć pewność że zmienna jest prywatna.

Właściwości oznaczone modyfikatorem `private` nie mogą zostać odziedziczone, przez inne klasy.

`protect` - modyfikator `protect` jest modyfikatorem pozwalającym na zabezpieczenie naszych właściwości w klasie aby nie były dostępne publicze, ale aby były możliwe do odziedziczenia przez inne klasy

`readonly` - modyfikator mówiący sam za siebie, określenie właściwości modyfikatorem `readonly` zabezpieczy nam włąsciwość i nie pozwoli jej nadpisać

#### Dziedziczenie

Dziedziczenie jest to podstawowa funckja w `OOP` pozwalająca, na ograniczenie pisania repetywnego kodu, jeżeli posiadamy już logikę w jednej klasie to możemy ją odziedziczyć do kolejnej klasy i korzystać z logiki już przygotowanej.

```ts
class PoliceStation {
   name: string;

   constructor(name: string) {
      this.name = name;
   }
}

class DetectiveStation extends PoliceStation {}
```

Klasa dziedzicząca, również może skorzystać z swojego własnego konstruktora, jak i mieć swoje odrębne metody, właściwości.
Aby klasa dziedzicząca posiadała swoje włąściwości oraz mogła korzystać z włąściwości klasy dziedziczonej to w kontrukruktorze musi zostać dodane słowo `super` pozwalające nas sworzenie właściwości w obrębie klasy.

```ts
class DetectiveStation extends PoliceStation {
   case: string;

   constructor(name) {
    super(name); //uruchowienie konstruktora dziedziczonej klasy
    this.case = case;
   }
}
```

#### Getters & Setters

`get` - metoda `get` pozwala na pobranie wartości z włąściwości klasy, która jest zadeklarowana jako `private` lub `protected` oraz pozwala na manipulację wartością przed zwróceniem jej.

`set` - metoda `set` pozwala na przypisanie wartości do włąściwości klasy, która jest zadeklarowana jako `private` lub `protected` oraz pozwala na manipulację wartością przed przypisaniem jej.

```ts
class DetectiveStation extends PoliceStation {
   private _case: string;

   constructor(name) {
    super(name);
   }
 
   get case() {
      return this._case;
   }

   set case(value: string) {
      if (value.length < 3) {
         throw new Error('Za krótki opis sprawy');
      }
      this._case = value;
   }
}
```

#### Modyfikator `static`

Modyfikator statyczny pozwala na dostęp do metody, właściwości klasy bez konieczności tworzenia instancji klasy.

```ts
class DetectiveStation extends PoliceStation {
   private static _case: string;

   constructor(name) {
    super(name);
   }
 
   static get case() {
      return DetectiveStation._case;
   }

   static set case(value: string) {
      if (value.length < 3) {
         throw new Error('Za krótki opis sprawy');
      }
      DetectiveStation._case = value;
   }
}
```
