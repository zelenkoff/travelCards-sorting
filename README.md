1. На вход приходит массив js объектов; Среди их свойств обязательными являются только:
    - from.place
    - to.place
    - transport.type

2. Также может иметься дополнительная (необязательная) информация в виде:
    - transport.id
    - transport.gate
    - transport.seat
    - transport.baggage_info
    - transport.notes

## Для работы с кодом

1. Подключите скрипт index.js в вашем HTML:
`<script async src="./index.js"></script>`
2. Для запуска скрипта:

```
const path = new cardsSorter(data); // data - массив js объектов. Несколько примеров лежат в файле data.js
    path.firstCardFinder();
    path.drawPathWay();
```


