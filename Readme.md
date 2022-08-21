# Node.js basics

### ***Учебный проект из курса [The Rolling Scopes School  NodeJS](https://rs.school/nodejs/)***  
***Выполнен:  июнь 2022***  

## Описание проекта
Задание содержит несколько вложенных папок внутри src. Задача реализовать внутри них необходимый функционал на основе NodeJS.  
[Ссылка на задание](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md)

## Подзадачи:

### Файловая система (src/fs) ###   

- ```create.js```- реализовать функцию, которая создает новый файл fresh.txt с содержимым "I am fresh and young" внутри папки files (если файл уже существует, должно быть выброшено сообщение "FS operation failed" )
- ```copy.js```- реализовать функцию, которая копирует файлы из папки files со всем содержимым в папку files_copy того же уровня (если папка files не существует или files_copy уже создана, должно быть выброшено сообщение "FS operation failed")
- ```rename.js```- реализовать функцию, которая переименовывает файл wrongFilename.txt в properFilename с расширением .md (если файла wrongFilename.txt нет или файл properFilename.md уже существует, должно быть выброшено сообщение "FS operation failed")
- ```delete.js```- реализовать функцию, которая удаляет файл fileToRemove.txt (если файла fileToRemove.txt нет, должно быть выброшено сообщение "FS operation failed")
- ```list.js```- реализовать функцию, которая выводит весь массив имен файлов из папки files в консоль (если папка files не существует, должно быть выброшено сообщение "FS operation failed")
- ```read.js```- реализовать функцию, выводящую содержимое файла fileToRead.txt в консоль (если файла fileToRead.txt нет, должно быть выброшено сообщение "FS operation failed")

### Интерфейс командной строки (src/cli) ###

- ```env.js```- реализовать функцию, которая анализирует переменные окружения с префиксом RSS_ и выводит их на консоль в формате "RSS_name1=value1; RSS_name2=value2"
- ```args.js```- реализовать функцию, которая анализирует аргументы командной строки (данные в формате "--propName value --prop2Name value2") и выводит их на консоль в формате "propName is value, prop2Name is value2"

### Модули (источник/модули) ###

- ```cjsToEsm.cjs```- переписать на ECMAScript (и изменить расширение на .mjs)

### Хэш (источник/хеш) ###

- ```calcHash.js```- реализовать функцию, которая вычисляет хэш SHA256 для файла fileToCalculateHashFor.txt и возвращает его как hex

### Потоки (источник/потоки) ###

- ```read.js```- реализовать функцию, которая читает содержимое файла fileToRead.txt с помощью Readable Stream и печатает его содержимое в process.stdout
- ```write.js```- реализовать функцию, которая записывает данные из process.stdin в содержимое файла fileToWrite.txt, используя Writable Stream
- ```transform.js```- реализовать функцию, которая считывает данные из process.stdin, переворачивает текст с помощью Transform Stream и затем записывает его в process.stdout

### Zlib (источник/zip) ###

- ```compress.js```- реализовать функцию, которая сжимает файл fileToCompress.txt в archive.gz, используя zlib и Streams API
- ```decompress.js```- реализовать функцию, которая распаковывает archive.gz обратно в fileToCompress.txt, используя zlib и Streams API

### Рабочие потоки (src/wt) ###

- ```worker.js```- расширить данную функцию для работы с данными, полученными из основного потока, и реализовать функцию, которая отправляет результат вычислений в основной поток


## Стек технологий:
- JavaScript
- NodeJS


## Установка и запуск (использовать 16.13.0 версию Node.js):
Клонировать репозиторий:

    https://github.com/YaninaSeb/node-nodejs-basics.git

Скрипты для тестирования:   

   ```npm run fs:create```  
   
   ```npm run fs:copy```   
   
   ```npm run fs:rename``` 
   
   ```npm run fs:delete```    
   
   ```npm run fs:list```    
   
   ```npm run  fs:read```   
   
   ```npm run cli:env```   
   
   ```npm run cli:args```  
   
   ```npm run modules```  
   
   ```npm run hash```   
   
   ```npm run streams:read```   
   
   ```npm run streams:write```   
   
   ```npm run streams:transform```   
   
   ```npm run zip:compress```   
   
   ```npm run zip:decompress```  
   
   ```npm run wt:worker```   
