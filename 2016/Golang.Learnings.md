# The beautiful GO Lang!

## Less paranthesis
## Convention over configuration
## Highly opinionated
- hanging braces
- stricter compiler
- 

## Structs

```GO
type Product Struct{
    id integer
    name string
}

// 3 Ways of creating a Struct

// #1 - Creating in Local Execution Stack - using the composite literal syntax
prodInStack := product{} // Struct created in local execution stack
prodInStack := product{10001, "Xiaomi MI3"} // Struct created in local execution stack

// #2 - Creating in Heap - using new function
prodInHeap := new(product) // Struct created in heap
prodInHeap := new product{10001, "Xiaomi Redmi Note 3"} // Not Allowed!

// #3 - Creating in Heap - using the composite literal syntax;
// Go handles the garbage collection & lifetime management for us, monitoring the reference checks
prodInHeap.id = 10001
prodInHeap.name = "Xiaomi Redmi Note 3"

```

> Go compiler/runtime handles the Pointer de-referencing automatically 

## Constructor Functions
```GO
// Constructor Functions avoid exposing the internal dependencies of the struct composition itself,
func (this *Product) (newProduct *Product) {
    newProduct = &Product
    newProduct.
}
// With Constructor function 
// Without Constructor function 
```

## OOPS in GO - Composition over Inheritance, to avoid digging into finding the source of actual implementation in the inheritance tree
```GO

```

## Enums in GO - There are no ENUMS in GO, use string constants instead!
```GO

```
## Asynchronous programming - Go Routines & Channels; Concurrency vs parallelism
> Go can support thousands of go routines
> Channels are supported using the "make" function & the "chan" keyword
```GO

// Single Core - Go Function scheduling in single core

// Multi Core - Go Function scheduling in separate cores

// Channels
// Return data using "<-" to the Channels
// Channels can linearize the random output (?) how? 
```
