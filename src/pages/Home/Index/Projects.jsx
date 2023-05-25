import React, { useState, useEffect } from 'react';
import GithubModal from './GithubModal';

function Projects() {
  const [repos, setRepos] = useState([]);
const [GithubModalStatus, updateGithubStatus] = useState(false);
const [selectedRepo, updateSelectedRepo] = useState({});
  useEffect(() => {
    fetch('https://api.github.com/users/JamesBellew/repos', {
      headers: {
        'Authorization': 'Bearer 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'
      }
    })
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error(error));
  }, []);
const repoName= 'test';
console.log(repos);
const handleModalClose = (data)=>{
updateGithubStatus(false);
}

const handleNextRepo = (data)=>{
  // updateGithubStatus(false);
  console.log(data);
  console.log('worked hai')
  }
  const handleClick = (repo) => {
    // Do something with the repo object
event.preventDefault();

    console.log(repo);
   updateSelectedRepo(repo);
    updateGithubStatus(true);
  };
  return (
    <fragment className='bg-red-900'>
        <h1 className='text-center font-semibold text-3xl p-5 mt-10'>My Current Public GitHub Repositorys</h1>
 {GithubModalStatus &&<GithubModal newrepo={selectedRepo} ondata={handleModalClose} onnext={handleNextRepo}/> }

         <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">


        {repos.map(repo => (
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 cursor-pointer">


            <article onClick={() => handleClick(repo)}  key={repo.id} class="overflow-hidden rounded-lg  shadow-lg">

                {/* <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"></img>
                </a> */}

 <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full h-7 mt-5 w-7" src={repo.owner.avatar_url}></img>
                        <p class="ml-2 text-sm">
                            {repo.owner.login}     <p class="text-grey-darker text-sm">
                       {repo.created_at}
                    </p>
                        </p>
                    </a>
                    <span className='px-5 py-1 bg-cyan-600 rounded-xl w-15 text-white text-center'>{repo.language} </span>
                </footer>

                <div className='bg-white md:p-4 bg-white rounded-md mx-6' >
                <header class="flex items-center justify-between leading-tight pl-2 ">
                    <h1 class="text-lg ">
                        <a class="no-underline text-xl font-bold hover:underline text-black" href="#">
                        {repo.name}
                        </a>
                    </h1>

                </header>


               <br></br>
<br></br>
                <div className='text-center mx-auto'>

{/* <button class="bg-cyan-500  hover:bg-blue-700  text-md font-bold py-2 px-4 rounded-lg ml-5 text-slate-800">
  Go to Repo
</button>  */}
<button class="bg-indigo-600  hover:bg-blue-700 bg-slate-900 text-white text-md font-bold py-2 px-4 rounded-lg ml-4">
  About Project
</button>
</div>

</div>
<br />

            </article>


        </div>
        ))}
   </div>
   </div>

    </fragment>
  );
}

export default Projects;
