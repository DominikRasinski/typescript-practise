# Repozytorium do ćwiczenia wiedzy na temat TypeScript

> TypeScript sprawdza typy zmiennych już na poziomie kompilacji, fundamentalnie na tym poziomie się różni od JavaScript, który aby sprawdzić błędy w kodzie musi najpierw przejść kompilację i uruchomienie. A TS zwróci od razu błąd na samym początku kompilacji kodu.

## Słownik
`Singleton` - wzorzec projektowy, który opiera się na założeniu, że klasa może mieć tylko jeden obiekt, który jest dostępny globalnie w całej aplikacji.

## Spis treści

- [Repozytorium do ćwiczenia wiedzy na temat TypeScript](#repozytorium-do-ćwiczenia-wiedzy-na-temat-typescript)
  - [Słownik](#słownik)
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
      - [Modyfikator `abstract`](#modyfikator-abstract)
      - [Singleton \& Private Constructor](#singleton--private-constructor)
  - [Interfejsy](#interfejsy)
  - [Zaawansowane typowanie w TypeScript](#zaawansowane-typowanie-w-typescript)
    - [Intersection Types](#intersection-types)
    - [Discriminated Unions](#discriminated-unions)
    - [Guard Types](#guard-types)
      - [Guard za pomocą `instanceof`](#guard-za-pomocą-instanceof)
  - [Function overloads](#function-overloads)
  - [Index types](#index-types)
  - [Rzutowanie na typ `const`](#rzutowanie-na-typ-const)
  - [Generics Type](#generics-type)
    - [Wiele typów generycznych](#wiele-typów-generycznych)
    - [Ograniczanie typów generycznych](#ograniczanie-typów-generycznych)
  - [Typeof \& keyof](#typeof--keyof)
    - [Operator `typeof`](#operator-typeof)
    - [Operator `keyof`](#operator-keyof)
  - [Indexed Access Types](#indexed-access-types)
  - [Mapped Types](#mapped-types)
  - [Template literal types](#template-literal-types)
  - [Infer keyword](#infer-keyword)
  - [Conditional Types](#conditional-types)
  - [Utility types](#utility-types)
  - [Dekorator](#dekorator)
    - [EcmaScript Decorators](#ecmascript-decorators)
    - [Experimental Decorators](#experimental-decorators)
  - [ES Modules \& Namespace](#es-modules--namespace)
    - [Namespace](#namespace)
    - [ES Modules](#es-modules)

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

Aby móc skompilować aplikację, która zawiera więcej plików TS niż jeden, to zamiast używać dla każdego pliku komendy:

```bash
tsc nazwa_pliku.ts
```

Możemy wykorzystać do stworzenia całego projektu komendę:

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

Załóżmy, że tworzymy obiekt użytkownika, który ma zdefiniowane role jakie pozwalają mu na dostęp do odpowiednich funkcji systemu

```ts

const user {
    name: string,
    login: string,
    role: string,
} = {
    name: "Dominik",
    login: "dom",
    role: "ADMIN", // zamiast takiego nie standardowego zapisu możemy wykorzystać typ enum
}


enum Role {ADMIN, USER, AUTHOR};

const user2 {
    name: "Andrzej",
    login: "and",
    role: Role.USER,
}

```

Typ `enum` reprezentuje specjalny zestaw typów danych, który jest określany za pomocą słów czytelnych dla człowieka jak na przykład `"ADMIN, USER, AUTHOR"` każde słowo określa inną wartość, domyślne jeżeli nie określimy inaczej to wartość tych słów jest tłumaczona na INT od liczby 0 ... n.

#### Literal

Jest to określenie typu danych który przyjmuje konkretną wartość, ta wartość musi być stała i nie zmienna przez cały okres działania aplikacji.

Przykład:

```ts
const IMPORTANT_VAR = 5; //literał określający zmienną IMPORTANT_VAR, że posiada tylko i wyłącznie liczbę 5 jako wartość i nie jest ona podawana, żadnej modyfikacji
```

### Funkcje

Funkcje w TS również przyjmują typy, ale typ w funkcji oznacza jaką wartość ma zamiar zwrócić o ile w ogóle funkcja ma zamiar zwracać jakąkolwiek wartość.

```ts
function stringValue(value: string): string {
   return value;
} // funkcja o typie string ponieważ zwraca wartość typu string itd.

function executeCallback(callback: () => void): void {
   callback();
} // funkcja o typie void, ponieważ funkcja executeCallback nie zwraca przekazanej do niej funkcji, a tylko ją wykonuje
// chociaż funkcja callback jest również zamknięta na możliwość zwrócenia wartości bo jest typu void
```

Ciekawymi typami są typy:

-  any
-  unknown
-  void
-  never

Typ `any` jest specjalnym typem ponieważ jego użycie wyłącza nam dobrodziejstwa TS, wartości czy nawet funkcje o takim typie nie są sprawdzane przez kompilator pod względem błędów typowania, dlatego nie zaleca się ich nadużywać.

Typ `unknown` z zasady działania przypomina typ `any` pomimo podobieństwa to typ `unknown` nie daje nam wolnej ręki przy mieszaniu typów, jeżeli będziemy chcieli przypisać bez walidacji typ `unknown` do zmiennej zdeklarowanej jako dany typ na przykład `number` to TS na poziomie kompilacji powiadomi nas o błędzie. Bo nie będzie mieć pewności co kryje się pod typem `unknown`

Typ `void` jest to specjalny typ stosowany w funkcjach określający funkcje, które nie zwracają żadnej wartości.

Typ `never` jest typem, który podobnie jak typ `void` niczego nie zwraca ale typ `never` nie zwraca niczego ostatecznie, prowadząc do zatrzymania wykonywania dotychczasowych operacji, zazwyczaj ten typ jest wykorzystywany do tworzenia funkcji zwracających krytyczne błędy i mające za zadanie zatrzymanie aplikacji gdy taki błąd nastanie.

### Typy odmienne

#### Any

Typ `any` jest typem, który przyjmuje wszystkie wartości jako poprawne.
TS nie przyczepi się kiedy będziemy żonglować przypisanymi wartościami do zmiennej o typie `any` ponieważ do jej działania wszystkie typy są dopuszczone.

> Typ `any` jest bardzo elastyczny, ale ze względu na to, że TS nie sprawdza jakie typy danych znajdują się pod zmienną o type `any` **NIE POWINNIŚMY TEGO TYPU NADUŻYWAĆ** ponieważ tracimy panowanie nad aplikacją oraz nie możemy korzystać funkcji które dostarcza nam TS takich jak sprawdzanie błędów typowania.

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

Wszystkie powyższe operacje są dozwolone dla typu `any` ponieważ TS nie sprawdzi, czy takie operacje są dozwolone albo logiczne.

#### Unknown

Typ `unknown` jest to specjalny typ, który mówi programiście jak i kompilatorowi, że nie mamy pojęcia jakie dane mogą zostać przekazane pod zmienną o takim typie.

Zmienna o typie `unknown` pozwala nam na przypisanie do siebie wartości dowolnego typu: tablice, obiekty, liczby, znaki itd... Można rzec, że `unknown` jest podobny do typu `any`. Jednak typ `unknown` nadal sprawdza typy danych jakie są mu przekazywane i zwróci błąd podczas kompilacji w momencie kiedy nie dodamy walidacji aby mieć pewność jakie zmienne się pod taką zmienną kryją. A typ `any` zwróci błąd w momencie odpalenia aplikacji czyli `runtime`.

```ts
let userInput: unknown;

userInput = 10;
userInput = 'Dominik';

let value: string;

value = useInput; // <-- w tym momencie TS zwróci błąd, ponieważ określając zmienną "unknown" to nie mamy pewności jakie dane zostaną zwrócone, a w zmiennej value oczekujemy strikte danych typu "string"
```

#### Never

Typ `never` jest dosyć specyficznym typem ponieważ określa pustkę podobnie jak typ `void` ale typ `void` może zwrócić coś i pozwala na kontynuowanie programu.

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

> Obiekty są nie rozerwalnymi elementami klas, ponieważ na podstawie klasy powstają nowe instancje obiektów na podstawie wzoru jaki dostarczają klasy.

#### Działanie klasy

Klasy są specjalnymi instancjami pozwalającymi na szybsze i sprawniejsze tworzenie takich samych obiektów, posiadających identyczną strukturę oraz identyczne zastosowanie, ale mogą przechowywać różne wartości. Oczywiście w ramach udostępnionych własności poprzez klasę.

> Klasę można nazwać schematem dzięki, któremu buduje się obiekty

Klasy posiadają wewnątrz siebie specjalną metodę `constructor` która jest uruchamiana podczas tworzenia nowej instancji klasy, czyli nowego obiektu na podstawie klasy.

```ts
class SimpleClass {
   name: string; // własność klasy name, która będzie występować w każdym obiekcie jaki powstanie na podstawie klasy SimpleClass

   constructor(name: string) {
      // konstruktor, specjalna metoda klasy gwarantująca, że wartości jakie zostaną w zdeklarowane powstaną podczas tworzenia obiektu.
      this.name = name;
   }
}

const element = new SimpleClass('Układanki'); // przypisanie powstałej instancji klasy (obiektu) do zmiennej element oraz nadanie jej właściwości name wartość "Układanki"

element.name; // dostanie się właściwości name obiektu element
```

#### Modyfikatory

`public` - modyfikator `public` jest modyfikatorem, który możemy nadać na każdą zmienną, metodę która jest zdeklarowana wewnątrz klasy ustawia jako dostępną dla każdego po notacji `klasa.metoda`.

`private` - modyfikator `private` jest modyfikatorem, który nie pozwala na swobodny dostęp do własności klasy, tylko własności wewnątrz klasy mają dostęp do zmiennych, metod oznaczonych tym modyfikatorem.

Przy tworzeniu właściwości wraz z modyfikatorem `private` jest wymagane zdefiniowanie jej wartości jako pustej. Aby nie było wymagane przypisanie wartości do właściwości w konstruktorze klasy dzięki czemu będziemy mieć pewność że zmienna jest prywatna.

Właściwości oznaczone modyfikatorem `private` nie mogą zostać odziedziczone, przez inne klasy.

`protect` - modyfikator `protect` jest modyfikatorem pozwalającym na zabezpieczenie naszych właściwości w klasie aby nie były dostępne publicznie, ale aby były możliwe do odziedziczenia przez inne klasy

`readonly` - modyfikator mówiący sam za siebie, określenie właściwości modyfikatorem `readonly` zabezpieczy nam właściwość i nie pozwoli jej nadpisać

#### Dziedziczenie

Dziedziczenie jest to podstawowa funkcja w `OOP` pozwalająca, na ograniczenie pisania repetywnego kodu, jeżeli posiadamy już logikę w jednej klasie to możemy ją odziedziczyć do kolejnej klasy i korzystać z logiki już przygotowanej.

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
Aby klasa dziedzicząca posiadała swoje właściwości oraz mogła korzystać z właściwości klasy dziedziczonej to w konstruktorze musi zostać dodane słowo `super` pozwalające nas stworzenie właściwości w obrębie klasy.

```ts
class DetectiveStation extends PoliceStation {
   case: string;

   constructor(name) {
    super(name); //uruchomienie konstruktora dziedziczonej klasy
    this.case = case;
   }
}
```

#### Getters & Setters

`get` - metoda `get` pozwala na pobranie wartości z właściwości klasy, która jest zadeklarowana jako `private` lub `protected` oraz pozwala na manipulację wartością przed zwróceniem jej.

`set` - metoda `set` pozwala na przypisanie wartości do właściwości klasy, która jest zadeklarowana jako `private` lub `protected` oraz pozwala na manipulację wartością przed przypisaniem jej.

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

#### Modyfikator `abstract`

Modyfikator `abstract` pozwala na zdeklarowanie klasy abstrakcyjnej która nie może być instancjonowana, ale może być dziedziczona przez inne klasy. Jeżeli klasa abstrakt zostanie odziedziczona wymusza ona na klasie dziedzicznej implementację wszystkich metod, właściwości które zostały zadeklarowane jako abstrakcyjne.

Modyfikator `abstract` również pozwala na zadeklarowanie metody abstrakcyjnej, która wymusza na klasie dziedzicznej implementację tej metody.

```ts
abstract class DetectiveStation  { // Klasa DetectiveStation jest klasą abstrakcyjną
   private static _case: string;
 
   static get case() {
      return DetectiveStation._case;
   }

   static set case(value: string) {
      if (value.length < 3) {
         throw new Error('Za krótki opis sprawy');
      }
      DetectiveStation._case = value;
   }

   abstract solveCase(): void; // metoda abstrakcyjna wymuszająca na klasie dziedzicznej implementację tej metody
   // jak można zauważyć to metoda abstrakcyjna nie posiada ciała funkcji, tylko deklarację
}

class Detective extends DetectiveStation { //Klasa Detective dziedziczy po klasie DetectiveStation

   constructor() {
      super();
   }

   solveCase() { // implementacja metody abstrakcyjnej solveCase która jest wymuszona przez klasę abstrakcyjną DetectiveStation
      console.log('Rozwiązanie sprawy');
   }
}
```

#### Singleton & Private Constructor

`Singleton` jest wzorcem projektowym, który opiera się na założeniu, że klasa może mieć tylko jeden obiekt, który jest dostępny globalnie w całej aplikacji.

Aby stworzyć taką klasę musimy skorzystać z modyfikatora `private` na konstruktorze klasy, co spowoduje, że konstruktor będzie jedynie dostępy z środka klasy i nie będzie dostępny z zewnątrz. Aby wywołać taki konstruktor musimy skorzystać z metody statycznej, która z zasady nie potrzeby instancji klasy do działania i ma dostęp do wewnętrznych właściwości klasy.

```ts
class Singleton {
   private static instance: Singleton;

   private constructor() {}

   static getInstance() {
      if (!Singleton.instance) {
         Singleton.instance = new Singleton();
      }
      return Singleton.instance;
   }
}

const instance = Singleton.getInstance();
```

## Interfejsy

Interfejs jest bardzo podobny z zachowaniem do abstrakcyjnej klasy, chociaż różni go to, że nie implementujemy w nim żadnej logiki a tylko typy danych jakie mają być przekazane do klasy, funkcji, obiektu.

Interfejsy używane są przeważnie w dwóch przypadkach:

-  gdy chcemy zadeklarować typ danych, które mają być przekazane do funkcji, klasy, obiektu
-  podczas tworzenia kontraktu dla klasy, który ma zostać zaimplementowany, coś w podobny sposób jak abstrakcyjna klasa wymusza implementację metod, właściwości.

Różnica między zdeklarowaniem typów za pomocą słowa `type` oraz `interface` jest nie wielka, jedyną największą różnicą jest to, że `interface` pozwala na rozszerzenie interfejsu za pomocą mechanizmu `Declaration merging` oraz może być rozszerzony przez inny interfejs za pomocą dziedziczenia `extends`.

```ts
interface Person {
   name: string;
   age: number;
}

// implementacja interfejsu Person jako object type
const person: Person = {
   name: 'Dominik',
   age: 25,
};

// odziedziczenie interfejsu Persona przez interfejs DetectiveType
interface DetectiveType extends Person {
   solveCase(): void;
}

// wymuszenie implementacji interfejsu DetectiveType w klasie Detective za pomocą słowa implements
class Detective implements DetectiveType {
   name: string;
   age: number;

   constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
   }

   solveCase() {
      console.log('Rozwiązanie sprawy');
   }
}
```

`Declaration merging` - jest mechanizmem nie jawnym w TS zadzieje się w momencie kiedy zdefiniujemy interfejs o tej samej nazwie, co już zdefiniowany interfejs. Wtedy TS połączy oba interfejsy w jeden.

```ts
interface Person { // bazowa deklaracja interfejsu Person
   name: string;
   age: number;
}

interface Person { // rozszerzenie interfejsu Person o dodatkową właściwość
   solveCase(): void;
}

const detective: Person = {
   name: 'Dominik',
   age: 25,
   solveCase() {
      console.log('Rozwiązanie sprawy');
   },
};
```
## Zaawansowane typowanie w TypeScript

### Intersection Types

Typ `Intersection` pozwala na połączenie dwóch typów w jeden, co pozwala na wykorzystanie obu typów w jednym miejscu.
Intersekcję typów można zrobić za pomocą znaku `&` oraz podanie dwóch typów jakie chcemy połączyć.

```ts
type Admin = {
   name: string;
   role: string;
};

type Detective = {
   name: string;
   case: string;
};

type DetectiveAdmin = Admin & Detective; 

const detectiveAdmin: DetectiveAdmin = {
   name: 'Dominik',
   role: 'ADMIN',
   case: 'Rozwiązanie sprawy',
};
```
### Discriminated Unions

Zasadą działa unii dyskryminacyjnej jest połączenie kilku typów, ale każdy z nich posiada unikalną wartość, która pozwala na rozróżnienie jednego typu od drugiego.

```ts

enum Role {INTERVENTION, K9, FBI};

type Cop = {
   type: 'cop'; // unikalna wartość dla typu
   name: string;
   role: string;
};

type Detective = {
   type: 'detective'; // unikalna wartość dla typu
   name: string;
   case: string;
};

type User = Cop | Detective; // utworzenie unii dyskryminacyjnej

const user: User = {
   type: 'cop',
   name: 'Dominik',
   role: Role.INTERVENTION,
};

const checkUser = (user: User) => {
   // dzięki unii dyskryminacyjnej możemy sprawdzić jaki typ danych jest przekazany
   // i wykonać odpowiednią akcję
   if (user.type === 'cop') {
      console.log('To jest policjant');
   } else {
      console.log('To jest detektyw');
   }
};

```
### Guard Types

Typ `Guard` pozwala na sprawdzenie typu danych, które są przekazywane do funkcji, klasy, obiektu. Guard pozwala na sprawdzenie typu danych i zwrócenie wartości `true` lub `false` w zależności od tego czy typ danych jest zgodny z oczekiwanym.

Za pomocą operatora `is` oraz `user is Cop` możemy sprawdzić czy przekazane dane są zgodne z oczekiwanym typem.

```ts
// funkcja sprawdzająca czy przekazane dane są zgodne z typem Cop
const isCop = (user: User): user is Cop => {
   return user.type === 'cop';
};

const checkUser = (user: User) => {
   if (isCop(user)) {
      console.log('To jest policjant');
   } else {
      console.log('To jest detektyw');
   }
};
```

#### Guard za pomocą `instanceof`

Guard za pomocą `instanceof` pozwala na sprawdzenie czy przekazane dane są instancją klasy.

```ts
class Cop {
   name: string;
   role: string;

   constructor(name: string, role: string) {
      this.name = name;
      this.role = role;
   }
}

class Detective {
   name: string;
   case: string;

   constructor(name: string, case: string) {
      this.name = name;
      this.case = case;
   }
}

const checkUser = (user: Cop | Detective) => {
   if (user instanceof Cop) { // sprawdzenie czy przekazane dane są instancją klasy Cop
      console.log('To jest policjant');
   } else {
      console.log('To jest detektyw');
   }
};
```

## Function overloads

Funkcje w TS mogą być "przeciążane" co pozwala na zdefiniowanie kilku możliwości jakie dane mogą zostać zwrócone na podstawie przekazanych parametrów do funkcji.

```ts
// deklaracja przeciążenia dla funkcji add na podstawie jaki typ danych zostanie przekazany
function add(a: number, b: number): number; // deklaracja funkcji add z dwoma parametrami typu number i zwracająca wartość typu number
function add(a: string, b: string): string; // deklaracja funkcji add z dwoma parametrami typu string i zwracająca wartość typu string 

function add(a: number | string, b: number | string) { // implementacja funkcji add z dwoma parametrami typu number lub string i zwracająca wartość typu number lub string
   if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
   }
   return a.toString() + b.toString();
}

add(1, 2); // 3
add('1', '2'); // '12'
```

## Index types

Index types pozwalają na dynamiczne zdeponowanie typów danych jakie mogą być przekazane do obiektu, klasy. Pozwala to rozszerzać obiekt dynamicznie o nowe właściwości o ile takie będą się zgadać z typem danych zdefiniowanym w index types.

```ts
interface ErrorContainer {
   [prop: string]: string; // index types pozwala na dynamiczne dodawanie nowych właściwości do obiektu
}

const errorBag: ErrorContainer = {
   email: 'Niepoprawny email',
   username: 'Nazwa użytkownika jest za krótka',
};
```

## Rzutowanie na typ `const`

Rzutowanie na typ `const` pozwala na zdefiniowanie stałej wartości, która nie może być zmieniona w trakcie działania aplikacji. Taka wartość/zmienna przyjmuje typ `readonly` który nie pozwala na jakiekolwiek mutacje, nawet na tablicy nie możemy wykorzystać metody `push()` bo zwróci błąd, nie tylko taka metoda ale wszystkie metody, które mutują wartość tablicy.

Aby dokonać rzutowania na typ `const` należy dodać na koniec deklaracji zmiennej `as const`.

```ts
const names: string[] = ['Dominik', 'Tomek', 'Mateusz'] as const; // rzutowanie na typ const

// próba modyfikacji wartości tablicy names
names.push('Andrzej'); // błąd
```

## Generics Type

Typy generyczne są dosyć często wykorzystywane w TS ponieważ pozwalają na tworzenie uniwersalnych funkcji, klas, obiektów, które mogą przyjmować różne typy danych.

Typ generyczny deklarujemy za pomocą znaku `<>` oraz podania wewnątrz znaków `template` pozwalający na zdefiniowanie dowolnego typu danych jakie chcemy obsłużyć. `Template` typu jakiego chcemy użyć zazwyczaj oznaczamy dużą literą `T` ale możemy użyć jaki dowolnej litery, słowa.

Typy generyczne nie są ograniczone tylko do jednego typu możemy po przecinku dodać większą ilość typów jakie chcemy obsłużyć.

```ts
const identity = <T>(arg: T): T => {
   return arg;
};

identity('Dominik'); // zwróci string
identity(25); // zwróci number
```

### Wiele typów generycznych

Typy generyczne mogą również tworzyć bardziej skomplikowane zależności jak na przykład funkcja przyjmująca nie tylko jeden typ danych ale również wiele różnych typów danych.

```ts

const merge = <T, U>(obj1: T, obj2: U): T & U => {
   return { ...obj1, ...obj2 };
};

const mergedObj = merge({ name: 'Dominik' }, { age: 25 });

```
### Ograniczanie typów generycznych

Typy generyczne używane jako `template` mogą przyjmować dowolne typy danych, co w niektórych przypadkach może prowadzić do błędów, dlatego warto ograniczyć typy generyczne do konkretnych typów danych. Aby ograniczyć generyczne typy danych musimy skorzystać z operatora `extends` oraz podania typu danych jakie chcemy obsłużyć.

```ts
const merge = <T extends object, U extends object>(obj1: T, obj2: U): T & U => {
   return { ...obj1, ...obj2 };
};

const mergedObj = merge({ name: 'Dominik' }, { age: 25 });
```

## Typeof & keyof

### Operator `typeof`
Operator `typeof` pozwala na sprawdzenie typu danych jakie są przekazane do funkcji, klasy, obiektu.

W TS `typeof` posiada dodatkowe możliwości niż tylko sprawdzanie typów danych jakie zostały przekazane do zmiennej itp... operator `typeof` pozwala na szybkie przypisanie typu danych do typu danych na którym będziemy operować w funkcji, obiekcie, klasie.

```ts

const person = {
   name: 'Dominik',
   age: 25,
};

type Person = typeof person; // przypisanie typu danych z obiektu person do zmiennej Person

const anotherPerson: Person = {
   name: 'Tomek',
   age: 30,
};

```

### Operator `keyof`
Operator `keyof` pozwala na pobranie kluczy jakie znajdują się w obiekcie, klasie.

```ts
const person = {
   name: 'Dominik',
   age: 25,
};

type Person = keyof typeof person; // pobranie kluczy jakie znajdują się w obiekcie person

const key: Person = 'name'; // przypisanie klucza do zmiennej key
```

## Indexed Access Types

Indexed Access Types pozwala na dostęp do wartości w elemencie policzalnym jak obiekt, tablica.

```ts 
interface Person {
   name: string;
   age: number;
   job: string;
   permission: {
      read: boolean;
      write: boolean;
   }[]
}
```
Dostęp do wartości `permission` z obiektu `Person` ale typ nadal będzie kolekcją

```ts
type Permission = Person['permission']; // pobranie wartości z tablicy permission

```

Aby zawęzić typ danych do pojedynczego typu możemy skorzystać z indeksu `number` w tablicy `permission`

```ts
type Perm = Permission[number]; // pobranie wartości z tablicy permission
```

Typ `Perm` przyjmie teraz wartości z tablicy permission. Za pomocą podania w tablicy indeksu `number` możemy zwrócić indeksy jakie znajdują się w tablicy permission.


## Mapped Types

Typy `mapped` pozwalają na dynamiczne tworzenie nowych typów danych na podstawie już istniejących, poprzez mapowanie typów jakie zanajdują się już w istniejących zbiorach typów `type` | `interface`.

```ts
// Przygotowanie bazowego typu danych
type Android = {
   name: string;
   protocol: string;
   weapon: string;
}

// Mapowanie typu bazowego, oraz dodanie modyfikatora readonly
type AndroidReadOnly = {
   readonly [P in keyof Android]: string;
}

// Stworzenie nowego typu danych na podstawie typu bazowego, ale zmodyfikowanie go
// aby wszystkie własności typu bazowego były opcjonalne
type AndroidPartial = {
   [P in keyof Android]?: string;
}

const Eve: AndroidReadOnly = {
   name: 'Eve',
   protocol: 'EVE',
   weapon: 'Blade'
}

const Adam: AndroidPartial = {
   name: 'Adam',
   protocol: 'ADAM',
}

```

## Template literal types

Typy na podstawie template literal przyspieszają tworzenie typów danych, które są tworzenie na uniach typów i muszą posiadać wariacje wartości tych unii typów.

```ts
type WritePermission = 'WRITE' | 'NO_WRITE';
type ReadPermission = 'READ' | 'NO_READ';

type Permission = `${WritePermission}-${ReadPermission}`; // stworzenie typu danych na podstawie template literal
```

## Infer keyword

Słowo kluczowe `infer` pozwala na wydobycie zagnieżdżonych typów danych wewnątrz innego typu, co pozwala na dynamiczne tworzenie typów danych na podstawie innych typów.

```ts
type ExtractType<T> = T extends { name: infer U } ? U : never; // infer pozwala na wydostanie typu danych z innego typu danych

type NameType = ExtractType<{ name: string }>; // zwróci string
```

## Conditional Types

Typy warunkowe pozwalają na dynamiczne tworzenie typów danych na podstawie warunków jakie są spełnione.

```ts
type CheckType<T> = T extends string ? 'String' : 'Not string'; // stworzenie typu danych na podstawie warunku

type StringType = CheckType<string>; // zwróci 'String'
type NumberType = CheckType<number>; // zwróci 'Not string'
```

## Utility types

W TS nie musimy tworzyć typów danych od zera, ponieważ TS dostarcza nam gotowe typy danych, które możemy wykorzystać w naszych aplikacjach.
📚 https://www.typescriptlang.org/docs/handbook/utility-types.html

## Dekorator

`Dekorator` to specjalny kawałek kodu który współpracuje z kodem mu przekazanym, ale ma wpływ na jego działanie. Dekoratory są używane w TS do modyfikacji klas, metod, właściwości, obiektów **ale jedynie mogą być obsłużone przez klasy bo są częścią OOP**

Dekoratory w TS są rozróżniane na dwa gatunki:
1. `EcmaScript Decorators` - dekoratory wspierane, przez EcmaScript oraz możliwe do wykorzystania w JS jak zostaną dodane.
2. `Experimental Decorators` - legacy dekoratory, nie mogą działać bez TS.

### EcmaScript Decorators

Dekoratory `EcmaScript` oczekują co najmniej dwóch parametrów aby funkcjonować prawidłowo. Aby stworzyć dekorator musimy najpierw stowrzyć funkcję która będzie przyjmować parametr `target` którym będzie klasa do której dekorator zostanie dodany oraz parametr context `ctx` którego typ jest specjalnie dostarczany przez TS `ClassDecoratorContext`

**Użycie:**

Prosty dekorator zwracający informacje o klasie

```ts
function logClass(target: any, ctx: ClassDecoratorContext) {
   console.log(target); // zwroci nam target jako klase Android
   console.log(ctx); // zwroci nam context całej klasy
}

@logClass // wykorzystanie dekoratora na klasie Android
class Android {
   name: string;
   protocol: string;
   weapon: string;

   constructor(name: string, protocol: string, weapon: string) {
      this.name = name;
      this.protocol = protocol;
      this.weapon = weapon;
   }
}
```
> Dekorator uruchomi się w momencie kompilacji kodu, nawet bez wywołania oraz instancjonowania klasy

---

Dekorator zwracający zmodyfikowaną klasę.
Aby korzystać z dekoratora który modyfikuję klasę, musimy skorzystać typu generycznego dla parametru `target`, który zawęzimy tylko do obsługi klas.

```ts
<T extend new (...args: any[]) => any> // typ dla parametru target: T
```
> Specjalny zapis typu generycznego mówiący, że oczekujemy tylko i wyłącznie typu Class
> Skorzystanie z konstruktora `new` przed zapisem funkcyjnym `() => any` mówi TS, że oczekujemy parametru typu klas
> Parametry `...args: any[]` mówią, że przyjmujemy dowolną liczbę parametrów dowolnego typu

Podczas modyfikowania klasy, dekorator musi zwrócić nową anonimową klasę na postawie klasy jaką przyjmie

```ts

function corruption<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext) {
   return class extends target { // zwrocenie anonimowej klasy na podstawie klasy przekazanej pod parametrem target
      corruption = "corrupted"
   }
}

@corruption
class Android {
   name = "Tachy"
}

```

### Experimental Decorators

Na razie temat Dekoratorów eksperymentalnych pozostawiam, bez większego zagnieżdżenia się w nie, ponieważ są wskazywane jako `LEGACY`.
Chociaż pewnie się zajmę tym tematem w wolnej chwili, a póki co pozostawiam tylko link do tematu w dokumentacji TS

> Aby skorzystać z `Experimental Decorators` musimy najpierw postawić projekt korzystając z komendy `ts --init`, dzięki temu będziemy posiadać
> plik `tsconfig.json` w nim musimy odnaleźć flagę i od komentować ją, dzięki temu projekt będzie mógł korzystać z legacy dekoratorów
> `   // "experimentalDecorators": true,` - jeżeli flaga pozostanie za komentowana to kompilator będzie rzucać błąd składni

📚 https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#differences-with-experimental-legacy-decorators
📚 https://www.typescriptlang.org/docs/handbook/decorators.html

## ES Modules & Namespace

### Namespace

`Namespace` jest to jedna z technik pozwalająca na organizowanie kodu, `namespace` pozwala na wyciągnięcie kodu do innych plików do których możemy tworzyć odwołania.

Aby skorzystać z tego sposobu musimy dany kawałek kodu wyciągnąć do innego pliku o oznaczyć go jako `namespace`:

> `Namespace` natywnie działa tylko w `TS` jeżeli chcemy również działał w projektach korzystających z `JS` musimy wykonać poniższe operacje, aby kompilator tworzył boundle.js
> Aby korzystać z `namespace` musimy w pliku `tsconfig.json` poustawiać flagi
> `"module": "none", "outFile": "./dist/output.js"` - module może być wymagane wskazanie odpowiedniego sposobu
> takiego jak `amd` lub inny.

```ts

// =========== START Plik validation.ts =========
namespace ValidInterfaces {
   export interface validEmail {
      email: string;
      checkEmail(email: string): boolean;
   }

   export interface validLogin {
      login: string;
      checkLogin(login: string): boolean;
   }
}
// =========== END Plik validation.ts =========

// specjalny zapis pozwalajacy na odniesienie sie do namespace w TS
// w zapisie musza zostac zawarte trzy znaki slash oraz tag otwierajacy i zamykajacy
/// <reference path="validation.ts" /> 

class EmailValidator implements ValidInterfaces.validEmail {
   email: string;

   constructor(email: string) {
      this.email = email;
   }

   checkEmail(email: string) {
      if(email) {
         return email.includes("@");
      }
      return false;
   }
}

```

Wadą korzystania z `namespace` jest to, że nie `TS` nie ma pojęcia czy referowany plik dalej istnieje, lub został zmieniony, w taki sposób, że oczekiwana zawartość pliku już nie istnieje.

Dlatego lepszym pomysłem jest korzystanie z `ES Modules`.

### ES Modules