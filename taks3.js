function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

// Пример использования функции
const addFive = createAdder(5);
const result = addFive(3);
console.log(result); // Выведет 8 в консоль
