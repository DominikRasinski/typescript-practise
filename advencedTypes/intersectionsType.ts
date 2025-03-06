type Admin = {
    name: string;
    role: string;
 };
 
 type Detective = {
    name: string;
    case: string;
 };
 
 type DetectiveAdmin = Admin & Detective; //użycie znaku & do połączenie dwóch typów i stworzenia z niego intersection type
 
 const detectiveAdmin: DetectiveAdmin = {
    name: 'Dominik',
    role: 'ADMIN',
    case: 'Rozwiązanie sprawy',
 };

 console.log(detectiveAdmin);