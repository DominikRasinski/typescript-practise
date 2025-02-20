# Repozytorium do ćwiczenia wiedzy na temat TypeScript

> TypeScript sprawdza typy zmiennych już na poziomie kompilacji, fundamentalnie na tym poziomie się różni od JavaScript, który aby sprawdzić błędy w kodzie musi najpierw przejść kompilację i uruchomienie. A TS zwróci od razu błąd na samym początku kompilacji kodu.

## Spis treści

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

### Typy odmienne

#### Any

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
