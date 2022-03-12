# conditional-class-name

## bad
```
<a
  className={`ml-5 ${
  router.pathname !== "/search" && router.pathname !== "/menu"
  ? "text-black"
  : "text-gray-300 hover:text-black"
  }`}
>
  YOGI-AUCTION
</a>
```

## good
```
<a
  className={cl("ml-5")
    .if(router.pathname !== "/search" && router.pathname !== "/menu")
    .push("text-black")
    .else()
    .push("text-gray-300 hover:text-black")
    .return()}
>
  YOGI-AUCTION
</a>
```

## docs
```
cl(base?:string)
.if(condition:boolean)
.push(className:string)
.elif(condition:boolean)
.push(className:string)
.else()
.push(className:string)
.return()
```
