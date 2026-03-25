# 🎲 Generator liczb losowych (WIOSNA)

Prosta aplikacja webowa napisana w HTML, CSS i JavaScript, która losuje 6 unikalnych liczb z zakresu 1–49.

## ⚙️ Funkcjonalności

- Losowanie unikalnych liczb (brak powtórzeń)
- Maksymalnie 6 wylosowanych liczb
- Wyświetlanie liczby pozostałych losowań
- Możliwość resetowania losowania



##  Jak działa aplikacja

1. Kliknięcie przycisku **„Dodaj liczbę”**:
   - Losowana jest liczba z zakresu 1–49
   - Liczba nie może się powtórzyć
   - Wynik jest wyświetlany na ekranie
   - Licznik pozostałych losowań zmniejsza się o 1

2. Po wylosowaniu 6 liczb:
   - Przycisk zostaje zablokowany

3. Kliknięcie przycisku **„Wyczyść”**:
   - Resetuje wszystkie liczby
   - Przywraca licznik do 6

## Kluczowe funkcje (JavaScript)

### `RNG(max, min)`
Generuje losową liczbę z podanego zakresu, upewniając się, że nie została wcześniej wylosowana.

### `displayNumbers()`
Wyświetla wylosowane liczby na ekranie.

### `clearNumbers()`
Usuwa wyświetlone liczby.

### `rollControl()`
Kontroluje możliwość dalszego losowania (blokuje przycisk po osiągnięciu limitu).

### `displayInfo()`
Aktualizuje informację o liczbie pozostałych losowań.



## 🛠️ Technologie

- HTML5
- CSS3
- JavaScript

## 📷 Podgląd

Aplikacja składa się z:
- nagłówka „WIOSNA”
- pól na liczby
- przycisków sterujących
- informacji o pozostałych losowaniach
