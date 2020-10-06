# goit-js-hw-03

////Задача 3-1

/// CRUD для свойств объекта С - create (создать) R - read (читать) U - update
(обновить) D - delete (удалить) Напиши скрипт, который, для объекта user,
последовательно:

добавляет поле 'mood' со значением 'happy' добавляет поле 'full time' со
значением true заменяет значение 'hobby' на 'skydiving' заменяет значение
'premium' на false в переменную message записывает содержимое объекта user: для
переменной keys присваивает массив свойств объекта, используя метод
Object.keys() с помощью оператора for...of в формате ключ:значение c переносом
строки ('\n')

// Задача 3-2

Подсчет количества свойств в объекте Напиши функцию countProps(obj), которая
возвращает число - количество свойств в объекте.

Циклы не должны использоваться

//Задача 3-3

Поиск наибольшего значения среди свойств объекта Напиши функцию
findBestEmployee(employees), которая принимает объект сотрудников и возвращает
имя самого продуктивного (который выполнил больше всех задач). Сотрудники и
кол-во выполненных задач содержатся как свойства объекта в формате "имя":"кол-во
задач".

//Задача 3-4

Суммирование значений свойств объекта Напиши функцию countTotalSalary(employees)
принимающую объект зарплат. Функция считает общую сумму зарплаты работников и
возвращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид
"имя":"зарплата".

//Задача 3-5

Оператор in и метод push Напиши функцию getAllPropValues(arr, prop), которая
получает массив объектов и имя свойства.

Функция возвращает массив значений определенного свойства prop из каждого
объекта в массиве.

Используй метод push для добавления значения в массив и оператор in для проверки
наличия свойства в объекте.

//Задача 3-6

Суммирование значений свойства из массива объектов Напиши функцию
calculateTotalPrice(allProdcuts, productName), которая получает массив объектов
и имя продукта (значение свойства name). Возвращает общую стоимость продукта
(цена умноженная на количество).

Вызовы функции для проверки работоспособности твоей реализации.

// calculateTotalPrice(products, 'Радар')); // 9080

// calculateTotalPrice(products, 'Сканер')); // 10200

// calculateTotalPrice(products, 'Захват')); // 2400

// calculateTotalPrice(products, 'Дроид')); // 2800

//Задание 7 //- дополнительное, выполнять не обязательно

Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в
котором необходимо реализовать методы для работы с балансом и историей
транзакций.

/\*

- Типов транзацкий всего два.
- Можно положить либо снять деньги со счета. \*/ const Transaction = { DEPOSIT:
  'deposit', WITHDRAW: 'withdraw', };

/\*

- Каждая транзакция это объект со свойствами: id, type и amount \*/

const account = { // Текущий баланс счета balance: 0,

// История транзакций transactions: [],

/\*

- Метод создает и возвращает объект транзакции.
- Принимает сумму и тип транзакции. \*/ createTransaction(amount, type) {},

/\*

- Метод отвечающий за добавление суммы к балансу.
- Принимает сумму танзакции.
- Вызывает createTransaction для создания объекта транзакции
- после чего добавляет его в историю транзакций \*/ deposit(amount) {},

/\*

- Метод отвечающий за снятие суммы с баланса.
- Принимает сумму танзакции.
- Вызывает createTransaction для создания объекта транзакции
- после чего добавляет его в историю транзакций.
-
- Если amount больше чем текущий баланс, выводи сообщение
- о том, что снятие такой суммы не возможно, недостаточно средств. \*/
  withdraw(amount) {},

/\*

- Метод возвращает текущий баланс \*/ getBalance() {},

/\*

- Метод ищет и возвращает объект транзации по id \*/ getTransactionDetails(id)
  {},

/\*

- Метод возвращает количество средств
- определенного типа транзакции из всей истории транзакций \*/
  getTransactionTotal(type) {}, };

//Задача 3_bonus

// Guessing game Your task is to write a simple simulator of casino roulette.

Requirements:// Требования//

Step 1:

-     Create a prompt window (use confirm()). Show the message inside the window ‘Do you want to play a game?’.
-     In case the user clicks the 'Cancel' button, the message 'You did not become a billionaire, but can.' should be shown (use alert).

  Step 2:

-     If user clicked ‘Ok’ – start a game: randomly (use Math.random()) choose an integer number in range [0; 5] (including 0 and 5) and ask user to enter a number of pocket on which the ball could land (use prompt()).
-     User has 3 attempts to guess a number.
-     If user guessed the number on which ball landed, on 1-st attempt prize is 100$ (maximum prize for current numbers range), 2-nd attempt – 50$, 3-rd attempt – 25$.
-     If user did not guess a number show the message ‘Thank you for your participation. Your prize is: … $’ (Use alert) and ask if he wants to play again (use confirm).

  Step 3:

-     If user did guess - Show the message ‘Congratulation, you won!  Your prize is: … $. Do you want to continue?’.
-     If user does not want to continue – show the message ‘Thank you for your participation. Your prize is: … $’ (Use alert) and ask if he wants to play again (use confirm).
-     If user does want to continue, make number range bigger at 5 as the previous one (for example [0; 5] -> [0; 10]), and two times bigger maximum prize (for example on 1-st attempt prize will be 200$, 2-nd attempt – 100$, 3-rd attempt – 50$). Prize must be added to the previous one and number of attempts should be set to 3 (user should have 3 attempts to guess a number for each numbers range)
-     Each time you ask user to enter a number you should show him a range of cells, how much attempts he has left, his total prize and possible prize on current attempt. See : https://prnt.sc/ut3ymo
  ///

////Игра в загадки Ваша задача - написать простой симулятор рулетки в казино.
Требования: Шаг 1:

- Создайте окно подсказки (используйте подтверждение ()). Покажите сообщение в
  окне «Хотите сыграть в игру?».
- В случае, если пользователь нажимает кнопку «Отмена», появляется сообщение «Вы
  не стали миллиардером, но можете». должен быть показан (используйте
  предупреждение). Шаг 2:
- Если пользователь нажал «ОК» - начать игру: случайным образом (используйте
  Math.random ()) выберите целое число в диапазоне [0; 5] (включая 0 и 5) и
  попросите пользователя ввести номер лузы, в которую может приземлиться мяч
  (используйте подсказку ()).
- У пользователя есть 3 попытки угадать число.
- Если пользователь угадал номер, на который приземлился мяч, приз за 1-ю
  попытку составляет 100 долларов (максимальный приз для текущего диапазона
  номеров), за 2-ю попытку - 50 долларов, за 3-ю попытку - 25 долларов.
- Если пользователь не угадал число, отобразится сообщение «Спасибо за участие.
  Ваш приз:… \$ ’(используйте оповещение) и спросите, не хочет ли он играть
  снова (используйте подтверждение). Шаг 3:
- Если пользователь угадал - покажите сообщение «Поздравляем, вы выиграли! Ваш
  приз:… \$. Вы хотите продолжить?'.
- Если пользователь не хочет продолжать - покажите сообщение «Спасибо за
  участие. Ваш приз:… \$ ’(используйте оповещение) и спросите, не хочет ли он
  играть снова (используйте подтверждение).
- Если пользователь все же хочет продолжить, увеличьте диапазон номеров на 5 по
  сравнению с предыдущим (например, [0; 5] -> [0; 10]) и в два раза больше
  максимального приза (например, для приза за 1-ю попытку. будет 200
  $, 2-я попытка - 100 $, 3-я попытка - 50 \$). Приз должен быть добавлен к
  предыдущему, а количество попыток должно быть установлено на 3 (у пользователя
  должно быть 3 попытки угадать число для каждого диапазона чисел)
- Каждый раз, когда вы просите пользователя ввести число, вы должны показывать
  ему диапазон ячеек, сколько попыток у него осталось, его общий приз и
  возможный приз за текущую попытку. См .: https://prnt.sc/ut3ymo
