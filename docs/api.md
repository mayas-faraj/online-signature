# Users

## admin users

```bash
curl -X POST -H "Content-Type: application/json" -d '{"query": "query { users(isAdmin: false) { id name isAdmin }}"}' http://localhost:5000 | jq
```

the result:

```json
{
  "data": {
    "users": [
      {
        "id": 1,
        "name": "admin",
        "isAdmin": true
      }
    ]
  }
}
```
## normal users

```bash
curl -X POST -H "Content-Type: application/json" -d '{"query": "query { users(isAdmin: false) { id name isAdmin }}"}' http://localhost:5000 | jq
```

the result:

```json
{
  "data": {
    "users": [
      {
        "id": 2,
        "name": "editor",
        "isAdmin": false
      },
      {
        "id": 3,
        "name": "reviewer",
        "isAdmin": false
      }
    ]
  }
}
```

## single user

```bash
curl -X POST -H "Content-Type: application/json" -d '{"query": "query { user(id: 2) { id name isAdmin }}"}' http://localhost:5000 | jq
```

```json
{
  "data": {
    "user": {
      "id": 2,
      "name": "editor",
      "isAdmin": false
    }
  }
}

```
---
# Documents

## all documents

```bash
curl -X POST -H "Content-Type: application/json" -d '{"query": "query { documents { id title signatureX signatureY }}"}' http://localhost:5000 | jq
```

the result:
```json
{
  "data": {
    "documents": [
      {
        "id": 1,
        "title": "contact-1",
        "signatureX": 20,
        "signatureY": 100
      },
      {
        "id": 2,
        "title": "contact-2",
        "signatureX": 30,
        "signatureY": 120
      }
    ]
  }
}
```

## single document

```bash
curl -X POST -H "Content-Type: application/json" -d '{"query": "query { document(id: 2) { id title signatureX signatureY }}"}' http://localhost:5000 | jq
```

the result:
```json
{
  "data": {
    "document": {
      "id": 2,
      "title": "contact-2",
      "signatureX": 30,
      "signatureY": 120
    }
  }
}
```
