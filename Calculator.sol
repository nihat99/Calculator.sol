// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/*
 * Документация:
 * Этот смарт-контракт представляет собой простой калькулятор.
 * Он хранит результат последнего вычисления в переменной 'result'.
 * Функции add, subtract, multiply, divide изменяют это состояние.
 * Функция getResult() позволяет прочитать текущий результат.
 */
contract Calculator {

    // Переменная состояния для хранения результата
    int256 public result;

    // Функция для сложения
    function add(int256 _value) public {
        result = result + _value;
    }

    // Функция для вычитания
    function subtract(int256 _value) public {
        result = result - _value;
    }

    // Функция для умножения
    function multiply(int256 _value) public {
        // Умножение на 0 сбрасывает результат
        result = result * _value;
    }

    // Функция для деления
    function divide(int256 _value) public {
        // Требуем, чтобы делитель не был равен нулю
        require(_value != 0, "Error: Division by zero.");
        result = result / _value;
    }

    // Функция для установки начального значения (или сброса)
    function set(int256 _value) public {
        result = _value;
    }

    // Функция для получения текущего результата (хотя 'result' уже public)
    function getResult() public view returns (int256) {
        return result;
    }
}
