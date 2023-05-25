const GithubModal = props =>{
  const closeHandler = () =>{
    props.ondata(true);
  }

  console.log('in the modal jsx')
  
const testhandler =()=>{
  console.log('inher hai')
  props.onnext('just testign hai');
}

    return(
     <div><main class="antialiased bg-gray-200 text-gray-900 font-sans overflow-x-hidden">
     <div class="absolute w-full px-4 min-h-screen md:flex md:items-center md:justify-center">
       <div onClick={() => closeHandler()} class="bg-black opacity-75 w-full h-full absolute z-10 inset-0"></div>
       <div class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
         <div class="md:flex items-center">
          <div onClick={closeHandler} className="absolute top-4 right-5 cursor-pointer hover:bg-red-100 px-3 py-1 rounded-xl text-red-600">X</div>
           {/* <div class="rounded-full border border-gray-800 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
         
             <i class="bx bx-error text-3xl"></i>
           </div> */}
           <div class="mt-5 md:mt-0 md:ml-6 text-center md:text-left">
             <p class="font-bold">{props.newrepo.full_name}</p>
             <p className="text-cyan-600 font-semibold">  {props.newrepo.language}</p>
             {/* <p class="font-bold">{props.newrepo.language}</p> */}
             <p class="text-sm text-gray-700 mt-4">{props.newrepo.description}
             </p>
           </div>
         </div>
         <div onClick={testhandler} class="text-center md:text-right mt-10 mx-auto w-auto self-center md:flex md:justify-end">
           <button class="block mx-auto w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-slate-600 text-white rounded-lg font-semibold text-sm md:ml-2 md:order-2">Next Repository
               </button>
           <button class="block mx-auto w-full md:inline-block md:w-auto  px-4 py-3 md:py-2 bg-cyan-600 text-white rounded-lg font-semibold text-sm mt-4
             md:mt-0 md:order-1"><a href={props.newrepo.clone_url
             }>View Repository</a></button>
         </div>
       </div>
     </div>
   </main></div>
    )
}

export default GithubModal;