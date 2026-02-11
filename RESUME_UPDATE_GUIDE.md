# Resume Update Guide

## How to Update Your Website with Resume Content

Your website is now set up to use data from `src/data/resumeData.js`. Follow these steps to update it with your actual resume content:

### Step 1: Open Your Resume PDF
Open `Resume/Updated Resume_dipesh.pdf` and have it ready for reference.

### Step 2: Update `src/data/resumeData.js`

Open the file `src/data/resumeData.js` and replace the placeholder content with your actual information:

#### Personal Information
```javascript
personal: {
  name: "Your Full Name",
  title: "Your Professional Title",
  email: "your.email@example.com",
  location: "Your Location",
  summary: "Your professional summary (2-3 sentences)",
  // ... social links
}
```

#### Experience
For each job/position, update:
- `title`: Your job title
- `company`: Company name
- `location`: Work location
- `period`: "Start Year - End Year" or "Start Year - Present"
- `description`: Brief description of your role
- `achievements`: Array of key achievements/responsibilities
- `technologies`: Technologies you used

#### Education
Update with:
- `degree`: Your degree (e.g., "Bachelor's in Computer Science")
- `school`: University/College name
- `location`: School location
- `year`: "Start Year - End Year"
- `honors`: Any honors (optional)
- `description`: Relevant coursework or details (optional)

#### Skills
Update skill levels (0-100) for:
- `frontend`: Frontend technologies
- `backend`: Backend technologies
- `tools`: Tools and other skills

#### Projects
Update each project with:
- `title`: Project name
- `description`: What the project does
- `technologies`: Technologies used
- `link`: Live demo URL (or "#" if none)
- `github`: GitHub repository URL

### Step 3: Save and Test

1. Save `resumeData.js`
2. The website will automatically update when you save
3. Check each section to ensure all information displays correctly

### Quick Tips

- **Keep descriptions concise**: 1-2 sentences for descriptions
- **Use bullet points**: For achievements, use action verbs (Developed, Built, Led, etc.)
- **Be specific**: Include numbers/metrics when possible (e.g., "Improved performance by 40%")
- **Update regularly**: Keep your portfolio current with new projects and experience

### Example Structure

```javascript
experience: [
  {
    id: 1,
    title: "Senior Developer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    period: "2020 - Present",
    description: "Lead development of web applications...",
    achievements: [
      "Built scalable API serving 1M+ requests/day",
      "Reduced page load time by 50%",
      "Mentored team of 5 junior developers"
    ],
    technologies: ["React", "Node.js", "AWS"]
  }
]
```

### Need Help?

If you need to add new sections or modify the structure, all components are in `src/components/` and styles are in `src/styles/`.
