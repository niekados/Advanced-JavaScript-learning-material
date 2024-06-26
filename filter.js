
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];

  const oldEnough = people.filter(person => person.age >= 21);

  console.log(oldEnough) // [ { name: 'Michael', age: 23 } ]

  const justPaul = people.filter(person => person.name == "Paul"); // Filter always returns array
  const justPaul2 = people.filter(person => person.name == "Paul")[0]; // targeting index'0' will return element or object in this case.
  console.log(justPaul) // [ { name: 'Paul', age: 18 } ] - alway array
  console.log(justPaul2); // { name: 'Paul', age: 18 }  
  
  
  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];


 // filter students with 5 year experience
 
 const candidate1 = students.filter(student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
 });
 console.log(candidate1);


// ---------------- Extracting function outside the filter
 const hasStrongSkills = student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
 }
 const candidate2 = students.filter(hasStrongSkills);

 // -------------- Extracting both functions
 const has5yearsExp = skill => skill.yrsExperience >= 5;
 const hasStrongSkills2 = student => student.skills.filter(has5yearsExp).length > 0;

 const candidate3 = students.filter(hasStrongSkills2);
 console.log(candidate3.map( names => names.name)); // returns only candidates names