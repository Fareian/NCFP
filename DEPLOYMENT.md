# New Creation - Vercel Deployment Guide

This guide will help you deploy your New Creation project to Vercel and update URLs from localhost to your production domain.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Your code should be pushed to GitHub
3. **Environment Variables**: Prepare all your production environment variables

## Step 1: Prepare Your Repository

### 1.1 Push to GitHub
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 1.2 Verify Files
Make sure these files are in your repository:
- `vercel.json` - Vercel configuration
- `next.config.ts` - Next.js configuration
- `package.json` - Dependencies and scripts
- `env.example` - Environment variables template

## Step 2: Deploy to Vercel

### 2.1 Connect Repository
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select the repository: `Fareian/New-Creation`

### 2.2 Configure Project
- **Framework Preset**: Next.js (should auto-detect)
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` (should auto-detect)
- **Output Directory**: `.next` (should auto-detect)
- **Install Command**: `npm install` (should auto-detect)

### 2.3 Set Environment Variables
Add these environment variables in Vercel dashboard:

#### Required Variables:
```
DATABASE_URL=your_production_database_url
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your_nextauth_secret
NEXT_PUBLIC_API_ENDPOINT=https://your-domain.vercel.app
NEXT_PUBLIC_PROD_API_ENDPOINT=https://your-domain.vercel.app
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_endpoint
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
UPSTASH_REDIS_URL=your_redis_url
UPSTASH_REDIS_TOKEN=your_redis_token
QSTASH_URL=https://qstash.upstash.io
QSTASH_TOKEN=your_qstash_token
RESEND_TOKEN=your_resend_token
```

#### Optional (if using Google OAuth):
```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 2.4 Deploy
Click "Deploy" and wait for the build to complete.

## Step 3: Configure Custom Domain (Optional)

### 3.1 Add Custom Domain
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., `ncfp.com`)

### 3.2 Update DNS
Follow Vercel's DNS configuration instructions for your domain provider.

### 3.3 Update Environment Variables
Update these variables with your custom domain:
```
NEXTAUTH_URL=https://your-custom-domain.com
NEXT_PUBLIC_API_ENDPOINT=https://your-custom-domain.com
NEXT_PUBLIC_PROD_API_ENDPOINT=https://your-custom-domain.com
```

## Step 4: Post-Deployment Setup

### 4.1 Database Migration
Run database migrations on your production database:
```bash
# Connect to your production database and run:
npm run db:migrate
```

### 4.2 Seed Data (if needed)
```bash
npm run seed
```

### 4.3 Verify Deployment
1. Visit your deployed URL
2. Test authentication
3. Test book uploads
4. Test admin functionality

## Step 5: Update Local Development

### 5.1 Create Local Environment File
Create a `.env.local` file for local development:
```bash
cp env.example .env.local
```

### 5.2 Update Local URLs
In `.env.local`, keep localhost for development:
```
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_ENDPOINT=http://localhost:3000
NEXT_PUBLIC_PROD_API_ENDPOINT=http://localhost:3000
```

## Troubleshooting

### Common Issues:

1. **Build Failures**
   - Check environment variables are set correctly
   - Verify all dependencies are in `package.json`
   - Check for TypeScript errors

2. **Database Connection Issues**
   - Verify `DATABASE_URL` is correct
   - Ensure database is accessible from Vercel's servers
   - Check database migration status

3. **Image Upload Issues**
   - Verify ImageKit credentials
   - Check CORS settings
   - Ensure proper file permissions

4. **Authentication Issues**
   - Verify `NEXTAUTH_URL` matches your domain
   - Check OAuth provider settings
   - Ensure `NEXTAUTH_SECRET` is set

### Useful Commands:
```bash
# Check build locally
npm run build

# Test production build
npm run start

# View Vercel logs
vercel logs

# Redeploy
vercel --prod
```

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | Database connection string | Yes |
| `NEXTAUTH_URL` | Your production URL | Yes |
| `NEXTAUTH_SECRET` | NextAuth secret key | Yes |
| `NEXT_PUBLIC_API_ENDPOINT` | Public API endpoint | Yes |
| `NEXT_PUBLIC_PROD_API_ENDPOINT` | Production API endpoint | Yes |
| `NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY` | ImageKit public key | Yes |
| `NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT` | ImageKit URL endpoint | Yes |
| `IMAGEKIT_PRIVATE_KEY` | ImageKit private key | Yes |
| `UPSTASH_REDIS_URL` | Redis connection URL | Yes |
| `UPSTASH_REDIS_TOKEN` | Redis authentication token | Yes |
| `QSTASH_URL` | QStash service URL | Yes |
| `QSTASH_TOKEN` | QStash authentication token | Yes |
| `RESEND_TOKEN` | Email service token | Yes |

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify all environment variables
3. Test locally with production settings
4. Contact support with specific error messages 