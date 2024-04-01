function isPrime(number) {
    if (number > 1000) {
        console.log("Данные неверны. Введите число до 1000.");
        return;
    }

    if (number < 2) {
        console.log(`${number} не является простым числом.`);
        return;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(`${number} не является простым числом.`);
            return;
        }
    }

    console.log(`${number} - простое число.`);
}

// Пример использования функции
isPrime(17); // Пример простого числа
isPrime(1001); // Пример числа больше 1000
isPrime(10); // Пример составного числа
