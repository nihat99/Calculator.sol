// Calculator.test.js
const { expect } = require("chai"); // Используем библиотеку 'chai' для проверок

// Документация:
// Этот файл содержит тесты для контракта Calculator.
// describe() группирует тесты, а it() определяет конкретный тестовый случай.

describe("Calculator Contract", function () {
  let calculator;

  // Этот блок выполняется один раз перед всеми тестами.
  // Здесь мы разворачиваем контракт, чтобы тесты могли с ним работать.
  before(async function () {
    const Calculator = await ethers.getContractFactory("Calculator");
    calculator = await Calculator.deploy();
    await calculator.waitForDeployment();
  });

  it("Should return 0 as the initial result", async function () {
    // Проверяем, что начальное значение результата равно 0
    expect(await calculator.getResult()).to.equal(0);
  });

  it("Should add a number correctly", async function () {
    // Устанавливаем начальное значение 10
    await calculator.set(10);
    // Добавляем 5
    await calculator.add(5);
    // Ожидаем, что результат будет 15
    expect(await calculator.getResult()).to.equal(15);
  });

  it("Should subtract a number correctly", async function () {
    // Устанавливаем начальное значение 20
    await calculator.set(20);
    // Вычитаем 8
    await calculator.subtract(8);
    // Ожидаем, что результат будет 12
    expect(await calculator.getResult()).to.equal(12);
  });

  it("Should revert when dividing by zero", async function () {
    // Устанавливаем начальное значение 100
    await calculator.set(100);
    // Проверяем, что попытка деления на ноль вызовет ошибку (revert)
    // с ожидаемым сообщением.
    await expect(calculator.divide(0)).to.be.revertedWith("Error: Division by zero.");
  });
});
