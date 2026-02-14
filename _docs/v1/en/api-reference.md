# API Reference

This comprehensive API reference covers all available endpoints, parameters, and response formats.

## Base URL

```
https://api.ourplatform.com/v1
```

## Authentication

All API requests must include your API key in the Authorization header:

```http
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

## Endpoints

### Users

#### Get Current User
Retrieve information about the authenticated user.

```http
GET /users/me
```

**Response:**
```json
{
  "id": "user_123",
  "email": "user@example.com",
  "name": "John Doe",
  "created_at": "2024-01-01T00:00:00Z",
  "subscription": "pro"
}
```

#### Update User
Update user profile information.

```http
PUT /users/me
```

**Body:**
```json
{
  "name": "Jane Doe",
  "preferences": {
    "theme": "dark",
    "notifications": true
  }
}
```

### Projects

#### List Projects
Get all projects for the authenticated user.

```http
GET /projects
```

**Query Parameters:**
- `page` (integer): Page number (default: 1)
- `limit` (integer): Items per page (default: 20)
- `sort` (string): Sort field (created_at, updated_at, name)

**Response:**
```json
{
  "data": [
    {
      "id": "proj_123",
      "name": "My Project",
      "description": "Project description",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-02T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 1,
    "pages": 1
  }
}
```

#### Create Project
Create a new project.

```http
POST /projects
```

**Body:**
```json
{
  "name": "New Project",
  "description": "Project description",
  "settings": {
    "visibility": "private",
    "allow_collaborators": true
  }
}
```

### Data

#### Query Data
Execute queries against your data.

```http
POST /data/query
```

**Body:**
```json
{
  "query": "SELECT * FROM users WHERE active = true",
  "parameters": [],
  "limit": 100
}
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "active": true
    }
  ],
  "count": 1,
  "execution_time": 0.05
}
```

## Error Responses

All errors follow a consistent format:

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "The request is invalid",
    "details": {
      "field": "email",
      "reason": "Required field missing"
    }
  },
  "request_id": "req_123456789"
}
```

### Common Error Codes

- `400 BAD_REQUEST`: Invalid request parameters
- `401 UNAUTHORIZED`: Invalid or missing API key
- `403 FORBIDDEN`: Insufficient permissions
- `404 NOT_FOUND`: Resource not found
- `429 RATE_LIMIT_EXCEEDED`: Too many requests
- `500 INTERNAL_ERROR`: Server error

## Rate Limits

API requests are limited based on your subscription tier:

| Tier | Requests/Hour | Concurrent Requests |
|------|---------------|-------------------|
| Free | 100 | 5 |
| Pro | 1,000 | 20 |
| Enterprise | Unlimited | 100 |

Rate limit headers are included in responses:

```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
```

## SDKs

We provide official SDKs for several languages:

- [JavaScript/TypeScript](/sdks/javascript)
- [Python](/sdks/python)
- [Ruby](/sdks/ruby)
- [Go](/sdks/go)

## Webhooks

Configure webhooks to receive real-time notifications:

```http
POST /webhooks
```

**Body:**
```json
{
  "url": "https://your-app.com/webhook",
  "events": ["user.created", "project.updated"],
  "secret": "webhook-secret"
}
```

---

*Last updated: Recently*
