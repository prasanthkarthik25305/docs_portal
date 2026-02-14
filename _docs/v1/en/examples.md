# Examples

This collection of examples demonstrates how to use our platform in real-world scenarios.

## Quick Examples

### JavaScript/Node.js

#### Basic API Call

```javascript
import { configure, api } from '@our-platform/core';

// Configure the client
configure({
  apiKey: process.env.API_KEY,
  environment: 'production'
});

// Make a simple API call
async function getUserData(userId) {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
}

// Usage
const user = await getUserData('user_123');
console.log(user);
```

#### Error Handling

```javascript
import { api, ApiError } from '@our-platform/core';

async function robustApiCall(endpoint, options = {}) {
  try {
    const response = await api.request(endpoint, options);
    return response.data;
  } catch (error) {
    if (error instanceof ApiError) {
      // Handle API-specific errors
      switch (error.code) {
        case 'RATE_LIMIT_EXCEEDED':
          console.log('Rate limit hit, retrying...');
          await new Promise(resolve => setTimeout(resolve, 1000));
          return robustApiCall(endpoint, options);
        
        case 'UNAUTHORIZED':
          console.error('Invalid API key');
          throw new Error('Authentication failed');
        
        default:
          console.error('API Error:', error.message);
          throw error;
      }
    } else {
      // Handle network or other errors
      console.error('Network error:', error);
      throw error;
    }
  }
}
```

### Python

#### Using the Python SDK

```python
import os
from our_platform import Client, ApiError

# Initialize client
client = Client(
    api_key=os.getenv('API_KEY'),
    environment='production'
)

def get_projects():
    """Fetch all projects with error handling"""
    try:
        projects = client.projects.list()
        return projects
    except ApiError as e:
        if e.code == 'RATE_LIMIT_EXCEEDED':
            print('Rate limit exceeded, waiting...')
            time.sleep(60)
            return get_projects()
        else:
            print(f'API Error: {e.message}')
            raise
    except Exception as e:
        print(f'Unexpected error: {e}')
        raise

# Usage
projects = get_projects()
for project in projects:
    print(f"Project: {project['name']}")
```

### cURL

#### Basic Authentication

```bash
# Set your API key
API_KEY="your-api-key-here"

# Make a GET request
curl -H "Authorization: Bearer $API_KEY" \
     -H "Content-Type: application/json" \
     https://api.ourplatform.com/v1/users/me

# Make a POST request
curl -X POST \
     -H "Authorization: Bearer $API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"name": "New Project", "description": "My project"}' \
     https://api.ourplatform.com/v1/projects
```

## Use Cases

### Web Application Integration

#### React Component Example

```jsx
import React, { useState, useEffect } from 'react';
import { api } from '@our-platform/core';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const response = await api.get(`/users/${userId}`);
        setUser(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>Member since: {new Date(user.created_at).toLocaleDateString()}</p>
    </div>
  );
}

export default UserProfile;
```

### Data Processing Pipeline

#### Node.js Data Processor

```javascript
import { configure, api } from '@our-platform/core';
import { pipeline, Transform } from 'stream';

configure({ apiKey: process.env.API_KEY });

class DataProcessor extends Transform {
  constructor() {
    super({ objectMode: true });
  }

  async _transform(record, encoding, callback) {
    try {
      // Process each record
      const processed = await this.processRecord(record);
      this.push(processed);
      callback();
    } catch (error) {
      callback(error);
    }
  }

  async processRecord(record) {
    // Enrich data from API
    const userData = await api.get(`/users/${record.user_id}`);
    
    return {
      ...record,
      userName: userData.data.name,
      userEmail: userData.data.email,
      processedAt: new Date().toISOString()
    };
  }
}

// Usage in a pipeline
async function processData() {
  const inputStream = getInputStream(); // Your data source
  const processor = new DataProcessor();
  const outputStream = getOutputStream(); // Your data destination

  await pipeline(
    inputStream,
    processor,
    outputStream
  );
}
```

### Batch Operations

#### Bulk User Creation

```javascript
async function createBulkUsers(users) {
  const results = [];
  const batchSize = 10;
  
  for (let i = 0; i < users.length; i += batchSize) {
    const batch = users.slice(i, i + batchSize);
    
    try {
      // Process batch concurrently
      const promises = batch.map(user => 
        api.post('/users', user).catch(error => ({ error, user }))
      );
      
      const batchResults = await Promise.all(promises);
      results.push(...batchResults);
      
      // Rate limiting: wait between batches
      if (i + batchSize < users.length) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error(`Batch ${i / batchSize + 1} failed:`, error);
    }
  }
  
  // Separate successful and failed operations
  const successful = results.filter(result => !result.error);
  const failed = results.filter(result => result.error);
  
  console.log(`Created ${successful.length} users successfully`);
  console.log(`Failed to create ${failed.length} users`);
  
  return { successful, failed };
}
```

## Best Practices

### 1. Error Handling
- Always wrap API calls in try-catch blocks
- Implement retry logic for rate limits
- Log errors for debugging

### 2. Performance
- Use pagination for large datasets
- Implement caching for frequently accessed data
- Batch operations when possible

### 3. Security
- Store API keys securely (environment variables)
- Use HTTPS for all API requests
- Validate and sanitize input data

### 4. Monitoring
- Track API usage and rate limits
- Monitor response times
- Set up alerts for errors

---

*Last updated: Recently*
