// const values = ['a', 'b', 'c'];
// values.forEach(number => console.log(number));

// console.log(values)




// ********map******** \\
// const result = users.map(currentUser => {
//     console.log(currentUser)
//     return currentUser.name;
// })

// const result = users.map(({ name }) => name);
// const result = users.map(({ age }) => age);

// console.log(result)

// ********flatMap******** \\
// const result = users.flatMap((currentUser) => {
//     console.log(currentUser.skills)
//     return currentUser.skills
// })

// console.log(result)
// ********flat******** \\
// const arr = [1, 2, 3, [1, [2, 3, 4]]];
// const result = arr.flat();
// console.log(result)

// const usersSkills = users.map(({ skills }) => skills);
// console.log(usersSkills)
// const usersSkillsList = usersSkills.flat(1)
// console.log(usersSkillsList)

// ********filter******** \\


// const result = users.filter(({ age }) => age > 30);
// console.log(result)


// ********find******** \\
// const jsDeveloper = users.find(currentUser => {
//     return currentUser.skills.includes('Jango');
// })
// console.log(jsDeveloper)

// ********findIndex********\\


// const index = users.findIndex(currentUser => currentUser.id === 0);
// console.log(index)

// ********some********\\
// const result = users.some(currentUser => {
//     return currentUser.skills.includes('JavaScript');
// });
// console.log(result)


// ********every ********\\
// const isUsersAdult = users.every(({ age }) => age > 20 && age <= 40)

// console.log(isUsersAdult)


// ********sort********\\
// const numbers = [4, 3, 2, 6, 9, 10, 1];

// numbers.sort((a, b) => {
//     return b - a;
// })

// console.log(numbers)

// const stringArray = ['b', 'c', 'a', 'd', 'a'];

// stringArray.sort((a, b) => {
//     return b.localeCompare(a);
// })
// console.log(stringArray)



// users.sort((a, b) => {
//     const aAge = a.age;
//     const bAge = b.age;

//     return aAge - bAge;
// })

// console.log(users);

// ********reduce********\\
// const users = [
//     { id: 2, name: 'Alice', age: 32, skills: ['Python', 'Data Analysis'] },
//     { id: 1, name: 'John', age: 28, skills: ['JavaScript', 'HTML', 'CSS'] },
//     { id: 3, name: 'Bob', age: 24, skills: ['JavaScript', 'React', 'Node.js'] },
//     { id: 4, name: 'Emily', age: 40, skills: ['Java', 'Spring'] },
//     { id: 5, name: 'David', age: 22, skills: ['C++', 'C#'] }
// ];

// const result = users.reduce((acc, currentUser) => {
//     console.log(acc)
//     console.log(currentUser)
//     return acc + currentUser.age;
// }, 0)
// console.log(result);


// ****************Практика**************** \\

// Task-1
// Напишіть функцію, яка використовує метод map, щоб створити новий масив об'єктів, в якому буде інформація про середній бал кожного студента.

// const students = [
//     { name: 'John', grades: [80, 85, 90] },
//     { name: 'Alice', grades: [90, 95, 92] },
//     { name: 'Bob', grades: [70, 80, 75] },
//     { name: 'Emily', grades: [95, 92, 88] },
//     { name: 'David', grades: [85, 88, 90] }
// ];

// function getAverage(arr) {
//     const result = arr.map(user => {
//         const userGrades = user.grades; // array
    
//         const total = userGrades.reduce((acc, currentValue) => {
//             return acc + currentValue;
//         }, 0)
        
//         return {
//             name: user.name,
//             average: Math.round(total / userGrades.length)
//         }
//     })

//     return result;
// }

// console.log(getAverage(students));





// Task-2
// Напишіть функцію, яка використовує метод find, щоб знайти книжку за її назвою (title).
// Якщо книгу не знайдено повертається рядок 'Not found'.
// const books = [
//     { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
//     { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', year: 2008 },
//     { title: 'The Pragmatic Programmer: Your Journey to Mastery', author: 'Andrew Hunt, David Thomas', year: 1999 },
//     { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', year: 1994 },
//     { title: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler', year: 1999 }
// ];


// function getBook(arr, title) {
//     const book = arr.find((currentBook) => {
//         return currentBook.title === title;
//     })
//     return book || 'Not found';
// }
// console.log(getBook(books, 'Design Patterns: Elements of Reusable Object-Oriented Software'));
// console.log(getBook(books, 'qwerty'));





// Task-3
// Напишіть функцію, яка використовує метод sort, щоб відсортувати книжки за роком видання у спадаючому порядку.
// Результат повинен бути відсортованим масивом книжок за роком видання.

// const books = [
//     { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
//     { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', year: 2008 },
//     { title: 'The Pragmatic Programmer: Your Journey to Mastery', author: 'Andrew Hunt, David Thomas', year: 1999 },
//     { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', year: 1994 },
//     { title: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler', year: 1999 }
// ];

// function sortDesc(arr) {

// }
// console.log(sortDesc(books));

// Questions

const arr = [0, 4, 6]; 
const result = arr.filter((el) => el * 2); 
console.log(result);