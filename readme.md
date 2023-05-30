You can check the language comparison here [https://srix.github.io/prog-lang-compare/](https://srix.github.io/prog-lang-compare/)


```mermaid
flowchart TD
    github(github.io) --> |https://srix.github.io/prog-lang-compare/|b[Browser]
    docs(docs/) -->github 
    bf --> docs

subgraph bf
    builder(builder) --> docs
    openai(Openai) -->|concurrent api|builder
    cache(.cache) -->|check|builder
end
```

Want to credit https://github.com/evmorov/lang-compare project for concept list.  
