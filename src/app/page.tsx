'use client';

import { useState } from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
}


export default function Home() {

  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState<Repo[]>([]);
  

  async function handleSubmit(e: { preventDefault: () => void; }){

    e.preventDefault();

    
    try{
      const response = await fetch(`https://api.github.com/users/${username}/repos`)
      const data = await response.json()

      console.log("Repos Available", data)

      setRepos(data)

    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch (err) {
      console.error("Couldn't get Repos")
    }


  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-serif font-bold text-5xl text-center mt-2 mb-6 text-white">Github Repo Explorer</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Uname" className="text-lg font-medium mb-2">Username: </label>
          <input
            type="text"
            id="Uname"
            name="Uname"
            className="border border-gray-300 p-2 rounded w-64"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br />
        </form>
        {repos.length > 0 &&
          (
            <div className = "mt-4 w-full">

              {repos.map((repo) => (
                <div key={repo.id} className="border p-4 mb-2 rounded shadow space-y-6">
                  <a href={repo.html_url} 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-blue-500 font-semibold">
                    {repo.name}
                  </a>
                  <p className="text-sm text-white">{repo.description}</p>
                  <p className="text-sm">⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}</p>
                </div>
              ))}

            </div>

          )}
      </main>
    </div>
  );
}
