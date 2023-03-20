//Задача 1.

function cachingDecoratorNew(func) {
    let cache = [];
    
    function wrapper(...args) {
        const hash = args.join(','); // получаем правильный хеш c помощью функции md5
        let objectInCache = cache.findIndex((item) => item.hash === hash); // ищем элемент, хеш которого равен нашему хешу
        if (objectInCache !== -1) { // если элемент найден
            console.log("Из кэша: " + cache[objectInCache].result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
            return "Из кэша: " + cache[objectInCache].result;
        }
    
        let result = func(...args); // в кеше результата нет — придётся считать
        cache.push({hash, result}) ; // добавляем элемент с правильной структурой
        if (cache.length > 5) { 
          cache.shift() // если слишком много элементов в кеше, надо удалить самый старый (первый) 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
    return wrapper;
    }


//Задача 2.

function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;  
    wrapper.allCount = 0;  
    function wrapper(...args) {
      wrapper.allCount++;
      if (timeoutId === null) {
        func(...args);
        wrapper.count++;
      }
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        wrapper.count++;
        func(...args);
      },
      delay);
    }
    return wrapper;
  }
