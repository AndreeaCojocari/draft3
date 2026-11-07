const designerData = {
  name: "Andreea Cojocari",
  college: "SETU Waterford",
  course: "Creative Computing",
  hobbies: ["Music", "Web Design", "Gaming", "Coding"]
};

document.getElementById('designerName').textContent = `About ${designerData.name}`;
document.getElementById('designerBio').textContent = `I am currently studying ${designerData.course} at ${designerData.college}.`;

const hobbiesString = designerData.hobbies.join(", ").toUpperCase();
document.getElementById('designerMeta').textContent = `My Interests: ${hobbiesString}`;

const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('dataInfo').textContent = `Website last updated on: ${today.toLocaleDateString('en-IE', options)}`;

const features = ["Flexbox Layout", "JavaScript DOM Manipulation", "JSON Objects", "Search & Filter", "Dynamic Dates & Math"];
const featuresList = document.getElementById('featuresList');

features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature.padStart(feature.length + 2, '🎵 ');
    featuresList.appendChild(li);
});