/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


// Get all students list
const studentList = document.getElementsByClassName('student-item');

// Declare how many students we want to show per page
const itemsPerPage = 10;


// Creaging function which displays itemsPerPage (how many studens we want to display per page) in this case 10;
function showPage(list, page) {
   let startIndexPage = (page * itemsPerPage) - itemsPerPage;
   let endIndexPage = page * itemsPerPage;

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndexPage && i < endIndexPage) {
         list[i].style.display = '';
      } else {
       list[i].style.display = 'none';
      }
   }

}

// Call function
showPage(studentList, 1);

// Create function which will display paginations link
function appendPageLinks(list) {
   // Declare how many pages we will need to display
   let = pagesNeed = list.length / itemsPerPage;

   // Create div element and add class name of pagination
   const div = document.createElement('div');
   div.className = 'pagination';

   // Get class .page and append div to it
   const page = document.querySelector('.page');
   page.appendChild(div);

   // create Ul  element and append to div.
   const ul = document.createElement('ul');
   div.appendChild(ul);

   //Loop thru pagesNeed and create and pagination links
   for (let i = 1; i < pagesNeed; i++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      li.innerHTML = `<a href="#"> ${i} </a>`;

      // Add active class to the first pagination link 
      if (i === 1) {
         li.children[0].className = 'active';
      }
   }
   
   // Creating addEventListener to add class on link we clicked and remove of prievouse one.
   div.addEventListener('click', (event) => {

      let links = document.getElementsByTagName('A');

      if(event.target.tagName = 'A'){
         for(let j = 0; j < links.length; j++){
            links[j].classList.remove('active');
         };
            event.target.classList.add('active');
            let pageNum = event.target.textContent;
            showPage(list, pageNum);
      };
   });


}

// Call Function
appendPageLinks(studentList);

// Create search box function
function searchBox() {

   // Geting Element Page header
   const headerDiv = document.querySelector('.page-header');

   // Creating and append new div elemenet
   const searchDIV = document.createElement('div');
   searchDIV.classList.add('student-search');
   headerDiv.appendChild(searchDIV);

   // Creating and append input element
   const searchInput = document.createElement('input');
   searchInput.placeholder = 'Search for students...';
   searchDIV.appendChild(searchInput);

   // Createing butotn
   const searchButton = document.createElement('button');
   searchButton.textContent = 'Search';
   searchDIV.appendChild(searchButton);

   // Createa an array 
   let searchMatch = [];

      searchInput.addEventListener('keyup', (e) => {

      // Clear an array 
      searchMatch = [];

      // Get pagination elements
      let div = document.getElementsByClassName("pagination")[0]; 
      
      // Remove all pagination buttons
      if(div) { 
         div.remove();
      };

      // Loop thru student list and if there is maching studens push them into an array, and studens which is not maching
      // search results do not display on the page.
      for(let k = 0; k < studentList.length; k++){
         let text = searchInput.value;
         if (studentList[k].innerText.toUpperCase().includes(text.toUpperCase())) {
            searchMatch.push(studentList[k]);
         } else {
            studentList[k].style.display = 'none';
            console.log("No users found");
         }
      }
      
      showPage(searchMatch, 1);
      appendPageLinks(searchMatch);
      });
}


// Call Search box function
searchBox();
