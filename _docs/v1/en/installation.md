# Installation

This guide will walk you through the installation process for our platform across different environments.

## System Requirements

Before you begin, ensure your system meets the following requirements:

- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher
- **Memory**: Minimum 4GB RAM
- **Storage**: At least 1GB free space

## Installation Methods

### Method 1: Using npm (Recommended)

```bash
# Install the package
npm install @our-platform/core

# Verify installation
npm list @our-platform/core
```

### Method 2: Using yarn

```bash
# Install the package
yarn add @our-platform/core

# Verify installation
yarn list @our-platform/core
```

### Method 3: CDN

For web applications, you can include our library via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@our-platform/core@latest/dist/index.min.js"></script>
```

## Configuration

After installation, you need to configure the library with your API credentials:

```javascript
import { configure } from '@our-platform/core';

// Initialize with your API key
configure({
  apiKey: 'your-api-key-here',
  environment: 'production', // or 'development'
  timeout: 5000 // request timeout in milliseconds
});
```

## Environment Variables

For security, we recommend using environment variables:

```bash
# .env file
API_KEY=your-api-key-here
API_ENVIRONMENT=production
API_TIMEOUT=5000
```

```javascript
// Load from environment
import { configure } from '@our-platform/core';

configure({
  apiKey: process.env.API_KEY,
  environment: process.env.API_ENVIRONMENT,
  timeout: parseInt(process.env.API_TIMEOUT || '5000')
});
```

## Verification

To verify your installation, run this simple test:

```javascript
import { testConnection } from '@our-platform/core';

async function verifyInstallation() {
  try {
    const result = await testConnection();
    console.log('✅ Installation successful!', result);
  } catch (error) {
    console.error('❌ Installation failed:', error.message);
  }
}

verifyInstallation();
```

## Troubleshooting

### Common Issues

1. **Permission Denied**: Run npm commands with appropriate permissions
2. **Network Errors**: Check your internet connection and firewall settings
3. **Version Conflicts**: Ensure all dependencies are compatible

### Getting Help

If you encounter issues during installation:
- Check our [FAQ](/help/faq)
- [Contact Support](/help/contact)
- [Community Forum](/community)

---

*Last updated: Recently*
