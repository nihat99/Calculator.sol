// deploy.js

// Документация:
// Этот скрипт использует ethers.js (библиотека для взаимодействия с Ethereum)
// для развертывания (деплоя) нашего смарт-контракта 'Calculator'.

async function main() {
  // 1. Получаем объект "фабрики" для нашего контракта.
  // Фабрика - это абстракция, используемая для деплоя новых смарт-контрактов.
  const Calculator = await hre.ethers.getContractFactory("Calculator");
  console.log("Deploying Calculator contract...");

  // 2. Вызываем deploy() на фабрике, чтобы начать развертывание.
  // Это отправляет транзакцию в сеть.
  const calculator = await Calculator.deploy();

  // 3. Ждем, пока транзакция будет подтверждена и контракт появится в сети.
  await calculator.waitForDeployment();

  // 4. Выводим адрес, по которому был развернут наш контракт.
  // Этот адрес понадобится для взаимодействия с контрактом в будущем.
  const contractAddress = await calculator.getAddress();
  console.log(`Calculator deployed to: ${contractAddress}`);
}

// Стандартный паттерн для запуска асинхронной функции main()
// и корректной обработки ошибок.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
