// hardhat.config.js
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // Указываем версию компилятора Solidity, которую мы использовали в контракте
  solidity: "0.8.20",
  networks: {
    // Эта секция нужна для подключения к разным сетям.
    // Пока что мы будем использовать встроенную тестовую сеть Hardhat.
    hardhat: {},
  }
};
