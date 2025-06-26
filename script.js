const apps = [
  {
    id: "123",
    name: "Humankind Dashboard",
    businessOwner: "Anita Sharma",
    technicalOwner: "Ravi Mehta",
    productLine: "HR Solutions",
    informationSteward: "Rohan Das",
    prodURL: "https://humankind-prod.com",
    testURL: "https://humankind-test.com",
    prodResourceGroup: "RG-Prod-HKD",
    testResourceGroup: "RG-Test-HKD",
    domain: "Cloud",
    techStack: "C#"
  },
  {
    id: "456",
    name: "HealthCare Pro",
    businessOwner: "Suman Verma",
    technicalOwner: "Anil Kapoor",
    productLine: "Medical",
    informationSteward: "Isha Singh",
    prodURL: "https://healthcarepro-prod.com",
    testURL: "https://healthcarepro-test.com",
    prodResourceGroup: "RG-Prod-HCP",
    testResourceGroup: "RG-Test-HCP",
    domain: "PowerApps",
    techStack: "VB.Net"
  }
];

const searchBar = document.getElementById("searchBar");
const results = document.getElementById("results");

searchBar.addEventListener("input", function () {
  const input = this.value.toLowerCase();
  results.innerHTML = "";

  const filtered = apps.filter(app =>
    app.name.toLowerCase().includes(input) || app.id.includes(input)
  );

  if (filtered.length === 0) {
    results.innerHTML = "<li>No apps found matching your search.</li>";
    return;
  }

  filtered.forEach(app => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${app.name}</strong><br/>
      <small><strong>App ID:</strong> ${app.id}</small><br/>
      <strong>Business Owner:</strong> ${app.businessOwner}<br/>
      <strong>Technical Owner:</strong> ${app.technicalOwner}<br/>
      <strong>Product Line:</strong> ${app.productLine}<br/>
      <strong>Information Steward:</strong> ${app.informationSteward}<br/>
      <strong>Production URL:</strong> <a href="${app.prodURL}" target="_blank">${app.prodURL}</a><br/>
      <strong>Testing URL:</strong> <a href="${app.testURL}" target="_blank">${app.testURL}</a><br/>
      <strong>Prod RG:</strong> ${app.prodResourceGroup}<br/>
      <strong>Test RG:</strong> ${app.testResourceGroup}<br/>
      <strong>Domain:</strong> ${app.domain}<br/>
      <strong>Tech Stack:</strong> ${app.techStack}
    `;
    results.appendChild(li);
  });
});
