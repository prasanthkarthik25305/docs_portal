import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  // Your existing config (if any)
};

export default withNextIntl(nextConfig);
