# 알고리당 서비스 비즈니스 서버


### Service Naming 규칙

|이름|내용|비고|
|------|---|---|
|get<엔터티이름>[List]By[인자]  |:get   |CRUD
|create<엔터티이름>[List]       |:create|CRUD
|update<엔터티이름>             |:update|CRUD
|delete<엔터티이름>	            |:softDelete|CRUD
|hardDelete<엔터티이름>         |:hardDelete|CRUD
|recover<엔터티이름>            |:              |CRUD
|addHistory<엔터티이름>         |:1:N 추가할때      |
|notice<엔터티이름>	            |:알림          |
|copy<엔터티이름>		        |:복사          |
