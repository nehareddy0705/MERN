Client side application and server side application can interact with each other over http protocol by making http req and res. to make http req from client side application, one can use either fetch func or axios module.

The following are the http req types
    GET - to get all the resources
    POST - to create the resource
    PUT - to update entire resource
    DELETE - to delete a resorce
    PATCH- to update the resource partially

The post,put,patch req types can have body properties which can hold json data whereas get and delete req do not have body property they can send data through url.


# state management

    sharing state + keeping state sync across app

    Context API --> small apps
    Redux / Zustand --> large apps

# Context API
    - create context object(pipeline)
    - add state to context object (add water to pipeline)
    - set that context provider to parent


Context with useState hook is best and simple state management mechanism for small app but it creates uneccessary rerendering issue when multiple state is part of components.

To over come this rerendering issue create multiple context and make sure that each component has a single state.

When app size is huge, then maintance of multiple components is issue.For such large app advance state management tools like redux, zustand can be used.

#