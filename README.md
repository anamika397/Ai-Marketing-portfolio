🚀 AI Marketing Portfolio

An AI-powered marketing portfolio web app that generates marketing proposals and showcases projects interactively.
This project integrates OpenAI API to create personalized strategies and uses modern web technologies for a clean UI.

📌 Features

🤖 AI-generated marketing proposals using OpenAI API

🌐 Responsive portfolio design

⚡ Fast & lightweight frontend

🎨 Modern UI with TailwindCSS (or your CSS framework)

🔑 Secure API key usage via .env file

🛠 Tech Stack

Frontend: HTML, CSS, JavaScript (or React if used)

Backend/Serverless: Node.js, Netlify Functions (or Express.js if local server)

AI Integration: OpenAI API

Styling: TailwindCSS (or your CSS framework)

📂 Project Structure
M-portfolio/
│── public/           # Static assets (HTML, CSS, JS, images)  
│── api/              # Serverless functions (generateProposal.js)  
│── package.json      # Project dependencies  
│── .env              # Environment variables (not pushed to GitHub)  
│── README.md         # Project documentation  

⚙️ Installation

Clone the repo and install dependencies:

# Clone the repository
git clone https://github.com/your-username/Ai-Marketing-portfolio.git
cd Ai-Marketing-portfolio

# Install dependencies
npm install

# Run locally
npm start

🔑 Environment Variables

Create a .env file in the root of your project and add:

OPENAI_API_KEY=your_openai_api_key_here


⚠️ Do not push .env to GitHub. (It’s ignored by .gitignore.)

📸 Screenshots

Add screenshots of your app here

![Home Page](screenshots/home.png)
![Proposal Generator](screenshots/proposal.png)

🤝 Contribution

Contributions are welcome! Please fork the repo and submit a pull request.

📜 License

This project is licensed under the MIT License – you’re free to use and modify it.
