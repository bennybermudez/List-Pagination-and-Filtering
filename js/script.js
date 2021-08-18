/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/


// Create a variable to store the student list item elements in the student list (Pro Tip: Log out the variable storing the list to ensure it equals the list of li items and not the container of the li elements)

let student_list = document.querySelectorAll('.student-item');

// Create a variable to store the number of items to show on each “page”, which for this project, is 10.

let students_per_page = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

const showPage = (list, page) => { 
   /* 
   Loop over items in the list parameter 
   -- If the index of a list item is >= the index of the first item that should be shown on the page 
  -- && the list item index is <= the index of the last item that should be shown on the page, show it 
   */ 
  for (let i = 0; i < student_list.length; i++) {
    let student_page = page * students_per_page;
    let student_list_count = page * student_page;
    console.log('student_page: ', student_page);
    console.log('student_list_count: ', student_list_count);
    if (i >= student_list_count && i <= student_page) {
      student_list[i].style.display = 'none';
    }
  }
}

showPage(1,2);

// The first item of every list should be page index * students per page
// The last item of every list should be 

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => { 

  // 1. Determine how many pages are needed for the list by dividing the  total number of list items by the max number of items per page  
    let student_pages = student_list.length / students_per_page;
  // 2. Create a div, give it the “pagination” class, and append it to the .page div  
    const div = document.createElement('div');
    div.className = 'pagination';
    document.querySelector('.page').appendChild(div);
  // 3. Add a ul to the “pagination” div to store the pagination links  
    const ul = document.createElement('ul');
    div.appendChild(ul);
  // 4. for every page, add li and a tags with the page number text 
  for (let i = 0; i < student_pages; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = i;
    li.appendChild(a);
    ul.appendChild(li);
    // 5. Add an event listener to each a tag. When they are clicked  call the showPage function to display the appropriate page 
    a.addEventListener('click', (e) => {
      showPage();
      let pagingation_links = document.querySelectorAll('.pagination li a');
      // 6. Loop over pagination links to remove active class from all links 
      for (let i = 0; i < pagingation_links.length; i++) {
        pagingation_links[i].classList.remove('active');
      }
      // 7. Add the active class to the link that was just clicked. You can identify that clicked link using event.target 
      e.target.classList.add('active');
    });
  }

}

appendPageLinks();





// Remember to delete the comments that came with this file, and replace them with your own code comments.