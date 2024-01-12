// 1 Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие?

// Массивы в js можно считать неправильными, т.к. в js можно создавать ассоциативные массивы, где данные представлены в виде совокупности пар "ключ:значение", что соответсвует структуре данных хеш-таблица.
// Кроме того, массивы в js уже имеют встроенные методы для работы с очередью (push, shift) и стеком (push, pop).
// Поэтому можно сказать, что массивы в js дополнительно совмещают в себе такие структуры данных как хеш-таблицы, стек, очередь.

// 2) Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

function logger() {
    console.log(`I output only external context: ${this.item}`);
    }

const obj = { item: "some value" };

logger.call(obj)
logger.apply(obj)
logger.bind(obj)()


// Бонус задание: Реализовать полифил(собственную функцию реализующую встроенную в js метода bind()

Function.prototype.myOwnBind = function(context, ...args) {
    let initialFunction = this;
      return function (...newArgs) {
        return initialFunction.apply(context, [...args, ...newArgs])
      }
  }