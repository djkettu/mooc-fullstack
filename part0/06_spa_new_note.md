```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note over browser: Payload: { content, date }
    activate server
    server->>browser: { "message" }
    deactivate server
```