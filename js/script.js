// Your JS code here
// // Variables // //
var subTypeElement = document.querySelector(".subscription-select");
var subDurationElement = document.querySelector(".duration-select");
var result = document.querySelector(".result");
//console.log(subTypeElement, subDurationElement, result);

var subType = "basic";
var subDuration = 1;

// // Functions // //
var updateSubscriptionDiv = function () {
  console.log(updateSubscriptionDiv);
  var monthlyCost = 5; // for basic plan
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};

// // Run Functions //
// Subscription
subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv();
});

// Duration
subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  updateSubscriptionDiv();
});
